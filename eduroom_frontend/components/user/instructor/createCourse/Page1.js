import { Fragment } from 'react'
import ImageUpload from './ImageUpload'
import VideoUpload from './VideoUpload'

const Page1 = (props) => {
	const subjectChange = (e) => {
		props.handleData({ el: 'subject', data: e.target.value })
	}
	return (
		<Fragment>
			<div>
				<div className="container">
					<div className="text">
						<div className="title">Coursename</div>
						<input
							name="name"
							className="textfield"
							placeholder="Course Title"
							type="text"
							value={props.data.name}
							onChange={(e) => props.handleData({ el: 'name', data: e.target.value })}
						></input>
					</div>

					<div className="text">
						<div className="title">Choose Picture</div>
						<ImageUpload data={props.data} index={0} handleData={props.handleData}></ImageUpload>
					</div>

					<div style={{ marginTop: '10px' }}>
						<div className="title">Sample Video</div>
						<VideoUpload data={props.data} index={1} handleData={props.handleData}></VideoUpload>
					</div>

					<div className="text">
						<div className="title">Subject</div>
						<select name="subject" onChange={subjectChange} value={props.data.subject}>
							<option disabled value="" style={{ color: '#3d467f', opacity: '0.75' }}>
								Subject
							</option>
							{props.subjects.map((subject, idx) => {
								return (
									<option value={subject.cataid} key={idx}>
										{subject.cataname}
									</option>
								)
							})}
						</select>
					</div>

					<div className="text">
						<div className="title">Price</div>
						<input
							name="price"
							className="textfield"
							placeholder="Course Price"
							type="number"
							value={props.data.price}
							onChange={(e) => props.handleData({ el: 'price', data: parseFloat(e.target.value) })}
						></input>
					</div>
				</div>
			</div>
			<style jsx>{`
				select {
					-webkit-appearance: none;
					-moz-appearance: none;
					background: #eff0f6;
					background-image: url('/images/instructor/select-arrow.svg');
					background-repeat: no-repeat;
					background-position-x: 95.5%;
					background-position-y: center;
					border-radius: 10px;
					width: 400px;
					border: none;
					font-size: 1.1em;
					color: #3d467f;
					padding: 14px;
				}
				.container {
					display: flex;
					align-items: center;
					flex-direction: column;
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
				.text {
					margin-top: 30px;
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

export default Page1
