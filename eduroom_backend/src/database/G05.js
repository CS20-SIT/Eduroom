const pool = require('../database/db');

const Chat = `

CREATE TABLE IF NOT EXISTS Chat
(
 chatRoomId int NOT NULL,
 picture    path NOT NULL,
 roomName   varchar(255) NOT NULL,
 date       date NOT NULL,
 Creator    uuid NOT NULL,
 CONSTRAINT PK_chatmember PRIMARY KEY ( chatRoomId ),
 CONSTRAINT FK_3340 FOREIGN KEY ( Creator ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_3340 ON Chat
(
 Creator
);

`;
const User_chatColor = `

CREATE TABLE IF NOT EXISTS User_chatColor
(
 chatRoomId int NOT NULL,
 userId     uuid NOT NULL,
 color      varchar(50) NULL,
 CONSTRAINT PK_chatcolor PRIMARY KEY ( chatRoomId, userId ),
 CONSTRAINT FK_143 FOREIGN KEY ( chatRoomId ) REFERENCES Chat ( chatRoomId ),
 CONSTRAINT FK_3355 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_143 ON User_chatColor
(
 chatRoomId
);

CREATE INDEX fkIdx_3355 ON User_chatColor
(
 userId
);

`;
const Chat_Message_Readtime = `

CREATE TABLE IF NOT EXISTS Chat_Message_Readtime
(
 messageId int NOT NULL,
 readTime  timestamp NOT NULL,
 userId    uuid NOT NULL,
 CONSTRAINT PK_chat_message_readtime PRIMARY KEY ( messageId, userId ),
 CONSTRAINT FK_3866 FOREIGN KEY ( messageId ) REFERENCES Chat_Message ( messageId ),
 CONSTRAINT FK_3870 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_3866 ON Chat_Message_Readtime
(
 messageId
);

CREATE INDEX fkIdx_3870 ON Chat_Message_Readtime
(
 userId
);

`;
const User_hideMessage = `

CREATE TABLE IF NOT EXISTS User_hideMessage
(
 userId    uuid NOT NULL,
 messageId int NOT NULL,
 hide      boolean NOT NULL,
 CONSTRAINT PK_hidemessage PRIMARY KEY ( userId, messageId ),
 CONSTRAINT FK_178 FOREIGN KEY ( messageId ) REFERENCES Chat_Message ( messageId ),
 CONSTRAINT FK_3352 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_178 ON User_hideMessage
(
 messageId
);

CREATE INDEX fkIdx_3352 ON User_hideMessage
(
 userId
);

`;
const Chat_systemMessage = `

CREATE TABLE IF NOT EXISTS Chat_systemMessage
(
 chatRoomId int NOT NULL,
 sendTime   timestamp NOT NULL,
 message    varchar(250) NOT NULL,
 CONSTRAINT PK_systemmessage PRIMARY KEY ( chatRoomId, sendTime ),
 CONSTRAINT FK_100 FOREIGN KEY ( chatRoomId ) REFERENCES Chat ( chatRoomId )
);

CREATE INDEX fkIdx_100 ON Chat_systemMessage
(
 chatRoomId
);

`;
const Chat_invitation = `

CREATE TABLE IF NOT EXISTS Chat_invitation
(
 invitationId int NOT NULL,
 date         date NOT NULL,
 chatRoomId   int NOT NULL,
 Invitor_ID   uuid NOT NULL,
 CONSTRAINT PK_invitation PRIMARY KEY ( invitationId ),
 CONSTRAINT FK_3349 FOREIGN KEY ( Invitor_ID ) REFERENCES User_Profile ( userId ),
 CONSTRAINT FK_80 FOREIGN KEY ( chatRoomId ) REFERENCES Chat ( chatRoomId )
);

CREATE INDEX fkIdx_3349 ON Chat_invitation
(
 Invitor_ID
);

CREATE INDEX fkIdx_80 ON Chat_invitation
(
 chatRoomId
);

`;
const User_hideChatRoom = `

CREATE TABLE IF NOT EXISTS User_hideChatRoom
(
 userId     uuid NOT NULL,
 chatRoomId int NOT NULL,
 hide       boolean NOT NULL,
 CONSTRAINT PK_hidechat PRIMARY KEY ( userId, chatRoomId ),
 CONSTRAINT FK_173 FOREIGN KEY ( chatRoomId ) REFERENCES Chat ( chatRoomId ),
 CONSTRAINT FK_3343 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_173 ON User_hideChatRoom
(
 chatRoomId
);

CREATE INDEX fkIdx_3343 ON User_hideChatRoom
(
 userId
);

`;
const Chat_roomMember = `

CREATE TABLE IF NOT EXISTS Chat_roomMember
(
 chatRoomId int NOT NULL,
 userId     uuid NOT NULL,
 nickname   varchar(255) NULL,
 CONSTRAINT PK_roommember PRIMARY KEY ( chatRoomId, userId ),
 CONSTRAINT FK_104 FOREIGN KEY ( chatRoomId ) REFERENCES Chat ( chatRoomId ),
 CONSTRAINT FK_3346 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_104 ON Chat_roomMember
(
 chatRoomId
);

CREATE INDEX fkIdx_3346 ON Chat_roomMember
(
 userId
);

`;
const Invite_invitees = `

CREATE TABLE IF NOT EXISTS Invite_invitees
(
 invitationId int NOT NULL,
 InviteeID    uuid NOT NULL,
 CONSTRAINT PK_invitee PRIMARY KEY ( invitationId, InviteeID ),
 CONSTRAINT FK_3358 FOREIGN KEY ( InviteeID ) REFERENCES User_Profile ( userId ),
 CONSTRAINT FK_89 FOREIGN KEY ( invitationId ) REFERENCES Chat_invitation ( invitationId )
);

CREATE INDEX fkIdx_3358 ON Invite_invitees
(
 InviteeID
);

CREATE INDEX fkIdx_89 ON Invite_invitees
(
 invitationId
);

`;
const Chat_Message = `

CREATE TABLE IF NOT EXISTS Chat_Message_Readtime
(
 messageId int NOT NULL,
 readTime  timestamp NOT NULL,
 userId    uuid NOT NULL,
 CONSTRAINT PK_chat_message_readtime PRIMARY KEY ( messageId, userId ),
 CONSTRAINT FK_3866 FOREIGN KEY ( messageId ) REFERENCES Chat_Message ( messageId ),
 CONSTRAINT FK_3870 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_3866 ON Chat_Message_Readtime
(
 messageId
);

CREATE INDEX fkIdx_3870 ON Chat_Message_Readtime
(
 userId
);

`;


