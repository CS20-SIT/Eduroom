const pool = require('../database/db');

const Kahoot_room = `

CREATE TABLE IF NOT EXISTS Kahoot_room
(
 id           int NOT NULL,
 name         varchar(50) NOT NULL,
 capacity     int NOT NULL,
 type         varchar(50) NOT NULL,
 typeID       int NOT NULL,
 InstructorId uuid NOT NULL,
 CONSTRAINT PK_room PRIMARY KEY ( id ),
 CONSTRAINT FK_104 FOREIGN KEY ( typeID ) REFERENCES Kahoot_Type ( id ),
 CONSTRAINT FK_2403 FOREIGN KEY ( InstructorId ) REFERENCES Instructor ( InstructorId )
);

CREATE INDEX fkIdx_104 ON Kahoot_room
(
 typeID
);

CREATE INDEX fkIdx_2403 ON Kahoot_room
(
 InstructorId
);

`;
const Kahoot_Type = `

CREATE TABLE IF NOT EXISTS Kahoot_Type
(
 id       int NOT NULL,
 nameType varchar(50) NOT NULL,
 CONSTRAINT PK_tpye PRIMARY KEY ( id )
);

`;
const Kahoot_Question_Topic = `

CREATE TABLE IF NOT EXISTS Kahoot_Question_Topic
(
 id   int NOT NULL,
 name varchar(50) NOT NULL,
 CONSTRAINT PK_topic PRIMARY KEY ( id )
);

`;
const Kahoot_question = `

CREATE TABLE IF NOT EXISTS Kahoot_question
(
 questionId  int NOT NULL,
 roomId      int NOT NULL,
 QuestionNo  int NOT NULL,
 text        varchar(255) NOT NULL,
 difficulty  char(10) NOT NULL,
 topicId     int NOT NULL,
 time        int NOT NULL,
 point       int NOT NULL,
 picturePath path NOT NULL,
 CONSTRAINT PK_question PRIMARY KEY ( questionId ),
 CONSTRAINT FK_128 FOREIGN KEY ( roomId ) REFERENCES Kahoot_room ( id ),
 CONSTRAINT FK_59 FOREIGN KEY ( topicId ) REFERENCES Kahoot_Question_Topic ( id )
);

CREATE INDEX fkIdx_128 ON Kahoot_question
(
 roomId
);

CREATE INDEX fkIdx_59 ON Kahoot_question
(
 topicId
);

`;
const Kahoot_answer = `

CREATE TABLE IF NOT EXISTS Kahoot_answer
(
 questionId int NOT NULL,
 answerNo   int NOT NULL,
 text       varchar(50) NOT NULL,
 isCorrect  boolean NOT NULL,
 CONSTRAINT PK_answer PRIMARY KEY ( questionId, answerNo ),
 CONSTRAINT FK_132 FOREIGN KEY ( questionId ) REFERENCES Kahoot_question ( questionId )
);

CREATE INDEX fkIdx_132 ON Kahoot_answer
(
 questionId
);

`;
const Kahoot_roomHistory_PlayerAnswer = `

CREATE TABLE IF NOT EXISTS Kahoot_roomHistory_PlayerAnswer
(
 SessionId  int NOT NULL,
 userId     uuid NOT NULL,
 questionId int NOT NULL,
 answerNo   int NOT NULL,
 CONSTRAINT PK_roomsessionanswerplayer PRIMARY KEY ( SessionId, userId, questionId, answerNo ),
 CONSTRAINT FK_137 FOREIGN KEY ( SessionId, userId ) REFERENCES Kahoot_roomHistoryPlayer ( SessionId, userId ),
 CONSTRAINT FK_141 FOREIGN KEY ( questionId, answerNo ) REFERENCES Kahoot_answer ( questionId, answerNo )
);

CREATE INDEX fkIdx_137 ON Kahoot_roomHistory_PlayerAnswer
(
 SessionId,
 userId
);

CREATE INDEX fkIdx_141 ON Kahoot_roomHistory_PlayerAnswer
(
 answerNo,
 questionId
);

`;
const Kahoot_roomHistory = `

CREATE TABLE IF NOT EXISTS Kahoot_roomHistory
(
 SessionId int NOT NULL,
 roomId    int NOT NULL,
 PIN       int NOT NULL,
 CONSTRAINT PK_roomsession PRIMARY KEY ( SessionId ),
 CONSTRAINT FK_111 FOREIGN KEY ( roomId ) REFERENCES Kahoot_room ( id )
);

CREATE INDEX fkIdx_111 ON Kahoot_roomHistory
(
 roomId
);

`;
const Kahoot_roomHistoryPlayer = `

CREATE TABLE IF NOT EXISTS Kahoot_roomHistoryPlayer
(
 SessionId int NOT NULL,
 userId    uuid NOT NULL,
 rank      int NOT NULL,
 CONSTRAINT PK_roomsessionplayer PRIMARY KEY ( SessionId, userId ),
 CONSTRAINT FK_118 FOREIGN KEY ( SessionId ) REFERENCES Kahoot_roomHistory ( SessionId ),
 CONSTRAINT FK_123 FOREIGN KEY ( userId ) REFERENCES Kahoot_player ( userId )
);

CREATE INDEX fkIdx_118 ON Kahoot_roomHistoryPlayer
(
 SessionId
);

CREATE INDEX fkIdx_123 ON Kahoot_roomHistoryPlayer
(
 userId
);

`;
const Kahoot_player = `

CREATE TABLE IF NOT EXISTS Kahoot_player
(
 userId      uuid NOT NULL,
 nameForPlay char(20) NOT NULL,
 CONSTRAINT PK_player PRIMARY KEY ( userId ),
 CONSTRAINT FK_2398 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_2398 ON Kahoot_player
(
 userId
);

`;

