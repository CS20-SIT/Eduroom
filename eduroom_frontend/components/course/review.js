import React, { Fragment, useEffect, useState } from 'react'
import CommentForPost from './commentForPost'
import StudentFeedback from './studentFeedback'
import PostedReviewBox from './postedReviewBox'
import api from '../../api'
const review = (props) => {
	const [reviewList, setReviewList] = useState([])
	const [feedback, setFeedback] = useState({
		average: 5,
		count: 1,
		rates: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
	})
	useEffect(() => {
		api.get(`/api/review?type=${props.type}&id=${props.id}`).then((res) => {
			setReviewList(res.data.data)
			console.log(res.data.rates)
			setFeedback({ average: res.data.average, count: res.data.count, rates: res.data.rates })
		})
	}, [])
	return (
		<Fragment>
			<div className="box" style={{ display: 'flex', flexFlow: 'column', background: 'rgba(255,255,255,.7)' }}>
				<CommentForPost type={props.type} id={props.id} />
				<div style={{ paddingLeft: '2%' }}>
					<StudentFeedback data={feedback} />
				</div>
				<div style={{ marginTop: '30px', marginLeft: '6.7%', marginRight: '5%', marginBottom: '30px' }}>
					<div
						style={{
							width: '1016px',
							height: '0px',
							left: '243px',
							border: '1px solid #7B89DD',
							backgroundColor: '#7B89DD',
						}}
					/>
					{reviewList.map((el) => {
						return <PostedReviewBox data={el} />
					})}
				</div>
			</div>
			{/* <ShowComment data={data} id={props.id}/> */}
			{/* <ShowComment /> */}

			<style>{`
			.box{
				box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3);
						background: white;
						border-radius: 2vh;
						width: 80vw;
						height: auto;					
						margin-left: auto;
						margin-right: auto;
						display: flex;
						justify-content: start;
						background-color: white;
			}
			.rate {
				float: left;
				height: 46px;
				padding: 0 10px;
			}
			.rate:not(:checked) > input {
				position:absolute;
				top:-9999px;
			}
			.rate:not(:checked) > label {
				float:right;
				width:1em;
				overflow:hidden;
				white-space:nowrap;
				cursor:pointer;
				font-size:30px;
				color:#ccc;
			}
			.rate:not(:checked) > label:before {
				content: '★ ';
			}
			.rate > input:checked ~ label {
				color:#FB9CCB;    
			}
			.rate:not(:checked) > label:hover,
			.rate:not(:checked) > label:hover ~ label {
				color: #FB9CCB;  
			}
			.rate > input:checked + label:hover,
			.rate > input:checked + label:hover ~ label,
			.rate > input:checked ~ label:hover,
			.rate > input:checked ~ label:hover ~ label,
			.rate > label:hover ~ input:checked ~ label {
				color: #FB9CCB;
			}
			
			`}</style>
		</Fragment>
	)
}
export default review
