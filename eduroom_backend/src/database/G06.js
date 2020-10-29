const pool = require('../database/db');

const Path = `

CREATE TABLE IF NOT EXISTS Path
(
 pathId           int NOT NULL,
 Path_Name        varchar(50) NOT NULL,
 Path_Description varchar(100) NOT NULL,
 CONSTRAINT PK_path_detail PRIMARY KEY ( pathId )
);


`;
const Path_node = `

CREATE TABLE IF NOT EXISTS Path_node
(
 nodeId         int NOT NULL,
 Parent_Node_id int NULL,
 pathId         int NOT NULL,
 node_name      varchar(50) NOT NULL,
 node_desc      varchar(50) NOT NULL,
 CONSTRAINT PK_path_node PRIMARY KEY ( nodeId ),
 CONSTRAINT FK_915 FOREIGN KEY ( pathId ) REFERENCES Path ( pathId ),
 CONSTRAINT FK_922 FOREIGN KEY ( Parent_Node_id ) REFERENCES Path_node ( nodeId )
);

CREATE INDEX fkIdx_915 ON Path_node
(
 pathId
);

CREATE INDEX fkIdx_922 ON Path_node
(
 Parent_Node_id
);

`;

const Node_Question = `

CREATE TABLE IF NOT EXISTS Node_Question
(
 nodeId       int NOT NULL,
 questionNo   int NOT NULL,
 questionName varchar(50) NOT NULL,
 description  varchar(500) NOT NULL,
 CONSTRAINT PK_node_question PRIMARY KEY ( nodeId, questionNo ),
 CONSTRAINT FK_3729 FOREIGN KEY ( nodeId ) REFERENCES Path_node ( nodeId )
);

CREATE INDEX fkIdx_3729 ON Node_Question
(
 nodeId
);

`;

const Node_Question_choice = `

CREATE TABLE IF NOT EXISTS Node_Question_choice
(
 nodeId     int NOT NULL,
 questionNo int NOT NULL,
 choiceNo   int NOT NULL,
 answer     varchar(255) NOT NULL,
 CONSTRAINT PK_node_question_answer PRIMARY KEY ( nodeId, questionNo, choiceNo ),
 CONSTRAINT FK_3737 FOREIGN KEY ( nodeId, questionNo ) REFERENCES Node_Question ( nodeId, questionNo )
);

CREATE INDEX fkIdx_3737 ON Node_Question_choice
(
 nodeId,
 questionNo
);

`;

const Node_Question_Correct_Answer = `

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

const User_Path = `

CREATE TABLE IF NOT EXISTS User_Path
(
 userId uuid NOT NULL,
 pathId int NOT NULL,
 CONSTRAINT PK_user_path PRIMARY KEY ( userId, pathId ),
 CONSTRAINT FK_3070 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId ),
 CONSTRAINT FK_925 FOREIGN KEY ( pathId ) REFERENCES Path ( pathId )
);

CREATE INDEX fkIdx_3070 ON User_Path
(
 userId
);

CREATE INDEX fkIdx_925 ON User_Path
(
 pathId
);

`;

const User_Progress = `

CREATE TABLE IF NOT EXISTS User_Progress
(
 userId      uuid NOT NULL,
 pathId      int NOT NULL,
 nodeId      int NOT NULL,
 progression boolean NOT NULL,
 score       int NOT NULL,
 CONSTRAINT PK_progress PRIMARY KEY ( userId, pathId, nodeId ),
 CONSTRAINT FK_931 FOREIGN KEY ( userId, pathId ) REFERENCES User_Path ( userId, pathId ),
 CONSTRAINT FK_935 FOREIGN KEY ( nodeId ) REFERENCES Path_node ( nodeId )
);

CREATE INDEX fkIdx_931 ON User_Progress
(
 pathId,
 userId
);

CREATE INDEX fkIdx_935 ON User_Progress
(
 nodeId
);

`;

const Achievement = `

CREATE TABLE IF NOT EXISTS Achievement
(
 achieveId      int NOT NULL,
 nodeId         int NOT NULL,
 Achieve_Detail varchar(100) NOT NULL,
 XP_Point       bigint NOT NULL,
 CONSTRAINT PK_achievement PRIMARY KEY ( achieveId ),
 CONSTRAINT FK_956 FOREIGN KEY ( nodeId ) REFERENCES Path_node ( nodeId )
);

CREATE INDEX fkIdx_956 ON Achievement
(
 nodeId
);

`;

const Achieve_Problem = `

CREATE TABLE IF NOT EXISTS Achieve_Problem
(
 achieveId int NOT NULL,
 graderId  int NOT NULL,
 CONSTRAINT PK_achieve_problem PRIMARY KEY ( achieveId ),
 CONSTRAINT FK_3751 FOREIGN KEY ( graderId ) REFERENCES questions ( id ),
 CONSTRAINT FK_97 FOREIGN KEY ( achieveId ) REFERENCES Achievement ( achieveId )
);

