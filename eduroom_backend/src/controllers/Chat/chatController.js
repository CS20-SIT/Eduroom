const pool = require('../../database/db')
const useridMock = '236ce084-b742-4435-93c7-2e0d1eff1204'
module.exports={
  getUserProfile : async (req, res, next) => {
    const userid = req.user.id
    const userProfile = await pool.query(`select userid,firstname, lastname, displayname, avatar 
                                          from user_profile 
                                          where userid = '${userid}'`)
  
    const usp = userProfile.rows[0]
    res.send(usp)
  },
  getUserProfileFromID : async (req, res, next) => {
    const userid = req.query.userid
    const userProfile = await pool.query(`select userid,firstname, lastname, displayname, avatar 
                                          from user_profile 
                                          where userid = '${userid}'`)
  
    const usp = userProfile.rows[0]
    res.send(usp)
  },  
  getChatlist : async (req, res, next) => {
    const userid = req.user.id
    const chatList = await pool.query(`select chat.chatroomid,
    case when chat.roomname is not null or cr.chatroomid in (select chatroomid from chat_group)
        then chat.roomname
        else (select concat(firstname,concat(' ', lastname)) from user_profile
            join chat_roommember c on user_profile.userid = c.userid
            where  c.chatroomid = chat.chatroomid and c.userid <> '${userid}' and cr.chatroomid not in (select chatroomid from chat_group))
            end as roomname
        ,cm2.userid as sender, coalesce(cm2.message, cs.message) message, cm.sendtime, hide from chat
left join chat_roommember cr on chat.chatroomid = cr.chatroomid
left join (select chatroomid, sendtime, senderX  from (select chatroomid, max(sendtime) sendtime, 'User' as senderX  from chat_message group by chatroomid
        union select chatroomid, max(sendtime) sendtime,'System' as senderX from chat_systemmessage group by chatroomid) cym
where sendtime = (select max(cym2.sendtime) from (select chatroomid, max(sendtime) sendtime, 'User' as senderX  from chat_message group by chatroomid
        union select chatroomid, max(sendtime) sendtime,'System' as senderX from chat_systemmessage group by chatroomid) cym2 group by cym2.chatroomid
        having cym.chatroomid = cym2.chatroomid )) cm on chat.chatroomid = cm.chatroomid
left join chat_message cm2 on cm.chatroomid = cm2.chatroomid and cm.sendtime = cm2.sendtime
left join chat_systemmessage cs on chat.chatroomid = cs.chatroomid and cm.senderX = 'System' and cs.sendtime = cm.sendtime
where cr.userid = '${userid}'
order by hide, sendtime desc;`)
    res.send(chatList.rows)
  },
  getChatroomDetail : async (req, res, next) => {
    let result = {}
    const chatroomid = req.query.chatroomid
    const userid = req.user.id
    const getUserAvatar = await pool.query(`select userid from chat_roommember where chatroomid = ${chatroomid} and userid <> '${userid}'`)
    const detail = await pool.query(
      `select chat.chatroomid, rn.roomname as chatRoomName
      from chat, chat_roommember crm, (select chat.chatroomid,
        case when chat.roomname is not null or cr.chatroomid in (select chatroomid from chat_group)
        then chat.roomname
        else (select concat(firstname,concat(' ', lastname)) as roomname from user_profile
        join chat_roommember c on user_profile.userid = c.userid
        where c.chatroomid = chat.chatroomid and c.userid <> '${userid}' and cr.chatroomid not in (select chatroomid from chat_group))
        end
        , cm2.message, cm.sendtime from chat
        left join (select chatroomid, max(sendtime) sendtime from chat_message group by chatroomid) cm on chat.chatroomid = cm.chatroomid
        left join (select chatroomid, message, sendtime from chat_message ) cm2 on cm.chatroomid = cm2.chatroomid and cm.sendtime = cm2.sendtime
        left join chat_roommember cr on chat.chatroomid = cr.chatroomid
        where userid = '${userid}' and chat.chatroomid = ${chatroomid}
        order by sendtime desc) as rn
      where chat.chatroomid = crm.chatroomid and chat.chatroomid = ${chatroomid} ;`
    )
    const det = detail.rows[0]
    result = det
    if(getUserAvatar.rows[0]){
      const avataruserid = getUserAvatar.rows[0].userid
      const chatRoomProfilePic = await pool.query
      (`select case when exists(select picture
        from chat
        where chatroomid = ${chatroomid} and picture is not null) then c1.picture else avatar end as chatRoomProfilePicture
        from chat c1, user_profile up
        where c1.chatroomid = ${chatroomid} and up.userid = '${avataruserid}'`)
        const chatRoomProfile = await chatRoomProfilePic.rows[0].chatroomprofilepicture
        result = {...result, chatRoomProfile}
    }else{
      const chatRoomProfilePic = await pool.query
    (`select case when exists(select picture
      from chat
      where chatroomid = ${chatroomid} and picture is not null) then c1.picture else '' end as chatRoomProfilePicture
      from chat c1 where c1.chatroomid = ${chatroomid}`)
      const chatRoomProfile = await chatRoomProfilePic.rows[0].chatroomprofilepicture
    result = {...result, chatRoomProfile}
    }
  const checkChatGroup = await pool.query(
    `select case when exists(select * from chat_group where chatroomid = ${chatroomid}) then true else false end as isGroup;`
  )
  result = {...result,isgroup:checkChatGroup.rows[0].isgroup}
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
      `select * from (select cm.chatroomid,cm.messageid, sendtime as sendTime,cm.userid as senderID, concat(up.firstname,concat(' ', up.lastname)) as senderName, up.avatar as senderProfilePic ,
    Array(select concat( (case when crm.nickname is not null then crm.nickname else concat(firstname,concat(' ', lastname)) end) ,concat(' at ',to_char(cms.readtime, 'DD Mon HH12:MI:SS')))
  from chat_message_readtime cms , user_profile as up, chat_roommember crm where cms.messageid = cm.messageid and cms.userid = up.userid and cms.userid = crm.userid and cm.chatroomid = crm.chatroomid) as reader, message, issticker as sticker, false as system
  from chat_message cm, user_profile up where cm.userid = up.userid
  union select chatroomid,null, sendtime,null,null,null,null, message, false, true from chat_systemmessage) as chat
  where chatroomid = ${chatroomid}
  order by sendtime asc ;`
    )
    const message = await messageQuery.rows
    result = { ...result, message }
    res.send(result)
  },
  getSearchResult : async (req, res, next) => {
    const keyword = req.query.keyword
    const result = await pool.query(`select up.userid, firstname as userFirstname, lastname as userLastname,avatar as userProfile
    from user_profile up
    where  (lower(firstname) like lower('${keyword}%') or lower(lastname) like lower('${keyword}%') or concat(concat(lower(firstname),' '),lower(lastname)) like lower('${keyword}%') )
    limit 15;`)
    const gsr = result.rows
    const users = { users: gsr }
    res.send(users)
  },
  getInvitationList : async (req, res, next) => {
    const userid = req.user.id
    const inviteList = await pool.query(`select ci.invitationid as invitationID, chat.chatroomid as chatRoomID, roomname as chatRoomName, up.firstname as invitor,
    avatar as profilePicture
  from chat_invitation ci, chat, user_profile up, invite_invitees inv
  where ci.invitationid = inv.invitationid and chat.chatroomid = ci.chatroomid and up.userid = ci.invitor_id and
   inv.inviteeid = '${userid}'`)
    const gil = inviteList.rows
    const invitations = { invitations: gil }
    res.send(invitations)
  },
  getChatRoomProfile : async (req, res, next) =>{
    const chatroomid = req.query.chatroomid
    const userid = req.user.id
    let result = {chatroomid:chatroomid}
    const getUserAvatar = await pool.query(`select userid from chat_roommember where chatroomid = ${chatroomid} and userid <> '${userid}'`)
    if(getUserAvatar.rows[0]){
      const avataruserid = getUserAvatar.rows[0].userid
      const chatRoomProfilePic = await pool.query
    (`select case when exists(select picture
      from chat
      where chatroomid = ${chatroomid} and picture is not null) then c1.picture else avatar end as chatRoomProfilePicture
      from chat c1, user_profile up
      where c1.chatroomid = ${chatroomid} and up.userid = '${avataruserid}'`)
    result = {...result, chatroomprofilepicture: chatRoomProfilePic.rows[0].chatroomprofilepicture}
    }else{
      const chatRoomProfilePic = await pool.query
    (`select case when exists(select picture
      from chat
      where chatroomid = ${chatroomid} and picture is not null) then c1.picture else '' end as chatRoomProfilePicture
      from chat c1 where c1.chatroomid = ${chatroomid}`)
    result = {...result, chatroomprofilepicture: chatRoomProfilePic.rows[0].chatroomprofilepicture}
    }
    res.send(result)
  },
  selectSearchResult : async (req,res,next)=>{
    const userid1 = req.user.id
    const userid2 = req.query.member
    const checkExist = await pool.query(`select  (case when not exists(select chat.chatroomid chatroomid, crm1.userid u1,crm2.userid u2
      from chat_roommember crm1,chat_roommember crm2,chat
      where chat.chatroomid = crm1.chatroomid and chat.chatroomid = crm2.chatroomid
      and crm1.userid = '${userid1}'
      and crm2.userid ='${userid2}'
      and chat.chatroomid not in(select cg.chatroomid
      from chat_group cg
      where cg.chatroomid = chat.chatroomid )) then false else true end) as exist;`)
    if(checkExist.rows[0].exist==false){
      const createChatRoom = await pool.query(`insert into chat(picture,roomname,date)
      values (null,null,current_date)
      returning chatroomid;`)
      const chatroomid = createChatRoom.rows[0].chatroomid
      const addMembers = await pool.query(`insert into chat_roommember(chatroomid, userid, nickname, sender_color, receiver_color, hide)
      values (${chatroomid},'${userid1}',null,'#EB7DB1','#5B5B5B',false);
      insert into chat_roommember(chatroomid, userid, nickname, sender_color, receiver_color, hide)
      values (${chatroomid},'${userid2}',null,'#EB7DB1','#5B5B5B',false);
      `)
      const setSystemMessage = await pool.query(`insert into chat_systemmessage (chatroomid, sendtime, message) 
      values (${chatroomid},current_timestamp,'You Can Now Start the Conversation')`)
      res.status(200).json({ success: true })
    }else{
      const returnExistChatRoomID = await pool.query(`select chat.chatroomid chatroomid, crm1.userid u1,crm2.userid u2
      from chat_roommember crm1,chat_roommember crm2,chat
      where chat.chatroomid = crm1.chatroomid and chat.chatroomid = crm2.chatroomid
      and crm1.userid = '${userid1}'
      and crm2.userid ='${userid2}'
      and chat.chatroomid not in(select cg.chatroomid
      from chat_group cg
      where cg.chatroomid = chat.chatroomid )`)
      res.send(returnExistChatRoomID.rows[0])
    }
  },
  acceptInvitation : async (req,res,next)=>{
    const invitationID = req.query.invitationid
    const userID = req.user.id
    const getChatroomid = await pool.query(`select chatroomid from chat_invitation where invitationid = ${invitationID}`)
    const userProfile = await pool.query(`select userid,firstname, lastname, displayname, avatar 
                                          from user_profile 
                                          where userid = '${userID}'`)
    const invite = await pool.query(`insert into chat_roommember(chatroomid, userid, nickname, sender_color, receiver_color, hide)
    values (${getChatroomid.rows[0].chatroomid},'${userID}',null,'#EB7DB1','#5B5B5B',false);
    delete from invite_invitees where invitationid = ${invitationID} and inviteeid = '${userID}';
    insert into chat_systemmessage (chatroomid,sendtime,message)
    values(${getChatroomid.rows[0].chatroomid},current_timestamp,'${userProfile.rows[0].firstname+" "+userProfile.rows[0].lastname} Have Joined the Chat Room')
    `)
    res.status(200).json({ success: true })
  },
  declineInvitation : async (req,res,next)=>{
    const invitationID = req.query.invitationid
    const userID = req.user.id

    const invite = await pool.query(`delete from invite_invitees where invitationid = ${invitationID} and inviteeid = '${userID}'`)
    res.status(200).json({ success: true })
  },
  hideChatroom : async (req,res,next)=>{
    const chatroomid = req.query.chatroomid
    const userID = req.user.id
    const hide = await pool.query(`update chat_roommember
    set  hide = true where chatroomid = ${chatroomid} and userid = '${userID}'`)
    res.status(200).json({ success: true })
  },
  leaveChatRoom : async (req,res,next)=>{
    const chatroomid = req.query.chatroomid
    const userID = req.user.id
    const username = await pool.query(`select concat(case when crm.nickname is not null then crm.nickname else concat(up.firstname, concat(' ',up.lastname)) end) as name
    from chat_roommember crm, user_profile up
    where crm.userid = up.userid and crm.userid = '${userID}' and chatroomid = ${chatroomid}`)
    const leave = await pool.query(`delete from chat_roommember
    where userid='${userID}' and chatroomid = ${chatroomid};`)
    const checklast = await pool.query(`select case when exists (select * from chat_roommember where chatroomid = ${chatroomid} and userid <> '${userID}') then CAST(0 AS BIT) else CAST(1 AS BIT) end as checklast;`)
    if(checklast.rows[0].checklast==false){
      const setSystemMessage = await pool.query(`insert into chat_systemmessage(chatroomid,sendtime,message) values(${chatroomid},current_date,'${(username.rows[0]).name} Have Left the Group')`)
      res.status(200).json({ success: true })
    }
  },
  deleteChatRoom : async (req,res,next)=>{
    const chatroomid = req.query.chatroomid
    const deleteChat = await pool.query(`delete from chat_message_readtime
    where messageid = some(select chat_message.messageid from chat_message where chatroomid = ${chatroomid});
    delete from chat_message where chatroomid= some(select chatroomid from chat_message where chatroomid = ${chatroomid});
    delete from chat_systemmessage where chatroomid = some(select  chatroomid from chat_systemmessage where chatroomid = ${chatroomid});
    delete from chat_group where chatroomid = some(select chatroomid from chat_group where chatroomid = ${chatroomid});
    delete from invite_invitees where invitationid = some(select chat_invitation.invitationid from chat_invitation where chatroomid = ${chatroomid});
    delete from chat_invitation where chatroomid = some(select chatroomid from chat_invitation where chatroomid = ${chatroomid});
    delete from chat_roommember where chatroomid = some(select chatroomid from chat_roommember where chatroomid = ${chatroomid}) ;
    delete from chat where chatroomid = some (select chatroomid from chat where chatroomid = ${chatroomid});`)
    res.status(200).json({ success: true })
  },
  sendMessage : async (req, res, next) =>{
    const message = req.query.message
    const chatroomid = req.query.chatroomid
    const userid = req.user.id
    const sendmes = await pool.query(
      `insert into chat_message(message, sendtime, chatroomid, userid, issticker)
      values ('${message}',current_timestamp,${chatroomid},'${userid}', false)`
    )
    res.status(200).json({ success: true })
  },
  sendStickerMessage : async (req, res, next) =>{
    const message = req.query.message
    const chatroomid = req.query.chatroomid
    const userid = req.user.id
    const sendmes = await pool.query(
      `insert into chat_message(message, sendtime, chatroomid, userid, issticker)
      values ('${message}',current_timestamp,${chatroomid},'${userid}', true)`
    )
    res.status(200).json({ success: true })
  },

  unsendMessage : async (req, res, next) =>{
    const messageID = req.query.messageid
    const deleteReadtime = await pool.query(`delete from chat_message_readtime where messageid = ${messageID}`)
    const unsendMessage = await pool.query(`delete from chat_message where messageid = ${messageID}`)
    res.status(200).json({ success: true })
  },

  changeThemeColor : async (req, res, next) => {
    const chatroomid = req.query.chatroomid
    const userid = req.user.id
    const sendColor = req.query.sendcolor
    const recieveColor = req.query.recievecolor
    const themecolor = await pool.query(
      `update chat_roommember
        set sender_color = '${sendColor}',
        receiver_color = '${recieveColor}'
      where chatroomid = ${chatroomid} and userid = '${userid}'`
    )
    res.status(200).json({ success: true })
  },
  changeChatRoomName : async (req, res, next) => {
    const roomname = req.query.roomname
    const chatroomid = req.query.chatroomid
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
      values(${chatroomid},current_timestamp,'Chat Room Name Have Been Change to ${roomname}')`
    )
    res.status(200).json({ success: true })
    }
  },
  changeChatRoomProfilePicture : async (req, res, next) =>{
    const pic = '/.updates.png'
    const chatroomid = req.query.chatroomid
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
  },
  createGroupChat : async (req,res,next) =>{
    const userid = req.user.id
    const picture = req.query.profilepic
    const chatRoomName = req.query.chatroomname
    const members = req.query.members
    const createChat = await pool.query(`insert into chat (chatroomid, picture, roomname, date)
    values (default,'${picture}','${chatRoomName}',current_date) returning chatroomid as cid;`)
    const setChatGroup = await pool.query(`insert into chat_group (chatroomid)
    values (${createChat.rows[0].cid})`)
    const createInvitation = await pool.query(`insert into chat_invitation (invitationid, date, chatroomid, invitor_id)
    values (default,current_date,${createChat.rows[0].cid},'${userid}') returning invitationid as ivid`)
    const adduser = await pool.query(`insert into chat_roommember(chatroomid, userid, nickname, sender_color, receiver_color, hide)
    values (${createChat.rows[0].cid},'${userid}',null,'#EB7DB1','#5B5B5B',false)`)
    for(i = 0;i<members.length;i++){
      const member = JSON.parse(members[i])
      const invite = await pool.query(`insert into invite_invitees (invitationid, inviteeid)
      values (${createInvitation.rows[0].ivid},'${member.userid}');`)
    }
    const sysMess = await pool.query(`insert into chat_systemmessage (chatroomid, sendtime, message)
    values (${createChat.rows[0].cid},current_timestamp,'You Can Now Start the Conversation')`)
    res.status(200).json({ success: true })
  },
  readMessage : async (req, res, next) =>{
    const chatroomid = req.query.chatroomid
    const userid = req.user.id
    const checkRead = await pool.query(`select cm.messageid from chat_message cm where cm.messageid
        not in (select messageid from chat_message_readtime cmrt where cmrt.userid = '${userid}')
        and cm.chatroomid = ${chatroomid}`)
    for(i = 0; i < checkRead.rows.length; i++){
    const addRead = await pool.query(`insert into chat_message_readtime (messageid, userid, readtime, hide)
                values(${checkRead.rows[i].messageid}, '${userid}', current_timestamp, false)`)
            }
    res.status(200).json({ success:true })
  },
  changeChatRoomProfilePicture : async (req, res, next) =>{
    const pic = req.query.profilepic
    const chatroomid = req.query.chatroomid
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
  },
  uploadPic : async (req,res,nest) => {
    const file = req.files[0].linkUrl
    res.status(200).json({path:file})
  },
  addChatRoomMember : async (req,res,next)=>{
    const chatroomid = req.query.chatroomid
    const invitorID = req.user.id
    const inviteeID = req.query.member
    const checkInvitor = await pool.query(`select  (case when (select chatroomid from chat where chatroomid = ${chatroomid} ) not in(select chatroomid
        from chat_invitation) then false else true end) as haveInvite;`)
    if (checkInvitor.rows[0].haveInvitor = false){
        const createInvitation = await pool.query(`insert into chat_invitation( date, chatroomid, invitor_id)
          values (current_date,${chatroomid},'${invitorID}');`)
        const getInvitationID = await pool.query(`select invitationid id from chat_invitation where chatroomid = ${chatroomid};`)
        const checkInvitee = await pool.query(`select (case when (select userid from user_profile where userid = '${inviteeID}' ) not in(select inviteeid
          from invite_invitees where invitationid = ${getInvitationID.rows[0].id}) then true else false end);`)
        const checkMem = await pool.query(`select (case when (select userid from user_profile where userid = '${inviteeID}' ) not in(select userid
          from chat_roommember where chatroomid = ${chatroomid}) then true else false end);`)
        if(checkInvitee.rows[0].case == true && checkMem.rows[0].case == true){
        const invite = await pool.query(`insert into invite_invitees(invitationid, inviteeid)
          values (${getInvitationID.rows[0].id},'${inviteeID}');`) 
          const invitorName = await pool.query(`select concat(case when crm.nickname is not null then crm.nickname else concat(up.firstname, concat(' ',up.lastname)) end) as name
      from chat_roommember crm, user_profile up
      where crm.userid = up.userid and crm.userid = '${invitorID}' and chatroomid = ${chatroomid}`)
      const inviteeName = await pool.query(`select firstname, lastname from user_profile where userid = '${inviteeID}';`)
      const setSystemMessage = await pool.query(`insert into chat_systemmessage(chatroomid,sendtime,message) values(${chatroomid},current_timestamp,'${(invitorName.rows[0])} Have Add ${(inviteeName.rows[0]).firstname} ${(inviteeName.rows[0]).lastname} to Chat')`)
          res.status(200).json({ success: true })
        }
        else{
          res.status(200).json({ success: false })
        }
    }
    else{
      const getInvitationID = await pool.query(`select invitationid id from chat_invitation where chatroomid =${chatroomid};`)
      const checkInvitee = await pool.query(`select (case when (select userid from user_profile where userid = '${inviteeID}' ) not in(select inviteeid
        from invite_invitees where invitationid = ${getInvitationID.rows[0].id}) then true else false end);`)
      const checkMem = await pool.query(`select (case when (select userid from user_profile where userid = '${inviteeID}' ) not in(select userid
        from chat_roommember where chatroomid = ${chatroomid}) then true else false end);`)
      if(checkInvitee.rows[0].case == true && checkMem.rows[0].case == true){
      const invite = await pool.query(`insert into invite_invitees(invitationid, inviteeid)
         values (${getInvitationID.rows[0].id},'${inviteeID}');`) 
      const invitorName = await pool.query(`select concat(case when crm.nickname is not null then crm.nickname else concat(up.firstname, concat(' ',up.lastname)) end) as name
      from chat_roommember crm, user_profile up
      where crm.userid = up.userid and crm.userid = '${invitorID}' and chatroomid = ${chatroomid}`)
      const inviteeName = await pool.query(`select firstname, lastname from user_profile where userid = '${inviteeID}';`)
      const setSystemMessage = await pool.query(`insert into chat_systemmessage(chatroomid,sendtime,message) values(${chatroomid},current_timestamp,'${(invitorName.rows[0]).name} Have Add ${(inviteeName.rows[0]).firstname} ${(inviteeName.rows[0]).lastname} to Chat')`)
         res.status(200).json({ success: true })
      }
      else{
        res.status(200).json({ success: false })
      }
    }
  },
  deleteMember : async (req,res,next)=>{
    const chatroomid = req.query.chatroomid
    const userID = req.query.member 
    const deleterID = req.user.id
    if(userID!=deleterID){
      const deleterName = await pool.query(`select concat(case when crm.nickname is not null then crm.nickname else concat(up.firstname, concat(' ',up.lastname)) end) as name
    from chat_roommember crm, user_profile up
    where crm.userid = up.userid and crm.userid = '${deleterID}' and chatroomid = ${chatroomid}`)
    const username = await pool.query(`select concat(case when crm.nickname is not null then crm.nickname else concat(up.firstname, concat(' ',up.lastname)) end) as name
    from chat_roommember crm, user_profile up
    where crm.userid = up.userid and crm.userid = '${userID}' and chatroomid = ${chatroomid}`)
    const deleteMem = await pool.query(`delete from chat_roommember
    where userid='${userID}' and chatroomid = ${chatroomid};`)
    const setSystemMessage = await pool.query(`insert into chat_systemmessage(chatroomid,sendtime,message) values(${chatroomid},current_timestamp,'${(deleterName.rows[0]).name} Have Delete ${(username.rows[0]).name} From the Chat')`)
    res.status(200).json({ success: true })
    }
  }
}
