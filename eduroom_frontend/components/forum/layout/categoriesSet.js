import React,{Fragment} from 'react'
import CategoriesBox from './categoriesBox'

const CategoriesSet = () => {
    const categories = ["Mathematic","Science","Language","Room4","Room5","Room6","Room7"]
    return (
        <Fragment>
            <div className="categoriesSet">
            {
                categories.map((el,index)=>{
                    return (
                        <div className="categoriesItems" key={index}>
                            <CategoriesBox content={el} />
                        </div>
                    )
                })
            }</div>
            <style jsx>
                {
                    `
                    .categoriesSet {
                        display:flex;
                        justify-content:center;
                        padding: 2rem;
                    }
                    .categoriesItems {
                        display:flex;
                        justify-content:center;
                        padding: 0 .5rem;
                    }
                    
                    `
                }
            </style>
        </Fragment>
    )
}
export default CategoriesSet