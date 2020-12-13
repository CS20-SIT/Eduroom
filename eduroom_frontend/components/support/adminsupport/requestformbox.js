import React, { Fragment } from 'react'
import moment from 'moment'
import RequestFormTag from './requestformtag'


import { useRouter } from 'next/router'
const RequestFormBox = ({ data }) => {
	const router = useRouter()
	return (
		<Fragment>
			<div className="forumBox" >
				<div
					// onClick={() => {
					// 	router.push(`/admin/support/${data.ticketid}`)
					// }}
				>
					<div className="forumTag">
					<RequestFormTag tag={data.subname}></RequestFormTag></div>
					<div className="forumTitle">{data.title}</div>
					<div className="forumTag">
						<RequestFormTag tag={data.typename}></RequestFormTag>
						<RequestFormTag tag={data.subname}></RequestFormTag>
						
					</div>
					<div className="forumDate">
						{data.author} requested {moment(data.requesttime).fromNow()}
					</div>
				</div>
			</div>
			<style jsx>
				{`
					.forumBox {
						background: white;
						color: #5b5b5b;
						width: 100%;
						box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
						padding: 2rem;
						margin-bottom: 1rem;
						cursor: pointer;
					}
					.forumDate {
						padding-bottom: 1rem;
					}
					.forumTitle {
						font-size: 1.5rem;
						font-weight: 600;
						padding-bottom: 1rem;
					}
					.forumAction {
						display: flex;
						align-items: center;
					}
					.forumTag {
						display: flex;
						padding-bottom: 1rem;
					}
				`}
			</style>
		</Fragment>
	)
}

export default RequestFormBox;
