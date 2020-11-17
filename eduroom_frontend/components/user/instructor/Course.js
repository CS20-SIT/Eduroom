import { Fragment } from 'react'
const Course = ({ course }) => {
	return (
		<Fragment>
			<div className="container">
				<div style={{ display: 'flex' }}>
					<img src="/images/user/Blue-cone.png" alt="course-img" width="150px" height="120px"></img>
					<div style={{ marginLeft: '30px' }}>
						<h2 style={{ margin: '0' }}>{course.coursename}</h2>
						<div className="det">{course.coursedescription}</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				.container {
					background: #ffffff;
					box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
					border-radius: 10px;
					padding: 20px 10px;
          margin-bottom: 20px;
				}
				.det{
					color: #858585;
				}
			`}</style>
		</Fragment>
	)
}

export default Course
