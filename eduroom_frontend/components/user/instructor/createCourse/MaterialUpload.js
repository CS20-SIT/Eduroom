import React, { Fragment, useState, useEffect } from 'react'
import style from '../../../../styles/user/instructor/createCourse/create'

const MaterialUpload = ({material,sectionIndex, index, handleData}) => {
	const handleUplaodFile = (e) => {
    let newValue = e.target.files[0]
    handleData(newValue)
	}

  const getLabel = () => {
    console.log('material is ',material)
		return material.data ? material.data.name : 'Choose pdf file'
	}

	return (
		<Fragment>
			<div className="textfield">
				<input
					id={'material-section' + sectionIndex + '-' + index}
					type="file"
					accept="application/pdf"
					hidden={true}
					onChange={handleUplaodFile}
				/>
				<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<span style={{ color: '#3d467f', opacity: '0.75' }}>{getLabel()}</span>
					<span
						className="camera"
						onClick={() => {
							document.getElementById('material-section' + sectionIndex + '-' + index).click()
						}}
					>
						<i className="fas fa-paperclip"></i>
					</span>
				</div>
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default MaterialUpload
