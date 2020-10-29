const pool = require('../database/db');

const TagColor = `

CREATE TABLE IF NOT EXISTS TagColor
(
 tagId    int NOT NULL,
 codeName varchar(50) NOT NULL,
 CONSTRAINT PK_tagcolor PRIMARY KEY ( tagId )
);


`;
const Global_Event_color = `

CREATE TABLE IF NOT EXISTS Global_Event_color
(
 userId  uuid NOT NULL,
 EventId int NOT NULL,
 tagId   int NOT NULL,
 CONSTRAINT PK_event_color PRIMARY KEY ( userId, EventId ),
 CONSTRAINT FK_1528 FOREIGN KEY ( tagId ) REFERENCES TagColor ( tagId ),
 CONSTRAINT FK_1531 FOREIGN KEY ( EventId ) REFERENCES Global_Event ( EventId ),
 CONSTRAINT FK_2642 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_1528 ON Global_Event_color
(
 tagId
);

CREATE INDEX fkIdx_1531 ON Global_Event_color
(
 EventId
);

CREATE INDEX fkIdx_2642 ON Global_Event_color
(
 userId
);

`;
const Course_Event_color = `

CREATE TABLE IF NOT EXISTS Course_Event_color
(
 userId  uuid NOT NULL,
 EventId int NOT NULL,
 tagId   int NOT NULL,
 CONSTRAINT PK_event_color PRIMARY KEY ( userId, EventId ),
 CONSTRAINT FK_1487 FOREIGN KEY ( EventId ) REFERENCES Course_Event ( EventId ),
 CONSTRAINT FK_1490 FOREIGN KEY ( tagId ) REFERENCES TagColor ( tagId ),
 CONSTRAINT FK_2639 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_1487 ON Course_Event_color
(
 EventId
);

CREATE INDEX fkIdx_1490 ON Course_Event_color
(
 tagId
);

CREATE INDEX fkIdx_2639 ON Course_Event_color
(
 userId
);


`;
const Global_Event = `

CREATE TABLE IF NOT EXISTS Global_Event
(
 EventId    int NOT NULL,
 title      varchar(50) NOT NULL,
 startDate  date NOT NULL,
 endDate    date NOT NULL,
 startTime  time NOT NULL,
 endTime    time NOT NULL,
 detail     varchar(50) NOT NULL,
 place      varchar(50) NOT NULL,
 duration   varchar(50) NOT NULL,
 lastUpdate timestamp NOT NULL,
 typeId     int NOT NULL,
 adminId    uuid NOT NULL,
 CONSTRAINT PK_event PRIMARY KEY ( EventId ),
 CONSTRAINT FK_1519 FOREIGN KEY ( typeId ) REFERENCES Category_Event ( typeId ),
 CONSTRAINT FK_3843 FOREIGN KEY ( adminId ) REFERENCES Admin_Login ( adminId )
);

CREATE INDEX fkIdx_1519 ON Global_Event
(
 typeId
);

CREATE INDEX fkIdx_3843 ON Global_Event
(
 adminId
);

`;
const Course_Event = `

CREATE TABLE IF NOT EXISTS Course_Event
(
 EventId      int NOT NULL,
 courseId     uuid NOT NULL,
 InstructorId uuid NOT NULL,
 title        varchar(50) NOT NULL,
 startDate    date NOT NULL,
 endDate      date NOT NULL,
 startTime    time NOT NULL,
 endTime      time NOT NULL,
 detail       varchar(50) NOT NULL,
 place        varchar(50) NOT NULL,
 duration     varchar(50) NOT NULL,
 lastUpdate   timestamp NOT NULL,
 typeId       int NOT NULL,
 adminId      uuid NOT NULL,
 CONSTRAINT PK_event PRIMARY KEY ( EventId ),
 CONSTRAINT FK_2635 FOREIGN KEY ( courseId ) REFERENCES Course ( courseId ),
 CONSTRAINT FK_3687 FOREIGN KEY ( typeId ) REFERENCES Category_Event ( typeId ),
 CONSTRAINT FK_3692 FOREIGN KEY ( InstructorId ) REFERENCES Instructor ( InstructorId ),
 CONSTRAINT FK_3846 FOREIGN KEY ( adminId ) REFERENCES Admin_Login ( adminId )
);

CREATE INDEX fkIdx_2635 ON Course_Event
(
 courseId
);

CREATE INDEX fkIdx_3687 ON Course_Event
(
 typeId
);

CREATE INDEX fkIdx_3692 ON Course_Event
(
 InstructorId
);

CREATE INDEX fkIdx_3846 ON Course_Event
(
 adminId
);

`;
const Category_Event = `

CREATE TABLE IF NOT EXISTS Category_Event
(
 typeId   int NOT NULL,
 typeName varchar(20) NOT NULL,
 CONSTRAINT PK_categoryeventt PRIMARY KEY ( typeId )
);

`;
const Reminder = `

CREATE TABLE IF NOT EXISTS Reminder
(
 userId         uuid NOT NULL,
 reminder_count int NOT NULL,
 title          varchar(50) NOT NULL,
 description    varchar(50) NOT NULL,
 startDate      date NOT NULL,
 endDate        date NOT NULL,
 startTime      time NOT NULL,
 endTime        time NOT NULL,
 CONSTRAINT PK_reminder PRIMARY KEY ( userId, reminder_count ),
 CONSTRAINT FK_2632 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_2632 ON Reminder
(
 userId
);

`;

exports.createG14Table = async (req, res) => {
  try{
    await createTable_TagColor;
    await createTable_Category_Event;
    await createTable_Course_Event;
    await createTable_Course_Event_color;
    await createTable_Global_Event;
    await createTable_Global_Event_color;
    await createTable_Reminder;
    console.log('Create G14 Table Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }

}

const createTable_TagColor = async (req, res, next) => {
    try {
      const job = await pool.query(TagColor);
      console.log('Create table TagColor Successfully');
    } catch (err) {
      console.error(err.stack.red);
    }
};
const createTable_Global_Event_color = async (req, res, next) => {
  try {
    const job = await pool.query(Global_Event_color);
    console.log('Create table Global_Event_color Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Global_Event = async (req, res, next) => {
  try {
    const job = await pool.query(Global_Event);
    console.log('Create table Global_Event Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Course_Event_color = async (req, res, next) => {
  try {
    const job = await pool.query(Course_Event_color);
    console.log('Create table Course_Event_color Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Course_Event = async (req, res, next) => {
  try {
    const job = await pool.query(Course_Event);
    console.log('Create table Course_Event Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Category_Event = async (req, res, next) => {
  try {
    const job = await pool.query(Category_Event);
    console.log('Create table Category_Event Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Reminder = async (req, res, next) => {
  try {
    const job = await pool.query(Reminder);
    console.log('Create table Reminder Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};