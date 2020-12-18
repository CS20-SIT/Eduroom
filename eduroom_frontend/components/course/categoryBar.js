import React,{Fragment, useEffect,useState} from 'react'
import CategoryItem from './categoryItem'
import {useRouter} from 'next/router'
import api from  '../../api'

const CategoryBar = () => {

    const router = useRouter();
    const [data,setData] = useState([])
    useEffect(() => {
		getCategory()
	}, [])
    const getCategory = () =>{
        api
            .get('/api/course/category')
            .then((res) => {
				setData(res.data.category)
			})
			.catch((err) => [console.log(err)])
    }
    return (
        <Fragment>
            <div className="categoryTab">
                <div className="bottomLine">
                <div className="categoryText general" onClick={()=>{router.push('/course/')}}>General</div>
                </div>
                
            {
                data.map((el,index)=>{
                    return (
                        <div className="categoryText" key={index} onClick={()=>{router.push('/course/' + el.cataname)}}>
                            <CategoryItem content={el.cataname} />
                        </div>
                    )
                })
            }</div>
            <style jsx>
                {
                    `
                    .categoryText{
                        display: flex;
                        
                    }
                    .categoryTab {
                        display:flex;
                        justify-content: center;
                        padding: 2rem;
                    }
                    .general{
                        cursor: pointer;
                        color: #535353;
                        margin: 0 1rem;
                    }
                    .bottomLine{
						border-bottom: 2px solid #535353;
					}
                    
                    `
                }
            </style>
        </Fragment>
    )
}
export default CategoryBar