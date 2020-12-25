import React, { Fragment, useState, useEffect } from 'react'
import style from '../../styles/package/createpackage'
import SelectedCourses from './selectedCourses'
import Dialog from '@material-ui/core/Dialog'
import { useRouter } from 'next/router'
import api from '../../api'

const ConfirmPackage = (props, { changePage }) => {
	console.log(props.myPackage)
	const [loading, setLoading] = useState(false)
	const [courses, setCourses] = useState([])
	const [totalPrice, setTotalPrice] = useState(null)
	const [open, setOpen] = useState(false)
	const router = useRouter()
	const getTotalPrice = (total) => {
		let price = parseFloat(total * ((100 - props.myPackage.discount) / 100)).toFixed(2)
		return price
	}
	const handleSubmit = async () => {
		try {
			setLoading(true)
			const formData = new FormData()
			formData.append('course-picture-1', props.myPackage.pic)
			const pic = await api.post('/api/package/uploadPackagePic', formData)
			const body = {
				name: props.myPackage.name,
				discount: props.myPackage.discount,
				category: props.myPackage.category,
				detail: props.myPackage.detail,
				courses: props.myPackage.selectedCourses,
				ispublic: false,
				image: pic.data.linkUrl,
			}
			const res = await api.post('/api/package/createPackage', body)
			setLoading(false)
		} catch (err) {}
	}

	const handleOpenDialog = async (e) => {
		await handleSubmit()
		setOpen(true)
	}
	const fetchCourses = async () => {
		// console.log(selectedCourses)
		api
			.post('/api/package/getCoursesOfCreatingPackage', { selectCourse: props.myPackage.selectedCourses })
			.then((res) => {
				setCourses(res.data.courses)
				setTotalPrice(res.data.totalPrice)
				console.log(res.data)
			})
	}
	useEffect(() => {
		fetchCourses()
	}, [])

	useEffect(() => {
		if (props.myPackage.pic) {
			var reader = new FileReader()
			reader.onload = function (e) {
				document.getElementById('show-package-image-2').src = e.target.result
			}
			reader.readAsDataURL(props.myPackage.pic)
		}
	}, [props.myPackage.pic])

	return (
		<Fragment>
			<div>
				<div className="package-header">CONFIRM CREATE</div>
				<div className="container pd-4-15">
					<div className="center">
						<img src="" id="show-package-image-2" style={{ maxWidth: '100%', maxHeight: '235px' }} />
					</div>
					<div className="subtitle uppercase pt">{props.myPackage.name}</div>
					<div className="price">
						<div>
							฿<span>{getTotalPrice(totalPrice)}</span>
						</div>
						<div style={{ marginLeft: '20px' }}>
							(<span style={{ textDecoration: 'line-through' }}>${totalPrice}</span>)
						</div>
					</div>
					<div className="category">{props.myPackage.categoryText}</div>
					<div className="subtitle">Package Detail</div>
					<div className="detail">{props.myPackage.detail}</div>
					<div className="subtitle">Selected Courses</div>
					<div className="coursebox box-cf">
						<SelectedCourses courses={courses}></SelectedCourses>
					</div>
				</div>
				<div className="cfbutton">
					<div>
						<button id="back-btn" className="backbutton" onClick={() => changePage(1)}>
							<i className="fas fa-arrow-left"></i>
						</button>
					</div>
					<div style={{ textAlign: 'center' }}>
						<button
							id="confirm-create-btn"
							disabled={loading}
							className={`createbutton mgb-10 ${loading ? 'disabled' : ''}`}
							onClick={handleOpenDialog}
						>
							Confirm and Create
						</button>
					</div>
					<div></div>
				</div>
			</div>
			<Dialog open={open}>
				<div className="dialog">
					<div className="indialog">
						<div className="dialog-buttonX">
							<button id="close-btn" className="buttonX" onClick={() => router.push('/user/instructor/package')}>
								X
							</button>
						</div>
						<div>
							<img src="/images/package/createsuccess.svg" style={{ width: 200, height: 200 }} />
						</div>
						<div className="text-dialog"> Create Package Successful !</div>
					</div>
				</div>
			</Dialog>
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default ConfirmPackage
