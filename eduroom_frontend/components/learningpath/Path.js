import React, { Fragment } from 'react'

const Path = ({path,selectPath}) => {
    
	return (
		<Fragment>
			<div className="path" onClick={()=>{selectPath(path.id)}}>
				<div className="row title">{path.name}</div>
				<div className="row">{path.description}</div>
			</div>
            <style jsx>
                {
                    `
                    .path .title {
                        font-size: 1.2em;
                        font-weight: bold;
                    }
                    .path {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        flex-wrap: wrap;
                        height: 150px;
                        padding: 2rem;
                        text-align:center;
                        border: 1px solid #333333;
                    }
                    .row {
                        width:100%;
                    }
                    `
                }
            </style>
		</Fragment>
	)
}
export default Path
