import React, { Fragment } from 'react'
import moment from 'moment'
import ForumTag from './forumTag'
import Icon from '../Icon'
import Link from 'next/link'
const ForumBox = ({ data }) => {
	return (
		<Fragment>
			<div className="forumBox">
				<div className="forumTitle">{data.titlethread}</div>
				<div className="forumTag">
					<ForumTag tag={data.typename}></ForumTag>
					<ForumTag tag={data.subtypename}></ForumTag>
				</div>
				<div className="forumDate">Post At: {moment(data.posttime).fromNow()}</div>
				<div className="forumAction">
					<Icon type="like" />
					<Link href={'/forum/' + data.forumid}>
						<Icon type="comment" />
					</Link>
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

export default ForumBox
