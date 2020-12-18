import React, { Fragment, useState, useEffect } from 'react'
import utils from '../../styles/course/utils'
import GeneralNoNav from '../../components/template/generalnonav'
import Link from 'next/link'
import SearchBar from '../../components/course/searchBar'
import Name from '../../components/course/courseRender'

import api from '../../api'

const Course = () => {
	useEffect(() => {
		const fetchData = async () => {
			const res = await api.get('/api/course/getAllCourse')
			setCourseDes(res.data)
		}
		fetchData()
	}, [])

	const [courseDes, setCourseDes] = useState([])

	return (
		<Fragment>
			<GeneralNoNav>
				<div className="bg-little-grey">
					<div className="container">
						{/* Search bar and Categories select */}
						<div className="text-center flex my-6">
							<SearchBar />
							<select
								className="font-quicksand font-normal-bold cate-tab bg-white pointer rounded-sss shadow text-grey cateBox"
								placeholder="category"
							>
								<option>Category</option>
								<option>Development</option>
								<option>Finance</option>
								<option>Music</option>
							</select>
						</div>

						{/* Categories Name */}
						<div className="text-center categoryTab">
							<Link href={`/course`}>
								<span className="text-lg text-secondary mx-4 font-quicksand pointer">GENERAL</span>
							</Link>
							<span className="text-lg text-secondary mx-4 font-quicksand pointer">MATH</span>
							<span className="text-lg text-secondary mx-4 font-quicksand pointer">IT & SOFTWARE</span>
							<span className="text-lg text-secondary mx-4 font-quicksand pointer">DESIGN</span>
							<span className="text-lg text-secondary mx-4 font-quicksand pointer">MARKETING</span>
							<span className="text-lg text-secondary mx-4 font-quicksand pointer">BUSINESS</span>
							<span className="text-lg text-secondary mx-4 font-quicksand pointer">OTHER</span>
						</div>

						{/* Box of each course */}
						<div className="text-center my-10">
							{courseDes.map((e, index) => (
								<Link href={`/course/${e.courseid}`}>
									<div className="mx-6 my-6 box-1 bg-white inline-block shadow rounded-sm pointer">
										<div className="w-full h-60">
											<img className="pic-1" alt="python" src={`${e.coursepicture}`} width="100%" height="100%"></img>
										</div>
										<div className="w-full h-40 font-quicksand">
											<div className="text-navy text-lg box-left my-4 mx-4 h-20">{e.coursename}</div>
											<div className="text-secondary text-md box-left mx-4">
												{`${e.firstname}` + ' ' + `${e.lastname}`}
											</div>
											<div className="text-navy text-lg box-left my-1 mx-4">$ {e.price}</div>
										</div>
									</div>
								</Link>
							))}
						</div>
					</div>
				</div>
				<style jsx>{utils}</style>
				<style jsx>{`
					.cateBox {
						border: none;
						outlined: none;
						padding-left: 15px;
						font-size: 0.8rem;
						width: 250px;
					}
					.categoryTab {
						margin-top: 3rem;
					}
				`}</style>
			</GeneralNoNav>
		</Fragment>
	)
}

export default Course
