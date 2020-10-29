const pool = require('../database/db');

const problem_types = `

CREATE TABLE IF NOT EXISTS problem_types
(
 typeId   int NOT NULL,
 typeName varchar(50) NOT NULL,
 CONSTRAINT PK_problem_types PRIMARY KEY ( typeId )
);

`;
const subProblemTypes = `

CREATE TABLE IF NOT EXISTS subProblemTypes
(
 subProblemId int NOT NULL,
 typeId       int NOT NULL,
 subName      varchar(50) NOT NULL,
 CONSTRAINT PK_sub_problem_types PRIMARY KEY ( subProblemId ),
 CONSTRAINT FK_169 FOREIGN KEY ( typeId ) REFERENCES problem_types ( typeId )
);

CREATE INDEX fkIdx_169 ON subProblemTypes
(
 typeId
);

`;
const help_forum = `

CREATE TABLE IF NOT EXISTS help_forum
(
 helpForumId  int NOT NULL,
 subProblemId int NOT NULL,
 content      text NOT NULL,
 adminId      uuid NOT NULL,
 CONSTRAINT PK_help_forum PRIMARY KEY ( helpForumId ),
 CONSTRAINT FK_3852 FOREIGN KEY ( adminId ) REFERENCES Admin_Login ( adminId ),
 CONSTRAINT FK_455 FOREIGN KEY ( subProblemId ) REFERENCES subProblemTypes ( subProblemId )
);

CREATE INDEX fkIdx_3852 ON help_forum
(
 adminId
);

CREATE INDEX fkIdx_455 ON help_forum
(
 subProblemId
);

`;
const Support_Answer_form = `

CREATE TABLE IF NOT EXISTS Support_Answer_form
(
 ticketId    int NOT NULL,
 answerTime  timestamp NOT NULL,
 title       varchar(50) NOT NULL,
 description text NOT NULL,
 adminId     uuid NOT NULL,
 CONSTRAINT PK_answer_form PRIMARY KEY ( ticketId ),
 CONSTRAINT FK_3679 FOREIGN KEY ( ticketId ) REFERENCES support_form ( ticketId ),
 CONSTRAINT FK_3824 FOREIGN KEY ( adminId ) REFERENCES Admin_Login ( adminId )
);

CREATE INDEX fkIdx_3679 ON Support_Answer_form
(
 ticketId
);

CREATE INDEX fkIdx_3824 ON Support_Answer_form
(
 adminId
);

`;
const support_form = `

CREATE TABLE IF NOT EXISTS support_form
(
 ticketId     int NOT NULL,
 userId       uuid NOT NULL,
 requestTime  timestamp NOT NULL,
 title        varchar(50) NOT NULL,
 priorityType int NOT NULL,
 description  text NOT NULL,
 subProblemId int NOT NULL,
 CONSTRAINT PK_support_form PRIMARY KEY ( ticketId ),
 CONSTRAINT FK_2324 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId ),
 CONSTRAINT FK_3675 FOREIGN KEY ( subProblemId ) REFERENCES subProblemTypes ( subProblemId )
);

CREATE INDEX fkIdx_2324 ON support_form
(
 userId
);

CREATE INDEX fkIdx_3675 ON support_form
(
 subProblemId
);

`;
const Forum_Form = `

CREATE TABLE IF NOT EXISTS Forum_Form
(
 forumId        int NOT NULL,
 userId         uuid NOT NULL,
 postTime       timestamp NOT NULL,
 titleThread    varchar(100) NOT NULL,
 typeId         int NOT NULL,
 subCategoryIId int NOT NULL,
 content        text NOT NULL,
 CONSTRAINT PK_forum PRIMARY KEY ( forumId ),
 CONSTRAINT FK_104 FOREIGN KEY ( subCategoryIId ) REFERENCES Sub_category ( subCategoryIId ),
 CONSTRAINT FK_2267 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId ),
 CONSTRAINT FK_69 FOREIGN KEY ( typeId ) REFERENCES Forum_Type ( typeId )
);

CREATE INDEX fkIdx_104 ON Forum_Form
(
 subCategoryIId
);

CREATE INDEX fkIdx_2267 ON Forum_Form
(
 userId
);

CREATE INDEX fkIdx_69 ON Forum_Form
(
 typeId
);

`;
const Edit_history = `

CREATE TABLE IF NOT EXISTS Edit_history
(
 forumId    int NOT NULL,
 editTime   timestamp NOT NULL,
 oldContent text NOT NULL,
 CONSTRAINT PK_edit_history PRIMARY KEY ( forumId, editTime ),
 CONSTRAINT FK_113 FOREIGN KEY ( forumId ) REFERENCES Forum_Form ( forumId )
);

CREATE INDEX fkIdx_113 ON Edit_history
(
 forumId
);

`;
const Forum_Answer_from = `

CREATE TABLE IF NOT EXISTS Forum_Answer_from
(
 forumId  int NOT NULL,
 answerNo int NOT NULL,
 userId   uuid NOT NULL,
 ansTime  timestamp NOT NULL,
 answer   text NOT NULL,
 CONSTRAINT PK_answer_from_t PRIMARY KEY ( forumId, answerNo ),
 CONSTRAINT FK_2270 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId ),
 CONSTRAINT FK_445 FOREIGN KEY ( forumId ) REFERENCES Forum_Form ( forumId )
);

CREATE INDEX fkIdx_2270 ON Forum_Answer_from
(
 userId
);

CREATE INDEX fkIdx_445 ON Forum_Answer_from
(
 forumId
);

`;
const Sub_category = `

CREATE TABLE IF NOT EXISTS Sub_category
(
 subCategoryIId int NOT NULL,
 subTypeName    varchar(50) NOT NULL,
 categoryTypeId int NOT NULL,
 CONSTRAINT PK_sub_category PRIMARY KEY ( subCategoryIId ),
 CONSTRAINT FK_107 FOREIGN KEY ( categoryTypeId ) REFERENCES Category_Type ( categoryTypeId )
);

CREATE INDEX fkIdx_107 ON Sub_category
(
 categoryTypeId
);

`;
const Forum_Type = `

CREATE TABLE IF NOT EXISTS Forum_Type
(
 typeId   int NOT NULL,
 typeName varchar(10) NOT NULL,
 CONSTRAINT PK_forum_type PRIMARY KEY ( typeId )
);

`;
const Category_Type = `

CREATE TABLE IF NOT EXISTS Category_Type
(
 categoryTypeId int NOT NULL,
 typeName       varchar(50) NOT NULL,
 CONSTRAINT PK_category_type PRIMARY KEY ( categoryTypeId )
);

`;

