import React, { useState, useEffect } from 'react'
import style from '../../styles/chat/chat'
import Avatar from '@material-ui/core/Avatar'
import CancelIcon from './icons/CancelIcon'
import ExitIcon from './icons/ExitIcon'
import AcceptIcon from './icons/AcceptIcon'
import { Divider } from '@material-ui/core'
import api from '../../api'

export default function searchResult(props) {
	return (
		<>
			<div
				className="memberDiv scroll"
				style={{
					display: 'flex',
					position: 'absolute',
					backgroundColor: '#f9f9f9',
					boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.1)',
					width: '100%',
					marginTop: 2,
					borderRadius: 5,
					zIndex:1,
					maxHeight: 140,
					overflowY: 'scroll',
				}}
				onMouseOver={()=>{props.setIgnoreBlur(true); console.log('true')}} 
							onMouseLeave={()=>{props.setIgnoreBlur(false);console.log('false')}}
			>
				{props.searchResult &&
					props.searchResult.users.map((el,i) => {
						return (
							<div key={i} style={{display:'flex', alignItems:'center',width:'100%'}} className='searchItem' onClick={()=>{
								api.get(`/api/chat/selectSearchResultMockup`,{
									params: {
									  userID: el.userID
									}}).then(props.handleSelect(el)).catch(err=>{})
							}} >
								<Avatar
									style={{ width: 30, height: 30, marginLeft: 7, marginRight: -7 }}
									alt={el.userfirstname+" "+el.userlastname}
									src={el.userprofile}
								/>
								<div className="searchResult">
									<p
										style={{
											marginLeft: 14,
											marginBottom: 0,
											marginTop: 7,
											fontSize: 14,
											textOverflow: 'ellipsis',
											overflow: 'hidden',
											whiteSpace: 'nowrap',
										}}
									>
										{el.userfirstname+" "+el.userlastname}
									</p>
									<p
										style={{
											fontSize: 12,
											marginLeft: 14,
											marginBottom: 7,
											marginTop: 0,
											textOverflow: 'ellipsis',
											overflow: 'hidden',
											whiteSpace: 'nowrap',
										}}
									>
										{el.email}
									</p>
								</div>
							</div>
						)
					})}
			</div>
			<style jsx>{style}</style>
		</>
	)
}
