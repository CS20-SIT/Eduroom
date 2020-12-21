const pool = require('../database/db')

const getChatlist = async (req, res, next) => {
	const chatlist = await pool.query(
		`select chat.chatroomid,
    case when chat.roomname is not null or cr.chatroomid in (select chatroomid from chat_group)
    then chat.roomname
    else (select concat(firstname,concat(' ', lastname)) as roomname from user_profile
    join chat_roommember c on user_profile.userid = c.userid
    where c.chatroomid = chat.chatroomid and c.userid <> '236ce084-b742-4435-93c7-2e0d1eff1204' and cr.chatroomid not in (select chatroomid from chat_group))
    end
    , cm2.message, cm.sendtime from chat
    left join (select chatroomid, max(sendtime) sendtime from chat_message group by chatroomid) cm on chat.chatroomid = cm.chatroomid
    left join (select chatroomid, message, sendtime from chat_message ) cm2 on cm.chatroomid = cm2.chatroomid and cm.sendtime = cm2.sendtime
    left join chat_roommember cr on chat.chatroomid = cr.chatroomid
    where userid = '236ce084-b742-4435-93c7-2e0d1eff1204'
    order by sendtime desc;`
	)

	const list = chatlist.rows
	res.send(list)
}
const getGroupPicture = async (req, res, next) => {
	let chatroomid = 3
	const messagelist = await pool.query(`select avatar
  from user_profile, chat_roommember
  where user_profile.userid = chat_roommember.userid and
        chatroomid = '${chatroomid}'
  `)

	const mes = messagelist.rows
	res.send(mes)
}

const inviteCreate = async (req, res, next) => {
	await pool.query(`insert into chat_invitation(invitationid, date, chatroomid, invitor_id)
 values (2,current_date,5,d8bd910c-16fa-4bcf-acbf-a12b1a8322fb);
 insert into invite_invitees(invitationid, inviteeid)
 values (5,236ce084-b742-4435-93c7-2e0d1eff1204)`)

	res.status(200).json({ success: true })
}

const deleteChatRoom = async (req, res, next) => {
	await pool.query(`delete from invite_invitees
  where invitationid = some(select chat_invitation.invitationid from chat_invitation where chatroomid = 2);
  delete from chat_invitation where chatroomid = 2;
  delete from chat_roommember
  where chatroomid = 2 and userid in(select userid from chat_roommember where chatroomid = 2);
  delete from chat
  where chatroomid = 2;`)

	res.status(200).json({ success: true })
}

const getUserProfile = async (req, res, next) => {
  const userid = 'd8bd910c-16fa-4bcf-acbf-a12b1a8322fb';
  const userProfile = await pool.query(`select firstname, lastname, displayname, avatar 
                                        from user_profile 
                                        where userid = '${userid}'`)

	const usp = userProfile.rows
	res.send(usp)
}


// const getColorChatRoom = async (req, res, next) => {
// 	const color = await pool.query(`select color
//   from chat`)

// 	res.send(color)
// }

