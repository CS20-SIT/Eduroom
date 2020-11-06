import Edqiz from '../../../components/edqiz/studentPlay';
import React, { Fragment, useState } from 'react';
import GeneralNoSide from '../../../components/template/generalnoside';

const Content = () => {
  return (
    <Fragment>
      <GeneralNoSide>
        <Edqiz />
      </GeneralNoSide>
    </Fragment>
  );
};
export default Content;
///////////////////////////////////////////////
// import React, {useEffect,useState} from 'react'
// import Router from 'next/router'
// import Nav from '../../components/nav'
// import BlackScreen from '../../components/blackscreen'
// import ControlBar from '../../components/control-bar'
// import axios from '../../axios/axios'
// import ChatRoom from '../../components/chat/chatroom'
// import socketIOClient from 'socket.io-client'
// let socket
// function Chat({data}) {
//   useEffect(()=>{
//     if(data.err){
//       Router.push('/')
//     }
//   })
//   const [message,setMessage] = useState(data.room?data.room.messages:[])
//   const [roomdata,setRoomdata] = useState(data.room)
//   const [notify,setNotify] = useState(0)
//   const [hints,setHints] = useState(data.hint);

//   //Implement Socket
//   useEffect(() => {
//     var x = document.getElementById('chat-room')
//     x.scrollTop = x.scrollHeight
//     socket= socketIOClient(process.env.NEXT_PUBLIC_SOCKET_URL)
//     socket.emit('joinRoom',{room:data.roomID,user:data._id})
//     socket.on('message', () => {
//         axios.patch('/updateRoomDetail',{roomID:data.roomID}).then(res=>{
//           setRoomdata(res.data)
//           setMessage(res.data.messages)
//           var x= document.getElementById('chat-room')
//           x.scrollTop = x.scrollHeight
//         }).catch(err=>{
//             console.log(err)
//         })
//     })
//     socket.on('notify', (noti) => {
//       let temp1 = [... data.rooms]
//       temp1.map(room=> {
//         if(room.roomID === noti.roomID && noti.senderID != data._id){
//             if(noti.roomID !== data.roomID){
//               setNotify(notify=> notify+1)
//             }
//         }
//       })
//     })
//     socket.on('update-hint',(updated)=>{
//       if(data.student_id === updated.reciever){
//         setHints(updated.hint.reverse())
//       }
//     })
//   }, []);
//   useEffect(()=>{
//     return ()=>{socket.emit('disconnect')}
//   },[]);
//   const onSend = async (message)=>{
//     if(message.length>0){
//       let time = new Date().getTime()
//       await axios.post('/message',{message,roomID:data.roomID,timestamp:time}).then(
//         res=> {
//           setRoomdata(res.data)
//           setMessage(res.data.messages)
//           let sender = data.year != '1' && data.room.type !== 'General' ? `พี่ปี `+ data.year: data.display_name
//           const tempData = {sender,senderID:data._id,message,room:data.roomID,time}
//           socket.emit('chatMessage', tempData)
//         }
//       ).catch(err=>{
//         console.log(err)
//       })
//     }
//   }
//   const addHint = (newhint)=>{
//     socket.emit('addHint',newhint)
//   }
//   const goTo = async (el)=>{
//     await socket.emit('forceDisconnect')
//     await Router.push(el.href)
//   }
//   return (
//     <div className="container">
//       <BlackScreen />
//       <div className="screen">
//       <Nav year = {data.year} hint={hints?hints:[]} onAdd={addHint}/>
//       <div className="content">
//         <ChatRoom data={roomdata} me={data._id} roomID={data.roomID} messages={message} onSend={onSend}/>
//       </div>
//       <ControlBar notify={notify} onGoto={goTo}/>
//       </div>
//       <style jsx>{
//           `
//           @media only screen and (max-width:480px){
//           .container {
//               margin: 0%
//           }
//           }
//           @media only screen and (max-width:1024px) and (min-width:481px){
//               .container {
//                 margin:0% 25%;
//               }
//           }
//           @media only screen and (min-width: 1025px) {
//               .container {
//                 margin:0% 35%;
//               }
//           }
//           .screen {
//             height:100% !important;
//           }
//           .container {
//             background:white;
//             height:100vh;
//           }
//           .content {
//             height:82vh !important;
//             text-align:center;
//           }
//           `
//         }</style>
//     </div>
//   )
// }
// export async function getServerSideProps(ctx) {
//   try{
//     if(ctx.req.headers.cookie){
//       const roomID = ctx.query.room
//       const res = await axios.get('/profile',{headers: { cookie: ctx.req.headers.cookie }})
//       const data1 = await res.data
//       const res3 = await axios.get('/hint',{headers: { cookie: ctx.req.headers.cookie}})
//       const hint = await res3.data
//       const res2 = await axios.get(`/roomDetail?roomID=${roomID}`,{headers: { cookie: ctx.req.headers.cookie}})
//       const data2 = await res2.data
//       const res4 = await axios.get('/rooms',{headers: { cookie: ctx.req.headers.cookie}})
//       const rooms = await res4.data
//       const res5 = await axios.get('/notify',{headers: { cookie: ctx.req.headers.cookie}})
//       const notify = await res5.data.notify
//       return { props: { data:{...data1,hint:hint.reverse(),room:data2,roomID,rooms,notify} }}
//     }
//     else{
//       return { props: { data: {err:true}}}
//     }
//   }
//   catch(err){
//     return {props: {data:{err:true}}}
//   }

// }

// export default Chat;
