import React, { Fragment, useState, useEffect } from 'react'
import Courses from './courses'
import style from '../../styles/package/createpackage'
import { useRouter } from 'next/router'
import api from '../../api'

const EditPackage = ({
	index,
	handleChangeEdit,
	handleSelectedCourses,
	handleUplaodFile,
	image,
	editData,
	selectCourse,
	handleChangePage,
}) => {
	useEffect(() => {
		if (image) {
			var reader = new FileReader()
			reader.onload = function (e) {
				document.getElementById('show-image' + index).src = e.target.result
			}
			reader.readAsDataURL(image)
		}
	}, [image])

	const numDiscount = [5, 10, 20, 30, 40, 50, 60, 70]
	const discount = numDiscount.map((num) => {
		return { label: num + '%', value: num }
	})
	const [categories, setCategories] = useState([])
	const fetchCategories = async () => {
		try {
			const res = await api.get('/api/package/categories')
			setCategories(res.data)
		} catch (err) {}
	}
	useEffect(() => {
		fetchCategories()
	}, [])
	const handleClick = () => {
		handleChangePage(2)
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
							) : editData.image ? (
								<div>
									<div>
										<img src={editData.image} alt="package-image" style={{ maxWidth: 420, maxHeight: 235 }} />
									</div>
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
							<select name="category" onChange={handleChangeEdit} value={editData?.cateid}>
								<option disabled value="">
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
							<textarea
								type="text"
								onChange={handleChangeEdit}
								name="detail"
								rows="4"
								style={{ resize: 'none' }}
								value={editData?.detail}
							></textarea>
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
