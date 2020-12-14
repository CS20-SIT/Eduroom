import React, { Fragment, useState, useEffect } from 'react'
import style from '../../styles/package/createpackage'
import SelectedCourses from './selectedCourses'
import Dialog from '@material-ui/core/Dialog'
import { useRouter } from 'next/router'
import api from '../../api'

const ConfirmPackage = ({ myPackage, changePage }) => {
	const [courses, setCourses] = useState([])
	const [totalPrice, setTotalPrice] = useState(null)
	const [open, setOpen] = useState(false)
	const router = useRouter()
	const getTotalPrice = (total) => {
		let price = parseFloat(total * ((100 - myPackage.discount) / 100)).toFixed(2)
		return price
	}

	const handleOpenDialog = async (e) => {
		await handleSubmit()
		setOpen(true)
	}
	const fetchCourses = async () => {
		const res = await api.get('/api/package/getCoursesOfCreatingPackage', {
			params: { courseIds: myPackage.selectedCourses },
		})
		console.log(res.data)
		setCourses(res.data.courses)
		setTotalPrice(res.data.totalPrice)
	}
	useEffect(() => {
		fetchCourses()
	}, [])
	useEffect(() => {
		if (myPackage.pic) {
			var reader = new FileReader()
			reader.onload = function (e) {
				document.getElementById('show-package-image-2').src = e.target.result
			}
			reader.readAsDataURL(myPackage.pic)
		}
	}, [myPackage.pic])

	const handleSubmit = async () => {
		const formData = new FormData()
		formData.append('course-picture-1', myPackage.pic)
		const res = await api.post('/api/package/uploadPackagePic', formData)
		console.log(res.data)
		// api.post('/api/package/createPackage', {
		// 	name: myPackage.name,
		// 	instructorid: '1a9fa554-0c66-4ece-acb4-13a5078aa3b7',
		// 	discount: myPackage.discount,
		// 	category: myPackage.category,
		// 	detail: myPackage.detail,
		// 	courses: myPackage.courses,
		// 	ispublic: false,
		// })
	}

	return (
		<Fragment>
			<div>
				<div className="package-header">CONFIRM CREATE</div>
				<div className="container pd-4-15">
					<div className="center">
						<img src="" id="show-package-image-2" style={{ maxWidth: '100%', maxHeight: '235px' }} />
					</div>
					<div className="subtitle uppercase">{myPackage.name}</div>
					<div className="price">
						<div>
							฿<span>{getTotalPrice(totalPrice)}</span>
						</div>
						<div style={{ marginLeft: '20px' }}>
							(<span style={{ textDecoration: 'line-through' }}>฿{totalPrice}</span>)
						</div>
					</div>
					<div className="category">{myPackage.category}</div>
					<div className="subtitle">Package Detail</div>
					<div className="detail">{myPackage.detail}</div>
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
						<button id="confirm-create-btn" className="createbutton mgb-10" onClick={handleOpenDialog}>
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
							<button id="close-btn" className="buttonX" onClick={() => router.push('/user/instructor/course')}>
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
