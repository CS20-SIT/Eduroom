import React, { Fragment, useState, useEffect } from 'react'
import api from '../../../../api'

const Upload = ({ index, handleData}) => {
	const [image, setImage] = useState(null)
	useEffect(() => {
		if (image) {
			// var reader = new FileReader()
			// reader.onload = function (e) {
			// 	document.getElementById('show-image' + index).src = e.target.result
			// }
			// reader.readAsDataURL(image)
		}
	}, [image])
	const handleUplaodFile = async (e) => {
		let newValue = e.target.files[0]
		let type = 'image'
		handleData({ el: 'picture', data: newValue })
		setImage(newValue)
		const formData = new FormData()
		formData.append('myImage', newValue)
		const config = {
			headers: {
				'content-type': 'multipart/form-data',
			},
		}
		const res = await api.post('/api/instructor/upload', formData, config)
		console.log(res.data)
	}
	const getLabel = () => {
		return image ? image.name : 'Choose Picture'
	}
	return (
		<Fragment>
			<div>
				<div className="imageupload textfield">
					<input id={'image' + index} type="file" accept="image/*" hidden={true} onChange={handleUplaodFile} />
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
						<span style={{ color: '#3d467f', opacity: '0.75' }}>{ getLabel()}</span>
						<span
							className="camera"
							onClick={() => {
								document.getElementById('image' + index).click()
							}}
						>
							<i className="fas fa-camera"></i>
						</span>
					</div>
				</div>
				<img id="show-image0"></img>
			</div>
			<style jsx>{`
				.imageupload {
					width: 400px;
				}
				.textfield {
					background: #eff0f6;
					border-radius: 10px;
					width: 400px;
					border: none;
					font-size: 1.1em;
					color: #3d467f;
					padding: 14px;
				}
				.textfield.error {
					border: 1px solid #ed3f14;
				}
				.textfield ::placeholder {
					color: #3d467f;
					opacity: 0.75;
				}
				.camera {
					opacity: 1;
					transition: 0.3s;
				}
				.camera:hover {
					opacity: 0.75;
					transition: 0.3s;
					cursor: pointer;
				}
			`}</style>
		</Fragment>
	)
}
export default Upload
