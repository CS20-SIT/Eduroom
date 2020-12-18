import React, { Fragment, useState } from 'react'
import Item from './item'
import { item } from './data/item'
const AdminSideNav = () => {
	const [isExpand, setExpand] = useState(false)
	const handleExpand = () => {
		document.getElementById('sidenav').style.width = '17%'
		setExpand(true)
	}
	const handleReduce = () => {
		document.getElementById('sidenav').style.width = '5%'
		setExpand(false)
	}
	return (
		<Fragment>
			<div id="sidenav">
				<div style={{paddingLeft:'20px'}}>
					<img src="/images/sidenav/eduroom_logo.svg" alt="eduroom_logo"/>
				</div>
				<div className="item-list" onMouseLeave={handleReduce}>
					{item.map((el) => {
						return (
							<Fragment key={el.text}>
								<Item data={el} isExpand={isExpand} expand={handleExpand} />
							</Fragment>
						)
					})}
				</div>
			</div>
			<style jsx>
				{`
					#sidenav {
						width: 5%;
						background: white;
						display: flex;
						flex-flow: column;
						padding-top: 1%;
						z-index: 10;
						position: fixed;
						top: 0;
						left: 0;
                        height: 100vh;
                        justify-content:center;
					}
					.item-list {
						width: 100%;
						display: flex;
						flex: 1;
						flex-flow: column;
					}
				`}
			</style>
		</Fragment>
	)
}
export default AdminSideNav
