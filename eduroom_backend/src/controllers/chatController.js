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
  const userid = '3c93e461-7eab-45fb-b8ce-587b47286f8c'
  const userProfile = await pool.query(`select firstname, lastname, displayname, avatar 
                                        from user_profile 
                                        where userid = '${userid}'`)

    const usp = userProfile.rows
    res.send(usp)
}

const acceptInvitation = async (req, res, next) =>{
  const userid = req.user.id
  const chatroomid = req.chat.chatroomid
  const result = await pool.query(`insert into chat_roommember(chatroomid, userid, nickname, sender_color, receiver_color, hide)
values ($1,$2,null,'#A27CEF','#5B5B5B',false);
delete from invite_invitees
where invitationid = 3 and inviteeid = $2`,[chatroomid], [userid])
res.status(200).json({ success: True})
}


const deleteMessage = async (req, res, next) =>{
  const mesid = req.chat.messageID
  const del = await pool.query(`delete from chat_message where messageid = $1 ` [mesid])
		res.send({ success: true })
}

const hideMessage = async (req, res, next) =>{
  const userid = req.user.id
  const chatroomid = req.chat.chatroomid
  const result = await pool.query(`update chat_roommember set hide = 'True' where userid = $1 and chatroomid = $2`, [userid], [chatroomid])
res.status(200).json({ success: true })
}

// const getColorChatRoom = async (req, res, next) => {
// 	const color = await pool.query(`select color
//   from chat`)

// 	res.send(color)
// }

const getChatRoomDetail = async (req, res, next) =>{
  const messageQuery = await pool.query 
  (`select * from (select cm.chatroomid, sendtime as sendTime,cm.userid as senderID, concat(up.firstname,concat(' ', up.lastname)) as senderName, up.avatar as senderProfilePic ,
  Array(select concat( (case when crm.nickname is not null then crm.nickname else concat(firstname,concat(' ', lastname)) end) ,concat(',',cms.readtime::text))
from chat_message_readtime cms , user_profile as up, chat_roommember crm where cms.messageid = cm.messageid and cms.userid = up.userid and cms.userid = crm.userid and cm.chatroomid = crm.chatroomid) as reader, message, issticker as sticker, false as system
from chat_message cm, user_profile up where cm.userid = up.userid
union select chatroomid, sendtime,null,null,null,null,null message, false, true from chat_systemmessage) as chat
where chatroomid = '3'
order by sendtime asc ;`)
  const crd = messageQuery.rows
  const message = {message: crd}
  res.send(message);
}

module.exports = { getChatlist, 
  getGroupPicture, 
  inviteCreate, 
  deleteChatRoom,
  getUserProfile,
getChatRoomDetail}
