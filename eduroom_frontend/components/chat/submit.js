import { useState, useEffect } from 'react'

export default function submit(props) {
	return (
		<>
			<div
				style={{
					marginTop: 20,
				}}
			/>
			<div
				style={{
					margin: 'auto 20px 50px',
					cursor: 'pointer',
				}}
				onClick={props.onClick}
			>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'row',
						borderRadius: 50,
						borderStyle: 'solid',
						borderWidth: 4,
						borderColor: '#6C9669',
						padding: '0 20px 0 20px',
						margin: 'auto 50px',
						cursor: 'pointer',
					}}
				>
					<span
						style={{
							fontSize: 16,
							marginLeft: 5,
							color: '#6C9669',
							fontWeight: 'bold',
							padding: '3px 0 3px 0',
						}}
					>
						Submit
					</span>
				</div>
				<style jsx>{``}</style>
			</div>
		</>
	)
}
