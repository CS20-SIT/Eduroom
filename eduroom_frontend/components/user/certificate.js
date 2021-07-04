import { Fragment } from 'react'
import Header from '../layouts/header'
const Certificate = ({ data }) => {
	const formatDate = (date) => {
		const d = new Date(date)
		return d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate()
	}
	return (
		<Fragment>
			<Header />
			<div className="certificate">
				<div className="head">
					<div className="date">{formatDate(data.finishdate)}</div>
				</div>
				<div className="info">
					<div className="title">CERTIFICATE</div>
					<div className="subTitle">this certificate is present to</div>
					<div className="name">
						{data.firstname} {data.lastname}
					</div>
					<div className="text">
						has successfully complete from <b>"{data.coursename}"</b> course
					</div>
				</div>
			</div>
			<style jsx>
				{`
					.certificate {
						background-image: url('/images/certificate_background.png');
						width: 80%;
						height: 90%;
						background-size: auto;
						background-repeat: no-repeat;
						font-family: Quicksand;
						background-position-y: bottom;
						display: flex;
						flex-flow: column;
						cursor: default;
						border: 1px solid black;
					}
					.head {
						padding: 24px 24px;
						width: 100%;
						height: fit-content;
						text-align: right;
					}
					.info {
						width: 100%;
						text-align: center;
						flex: 1;
						display: flex;
						flex-flow: column;
						justify-content: center;
						padding-bottom: 96px;
					}
					.date {
						font-size: 0.9em;
						font-weight: 500;
						color: #3d467f;
					}
					.title {
						color: #3d467f;
						font-size: 2em;
						font-weight: bold;
						letter-spacing: 7px;
						padding: 20px 0;
					}
					.subTitle {
						font-size: 1.2em;
						color: #3d467f;
						padding: 12px 0;
					}
					.text {
						font-size: 1em;
						color: #3d467f;
						padding-top: 24px;
						font-weight: 400;
					}
					.name {
						padding: 12px 0;
						background: white;
						font-size: 1.8em;
						color: #fb9ccb;
						text-transform: uppercase;
						font-weight: bold;
					}
				`}
			</style>
		</Fragment>
	)
}
export default Certificate
