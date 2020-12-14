import { Fragment, useEffect } from 'react'
import Styles from '../../styles/CoinStyles/test'
import React from 'react'
import Balloon from '../../components/FolderCoin/Balloon'
const temp = (props) => {
	const renderBalloon = () => {
		return Array(50)
			.fill(0)
			.map((el, index) => {
				return (
					<Fragment>
						<Balloon />
					</Fragment>
				)
			})
	}
	return (
		<div>
			Hello
			<div>
				<div id="balloon-container">
					{renderBalloon()}</div>
				<style jsx>{Styles}</style>
				
			</div>
		</div>
	)
}
export default temp
