// import React, { Fragment, useState, useEffect } from 'react'
// import Courses from './courses'
// import style from '../../styles/package/createpackage'
// import { useRouter } from 'next/router'
// import api from '../../api'

// const EditPackage = (props, { index }) => {
// 	const [image, setImage] = useState(null)
// 	const [data, setData] = useState(null)
// 	const [edit, setEdit] = useState(false)
// 	const router = useRouter()
// 	const param = router.query.id || ''
// 	const [editData, setEditData] = useState({
// 		packagename: '',
// 		discount: 0,
// 		detail: '',
// 		image: '',
// 		cateid: ''
// 	})

// 	const GetData = async () => {
// 		if (param != '') {
// 			const result = await api.get(`/api/package/${param}`)
// 			setData(result.data.forum)
// 		}
// 	}
// 	useEffect(() => {
// 		GetData()
// 	}, [param])

// 	useEffect(() => {
// 		if (image) {
// 			var reader = new FileReader()
// 			reader.onload = function (e) {
// 				document.getElementById('show-image' + index).src = e.target.result
// 			}
// 			reader.readAsDataURL(image)
// 		}
// 	}, [image])

// 	console.log(data)


// 	const handleUplaodFile = (e) => {
// 		let newValue = e.target.files[0]
// 		let type = 'image'
// 		console.log(newValue)
// 		setImage(newValue)
// 	}
// 	const numDiscount = [5, 10, 20, 30, 40, 50, 60, 70]
// 	const discount = numDiscount.map((num) => {
// 		return { label: num + '%', value: num }
// 	})
// 	const discountChange = (e) => {
// 		props.setMyPackage({
// 			...props.myPackage,
// 			discount: parseInt(e.target.value),
// 		})
// 	}
// 	const categories = [
// 		{ value: 'business', label: 'Business' },
// 		{ value: 'development', label: 'Development' },
// 		{ value: 'software', label: 'IT+Software' },
// 		{ value: 'design', label: 'Design' },
// 		{ value: 'computer', label: 'Computer' },
// 	]
// 	const handleChangeEdit = (e) => {
// 		setEditData({ ...editData, [e.target.name]: e.target.value })
// 	}
// 	const handleClick = () => {
// 		props.changePage(2)
// 	}

// 		return (
// 			<Fragment>
// 				<div className="package-header">EDIT PACKAGE</div>
// 				<div className="container pd-4-10">
// 					<div className="subtitle mg-40 text-center">PACKAGE INFORMATION</div>
// 					<div style={{ display: 'flex' }}>
// 						<div className="img-upload">
// 							<div
// 								className="imageupload"
// 								onClick={() => {
// 									document.getElementById('image' + index).click()
// 								}}
// 							>
// 								<input id={'image' + index} type="file" accept="image/*" hidden={true} onChange={handleUplaodFile} />
// 								{image ? (
// 									<div>
// 										<img src="" id={'show-image' + index} style={{ maxWidth: 420, maxHeight: 235 }} />
// 									</div>
// 								) : (
// 										<div>
// 											<div>
// 												<i className="fas fa-camera"></i>
// 											</div>
// 											<div>Click here to add photo</div>
// 										</div>
// 									)}
// 							</div>
// 						</div>

// 						<div style={{ width: '50%' }}>
// 							{edit ? (
// 								<div className="">
// 									<input type="text" value={editData.packagename} onChange={handleChangeEdit} name="packagename" />
// 								</div>
// 							) : (
// 									<div>
// 										<b>{data.packagename}</b>
// 									</div>
// 								)}

// 							<div>
// 								{edit ? (
// 									<select name="discount" onChange={handleChangeEdit} value={editData.discount}>
// 										<option disabled value={0}>
// 											Discount
// 										</option>
// 										{discount.map((dis, idx) => {
// 											return (
// 												<option value={dis.value} key={idx}>
// 													{dis.label}
// 												</option>
// 											)
// 										})}
// 									</select>
// 								) : (
// 										<div>{data.discount}</div>
// 									)}
// 							</div>

// 							<div>
// 								{edit ? (
// 									<select name="category" onChange={handleChangeEdit} value={editData.category}>
// 										<option disabled value={0}>
// 											Category
// 										</option>
// 										{discount.map((dis, idx) => {
// 											return (
// 												<option value={dis.value} key={idx}>
// 													{dis.label}
// 												</option>
// 											)
// 										})}
// 									</select>
// 								) : (
// 										<div>{data.category}</div>
// 									)}
// 							</div>

// 							{edit ? (
// 								<div className="pdetail">
// 									<textarea type="text" onChange={handleChangeEdit} name="detail" rows="4" style={{ resize: 'none' }}>
// 										{editData.content}
// 									</textarea>
// 								</div>
// 							) : (
// 									<div>{data.detail}</div>
// 								)}
// 						</div>
// 					</div>

// 					<div>
// 						<div className="subtitle2">Courses</div>
// 						<Courses handleSelectedCourses={handleSelectedCourses} selectedCourses={props.myPackage.selectedCourses} />
// 					</div>
// 				</div>
// 				<div className="center">
// 					<button className='createbutton mgb-5' onClick={handleClick}>
// 						Edit
// 						</button>
// 				</div>
// 				<style jsx>{style}</style>
// 			</Fragment>
// 		)
// 	}
// export default EditPackage


// // ERRORRR