const getChatroomDetail = async (req, res, next) => {
	let result = {}
	const chatroomid = 3
	const userid = '6df15ee6-fa2f-4190-9cf5-a7f593374e68'
	const detail = await pool.query(
		`select chat.chatroomid, roomname as chatRoomName
    from chat, chat_roommember crm
    where chat.chatroomid = crm.chatroomid and chat.chatroomid = ${chatroomid};`
	)

	const det = detail.rows[0]
  result = det
  
  const chatRoomProfilePic = await pool.query
  (`select case when exists(select picture
    from chat
    where chatroomid = ${chatroomid} and picture is not null) then c1.picture else avatar end as chatRoomProfilePicture
    from chat c1, user_profile up
    where c1.chatroomid = ${chatroomid} and up.userid = '${userid}'`)

const chatRoomProfile = await chatRoomProfilePic.rows[0]
result = {...result, chatRoomProfile}

	const color = await pool.query(
		`select sender_color as sendColor, receiver_color as recieveColor
  from chat_roommember crm
  where crm.chatroomid = ${chatroomid} and userid = '${userid}';`
	)

	const themeColor = await color.rows[0]
	result = { ...result, themeColor }

	const member = await pool.query(
		`select userid
  from chat_roommember
  where chatroomid = ${chatroomid};`
	)


  const members = await member.rows
  let membersID = []
  for(i = 0; i < members.length; i++){
    membersID[i] = members[i].userid 
  }
	result = { ...result, membersID }

	const messageQuery = await pool.query(
		`select * from (select cm.chatroomid, sendtime as sendTime,cm.userid as senderID, concat(up.firstname,concat(' ', up.lastname)) as senderName, up.avatar as senderProfilePic ,
  Array(select concat( (case when crm.nickname is not null then crm.nickname else concat(firstname,concat(' ', lastname)) end) ,concat(',',cms.readtime::text))
from chat_message_readtime cms , user_profile as up, chat_roommember crm where cms.messageid = cm.messageid and cms.userid = up.userid and cms.userid = crm.userid and cm.chatroomid = crm.chatroomid) as reader, message, issticker as sticker, false as system
from chat_message cm, user_profile up where cm.userid = up.userid
union select chatroomid, sendtime,null,null,null,null,null message, false, true from chat_systemmessage) as chat
where chatroomid = ${chatroomid}
order by sendtime asc ;`
	)

	const message = await messageQuery.rows
	result = { ...result, message }

	res.send(result)
}

const getSearchResult = async (req, res, next) => {
	const keyword = 'S'
	const result = await pool.query(`select up.userid, firstname as userFirstname, lastname as userLastname, universityemail as email,avatar as userProfile
  from user_profile up, user_student_verification uv
  where up.userid = uv.userid and (lower(firstname) like lower('${keyword}%') or lower(lastname) like lower('${keyword}%') or lower(universityemail) like lower('${keyword}%'))
  limit 50;`)

	const gsr = result.rows
	const users = { users: gsr }
	res.send(users)
}

const getInvitationList = async (req, res, next) => {
	const userid = '95ee6df6-681a-4eee-bc25-626cac3f63f3'
	const inviteList = await pool.query(`select ci.invitationid as invitationID, chat.chatroomid as chatRoomID, roomname as chatRoomName, up.firstname as invitor,
  avatar as profilePicture
from chat_invitation ci, chat, user_profile up, invite_invitees inv
where ci.invitationid = inv.invitationid and chat.chatroomid = ci.chatroomid and up.userid = ci.invitor_id and
 inv.inviteeid = '${userid}'`)

	const gil = inviteList.rows
	const invitations = { invitations: gil }
	res.send(invitations)
}

const getChatRoomProfile = async (req, res, next) =>{
  const chatroomid = 3
	const userid = '6df15ee6-fa2f-4190-9cf5-a7f593374e68'
  let result = {chatroomid:chatroomid}
  const chatRoomProfilePic = await pool.query
  (`select case when exists(select picture
    from chat
    where chatroomid = ${chatroomid} and picture is not null) then c1.picture else avatar end as chatRoomProfilePicture
    from chat c1, user_profile up
    where c1.chatroomid = ${chatroomid} and up.userid = '${userid}'`)

const chatRoomProfile = await chatRoomProfilePic.rows[0]
result = {...result, chatRoomProfile}
res.send(result)
}

const sendmessage = async (req, res, next) =>{
	const message = 'Keyword'
	const chatroomid = 3
	const userid = 'd8bd910c-16fa-4bcf-acbf-a12b1a8322fb'
	const sendmes = await pool.query(
		`insert into chat_message(message, sendtime, chatroomid, userid, issticker)
		values ('${message}',current_timestamp,${chatroomid},'${userid}', false)`
	)
	res.status(200).json({ success: true })
}

