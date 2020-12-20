import React, { Fragment, useState, useEffect } from 'react';
import utils from '../../../styles/course/utils';
import GeneralNoNav from '../../../components/template/generalnonav';
import Link from 'next/link';
import SearchBar from '../../../components/course/searchBar'
import CategoryBar from '../../../components/course/categoryBar'
import { useRouter } from 'next/router'
import Name from '../../../components/course/courseRender'
import Carousel from '../../../components/course/carousel'

import api from '../../../api'

const CourseCategory = (props) => {
    const router = useRouter();
    const [data, setData] = useState([])
    const [category, setCategory] = useState([])

    useEffect(() => {
        GetData()
    }, [props.category])
    const GetData = async () => {
        const result = await api.get(`/api/course/categorySearch/${props.category}`)
        setData(result.data.data)
        console.log(result)
    }

    useEffect(() => {
        getCategory()
    }, [props.category])
    const getCategory = async () => {
        const result = await api.get('/api/course/category')
        setCategory(result.data.category)
        console.log(result)
    }

    return (
        <Fragment>
            <GeneralNoNav>
                <div className='bg'>
                    <div className='container-1'>
                        <Carousel/>
                        {/* Search bar and Categories select */}
                        <div className='text-center flex my-6 mx-search'>
                            <SearchBar />
                            <select className='font-quicksand font-normal-bold cate-tab bg-white pointer rounded-sss shadow text-grey cateBox'
                                onChange={ e => router.push('/course/category/' + e.target.value)}>
                                <option>
                                    Category
                                </option>
                                {category.map((el, idx) => {
                                    return (
                                        <option value={el.value}>
                                            {el.cataname}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>

                        <CategoryBar />


                        {/* Box of each course */}
                        <div className='text-center my-8'>
                            {data.map((e, index) => (
                                <Link href={`/course/${e.courseid}`}>
                                    <div className='mx-6 my-6 box-1 bg-white inline-block shadow rounded-sm pointer'>
                                        <div className="w-full h-60"><img className="pic-1" alt="python" src={`${e.coursepicture}`} width="100%" height="100%"></img></div>
                                        <div className="w-full h-40 font-quicksand">
                                            <div className="text-navy text-lg box-left my-4 mx-4 h-20">{e.coursename}</div>
                                            <div className="text-secondary text-md box-left mx-4">{`${e.firstname}` + " " + `${e.lastname}`}</div>
                                            <div className="text-navy text-lg box-left my-1 mx-4">$ {e.price}</div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                    </div>
                </div>
                <style jsx>{utils}</style>
                <style jsx>
                    {`
          .container-1{
            max-width: 87vw;
            min-height: 100vh;
            margin: 0 auto;
            padding: 4rem 1rem;
          }
          .cateBox { 
            border: none;
            outlined: none;
            padding-left: 15px;
            font-size: 0.8rem;
            width: 250px;
          }
          .categoryTab{
			margin-top: 3rem;
          }
          .bg{
            background: #F9F7FE;
          }
          .mx-search{
            margin-left: 5rem;
            margin-right: 5rem;
      
          }
        `}
                </style>
            </GeneralNoNav>
        </Fragment>
    );
};

export async function getServerSideProps(ctx) {
    try {
        const category = ctx.query.category
        return { props: { category } }
    } catch (err) {
        return { props: { category: '' } }
    }
}


export default CourseCategory;

