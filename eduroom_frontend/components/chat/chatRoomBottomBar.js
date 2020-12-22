import React, { useState, useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Input from '@material-ui/core/Input'
import SendIcon from './icons/SendIcon'
import InsertEmoticonIcon from './icons/InsertEmoticonIcon'
import api from '../../api'

export default function chatRoomBottomBar(props) {
	const[sticker, setSticker] = useState(null)
	const[result,setResult] = useState(null)
	const[show,setShow] = useState({visibility:'hidden'})
	const enter = (e) => {
		if (e.keyCode === 13) {
			props.sendMessage()
		}
	}
	const sendStickerMessage = async (mes) => {
		if (mes != '' && mes != null) {
			const res = await api.get(`/api/chat/sendStickerMessage`, {
				params: { message: mes, chatroomid: props.chatroomid},
			})
			if (res.data.success == true) {
				props.socket.emit('sendMessage', props.chatroomid)
			}
		}
	}
	const getSticker = async () => {
		const res = await api.get(`/api/coin/stickerOwner`)
		setSticker(res.data)
	}
	const getResultSelect = async (id)=>{
		let get;
		let result = await sticker.some((a) => {if(a.stickerid==id){get=a}})
		setResult(get)
	}
	useEffect(() => {
		getSticker()
	}, [])
	useEffect(()=>{
		if(sticker!=null && sticker.length>0){
			getResultSelect(sticker[0].stickerid)
		}
	},[sticker])
	return (
		<>
			<div className="bottomBar">
				<Avatar
					alt={props.userProfile.firstname + ' ' + props.userProfile.lastname}
					src={props.userProfile.avatar}
					style={{ marginTop: 4, marginRight: 15 }}
				/>
				<Input
					id="input"
					value={props.message}
					onChange={(e) => {
						props.setMessage(e.target.value)
					}}
					onKeyDown={(e) => {
						enter(e)
					}}
					placeholder="Write here..."
					inputProps={{ 'aria-label': 'description' }}
					style={{ width: '50%' }}
					autoComplete="off"
				/>
				<div className="dropdown" onMouseOver={()=>{setShow({})}} onMouseLeave={()=>{setShow({visibility:'hidden'})}}>
					<InsertEmoticonIcon style={{ marginLeft: 15, cursor: 'pointer' }}/>
					<div className="dropdown-content" style={show}>
						<div className="scroll" style={{ height: '100%', width: '80', display: 'inline-block',backgroundColor:'#EBEBEB',marginRight:5}}>
							{sticker!=null&&sticker.length>0 &&
								sticker.map((el,i) => {
									if(show){
										return (
											<div key={i} className="item" style={{ width: 45, height: 45, margin: 0 ,padding:10,cursor: 'pointer'}} onClick={()=>{getResultSelect(el.stickerid)}}>
												<img
													src={el.stickerimg}
													style={{ width: '100%', height: '100%',margin:5}}
												/>
											</div>
										)
									}
								})}
						</div>
						<div className="scroll" style={{ height: '100%', width: 'calc(100% - 65px)', display: 'inline-block' }}>
							{result &&
								result.stickers.map((el,i) => {
									if(show){
										return (
											<div key={i} className="item" style={{ width: 52, height: 52, display: 'inline-block',padding:10,cursor: 'pointer' }} onClick={()=>{sendStickerMessage(el.stickerimg)}}>
												<img
													src={el.stickerimg}
													style={{ width: '100%', height: '100%' }}
												/>
											</div>
										)
									}
								})}
						</div>
					</div>
				</div>
				<SendIcon
					style={{ marginLeft: 15, cursor: 'pointer' }}
					id="button"
					onClick={() => {
						props.sendMessage()
					}}
				/>
			</div>
			<style jsx>{`
				.bottomBar {
					background-color: #ffffff;
					width: calc(100% - 28px);
					border-top: 1px solid #dddddd;
					height: 80px;
					bottom: 0;
					position: absolute;
					display: flex;
					justify-content: center;
					align-items: center;
					z-index: 1;
				}
				.dropdown {
					position: relative;
					display: block;
					padding: 0;
				}
				.dropdown-content {
					position: absolute;
					background-color: #f5f5f5;
					border-radius: 10px 10px 0 10px;
					width: 300px;
					height: 250px;
					box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
					!z-index: 1;
					bottom: 100%;
					margin: 0;
					right: 0;
					margin-right: 5px;
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
				.item:hover{
					opacity:0.5;
				}
			`}</style>
		</>
	)

}
