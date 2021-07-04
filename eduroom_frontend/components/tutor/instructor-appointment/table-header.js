import { Fragment, useState } from 'react'
import utils from '../../../styles/tutor/utils'

const Header = () => {
	const header = ['Request By', 'Date', 'Time', ' Status', 'Action']
	return (
		<Fragment>
			<div className="grid-container-header">
				{header.map((h, i) => (
					<div key={i} className="font-quicksand text-md font-bold text-secondary">
						{h}
					</div>
				))}
			</div>
			<style jsx>{utils}</style>
			<style jsx>{`
				.grid-container-header {
					width: 100%;
					display: grid;
					grid-template-columns: 2.5fr 1.25fr 1.75fr 1.25fr 0.5fr;
					padding: 0.1rem 2rem;
				}
			`}</style>
		</Fragment>
	)
}
export default Header
