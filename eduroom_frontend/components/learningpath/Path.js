import { Fragment } from 'react'

const Path = ({ path, selectPath }) => {
	return (
		<Fragment>
			<div
				className="path"
				onClick={() => {
					selectPath(path.pathid)
				}}
			>
				<div className="row title">{path.path_name}</div>
				<div className="row">{path.path_description}</div>
			</div>
			<style jsx>
				{`
					.path .title {
						font-size: 1.2em;
						font-weight: bold;
					}
					.path {
						cursor: pointer;
						width: 100%;
						display: flex;
						align-items: center;
						flex-wrap: wrap;
						height: 220px;
						padding: 1rem 2rem;
						text-align: center;
						border: 1px solid #333333;
					}
					.row {
						width: 100%;
					}
				`}
			</style>
		</Fragment>
	)
}
export default Path
