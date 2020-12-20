import React, { Fragment } from 'react'
import style from '../../../styles/graderSubmit/problems/problemCode'

const ProblemCode = (props) => {
	return (
		<Fragment>
			<form action="">
				<div className="box">
					<textarea></textarea>
				</div>
				<div className="submit-button">
					<input type="submit" value="Submit" />
				</div>
			</form>
			<style jsx>{style}</style>
		</Fragment>
	)
}

export default ProblemCode
