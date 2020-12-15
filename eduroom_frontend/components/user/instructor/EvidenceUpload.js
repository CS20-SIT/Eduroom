import React, { Fragment, useState, useEffect } from 'react'

const EvidenceUpload = ({ index, handleData, data,label }) => {
	const getLabel = () => {
		return data ? data.name : label
	}
	return (
		<Fragment>
			<div>
				<div className="imageupload textfield">
					<input id={'image' + index} type="file" accept="image/*" hidden={true} onChange={handleData} />
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
						<span style={{ color: '#3d467f', opacity: '0.75' }}>{getLabel()}</span>
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
					width: 100%;
				}
				.textfield {
					background: #eff0f6;
					border-radius: 10px;
					width: 100%;
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
export default EvidenceUpload
