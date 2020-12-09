import { Fragment, useEffect } from 'react'

const Video = ({ video, idx, handleVideos }) => {
	const nameChange = (e) => {
		video.name = e.target.value
		handleVideos(video, idx)
	}
	return (
		<Fragment>
			<div className="box">
				<div>
					<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
						<i className="fas fa-plus plus"></i>
					</div>
					<div className="form">
            <div style={{width:'50%'}}>
							<div className="title">Video Name</div>
							<input
								name="name"
								className="textfield"
								placeholder="Video Title"
								type="text"
								value={video.name}
								onChange={nameChange}
							></input>
						</div>
						<div style={{width:'50%'}}>
							<div className="title">Video Upload</div>
							<input
								name="name"
								className="textfield"
								placeholder="Video Title"
								type="text"
							></input>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				.form {
					display: flex;
				}
				.plus {
					opacity: 0.6;
					transition: 0.25s;
				}
				.plus:hover {
					opacity: 0.9;
					transition: 0.25s;
					cursor: pointer;
				}
				.box {
					background: #ffffff;
					box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
					border-radius: 10px;
					padding: 20px 20px;
				}
				.textfield {
					background: #eff0f6;
					border-radius: 10px;
					width: 80%;
					border: none;
					font-size: 1.1em;
					color: #3d467f;
					padding: 14px;
				}
				.textfield ::placeholder {
					color: #3d467f;
					opacity: 0.75;
				}
				.title {
					font-style: normal;
					font-weight: bold;
					font-size: 15px;
					line-height: 19px;
					letter-spacing: 0.5px;
					text-transform: uppercase;
					color: #353e6c;
					margin-bottom: 5px;
				}
			`}</style>
		</Fragment>
	)
}

export default Video
