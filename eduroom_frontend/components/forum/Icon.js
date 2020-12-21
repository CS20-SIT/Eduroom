import React, { Fragment, useState } from 'react'
const Icon = ({ type, isHover, changeHover = true, isPointer = true, clicked = () => {} }) => {
	const [hover, setHover] = useState(isHover)
	const handleClick = () => {
		clicked(() => {
			if (changeHover) {
				setHover(!hover)
			}
		})
	}
	switch (type) {
		case 'like':
			return (
				<Fragment>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							marginRight: '1rem',
							cursor: `${isPointer ? 'pointer' : 'default'}`,
						}}
						onClick={handleClick}
					>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M1 21H5V9H1V21ZM23 10C23 8.9 22.1 8 21 8H14.69L15.64 3.43L15.67 3.11C15.67 2.7 15.5 2.32 15.23 2.05L14.17 1L7.59 7.59C7.22 7.95 7 8.45 7 9V19C7 20.1 7.9 21 9 21H18C18.83 21 19.54 20.5 19.84 19.78L22.86 12.73C22.95 12.5 23 12.26 23 12V10Z"
								fill={hover ? '#FB9CCB' : '#5B5B5B'}
							/>
						</svg>
					</div>
				</Fragment>
			)
		case 'comment':
			return (
				<Fragment>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							marginRight: '1rem',
							cursor: `${isPointer ? 'pointer' : 'default'}`,
						}}
						onClick={handleClick}
					>
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M19.99 2C19.99 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H16L20 20L19.99 2ZM16 12H4V10H16V12ZM16 9H4V7H16V9ZM16 6H4V4H16V6Z"
								fill={hover ? '#FB9CCB' : '#5B5B5B'}
							/>
						</svg>
					</div>
				</Fragment>
			)
	}
}
export default Icon
