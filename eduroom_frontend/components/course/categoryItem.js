import React, { Fragment } from 'react'
import utils from '../../styles/course/utils';

const CategoryItem = ({ content, current }) => {
    
    return (
        <Fragment>
            
                <div style={{borderBottom: current == content ? '2px solid rgb(251,156,203)' : '2px solid #A7ABC5'}}>
                    <div className="text-lg mx-4 font-quicksand pointer categoriesContent">{content}</div>
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
                    bottomLine:hover {
                        color: pink;
                    }
                `}
            </style>
        </Fragment>
    )
}
export default CategoryItem
