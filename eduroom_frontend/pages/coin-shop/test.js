import { Fragment, useEffect, useState } from 'react'
import Styles from '../../styles/CoinStyles/test'
import React from 'react'
import Balloon from '../../components/FolderCoin/Balloon'
const temp = (props) => {
	const [check, setCheck] = useState(false)
	const renderBalloon = () => {
		console.log('Hello test')
		if (check === true) {
			return Array(50)
				.fill(0)
				.map((el, index) => {
					return (
						<Fragment>
							<Balloon />
						</Fragment>
					)
				})
		} else {
			return null
		}
	}
	useEffect(() => {
		console.log(check)
	}, [check])

	return (
		<div>
			Hello
			<div>
				<div id="balloon-container">{renderBalloon()}</div>
			</div>
			<button
				id="test"
				onClick={() => {
					setCheck(true)
					console.log('kk')
				}}
			>
				BAllon
			</button>
			<style jsx>{Styles}</style>
		</div>
	)
}
export default temp
