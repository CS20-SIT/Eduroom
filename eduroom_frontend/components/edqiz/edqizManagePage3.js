import { Fragment, useState } from 'react'
import EdquizPagination from './edqizPagination'
import style from '../../styles/edqiz/managePage'
import QuestionPreview from './questionPreview'
const Page3 = ({ name, goto, questionList }) => {
	const renderPreview = () => {
		return questionList.map((el, index) => {
			return <QuestionPreview key={index} data={el} index={index} />
		})
	}

	return (
		<Fragment>
			<div className="col-12">
				<div className="row">
					<EdquizPagination current={2} goto={goto} />
				</div>
			</div>
			<div className="col-12">
				<div className="row row-content">
					<Fragment>
						<div className="col-12">
							<p className="edqiz-manage-header">PREVIEW</p>
						</div>
						<div className="col-12 cflex">
							<div className="name-text">
								<p>{name}</p>
							</div>
						</div>
						<div className="col-12 py-20">{renderPreview()}</div>
						<div className="col-12">
							<button
								className="edqiz-manage-outline-button pink"
								onClick={() => {
									goto(2)
								}}
							>
								Previous
							</button>
							<button
								className="edqiz-manage-outline-button pink"
								onClick={() => {
									goto(4)
								}}
							>
								Continue
							</button>
						</div>
					</Fragment>
				</div>
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default Page3
