import React, { Fragment, useState, useEffect } from 'react'
import api from '../../../../api'

const Upload = ({ index, handleData, data }) => {
	const handleUplaodFile = async (e) => {
		let newValue = e.target.files[0]
		handleData({ el: 'video', data: newValue })
		const formData = new FormData()
		formData.append('course-smaple-video', newValue)
		// const res = await api.post('/api/instructor/upload', formData)
		// console.log(res.data)
	}

	const getLabel = () => {
		return data.video ? data.video.name : 'Choose Video'
	}

	return (
		<Fragment>
			<div>
				<div className="videoupload textfield">
					<input id={'video' + index} type="file" accept="video/*" hidden={true} onChange={handleUplaodFile} />
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
						<span style={{ color: '#3d467f', opacity: '0.75' }}>{getLabel()}</span>
						<span
							className="camera"
							onClick={() => {
								document.getElementById('video' + index).click()
							}}
						>
							<i className="fas fa-video"></i>
						</span>
					</div>
				</div>
			</div>
			<style jsx>{`
				.videoupload {
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
