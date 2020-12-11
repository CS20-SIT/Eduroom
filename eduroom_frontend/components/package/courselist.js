import React, { Fragment } from 'react'
import style from '../../styles/package/createpackage'

const Courselist = ({ course }) => {
	return (
		<Fragment>
			<div style={{ display: 'flex', marginTop: '20px' }}>
				<input style={{ margin: 'auto 20px' }} type="checkbox" name="courseid" value="courseid"></input>
				<div
					style={{
						border: '1px solid black',
						marginLeft: '20px',
					}}
				>
					<img className="course-image" src={course.coursepicture}></img>
				</div>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<label
						style={{
							fontWeight: '500',
							fontSize: '19px',
							margin: '0 40px',
						}}
					>
						{course.coursename}
					</label>
				</div>
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default Courselist
