import { Fragment } from 'react'
import Pagination from './Pagination'
import ImageUpload from './ImageUpload'
import VideoUpload from './VideoUpload';

const Page1 = (props) => {
	return (
		<Fragment>
			<div className="box">
				<Pagination currentPage={1}></Pagination>
				<div className="container">
					<div className="text">
						<div className="title">Coursename</div>
						<input name="name" className="textfield" placeholder="Course Title" type="text"></input>
					</div>

					<div className="text">
						<div className="title">Choose Picture</div>
						<ImageUpload index={0}></ImageUpload>
					</div>

					<div className="text">
						<div className="title">Sample Video</div>
						<VideoUpload></VideoUpload>
					</div>

					<div className="text">
						<div className="title">Subject</div>
						<input className="textfield" placeholder="Introduction to Programming" type="text"></input>
					</div>
				</div>
			</div>
			<style jsx>{`
				.box {
					background: rgba(255, 255, 255, 0.9);
					box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 2px 15px rgba(0, 0, 0, 0.2);
					border-radius: 10px;
					padding: 50px;
					width: 65%;
					margin-bottom: 100px;
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
