import React, { Fragment, useState, useEffect } from 'react'

const Upload = ({ index }) => {
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
	const handleUplaodFile = (e) => {
		let newValue = e.target.files[0]
		let type = 'image'
		console.log(newValue)
		setImage(newValue)
	}

	return (
		<Fragment>
			<div>
				<div className="imageupload textfield">
					<input id={'image' + index} type="file" accept="video/*" hidden={true} onChange={handleUplaodFile} />
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
						<span style={{ color: '#3d467f', opacity: '0.75' }}>Choose Video</span>
						<span
							className="camera"
							onClick={() => {
								document.getElementById('image' + index).click()
							}}
						>
							<i className="fas fa-video"></i>
						</span>
					</div>
				</div>
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
