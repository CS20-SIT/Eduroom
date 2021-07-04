import { Fragment } from 'react'
const RequestFormTag = ({ tag }) => {
	return (
		<Fragment>
			<div className="tag">{tag}</div>
			<style jsx>
				{`
					.tag {
						border: 1px solid rgb(168, 128, 247);
						border-radius: 10px;
						color: #5b5b5b;
						font-size: 0.9rem;
						text-align: center;
						margin-right: 0.5rem;
						min-width: 50px;
						padding: 0.25rem 0.5rem;
					}
				`}
			</style>
		</Fragment>
	)
}
export default RequestFormTag
