import React, { Fragment, useState } from 'react'
import Item from '../../admin/layout/item'
import Link from 'next/link'
import style from '../../../styles/layout/sidebar'
import Image from 'next/image'
import { items } from '../../../components/admin/layout/data/item'
const SideNav = () => {
	const [expand, setExpand] = useState(false)
	const handleExpand = () => {
		document.getElementById('side-nav').style.width = '16%'
		setExpand(true)
	}
	const handleReduce = () => {
		document.getElementById('side-nav').style.width = '5%'
		setExpand(false)
	}
	return (
		<Fragment>
			<div id="side-nav">
				<Link href="/">
					<div className={expand ? 'side-icon expand' : 'side-icon'}>
						<Image src="/images/sidenav/eduroom_logo.svg" alt="eduroom_logo" width="41" height="46" />
					</div>
				</Link>
				<div className="side-nav-list" onMouseLeave={handleReduce}>
					{items.map((el) => {
						return <Item key={el.text} data={el} isExpand={expand} expand={handleExpand} reduce={handleReduce} />
					})}
				</div>
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default SideNav
