import React, { useState, useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar'
import ReadIcon from './icons/ReadIcon'
import DotDotIcon from './icons/DotDotIcon'

export default function messageLeft(props) {
	const [dropReadDownStyle, setReadDropDownStyle] = useState({ visibility: 'hidden' })
	const [dropDownStyle, setDropDownStyle] = useState({ visibility: 'hidden' })
	const [dotDotStyle,setDotDotStyle] = useState({ visibility: 'hidden' })
	const message = props.message
	return (
		<div style={{ display: 'flex', alignItems: 'center' }} onMouseOver={()=>{setDotDotStyle({})}} onMouseLeave={()=>{setDotDotStyle({visibility: 'hidden'})}}>
			<Avatar
				style={{ width: 40, height: 40, marginLeft: 50, marginRight: 14, marginTop: 20 }}
				alt={message.name}
				src={message.profilePic}
			/>
			<div style={{ marginBottom: 0 }}>
				<div style={{ marginBottom: 0, marginTop: 15 }}>{message.name}</div>
				<div style={{ textAlign: 'left', width: '100%' }}>
					<div className="messageLeft">
						<span style={{ fontSize: 18 }}>{message.text}</span>
					</div>
					<div
						style={{ position: 'relative', display: 'inline-block',cursor:'pointer' }}
						onMouseOver={() => {
							setDropDownStyle({})
						}}
						onMouseLeave={() => {
							setDropDownStyle({ visibility: 'hidden'})
						}}
					>
						<DotDotIcon style={dotDotStyle} />
						<div className="dropdown2" style={dropDownStyle}>
							<span className="row">
								<span className="sm" style={{ marginRight: 18 }}>
									Delete
								</span>
							</span>
						</div>
					</div>
				</div>
				<span>{message.sentTime}</span>
				<div
					style={{ position: 'relative', display: 'inline-block' }}
					onMouseOver={() => {
						setReadDropDownStyle({})
					}}
					onMouseLeave={() => {
						setReadDropDownStyle({ visibility: 'hidden' })
					}}
				>
					<ReadIcon style={{ paddingTop: 5, marginLeft: 10 }} />
					<div className="dropdown scroll" style={dropReadDownStyle}>
						<span
							style={{
								fontSize: 12,
								whiteSpace: 'nowrap',
							}}
						>
							Krishadawut Olde Monnikhof
						</span>
						<br />
						<span
							style={{
								fontSize: 12,
							}}
						>
							15:35
						</span>
						<br />
            <span
							style={{
								fontSize: 12,
								whiteSpace: 'nowrap',
							}}
						>
							Krishadawut Olde Monnikhof
						</span>
						<br />
						<span
							style={{
								fontSize: 12,
							}}
						>
							15:35
						</span>
						<br />
            <span
							style={{
								fontSize: 12,
								whiteSpace: 'nowrap',
							}}
						>
							Krishadawut Olde Monnikhof
						</span>
						<br />
						<span
							style={{
								fontSize: 12,
							}}
						>
							15:35
						</span>
						<br />
            <span
							style={{
								fontSize: 12,
								whiteSpace: 'nowrap',
							}}
						>
							Krishadawut Olde Monnikhof
						</span>
						<br />
						<span
							style={{
								fontSize: 12,
							}}
						>
							15:35
						</span>
						<br />
            <span
							style={{
								fontSize: 12,
								whiteSpace: 'nowrap',
							}}
						>
							Krishadawut Olde Monnikhof
						</span>
						<br />
						<span
							style={{
								fontSize: 12,
							}}
						>
							15:35
						</span>
						<br />
					</div>
				</div>
			</div>
			<style jsx>{`
				.messageLeft {
					background-color: ${message.color};
					color: white;
					border-radius: 10px 10px 10px 0;
					padding-top: 10px;
					padding-bottom: 10px;
					padding-left: 20px;
					padding-right: 20px;
					margin-top: 5px;
					margin-right: 10px;
					display: inline-block;
				}
				.dropdown {
					max-height: 150px;
					position: absolute;
					background-color: #f5f5f5;
					margin-left:15px;
					left: 0;
					border-radius: 0 10px 10px 10px;
					box-shadow: 2px 2px 5px rgba(141, 141, 141,0.5);
					opacity: 0.95;
          padding: 10px 10px 10px 10px;
		}
		.dropdown2 {
			max-height: 150px;
			position: absolute;
			background-color: #f5f5f5;
			left: 0;
			border-radius: 0 10px 5px 5px;
			box-shadow: 2px 2px 5px rgba(141, 141, 141,0.5);
			opacity: 0.93;
  padding: 5px 10px 10px 10px;
}
		.scroll{
			overflow-y:scroll;
		}
        .scroll::-webkit-scrollbar {
          width: 14px;
        }
        .scroll::-webkit-scrollbar-thumb {
          color: rgb(141, 141, 141);
          background-clip: content-box;
          border: 4px solid transparent;
          border-radius: 7px;
          box-shadow: inset 0 0 0 10px;
        }
        .scroll::-webkit-scrollbar-button {
          width: 0;
          height: 0;
          display: hidden;
        }
        .scroll::-webkit-scrollbar-corner {
          background-color: transparent;
		}
		.sm {
			font-size: 12px;
			margin-left: 13px;
		}
		.row:hover {
			opacity: 0.5;
		}
			`}</style>
		</div>
	)
}
