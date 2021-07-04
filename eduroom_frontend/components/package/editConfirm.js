import { Fragment, useState, useEffect } from 'react'
import style from '../../styles/package/createpackage'
import SelectedCourses from './selectedCourses'
import Dialog from '@material-ui/core/Dialog'
import { useRouter } from 'next/router'
import api from '../../api'

const ConfirmEdit = ({ index, image, editData, selectCourse, handleChangePage }) => {
	const [loading, setLoading] = useState(false)
	const [courses, setCourses] = useState([])
	const [totalPrice, setTotalPrice] = useState(0)
	const [open, setOpen] = useState(false)
	const router = useRouter()
	const param = router.query.id || ''

	const getTotalPrice = (total) => {
		let price = parseFloat(total * ((100 - editData.discount) / 100)).toFixed(2)
		return price
	}

	const handleSubmit = async () => {
		try {
			setLoading(true)
			let imgUrl = editData.image
			if (image) {
				const formData = new FormData()
				formData.append('course-picture-1', image)
				const imageRes = await api.post('/api/package/uploadPackagePic', formData)
				imgUrl = imageRes.data.linkUrl
				const body = {
					packagename: editData.packagename,
					discount: editData.discount,
					cateid: editData.cateid,
					detail: editData.detail,
					courses: selectCourse,
					ispublic: false,
					image: imgUrl,
				}
				const res = await api.put(`/api/package/${param}`, body)
				setLoading(false)
				handleChangePage(2)
			} else {
				const body = {
					packagename: editData.packagename,
					discount: editData.discount,
					cateid: editData.cateid,
					detail: editData.detail,
					courses: selectCourse,
					ispublic: false,
					image: imgUrl,
				}
				const res = await api.put(`/api/package/${param}`, body)
				setLoading(false)
				handleChangePage(2)
			}
		} catch (err) {}
	}

	const handleOpenDialog = async (e) => {
		await handleSubmit()
		setOpen(true)
	}

	const fetchCourses = () => {
		try {
			api.post('/api/package/getCoursesOfCreatingPackage', { selectCourse }).then((res) => {
				setCourses(res.data.courses)
				setTotalPrice(res.data.totalPrice)
				console.log(res.data)
			})
		} catch (err) {}
	}
	useEffect(() => {
		fetchCourses()
	}, [])
	useEffect(() => {
		if (image) {
			var reader = new FileReader()
			reader.onload = function (e) {
				document.getElementById('show-image' + index).src = e.target.result
			}
			reader.readAsDataURL(image)
		}
	}, [image])

	return (
		<Fragment>
			<div>
				<div className="package-header">CONFIRM EDIT</div>
				<div className="container pd-4-15">
					<div className="center">
						{image ? (
							<img src="" id={'show-image' + index} style={{ maxWidth: '100%', maxHeight: '235px' }} />
						) : editData.image ? (
							<img src={editData.image} alt="package-image" style={{ maxWidth: '100%', maxHeight: '235px' }} />
						) : null}
					</div>
					<div className="subtitle uppercase">{editData.packagename}</div>
					<div className="price">
						<div>
							$<span>{getTotalPrice(totalPrice)}</span>
						</div>
						<div style={{ marginLeft: '20px' }}>
							(<span style={{ textDecoration: 'line-through' }}>${totalPrice}</span>)
						</div>
					</div>
					<div className="category">{editData.category}</div>
					<div className="subtitle">Package Detail</div>
					<div className="detail">{editData.detail}</div>
					<div className="subtitle">Selected Course</div>
					<div className="coursebox box-cf">
						<SelectedCourses courses={courses}></SelectedCourses>
					</div>
				</div>
				<div className="cfbutton">
					<div>
						<button id="back-btn" className="backbutton" onClick={() => handleChangePage(1)}>
							<i className="fas fa-arrow-left"></i>
						</button>
					</div>
					<div style={{ textAlign: 'center' }}>
						<button
							id="confirm-edit-btn"
							disabled={loading}
							className={`createbutton mgb-10 ${loading ? 'disabled' : ''}`}
							onClick={handleOpenDialog}
						>
							Confirm and Update
						</button>
					</div>
					<div></div>
				</div>
			</div>
			<Dialog open={open}>
				<div className="dialog">
					<div className="indialog">
						<div className="right">
							<button id="close-btn" className="buttonX" onClick={() => router.push('/user/instructor/package')}>
								X
							</button>
						</div>
						<div>
							<img src="/images/package/edited.svg" style={{ width: 200, height: 200 }} />
						</div>

						<div className="text-dialog">Your package is already updated !</div>
					</div>
				</div>
			</Dialog>
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default ConfirmEdit
