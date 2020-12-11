import React, {Fragment} from 'react'
import Path from './Path'
const AllPath = ({path,selectPath}) => {
    const renderPath = () => {
        return path.map((el,index)=>{
            return <Path key={index} path={el} selectPath={selectPath} />
        })
    }
    return (
        <Fragment>
        <div className="path-title">Learning Path</div>
        <div className="path-list">
        {renderPath()}
        </div>
        <style jsx>
            {
                `
                .path-title {
                    width: 100%;
                    text-align:center;
                    font-size: 1.5em;
                    font-weight: bold;
                }
                .path-list {
                    padding-top: 1rem;
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2.5rem;
                }
                .path-list > div {
                    
                }
                `
            }
        </style>
        </Fragment>
    )
}
export default AllPath;