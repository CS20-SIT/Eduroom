import React, { Fragment } from 'react'
import style from '../../../styles/graderSubmit/problems/problemTag'

const Tag = (props) => {
	return (
		<Fragment>
			<button>{props.name}</button>
			<style jsx>{style}</style>
		</Fragment>
	)
}

export default Tag
