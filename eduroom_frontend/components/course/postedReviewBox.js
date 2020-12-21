import React, { Fragment } from 'react'
import style from '../../styles/course/review'
import moment from 'moment'
const post = (props) => {
	console.log(props.data)
	return (
		<Fragment>
			<div
				className="postedBox"
				style={{
					boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0)',
					background: '#F2ECFE',
					borderRadius: '20px',
					width: '1015px',
					height: '194px',
					display: 'flex',
					marginTop: '2%',
					justifyContent: 'start',
					paddingTop: '37px',
					fontSize: 24,
				}}
			>
				<img
					src = {props.data.avatar}
					className="myimgInPost"
					style={{ marginLeft: '4%', marginRight: '20px' }}
				></img>
				<div
					className="col"
					style={{
						width: 800,
						height: 100,
						fontSize: 24,
					}}
				>
					<b>{props.data.displayname}</b>
					<div
						style={{
							fontSize: 14,
							color: '#9593A0',
							display: 'flex'
						}}
					>
						<div className="starForPost">
							<span className="fa fa-star" style={{ color: props.data.reviewrate>=1?'#FB9CCB':'#ccc' }}></span>
							<span className="fa fa-star" style={{ color: props.data.reviewrate>=2?'#FB9CCB':'#ccc' }}></span>
							<span className="fa fa-star" style={{ color: props.data.reviewrate>=3?'#FB9CCB':'#ccc' }}></span>
							<span className="fa fa-star" style={{ color: props.data.reviewrate>=4?'#FB9CCB':'#ccc' }}></span>
							<span className="fa fa-star" style={{ color: props.data.reviewrate>=5?'#FB9CCB':'#ccc' }}></span>
						</div>
						<div style={{paddingLeft: '0.5rem'}}>
							{moment(props.data.date).fromNow()}
						</div>
					</div>
					<div style={{ fontSize: 18 }}>
						{props.data.comment}
					</div>
				</div>
			</div>

			<style jsx>{style}</style>
		</Fragment>
	)
}
export default post
