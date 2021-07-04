import { Fragment, useState } from 'react'
import Icon from './icons/icons'
import Link from 'next/link'
const Item = ({ data, isExpand, expand }) => {
	const [isHover, setHover] = useState(false)
	return (
		<Fragment>
			<Link href={data.link ?? ''}>
				<div
					className={`item`}
					onMouseEnter={() => {
						setHover(true)
						expand()
					}}
					onMouseLeave={() => setHover(false)}
				>
					<div className="item-icon">
						<Icon isHover={isHover} type={data.icon} />
					</div>
					{isExpand ? <div className={`item-text ${isHover ? 'hover' : ''}`}>{data.text}</div> : null}
				</div>
			</Link>
			<style jsx>
				{`
					.item {
						display: flex;
						min-height: 60px;
						cursor: pointer;
					}
					.item-icon {
						min-width: 60px;
						padding-left: 25px;
						display: flex;
						align-items: center;
					}
					.item-text {
						display: flex;
						align-items: center;
						padding-left: 8px;
						color: #9593a0;
						font-weight: 500;
					}
					.item-text.hover {
						color: #a880f7;
						font-weight: bold;
					}
				`}
			</style>
		</Fragment>
	)
}
export default Item
