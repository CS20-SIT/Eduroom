import { Fragment, useState, useEffect } from 'react'
import utils from '../../styles/course/utils'
import General from '../../components/template/general'
import Link from 'next/link'
import SearchBar from '../../components/course/searchBar'
import CategoryBar from '../../components/course/categoryBar'
import { useRouter } from 'next/router'
import Name from '../../components/course/courseRender'
import Carousel from '../../components/course/carousel'
import CourseCard from '../../components/course/courseStore'
import api from '../../api'

const Course = () => {
	const [courseDes, setCourseDes] = useState([])
	const [category, setCategory] = useState([])
	const router = useRouter()

	useEffect(() => {
		const fetchData = async () => {
			try {
				let res = await api.get('/api/course/getAllCourse')
				setCourseDes(res.data)
			} catch (err) {}
		}
		fetchData()
	}, [])

	useEffect(() => {
		getCategory()
	}, [])
	const getCategory = async () => {
		try {
			const result = await api.get('/api/course/category')
			setCategory(result.data.category)
		} catch (err) {}
	}

	return (
		<Fragment>
			<General>
				<Carousel />
				<div className="bg">
					<div className="container-1">
						{/* Search bar and Categories select */}
						<div className="text-center flex my-6 mx-search">
							<SearchBar />
							<select
								className="font-quicksand font-normal-bold cate-tab bg-white pointer rounded-sss shadow text-grey cateBox"
								onChange={(e) => router.push('/course/category/' + e.target.value)}
							>
								<option>Category</option>
								{category.map((el, idx) => {
									return <option value={el.value}>{el.cataname}</option>
								})}
							</select>
						</div>

						<CategoryBar current="General" />

						{/* <CourseCard/> */}
						<div className="coursecard">Course on Eduroom</div>
						<div className="text-center my-4">
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
				<style jsx>
					{`
						.container-1 {
							max-width: 87vw;
							min-height: 100vh;
							margin: 0 auto;
							padding: 4rem 1rem;
						}
						.cateBox {
							border: none;
							outlined: none;
							padding-left: 15px;
							font-size: 0.8rem;
							width: 250px;
							height: 2.4rem;
							color: light-grey;
						}
						.categoryTab {
							margin-top: 3rem;
						}
						.bg {
							background: #f9f7fe;
						}
						.mx-search {
							margin-left: 5rem;
							margin-right: 5rem;
						}
						.coursecard {
							font-weight: 700;
							font-size: 26px;
							color: #3d467f;
							margin: 30px 30px 30px 80px;
						}
					`}
				</style>
			</General>
		</Fragment>
	)
}

export default Course
