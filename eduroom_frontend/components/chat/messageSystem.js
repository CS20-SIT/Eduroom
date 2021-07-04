import { useState, useEffect } from 'react'

export default function messageSystem(props) {
	return (
		<div
			style={{
				textAlign: 'center',
				width: '100%',
				color: '#858585',
			}}
		>
			<p style={{ fontSize: 18 }}>{props.message}</p>
		</div>
	)
}
