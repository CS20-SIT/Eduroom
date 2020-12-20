import React, { Fragment, useState, useEffect } from 'react';
import utils from '../../styles/course/utils';
import GeneralNoNav from '../../components/template/generalnonav';
import General from '../../components/template/general'
import Link from 'next/link';
import SearchBar from '../../components/course/searchBar'
import CategoryBar from '../../components/course/categoryBar'
import { useRouter } from 'next/router'
import Name from '../../components/course/courseRender'
import Carousel from '../../components/course/carousel'
import CourseCard from '../../components/course/courseStore'

import api from '../../api'

// const Course = ({ courseDes }) => {
const Course = () => {
  const [courseDes, setCourseDes] = useState([])
  const [category, setCategory] = useState([])
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      let res = await api.get('/api/course/getAllCourse')
      console.log(res.data)
      setCourseDes(res.data);
    }
    fetchData()

  }, [])

  useEffect(() => {
    getCategory()
  }, [])
  const getCategory = async () => {
    const result = await api.get('/api/course/category')
    setCategory(result.data.category)
    console.log(result)
  }


  return (
    <Fragment>
      <General>
          <Carousel/>
        <div className='bg'>
          <div className='container-1'>
            {/* Search bar and Categories select */}
            <div className='text-center flex my-6 mx-search'>
              <SearchBar />
              <select className='font-quicksand font-normal-bold cate-tab bg-white pointer rounded-sss shadow text-grey cateBox' 
                      onChange={ e => router.push('/course/category/'+ e.target.value)}>
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

            {/* <CourseCard/> */}
           <div className="coursecard">Course on Eduroom</div>
            <div className='text-center my-8'>
              {courseDes.map((e, index) => (
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
          .coursecard{
            font-weight: 700;
            font-size: 26px;
            color:#3D467F;
            margin: 30px 30px 30px 40px
          }
        `}
        </style>
      </General>
    </Fragment>
  );
};

// export async function getServerSideProps(contex) {
//   // GET /course/review
//   const courseDes = [
//     {
//       id: 1,
//       name: 'Learn To Code With Python',
//       instructor: 'Bill Gates',
//       price: 30,
//       src: 'https://i2.wp.com/www.opensourceforu.com/wp-content/uploads/2019/08/PythonTools-Blockchain.jpg?fit=900%2C589&ssl=1',
//     },
//     {
//       id: 2,
//       name: 'Learn To Code With C',
//       instructor: 'Bill Joe',
//       price: 30,
//       src: 'https://bs-uploads.toptal.io/blackfish-uploads/blog/article/content/cover_image_file/cover_image/13650/cover-0828_AfterAllTheseYearstheWorldisStillPoweredbyCProgramming_Razvan_Newsletter-2b9ea38294bb08c5aea1f0c1cb06732f.png'
//     },
//     {
//       id: 3,
//       name: 'Learn To Code With Java',
//       instructor: 'Billy Elish',
//       price: 30,
//       src: 'https://blog.newrelic.com/wp-content/uploads/java-logo-2.jpg',
//     },
//     {
//       id: 4,
//       name: 'Basic for Python',
//       instructor: 'Billie Armstrong',
//       price: 30,
//       src: 'https://i2.wp.com/www.opensourceforu.com/wp-content/uploads/2019/08/PythonTools-Blockchain.jpg?fit=900%2C589&ssl=1',
//     },
//     {
//       id: 5,
//       name: 'Basic for C',
//       instructor: 'Bill Gates',
//       price: 30,
//       src: 'https://bs-uploads.toptal.io/blackfish-uploads/blog/article/content/cover_image_file/cover_image/13650/cover-0828_AfterAllTheseYearstheWorldisStillPoweredbyCProgramming_Razvan_Newsletter-2b9ea38294bb08c5aea1f0c1cb06732f.png'
//     },
//     {
//       id: 6,
//       name: 'Basic for Java',
//       instructor: 'Bill Gates',
//       price: 30,
//       src: 'https://blog.newrelic.com/wp-content/uploads/java-logo-2.jpg',
//     },
//   ];
//   return {
//     props: {
//       courseDes,
//     },
//   };
// }


export default Course;
// import React, { Fragment, useState, useEffect } from 'react'
// import ProductCourse from '../../components/course/courseStore'
// import ProductPackage from '../../components/package/packageStore'
// import Styles from '../../styles/course/cShop'
// import General from '../../components/template/general'

// const packages = () => {
//  const [show, setShow] = useState(false)
//  return (
//    <Fragment>
//      <General>
//        <div>
//          <h1>Test</h1>
//        </div>
//        <div>
//          <div style={{ margin: '10' }}>
//            <ProductCourse></ProductCourse>
//          </div>
//          <div>
//            <ProductPackage></ProductPackage>
//          </div>
//        </div>
//      </General>
//      <style jsx>{Styles}</style>
//    </Fragment>
//  )
// }