exports.createG03Table = async (req, res) => {
  try{
    await createTable_Kahoot_player;
    await createTable_Kahoot_Type;
    await createTable_Kahoot_Question_Topic;
    await createTable_Kahoot_room;
    await createTable_Kahoot_question;
    await createTable_Kahoot_answer;
    await createTable_Kahoot_roomHistory;
    await createTable_Kahoot_roomHistoryPlayer;
    await createTable_Kahoot_roomHistory_PlayerAnswer;
    console.log('Create G03 Table Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }

}

const createTable_Kahoot_Type = async (req, res, next) => {
    try {
      const job = await pool.query(Kahoot_Type);
      console.log('Create table Kahoot_Type Successfully');
    } catch (err) {
      console.error(err.stack.red);
    }
};
const createTable_Kahoot_player = async (req, res, next) => {
  try {
    const job = await pool.query(Kahoot_player);
    console.log('Create table Kahoot_player Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Kahoot_room = async (req, res, next) => {
  try {
    const job = await pool.query(Kahoot_room);
    console.log('Create table Kahoot_room Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Kahoot_Question_Topic = async (req, res, next) => {
  try {
    const job = await pool.query(Kahoot_Question_Topic);
    console.log('Create table Kahoot_Question_Topic Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Kahoot_question = async (req, res, next) => {
  try {
    const job = await pool.query(Kahoot_question);
    console.log('Create table Kahoot_question Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Kahoot_answer = async (req, res, next) => {
  try {
    const job = await pool.query(Kahoot_answer);
    console.log('Create table Kahoot_answer Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Kahoot_roomHistory = async (req, res, next) => {
  try {
    const job = await pool.query(Kahoot_roomHistory);
    console.log('Create table Kahoot_roomHistory Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Kahoot_roomHistoryPlayer = async (req, res, next) => {
  try {
    const job = await pool.query(Kahoot_roomHistoryPlayer);
    console.log('Create table Kahoot_roomHistoryPlayer Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Kahoot_roomHistory_PlayerAnswer = async (req, res, next) => {
  try {
    const job = await pool.query(Kahoot_roomHistory_PlayerAnswer);
    console.log('Create table Kahoot_roomHistory_PlayerAnswer Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
