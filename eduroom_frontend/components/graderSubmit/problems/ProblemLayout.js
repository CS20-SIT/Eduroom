import { Fragment } from 'react'
import ProblemNav from './ProblemNav'
import ProblemQuestion from './problemQuestion'
import ProblemCode from './ProblemCode'
import style from '../../../styles/graderSubmit/problems/problemLayout'

const ProblemLayout = (props) => {
	return (
		<Fragment>
			<ProblemNav page={props.page} id={props.id} pageId={props.pageId} />
			<div className="content">
				<div className="question">
					<ProblemQuestion questionId={props.id} contestID={props.contestID} />
				</div>
				<div className="code">
					<ProblemCode />
				</div>
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}

export default ProblemLayout
