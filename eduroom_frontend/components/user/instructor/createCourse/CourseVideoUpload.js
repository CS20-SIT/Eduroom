import React, { Fragment, useState, useEffect } from 'react'

const CourseVideoUpload = ({ sectionIndex, index, handleData }) => {
	const [video, setVideo] = useState(null)
	useEffect(() => {
		if (video) {
		}
	}, [video])
	const handleUplaodFile = (e) => {
		let newValue = e.target.files[0]
		handleData({ el: 'video', data: newValue })
		console.log(newValue)
		setVideo(newValue)
	}

	const getLabel = () => {
		return video ? video.name : 'Choose Video'
	}

	return (
		<Fragment>
			<div className="textfield">
				<input
					id={'video-section' + sectionIndex + '-' + index}
					type="file"
					accept="video/*"
					hidden={true}
					onChange={handleUplaodFile}
				/>
				<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<span style={{ color: '#3d467f', opacity: '0.75' }}>{getLabel()}</span>
					<span
						className="camera"
						onClick={() => {
							document.getElementById('video-section' + sectionIndex + '-' + index).click()
						}}
					>
						<i className="fas fa-video"></i>
					</span>
				</div>
			</div>
			<style jsx>{`
				.textfield {
					background: #eff0f6;
					border-radius: 10px;
					max-width: 100%;
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
export default CourseVideoUpload
