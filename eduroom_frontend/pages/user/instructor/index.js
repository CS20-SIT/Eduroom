import General from '../../../components/template/general'
import React, { Fragment } from 'react'
import Courses from '../../../components/user/instructor/Courses'

const InstructorProfile = () => {
	return (
		<Fragment>
			<General>
				<div className="container">
					<div className="courses">
						<Courses></Courses>
					</div>
					<div className="profile">
						<div className="header">
							<div style={{ color: 'white', padding: '20px 30px' }}>
								<h1>Instructor</h1>
								<h1>Profile</h1>
							</div>
						</div>
						<div className="detail">
							<div className="human">
								<div className="detailProfile">
                  <h2 style={{color:'#353E6C'}}>Profile</h2>
								</div>

								<div className="img">
									<img src="/images/instructor/Human.svg" width="250px"></img>
								</div>
							</div>
						</div>
					</div>
				</div>
			</General>
			<style jsx>{`
				.container {
					padding: 50px;
					display: flex;
				}
				.courses {
					width: 50%;
					margin-right: 100px;
				}
				.profile {
					width: 50%;
					margin-right: 50px;
					filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.1));
					display: flex;
					flex-direction: column;
				}
				.header {
					border-radius: 30px 30px 0 0;
					height: 200px;
					background: linear-gradient(323.28deg, rgba(213, 138, 187, 0.8) 0.2%, rgba(129, 127, 188, 0.8) 99.77%);
				}
				.detail {
					margin: 0;
					padding: 0;
					background: white;
				}
				.human {
					display: flex;
					justify-content: space-between;
				}
				.img {
					margin-top: -100px;
				}
        .detailProfile{
          padding: 5px 20px;
        }
			`}</style>
		</Fragment>
	)
}
export default InstructorProfile
