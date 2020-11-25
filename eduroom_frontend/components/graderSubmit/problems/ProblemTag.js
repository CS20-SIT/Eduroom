import React, { Fragment, useState } from 'react'
import style from '../../../styles/graderSubmit/problems/problemTag'

const Tag = (props) => {
	const handle = () => {
		if (props.name === props.currentTag) {
			props.changeTag(null)
		} else {
			props.changeTag(props.name)
		}
	}
	const getClass = () => {
		return props.name === props.currentTag ? 'active' : ''
	}
	return (
		<Fragment>
			<button className={getClass()} onClick={handle}>
				{props.name}
			</button>
			<style jsx>{style}</style>
		</Fragment>
	)
}

export default Tag
