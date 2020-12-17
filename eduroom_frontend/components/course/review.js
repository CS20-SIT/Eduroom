import React, { Fragment } from 'react'
import Post from '../course/postedReviewBox'
import style from '../../styles/course/review'
import CommentForPost from './commentForPost'
import ShowComment from './showComment'
import {
	Grid
  } from "@material-ui/core";
const review = () => {
	return (
		<Fragment>
			 <div className="box" style={{ display: 'flex', background: 'rgba(255,255,255,.7)'}} >
				<CommentForPost />
				</div> 
				<ShowComment data={[]}/>
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
