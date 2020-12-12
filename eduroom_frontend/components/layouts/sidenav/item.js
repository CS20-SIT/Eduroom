import React, { Fragment, useState } from 'react'
import Icon from './icons/landing'
import style from '../../../styles/layout/sidebar'
import { useRouter } from 'next/router'
const Item = ({ data, expand, isExpand }) => {
	const [hover, setHover] = useState(false)
	const router = useRouter()
	return (
		<Fragment>
			<div className="side-item" onClick={() => router.push(data.link)}>
				<div
					className="side-item-expand"
					onMouseLeave={() => {
						setHover(false)
					}}
					onMouseEnter={() => {
						expand()
						setHover(true)
					}}
				>
					<div className={isExpand ? 'side-icon-expand expand' : 'side-icon-expand'}>
						<Icon isHover={hover} icon={data.icon} />
					</div>
					{isExpand ? (
						<Fragment>
							<div className={hover ? 'side-text hover' : 'side-text'}>{data.text}</div>
						</Fragment>
					) : null}
				</div>
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default Item
