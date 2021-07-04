import { Fragment, useState, useEffect } from 'react'
import style from '../../../../styles/user/instructor/createCourse/create'

const CourseVideoUpload = ({ video, sectionIndex, index, handleData }) => {
	const handleUplaodFile = (e) => {
		let newValue = e.target.files[0]
		handleData(newValue)
	}

	const getLabel = () => {
		return video.data ? video.data.name : 'Choose Video'
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
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default CourseVideoUpload