exports.createG05Table = async (req, res) => {
  try{
    await createTable_Chat;
    await createTable_Chat_Message;
    await createTable_Chat_Message_Readtime;
    await createTable_Chat_invitation;
    await createTable_Chat_roomMember;
    await createTable_Chat_systemMessage;
    await createTable_Invite_invitees;
    await createTable_User_chatColor;
    await createTable_User_hideChatRoom;
    await createTable_User_hideMessage;
    console.log('Create G05 Table Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }

}

const createTable_User_chatColor = async (req, res, next) => {
    try {
      const job = await pool.query(User_chatColor);
      console.log('Create table User_chatColor Successfully');
    } catch (err) {
      console.error(err.stack.red);
    }
};
const createTable_Chat_Message_Readtime = async (req, res, next) => {
  try {
    const job = await pool.query(Chat_Message_Readtime);
    console.log('Create table Chat_Message_Readtime Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_User_hideMessage = async (req, res, next) => {
  try {
    const job = await pool.query(User_hideMessage);
    console.log('Create table User_hideMessage Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Chat_systemMessage = async (req, res, next) => {
  try {
    const job = await pool.query(Chat_systemMessage);
    console.log('Create table Chat_systemMessage Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Chat_invitation = async (req, res, next) => {
  try {
    const job = await pool.query(Chat_invitation);
    console.log('Create table Chat_invitation Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_User_hideChatRoom = async (req, res, next) => {
  try {
    const job = await pool.query(User_hideChatRoom);
    console.log('Create table User_hideChatRoom Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Chat_roomMember = async (req, res, next) => {
  try {
    const job = await pool.query(Chat_roomMember);
    console.log('Create table Chat_roomMember Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Invite_invitees = async (req, res, next) => {
  try {
    const job = await pool.query(Invite_invitees);
    console.log('Create table Invite_invitees Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Chat_Message = async (req, res, next) => {
  try {
    const job = await pool.query(Chat_Message);
    console.log('Create table Chat_Message Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Chat = async (req, res, next) => {
  try {
    const job = await pool.query(Chat);
    console.log('Create table Chat Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};