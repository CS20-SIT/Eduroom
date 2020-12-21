import React, { Fragment, useEffect, useState } from 'react'
import style from '../../styles/package/detail'
import Instructors from '../../components/package/instructorCard'
import { useRouter } from 'next/router'
import api from '../../api'

const Package = (props) => {
	const router = useRouter()

	return (
		<Fragment>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<div className="bigCard">
					<div style={{ display: 'flex', marginLeft: 30, flexDirection: 'column' }}>
						<h1 className="textHead">Package Detail</h1>

						<div className="text">{props.packages?.detail}</div>
						<div>
							<hr style={{ width: '100%', justifyContent: 'center', border: '0.5px solid #7B89DD' }}></hr>

							<div>
								<h1 className="textHead">Course in Package</h1>
								<div style={{ marginBottom: '30px' }}>
									{props.courseList?.map((c) => {
										return (
											<div
												className="center pdt-20"
												onClick={() => {
													router.push(`/course/${c.courseid}`)
												}}
											>
												<div className="courseBox">
													<div style={{ display: 'flex' }}>
														<div>
															<img
																src={c.coursepicture}
																width="130px"
																height="80px"
																style={{ marginRight: 30, marginTop: 5 }}
															></img>
														</div>
														<div>
															<div className="coursename">{c.coursename}</div>
															<div className="instructor2">{`${c.firstname}` + '  ' + `${c.lastname}`}</div>
														</div>
													</div>
												</div>
											</div>
										)
									})}
								</div>
							</div>
							<hr style={{ width: '100%', justifyContent: 'center', border: '0.5px solid #7B89DD' }}></hr>
							<div>
								<h1 className="textHead">Instructor</h1>
							</div>
							{/* instroctorCard */}
							{props.instructorList?.map((il) => {
								return (
									<div className="bigDiv">
										<div style={{ fontSize: 10 }}>
											<div style={{ display: 'flex', justifyContent: 'center' }}>
												<div className="col-6">
													<img
														src={il.avatar}
														className="google-logo"
														style={{ width: 100, height: 100, marginRight: 40 }}
													/>
												</div>
												<div>
													<div className="instname">{`${il.firstname}` + '  ' + `${il.lastname}`}</div>
													<div style={{ display: 'flex', flexDirection: 'row' }}>
														<div className="col-6">
															<img
																src="/images/package/book.svg"
																className="google-logo"
																style={{ width: 25, height: 30, margin: '0 10px 5px 0' }}
															/>
														</div>
														<div className="col-6" style={{ display: 'flex', fontSize: 13, paddingTop: 7 }}>
															{il.count} courses
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>

			<style jsx>{style}</style>
		</Fragment>
	)
}
export default Package
