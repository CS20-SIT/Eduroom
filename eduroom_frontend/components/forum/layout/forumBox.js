import React, { Fragment } from 'react'
import moment from 'moment'
import ForumTag from './forumTag'
import Icon from '../Icon'
import Link from 'next/link'
import { useRouter } from 'next/router'
const ForumBox = ({ data, onLike }) => {
	const router = useRouter()
	return (
		<Fragment>
			<div className="forumBox">
				<div
					onClick={() => {
						router.push(`/forum/${data.forumid}`)
					}}
				>
					<div className="forumTitle">{data.titlethread}</div>
					<div className="forumTag">
						<ForumTag tag={data.typename}></ForumTag>
						<ForumTag tag={data.subtypename}></ForumTag>
					</div>
					<div className="forumDate">
						{data.author} post {moment(data.posttime).fromNow()}
					</div>
				</div>
				<div className="forumAction">
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<Icon
							type="like"
							isHover={data.is_like}
							clicked={(callback) => {
								onLike(data.forumid, callback)
							}}
						/>
						<div>{data.likes}</div>
					</div>
					<div
						style={{ display: 'flex', paddingLeft: '2%', alignItems: 'center' }}
						onClick={() => {
							router.push(`/forum/${data.forumid}`)
						}}
					>
						<Icon type="comment" />
						<div>{data.comments}</div>
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

export default ForumBox