exports.createG12Table = async (req, res) => {
  try{
    await createTable_Category_Type;
    await createTable_Sub_category;
    await createTable_Edit_history;
    await createTable_problem_types;
    await createTable_subProblemTypes;
    await createTable_Forum_Type;
    await createTable_Forum_Form;
    await createTable_Forum_Answer_from;
    await createTable_support_form;
    await createTable_Support_Answer_form;
    await createTable_help_forum;

    console.log('Create G12 Table Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }

}

const createTable_problem_types = async (req, res, next) => {
    try {
      const job = await pool.query(problem_types);
      console.log('Create table problem_types Successfully');
    } catch (err) {
      console.error(err.stack.red);
    }
};
const createTable_subProblemTypes = async (req, res, next) => {
  try {
    const job = await pool.query(subProblemTypes);
    console.log('Create table subProblemTypes Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_help_forum = async (req, res, next) => {
  try {
    const job = await pool.query(help_forum);
    console.log('Create table help_forum Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Support_Answer_form = async (req, res, next) => {
  try {
    const job = await pool.query(Support_Answer_form);
    console.log('Create table Support_Answer_form Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_support_form = async (req, res, next) => {
  try {
    const job = await pool.query(support_form);
    console.log('Create table support_form Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Forum_Form = async (req, res, next) => {
  try {
    const job = await pool.query(Forum_Form);
    console.log('Create table Forum_Form Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Edit_history = async (req, res, next) => {
  try {
    const job = await pool.query(Edit_history);
    console.log('Create table Edit_history Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Forum_Answer_from = async (req, res, next) => {
  try {
    const job = await pool.query(Forum_Answer_from);
    console.log('Create table Forum_Answer_from Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Sub_category = async (req, res, next) => {
  try {
    const job = await pool.query(Sub_category);
    console.log('Create table Sub_category Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Forum_Type = async (req, res, next) => {
  try {
    const job = await pool.query(Forum_Type);
    console.log('Create table Forum_Type Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Category_Type = async (req, res, next) => {
  try {
    const job = await pool.query(Category_Type);
    console.log('Create table Category_Type Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};