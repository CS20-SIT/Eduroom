import React, { Fragment, useState, useEffect } from 'react'
import Courses from './courses'
import api from '../../api'
import style from '../../styles/package/createpackage'

const CreatePackage = (props) => {
	const [alert, setAlert] = useState({
		pic: false,
		name: false,
		category: false,
		detail: false,
		courses: false,
	})
	const [categories, setCategories] = useState([])
	const [error, setError] = useState(true)
	const fetchCategories = async () => {
		try {
			const res = await api.get('/api/package/categories')
			setCategories(res.data)
		} catch (err) {}
	}
	useEffect(() => {
		fetchCategories()
	}, [])
	useEffect(() => {
		if (props.myPackage.pic) {
			var reader = new FileReader()
			reader.onload = function (e) {
				document.getElementById('show-package-image-1').src = e.target.result
			}
			reader.readAsDataURL(props.myPackage.pic)
		}
	}, [props.myPackage.pic])

	const handleSelectedCourses = (newSelected) => {
		console.log(newSelected)
		console.log('hello')
		props.setMyPackage({ ...props.myPackage, selectedCourses: newSelected })
	}
	const handleUplaodFile = (e) => {
		let newValue = e.target.files[0]
		props.setMyPackage({ ...props.myPackage, pic: newValue })
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

	const categoryChange = (e) => {
		let categoryText = ''
		for (let i = 0; i < categories.length; i++) {
			if (categories[i].value == e.target.value) {
				categoryText = categories[i].label
				break
			}
		}
		props.setMyPackage({ ...props.myPackage, category: e.target.value, categoryText })
	}
	const nameChange = (e) => {
		props.setMyPackage({ ...props.myPackage, name: e.target.value })
	}
	const detailChange = (e) => {
		props.setMyPackage({ ...props.myPackage, detail: e.target.value })
	}
	const handleClick = (e) => {
		props.changePage(2)
	}

	const validator = () => {
		if (
			props.myPackage.name == '' ||
			props.myPackage.category == '' ||
			props.myPackage.discount === 0 ||
			props.myPackage.detail == '' ||
			props.myPackage.courses == 0 ||
			props.myPackage.pic === '' ||
			props.myPackage.selectedCourses.length === 0
		) {
			setError(true)
			return false
		} else {
			setError(false)
			return true
		}
	}
	console.log(props.myPackage.selectedCourses)
	useEffect(() => {
		validator()
	}, [props.myPackage])
	return (
		<Fragment>
			<div>
				<div className="package-header">CREATE NEW PACKAGE</div>
				<div className="container pd-4-10">
					<div className="subtitle mg-40 text-center">PACKAGE INFORMATION</div>
					<div style={{ display: 'flex' }}>
						<div className="img-upload">
							<div
								className="imageupload"
								onClick={() => {
									document.getElementById('image-1').click()
								}}
							>
								<input id="image-1" type="file" accept="image/*" hidden={true} onChange={handleUplaodFile} />

								{props.myPackage.pic ? (
									<div>
										<img src="" id="show-package-image-1" style={{ maxWidth: '100%', maxHeight: '235px' }} />
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
							{alert.pic ? <div className="alert-text center">* Image is required</div> : null}
						</div>

						<div style={{ width: '50%' }}>
							<div>
								<input
									type="text"
									placeholder="Name"
									name="name"
									id="name"
									className="mgt-0"
									onChange={nameChange}
									value={props.myPackage.name}
								/>
								{alert.name ? <div className="alert-text">* Name is required</div> : null}
							</div>

							<div>
								<select name="discount" onChange={discountChange} value={props.myPackage.discount}>
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
								<select name="category" onChange={categoryChange} value={props.myPackage.category}>
									<option disabled value="">
										Category
									</option>
									{categories.map((el, idx) => {
										return (
											<option value={el.value} key={idx}>
												{el.label}
											</option>
										)
									})}
								</select>
								{alert.category ? <div className="alert-text">* Category is required</div> : null}
							</div>

							<div>
								<textarea
									placeholder="Detail"
									name="detail"
									id="detail"
									rows="4"
									style={{ resize: 'none' }}
									onChange={detailChange}
									value={props.myPackage.detail}
								/>
								{alert.detail ? <div className="alert-text">* Detail is required</div> : null}
							</div>
						</div>
					</div>

					<div>
						<div className="subtitle2">Courses</div>
						<Courses handleSelectedCourses={handleSelectedCourses} selectedCourses={props.myPackage.selectedCourses} />
					</div>
				</div>
				<div className="center">
					<button className={`createbutton mgb-5 ${error ? 'disabled' : ''}`} disabled={error} onClick={handleClick}>
						Create
					</button>
				</div>
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default CreatePackage
