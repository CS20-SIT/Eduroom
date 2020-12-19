import React, { Fragment } from 'react'
import utils from '../../styles/course/utils';

const CategoryItem = ({ content }) => {
    
    return (
        <Fragment>
            
                <div className="bottomLine">
                    <div className="text-lg text-secondary mx-4 font-quicksand pointer categoriesContent">{content}</div>
                </div>
            <style jsx>{utils}</style>
            <style jsx>
                {`
                    .categoriesContent {
                        text-align:center;
                        padding-bottom: 1rem; 
                    }
                    .bottomLine{
                        border-bottom: 2px solid #535353;
                    }
                    
                `}
            </style>
        </Fragment>
    )
}
export default CategoryItem
