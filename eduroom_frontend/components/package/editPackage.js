import React, { Fragment, useState, useEffect } from 'react'
import Courses from './courses'
import style from '../../styles/package/createpackage'
import { useRouter } from 'next/router'
import api from '../../api'

const EditPackage = (props, { index }) => {
	const [image, setImage] = useState(null)
	const router = useRouter()
	const param = router.query.id || ''
	const [editData, setEditData] = useState({
		packagename: '',
		discount: 0,
		detail: '',
		image: '',
		cateid: 0,
	})
	const [selectCourse, setSelectCourse] = useState([])
	useEffect(() => {
		if (props.packages) {
			setEditData({
				packagename: props.packages.packagename,
				discount: props.packages.discount,
				detail: props.packages.detail,
				cateid: props.packages.cateid,
				image: props.packages.image,
			})
		}
	}, [props.packages])
	useEffect(() => {
		setSelectCourse([...props.courseList])
	}, [props.courseList])
	const handleSelectedCourses = (newSelected) => {
		setSelectCourse([...newSelected])
	}
	useEffect(() => {
		if (image) {
			var reader = new FileReader()
			reader.onload = function (e) {
				document.getElementById('show-image' + index).src = e.target.result
			}
			reader.readAsDataURL(image)
		}
	}, [image])

	const handleUplaodFile = (e) => {
		let newValue = e.target.files[0]
		let type = 'image'
		console.log(newValue)
		setImage(newValue)
	}
	const numDiscount = [5, 10, 20, 30, 40, 50, 60, 70]
	const discount = numDiscount.map((num) => {
		return { label: num + '%', value: num }
	})
	const discountChange = (e) => {
		props.setMyPackage({
			...props.myPackage,
			discount: parseInt(e.target.value),
		})
	}
	const [categories, setCategories] = useState([])
	const fetchCategories = async () => {
		const res = await api.get('/api/package/categories')
		setCategories(res.data)
	}
	useEffect(() => {
		fetchCategories()
	}, [])
	// const saveEdit = () => {
	// 	api
	// 		.put(`/api/forum/${data.forumid}`, { old: { content: data.content }, new: { ...editData } })
	// 		.then((res) => {
	// 			setData({ ...editData })
	// 			setEdit(false)
	// 			setEditData({ titlethread: '', content: '' })
	// 		})
	// 		.catch((err) => {
	// 		})
	// }
	const handleChangeEdit = (e) => {
		setEditData({ ...editData, [e.target.name]: e.target.value })
	}
	const handleClick = () => {
		props.changePage(2)
	}

	return (
		<Fragment>
			<div className="package-header">EDIT PACKAGE</div>
			<div className="container pd-4-10">
				<div className="subtitle mg-40 text-center">PACKAGE INFORMATION</div>
				<div style={{ display: 'flex' }}>
					<div className="img-upload">
						<div
							className="imageupload"
							onClick={() => {
								document.getElementById('image' + index).click()
							}}
						>
							<input id={'image' + index} type="file" accept="image/*" hidden={true} onChange={handleUplaodFile} />
							{image ? (
								<div>
									<img src="" id={'show-image' + index} style={{ maxWidth: 420, maxHeight: 235 }} />
								</div>
							) : (
								<div>
									<div>
										<i className="fas fa-camera"></i>
									</div>
									<div>Click here to add photo</div>
								</div>
							)}
						</div>
					</div>

					<div style={{ width: '50%' }}>
						<div className="">
							<input type="text" value={editData?.packagename} onChange={handleChangeEdit} name="packagename" />
						</div>

						<div>
							<select name="discount" onChange={handleChangeEdit} value={editData?.discount}>
								<option disabled value={0}>
									Discount
								</option>
								{discount.map((dis, idx) => {
									return (
										<option value={dis.value} key={idx}>
											{dis.label}
										</option>
									)
								})}
							</select>
						</div>
						<div>
							<select name="category" onChange={handleChangeEdit} value={parseInt(editData?.cateid)}>
								<option disabled value={0}>
									Category
								</option>

								{categories.map((dis, idx) => {
									return (
										<option value={dis.value} key={idx}>
											{dis.label}
										</option>
									)
								})}
							</select>
						</div>
						<div className="pdetail">
							<textarea type="text" onChange={handleChangeEdit} name="detail" rows="4" style={{ resize: 'none' }}>
								{editData?.content}
							</textarea>
						</div>
					</div>
				</div>

				<div>
					<div className="subtitle2">Courses</div>
					<Courses handleSelectedCourses={handleSelectedCourses} selectedCourses={selectCourse} />
				</div>
			</div>
			<div className="center">
				<button className="createbutton mgb-5" onClick={handleClick}>
					Edit
				</button>
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default EditPackage

// ERRORRR
