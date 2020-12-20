import React, { Fragment, useState, useEffect } from 'react'
import utils from '../../../styles/course/utils'
import GeneralNoNav from '../../../components/template/generalnonav'
import Link from 'next/link'
import api from '../../../api'
import { getItems, isInCart, addToCart, removeFromCart } from '../../../utils/cart'
import Review from '../../../components/course/review'

const CourseID = ({ id }) => {
	const [cart, setCart] = useState([])
	const [course, setCourse] = useState(null)
	const fetchCourse = async () => {
		const res = await api.get('/api/course/getCourseFromID', { params: { courseID: id } })
		setCourse(res.data)
	}
	useEffect(() => {
		fetchCourse()
		setCart(getItems('course'))
	}, [])
	const clickAddToCart = () => {
		addToCart('course', course.courseid)
		setCart(getItems('course'))
	}
	const clickRemoveFromCart = () => {
		removeFromCart('course', course.courseid)
		setCart(getItems('course'))
	}
	const renderButtons = () => {
		if (course.isOwn) {
			return (
				<Fragment>
					<span>
						<Link href={`/course/${id}/lesson`}>
							<button className="text-md text-white font-quicksand bg-navy border-navy rounded-lg go-study-butt pointer">
								Go to study
							</button>
						</Link>
					</span>
					<style jsx>{utils}</style>
				</Fragment>
			)
		} else {
			return (
				<Fragment>
					<span>
						{isInCart('course', course.courseid) ? (
							<button
								onClick={clickRemoveFromCart}
								className="text-md text-error font-quicksand bg-white border-red rounded-lg add-cart pointer"
								style={{ width: '150px' }}
							>
								Remove from cart
							</button>
						) : (
							<button
								onClick={clickAddToCart}
								className="text-md text-error font-quicksand bg-white border-red rounded-lg add-cart pointer"
							>
								Add to cart
							</button>
						)}
					</span>
					<span>
						<button className="text-md text-white font-quicksand bg-error border-red rounded-lg buy pointer">
							Buy
						</button>
					</span>
					<style jsx>{utils}</style>
				</Fragment>
			)
		}
	}
	const renderCourse = () => {
		if (!course) return null
		return (
			<Fragment>
				<div className="my-2">
					<span className="text-xl text-navy font-quicksand">{course.coursename}</span>
					{renderButtons()}
					<span className="share-icon pointer">
						<img
							alt="shareIcon"
							src="https://cdn3.iconfinder.com/data/icons/black-easy/512/538636-share_512x512.png"
							width="20px"
							height="20px"
						></img>
					</span>
					<div className="text-secondary font-quicksand mb-10">Let Enjoy Our Course</div>
				</div>
				<div className="my-8" height="500px">
					<div className="inline-block">
						{/* <video className="" width="550" height="400"><source src={courseDes[0].samplevideo} type="video/mp4"></source></video> */}
						<div className="w-full h-60">
							<img className="pic-2" alt="picOfCourse" src={`${course.coursepicture}`} width="100%" height="100%"></img>
						</div>
					</div>
					<div className="inline-block box-des">
						<div className="font-lato text-xl text-navy">Instructor</div>
						<img
							alt="Instructor Picture"
							src={course.avatar}
							width="70px"
							height="70px"
							className="rounded-full my-4 inline-block"
						></img>
						{/* https://img.barks.jp/image/review/1000143631/001.jpg */}
						<div className="inline-block position-ab instruc-name text-navy font-lato text-lg">
							{`${course.firstname}` + ' ' + `${course.lastname}`}
						</div>
						<div className="inline-block position-ab instruc-uni text-secondary font-lato text-md">
							{course.biography}
						</div>
						<div className="text-secondary font-lato text-md my-1">{'Language : ' + `${course.language}`}</div>
						<div className="text-secondary font-lato text-md my-1">Certificate : Get by completing entire course</div>
						{/* Certificate : Get by completing entire course {courseDes[0].certpath} */}
						<div className="font-lato text-xl text-navy des-head">Description</div>
						<div className="font-quicksand text-md my-1">{course.coursedescription}</div>
					</div>
				</div>
				<style jsx>{utils}</style>
			</Fragment>
		)
	}

	return (
		<Fragment>
			<GeneralNoNav>
				<div className="bg-little-grey">
					<div>
						<Link href="/course">
							<i className="fas fa-chevron-left backIcon"></i>
						</Link>
					</div>
					<div className="container">{renderCourse()}</div>
					<Review type = "course" id={id} />
				</div>
				<style jsx>{utils}</style>
			</GeneralNoNav>
		</Fragment>
	)
}

export async function getServerSideProps(ctx) {
	try {
		const id = ctx.query.id
		return { props: { id } }
	} catch (err) {
		return { props: { id: '' } }
	}
}

export default CourseID
