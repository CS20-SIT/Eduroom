import React, { Fragment } from 'react'
import style from '../../styles/package/detail'
import Instructors from '../../components/package/instructorCard'
import SelectedCourse from '../../components/package/selectedcourse'

const Package = () => {
	// const router = useRouter();
	return (
		<Fragment>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<div className="bigCard">
					<div style={{ display: 'flex', marginLeft: 30, flexDirection: 'column' }}>
						<h1 className="textHead">Package Detail</h1>

						<div className="text">
							There are various courses in this package. Learn about the computational language like Python. You can
							learn from the ground up to the professional level to further your work or study. Of course, within this
							package, not only theories that are easy to understand from the instructor But there are also practical
							courses that can be applied in real life or work. You can learn from the ground up to the professional
							level to further your work or study. Of course, within this package, not only theories that are easy to
							understand from the instructor But there are also You can learn from the ground up to the professional
							level to further your work or study. Of course, within this package, not only theories that are easy to
							understand from the instructor But there are also
						</div>
						<div>
							<hr style={{ width: 700, justifyContent: 'center', border: '1px solid #7B89DD' }}></hr>

							<div>
								<h1 className="textHead">Courses in Package</h1>
								<div style={{ marginBottom: '30px' }}>
									<div style={{ width: '60vw', marginLeft: 40 }}>
										<SelectedCourse />
									</div>
								</div>
							</div>
							<hr style={{ width: 700, justifyContent: 'center', border: '1px solid #7B89DD' }}></hr>
							<div>
								<h1 className="textHead"> Instructors</h1>
							</div>
							<div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
								<Instructors />
								<Instructors />
								<Instructors />
							</div>
						</div>
						{/* </div> */}
					</div>
				</div>
			</div>

			<style jsx>{style}</style>
		</Fragment>
	)
}
export default Package
