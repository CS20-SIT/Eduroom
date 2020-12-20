import React, { useState, useEffect } from 'react'
import ReadIcon from './icons/ReadIcon'
import DotDotIcon from './icons/DotDotIcon'
import api from '../../api'

export default function messageRight(props) {
	const [dropReadDownStyle, setReadDropDownStyle] = useState({ visibility: 'hidden' })
	const [dropDownStyle, setDropDownStyle] = useState({ visibility: 'hidden' })
	const [dotDotStyle, setDotDotStyle] = useState({ visibility: 'hidden' })
	const message = props.message
	const unsend = async () =>{
		const res = await api.get(`/api/chat/unsendMessage`,{params:{messageid:message.messageid}})
		props.getChatRoomDetail()
	}
	return (
		<div>
			<div
				style={{ textAlign: 'right', width: '100%' }}
				onMouseOver={() => {
					setDotDotStyle({})
				}}
				onMouseLeave={() => {
					setDotDotStyle({ visibility: 'hidden' })
				}}
			>
				<div
					style={{ position: 'relative', display: 'inline-block',cursor:'pointer' }}
					onMouseOver={() => {
						setDropDownStyle({})
					}}
					onMouseLeave={() => {
						setDropDownStyle({ visibility: 'hidden' })
					}}
				>
					<DotDotIcon style={dotDotStyle} />
					<div className="dropdown2" style={dropDownStyle}>
						<span className="row">
							<span className="sm" style={{ marginRight: 5 }} onClick={unsend}>
								Unsend
							</span>
						</span>
					</div>
				</div>
				<div className="messageRight">
					<span style={{ fontSize: 18 }}>{message.text}</span>
				</div>
				<br />
				<div
					style={{ position: 'relative', display: 'inline-block' }}
					onMouseOver={() => {
						setReadDropDownStyle({})
					}}
					onMouseLeave={() => {
						setReadDropDownStyle({ visibility: 'hidden' })
					}}
				>
					{(() => {
						if (message.reader && message.reader.length>0) {
							return (
								<>
									<ReadIcon style={{ paddingTop: 5, marginRight: 10 }} />
									<div className="dropdown scroll" style={dropReadDownStyle}>
										{message.reader.map((el) => {
											return(
											<span
												style={{
													fontSize: 12,
													whiteSpace: 'nowrap',
												}}
											>
												{el}
												<br />
											</span>
											)
										})}
									</div>
								</>
							)
						}
					})()}
				</div>
				<span style={{ marginRight: 50 }}>{message.sentTime}</span>
			</div>
			<style jsx>{`
				.messageRight {
					background-color: ${message.color};
					color: white;
					border-radius: 10px 10px 0 10px;
					padding-top: 10px;
					padding-bottom: 10px;
					padding-left: 20px;
					padding-right: 20px;
					margin-top: 20px;
					margin-right: 50px;
					margin-left: 10px;
					display: inline-block;
				}
				.dropdown {
					margin-right: 15px;
					max-height: 150px;
					position: absolute;
					background-color: #f5f5f5;
					right: 0;
					border-radius: 10px 0 10px 10px;
					box-shadow: 2px 2px 5px rgba(141, 141, 141, 0.5);
					opacity: 0.95;
					padding: 10px 10px 10px 10px;
				}
				.dropdown2 {
					max-height: 150px;
					position: absolute;
					background-color: #f5f5f5;
					right: 0;
					border-radius: 10px 0 10px 10px;
					box-shadow: 2px 2px 5px rgba(141, 141, 141, 0.5);
					opacity: 0.93;
					padding: 5px 10px 5px 5px;
				}
				.scroll {
					overflow-y: scroll;
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
