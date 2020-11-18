import React, { Fragment } from 'react'
import Contests from './ContestList'
import style from '../../../styles/graderSubmit/contests/contestBox'

const ContestBox = (props) => {
	return (
		<div>
			<h2 style={{ color: '#5B5B5B', paddingTop: '20px' }}>CONTESTS</h2>
			<div className="box">
				<Contests id={props.id} />
			</div>
			<style jsx>{style}</style>
		</div>
	)
}
export default ContestBox
