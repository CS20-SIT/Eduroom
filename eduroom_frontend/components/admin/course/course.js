import { Fragment } from 'react'
import api from '../../../api'
const Course = ({ data, handleApprove }) => {
	return (
		<Fragment>
			<div className="coursebox">
				<div className="courseimg"></div>
				<div className="courseDetail">
					<div className="courseTitle">{data.coursename}</div>
					<div>{data.coursedescription}</div>
					<div className="">{data.price}</div>
					<div style={{ display: 'flex' }}>
						<div className="avatar"></div>
						<div style={{ display: 'flex', alignItems: 'center', paddingLeft: '1rem' }}>
							{data.firstname} {data.lastname}
						</div>
					</div>
					<div>
						<button
							className="approve-btn"
							onClick={() => {
								handleApprove(data.courseid)
							}}
						>
							Approve
						</button>
					</div>
				</div>
			</div>
			<style jsx>
				{`
					.coursebox {
						display: flex;
						background: #fff;
						border-radius: 25px;
						min-height: 150px;
						padding: 2rem;
						margin-bottom: 1rem;
					}
					.courseimg {
						background-image: url(${data.coursepicture});
						background-position: center;
						background-size: cover;
						width: 20%;
						height: 150px;
					}
					.avatar {
						background-image: url(${data.avatar});
						background-position: center;
						background-size: cover;
						width: 100px;
						height: 100px;
						border-radius: 50px;
					}
					.courseDetail {
						width: 80%;
						display: flex;
						flex-flow: column;
						font-size: 1.2em;
						padding-left: 1rem;
					}
					.courseTitle {
						font-weight: bold;
						font-size: 1.2em;
					}
					.approve-btn {
						background: #fb9ccb;
						outline: none;
						border: none;
						color: #fff;
						font-size: 1.1em;
						display: flex;
						justify-content: center;
						align-items: center;
						min-width: 120px;
						padding: 0.5rem;
						border-radius: 25px;
					}
				`}
			</style>
		</Fragment>
	)
}
export default Course