const  changeThemeColor = async (req, res, next) => {
	const chatroomid = 3;
	const userid = '236ce084-b742-4435-93c7-2e0d1eff1204'
	const senderColor = '#EB7DB1'
	const recieveColor = '#5B5B5B'

	const themecolor = await pool.query(
		`update chat_roommember
			set sender_color = '${senderColor}',
			receiver_color = '${recieveColor}'
		where chatroomid = ${chatroomid} and userid = '${userid}'`
	)
	res.status(200).json({ success: true })
}

const changeChatRoomProfilePicture = async (req, res, next) =>{
	const pic = '/.updates.png'
	const chatroomid = 4

	const update = await pool.query(
		`update chat
		set picture = '${pic}'
		where chatroomid = ${chatroomid}`
	)
	const systemmessage = await pool.query(
		`insert into chat_systemmessage (chatroomid,sendtime,message)
		values(${chatroomid},current_timestamp,'Chat room profile has been change')`
	)
		res.status(200).json({ success: true })
}

const changeChatRoomName = async (req, res, next) => {
	const roomname = 'TestLast'
	const chatroomid = 4;

	if(roomname == null || roomname == ""){
		res.status(200).json({ success : false})
	} else {

	const update = await pool.query(
	`update chat
	set roomname = '${roomname}'
	where chatroomid = ${chatroomid};`
	)

	const systemmessage = await pool.query(
		`insert into chat_systemmessage (chatroomid,sendtime,message)
		values(${chatroomid},current_timestamp,'Chat room name has been change to ${roomname}')`
	)
	res.status(200).json({ success: true })
	}
}

// const readMessage = async (req, res, next) => {
// 	const chatroomid = 3
// 	const userid = '236ce084-b742-4435-93c7-2e0d1eff1204'
// 	const checkRead = await pool.query(`select messageid mid from chat_message where chatroomid = ${​​​​​​​chatroomid}​​​​​​​ and messageid not in(select messageid
// 	  from chat_message_readtime)`)
// 	while(checkRead != null){​​​​​​​
// 	  const addRead = await pool.query(`insert into chat_message_readtime (messageid, userid, readtime, hide)
// 	  values (${​​​​​​​checkRead.rows[0].mid}​​​​​​​,'${​​​​​​​userid}​​​​​​​',current_timestamp,false)`)
// 	}​​​​​​​
// 	const checkUserRead = await pool.query(`select messageid as mid from chat_message cm where  chatroomid = ${​​​​​​​chatroomid}​​​​​​​ and cm.messageid not in (
// 	  select cmr.messageid from chat_message_readtime cmr where cm.userid='${​​​​​​​userid}​​​​​​​' and cmr.messageid in(
// 		  select cm2.messageid mid from chat_message cm2 where chatroomid = ${​​​​​​​chatroomid}​​​​​​​))`)
// 	while(checkUserRead.rows[0].mid != null){​​​​​​​
// 	  const addRead = await pool.query(`insert into chat_message_readtime (messageid, userid, readtime, hide)
// 	  values (${​​​​​​​checkUserRead.rows[0].mid}​​​​​​​,'${​​​​​​​userid}​​​​​​​',current_timestamp,false)`)
// 	}​​​​​​​
// 	res.status(200).json({​​​​​​​ success: true }​​​​​​​)
//   }​​​​​​​

const readMessage = async (req, res, next) =>{
	const chatroomid = 3
	const userid = '236ce084-b742-4435-93c7-2e0d1eff1204'
	const checkRead = await pool.query(`select cm.messageid from chat_message cm where cm.messageid
	not in (select messageid from chat_message_readtime cmrt where cmrt.userid = '${userid}')
	and cm.chatroomid = ${chatroomid}`)

		for(i = 0; i < checkRead.rows.length; i++){
			const addRead = await pool.query(`insert into chat_message_readtime (messageid, userid, readtime, hide)
			values(${checkRead.rows[i].messageid}, '${userid}', current_timestamp, false)`)
		}

	  res.status(200).json({ success: true })
}

module.exports = { getChatlist, 
  getGroupPicture, 
  inviteCreate, 
  deleteChatRoom,
  getUserProfile,
  readMessage}