CREATE INDEX fkIdx_3751 ON Achieve_Problem
(
 graderId
);

CREATE INDEX fkIdx_97 ON Achieve_Problem
(
 achieveId
);

`;

const Leaderboard_Title = `

CREATE TABLE IF NOT EXISTS Leaderboard_Title
(
 titleId          int NOT NULL,
 TitleName        varchar(50) NOT NULL,
 TitleDescription varchar(100) NOT NULL,
 CONSTRAINT PK_title PRIMARY KEY ( titleId )
);

`;

const User_XP = `

CREATE TABLE IF NOT EXISTS User_XP
(
 userId    uuid NOT NULL,
 totalXP   int NOT NULL,
 currentXP int NOT NULL,
 CONSTRAINT PK_user_xp PRIMARY KEY ( userId ),
 CONSTRAINT FK_3763 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_3763 ON User_XP
(
 userId
);

`;

const Leaderboard = `

CREATE TABLE IF NOT EXISTS Leaderboard
(
 userId  uuid NOT NULL,
 titleId int NOT NULL,
 XP      bigint NOT NULL,
 CONSTRAINT PK_leaderboard PRIMARY KEY ( userId ),
 CONSTRAINT FK_3058 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId ),
 CONSTRAINT FK_61 FOREIGN KEY ( titleId ) REFERENCES Leaderboard_Title ( titleId )
);

CREATE INDEX fkIdx_3058 ON Leaderboard
(
 userId
);

CREATE INDEX fkIdx_61 ON Leaderboard
(
 titleId
);

`;

const User_Achievement = `

CREATE TABLE IF NOT EXISTS User_Achievement
(
 achieveId int NOT NULL,
 userId    uuid NOT NULL,
 Completed boolean NOT NULL,
 CONSTRAINT PK_user_achievement PRIMARY KEY ( achieveId, userId ),
 CONSTRAINT FK_3064 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId ),
 CONSTRAINT FK_90 FOREIGN KEY ( achieveId ) REFERENCES Achievement ( achieveId )
);

CREATE INDEX fkIdx_3064 ON User_Achievement
(
 userId
);

CREATE INDEX fkIdx_90 ON User_Achievement
(
 achieveId
);

`;


exports.createG06Table = async (req, res) => {
  try{
    await createTable_Path;
    await createTable_Path_node;
    await createTable_Achieve_Problem;
    await createTable_Achievement;
    await createTable_Leaderboard_Title;
    await createTable_Leaderboard;
    await createTable_Node_Question;
    await createTable_Node_Question_choice;
    await createTable_Node_Question_Correct_Answer;
    await createTable_User_Achievement;
    await createTable_User_Path;
    await createTable_User_Progress;
    await createTable_User_XP;
    console.log('Create G06 Table Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }

}

const createTable_Path = async (req, res, next) => {
    try {
      const job = await pool.query(Path);
      console.log('Create table Path Successfully');
    } catch (err) {
      console.error(err.stack.red);
    }
};
const createTable_Path_node = async (req, res, next) => {
  try {
    const job = await pool.query(Path_node);
    console.log('Create table Path_node Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Node_Question = async (req, res, next) => {
  try {
    const job = await pool.query(Node_Question);
    console.log('Create table Node_Question Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Node_Question_choice = async (req, res, next) => {
  try {
    const job = await pool.query(Node_Question_choice);
    console.log('Create table Node_Question_choice Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Node_Question_Correct_Answer = async (req, res, next) => {
  try {
    const job = await pool.query(Node_Question_Correct_Answer);
    console.log('Create table Node_Question_Correct_Answer Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_User_Path = async (req, res, next) => {
  try {
    const job = await pool.query(User_Path);
    console.log('Create table User_Path Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_User_Progress = async (req, res, next) => {
  try {
    const job = await pool.query(User_Progress);
    console.log('Create table User_Progress Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Achievement = async (req, res, next) => {
  try {
    const job = await pool.query(Achievement);
    console.log('Create table Achievement Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Achieve_Problem = async (req, res, next) => {
  try {
    const job = await pool.query(Achieve_Problem);
    console.log('Create table Achieve_Problem Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Leaderboard_Title = async (req, res, next) => {
  try {
    const job = await pool.query(Leaderboard_Title);
    console.log('Create table Leaderboard_Title Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_User_XP = async (req, res, next) => {
  try {
    const job = await pool.query(User_XP);
    console.log('Create table User_XP Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Leaderboard = async (req, res, next) => {
  try {
    const job = await pool.query(Leaderboard);
    console.log('Create table Leaderboard Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_User_Achievement = async (req, res, next) => {
  try {
    const job = await pool.query(User_Achievement);
    console.log('Create table User_Achievement Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};