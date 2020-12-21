import React from 'react'

export default function ReadIcon(props) {
	return (
		<>
			<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={props.onClick}
				style={props.style}>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5ZM11 13C8.24 13 6 10.76 6 8C6 5.24 8.24 3 11 3C13.76 3 16 5.24 16 8C16 10.76 13.76 13 11 13ZM8 8C8 6.34 9.34 5 11 5C12.66 5 14 6.34 14 8C14 9.66 12.66 11 11 11C9.34 11 8 9.66 8 8Z"
					fill="black"
					fill-opacity="0.54"
				/>
			</svg>
		</>
	)
}
