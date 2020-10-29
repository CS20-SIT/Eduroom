const pool = require('../database/db');

const Course_Section_Part_Material = `

CREATE TABLE IF NOT EXISTS Course_Section_Part_Material
(
 courseId     uuid NOT NULL,
 materialPath path NOT NULL,
 sectionNo    int NOT NULL,
 partNo       int NOT NULL,
 CONSTRAINT PK_course_section_part_material PRIMARY KEY ( courseId, sectionNo, partNo ),
 CONSTRAINT FK_3544 FOREIGN KEY ( courseId, sectionNo, partNo ) REFERENCES Section_Part ( courseId, sectionNo, partNo )
);

CREATE INDEX fkIdx_3544 ON Course_Section_Part_Material
(
 courseId,
 sectionNo,
 partNo
);

`;
const User_Interact_Part = `

CREATE TABLE IF NOT EXISTS User_Interact_Part
(
 userId      uuid NOT NULL,
 courseId    uuid NOT NULL,
 sectionNo   int NOT NULL,
 partNo      int NOT NULL,
 isCompleted boolean NOT NULL,
 score       int NOT NULL,
 CONSTRAINT PK_user_interact_path PRIMARY KEY ( userId, courseId, sectionNo, partNo ),
 CONSTRAINT FK_3600 FOREIGN KEY ( courseId, sectionNo, partNo ) REFERENCES Section_Part ( courseId, sectionNo, partNo ),
 CONSTRAINT FK_3608 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_3600 ON User_Interact_Part
(
 courseId,
 sectionNo,
 partNo
);

CREATE INDEX fkIdx_3608 ON User_Interact_Part
(
 userId
);

`;
const Course_Section_Part_Video = `

CREATE TABLE IF NOT EXISTS Course_Section_Part_Video
(
 courseId  uuid NOT NULL,
 videoPath path NOT NULL,
 sectionNo int NOT NULL,
 partNo    int NOT NULL,
 CONSTRAINT PK_course_section_part_video PRIMARY KEY ( courseId, sectionNo, partNo ),
 CONSTRAINT FK_3538 FOREIGN KEY ( courseId, sectionNo, partNo ) REFERENCES Section_Part ( courseId, sectionNo, partNo )
);

CREATE INDEX fkIdx_3538 ON Course_Section_Part_Video
(
 courseId,
 sectionNo,
 partNo
);

`;
const Section_Part = `

CREATE TABLE IF NOT EXISTS Section_Part
(
 courseId        uuid NOT NULL,
 sectionNo       int NOT NULL,
 partNo          int NOT NULL,
 partName        varchar(50) NOT NULL,
 partDescription varchar(255) NOT NULL,
 partRole        varchar(10) NOT NULL,
 CONSTRAINT PK_part PRIMARY KEY ( courseId, sectionNo, partNo ),
 CONSTRAINT FK_1320 FOREIGN KEY ( courseId, sectionNo ) REFERENCES Course_Section ( courseId, sectionNo )
);

CREATE INDEX fkIdx_1320 ON Section_Part
(
 courseId,
 sectionNo
);

`;
const Course_Section = `

CREATE TABLE IF NOT EXISTS Course_Section_Part_Video
(
 courseId  uuid NOT NULL,
 videoPath path NOT NULL,
 sectionNo int NOT NULL,
 partNo    int NOT NULL,
 CONSTRAINT PK_course_section_part_video PRIMARY KEY ( courseId, sectionNo, partNo ),
 CONSTRAINT FK_3538 FOREIGN KEY ( courseId, sectionNo, partNo ) REFERENCES Section_Part ( courseId, sectionNo, partNo )
);

CREATE INDEX fkIdx_3538 ON Course_Section_Part_Video
(
 courseId,
 sectionNo,
 partNo
);

`;
const Course_Quiz = `

CREATE TABLE IF NOT EXISTS Course_Quiz
(
 courseId  uuid NOT NULL,
 quizId    uuid NOT NULL,
 sectionNo int NOT NULL,
 partNo    int NOT NULL,
 CONSTRAINT PK_quiz PRIMARY KEY ( quizId ),
 CONSTRAINT ind_3565 UNIQUE ( courseId, partNo, sectionNo ),
 CONSTRAINT FK_3528 FOREIGN KEY ( courseId, sectionNo, partNo ) REFERENCES Section_Part ( courseId, sectionNo, partNo )
);

CREATE INDEX fkIdx_3528 ON Course_Quiz
(
 courseId,
 sectionNo,
 partNo
);

`;
const Course_categories = `

CREATE TABLE IF NOT EXISTS Course_categories
(
 courseId uuid NOT NULL,
 cataId   int NOT NULL,
 CONSTRAINT PK_course_catagories PRIMARY KEY ( courseId, cataId ),
 CONSTRAINT FK_3501 FOREIGN KEY ( courseId ) REFERENCES Course ( courseId ),
 CONSTRAINT FK_3505 FOREIGN KEY ( cataId ) REFERENCES Categories ( cataId )
);

CREATE INDEX fkIdx_3501 ON Course_categories
(
 courseId
);

CREATE INDEX fkIdx_3505 ON Course_categories
(
 cataId
);

`;
const Categories = `

CREATE TABLE IF NOT EXISTS Categories
(
 cataId   int NOT NULL,
 cataName varchar(50) NOT NULL,
 CONSTRAINT PK_categories PRIMARY KEY ( cataId )
);


`;
const Course = `

CREATE TABLE IF NOT EXISTS Course
(
 courseId          uuid NOT NULL,
 courseName        varchar(50) NOT NULL,
 courseDescription varchar(1000) NOT NULL,
 coursePicture     path NOT NULL,
 sampleVideo       path NOT NULL,
 price             decimal(18,2) NOT NULL,
 language          varchar(50) NOT NULL,
 certificate       boolean NOT NULL,
 ownerID           uuid NOT NULL,
 CONSTRAINT PK_table_5 PRIMARY KEY ( courseId ),
 CONSTRAINT FK_3859 FOREIGN KEY ( ownerID ) REFERENCES Instructor ( InstructorId )
);

CREATE INDEX fkIdx_3859 ON Course
(
 ownerID
);

`;
const Course_Collaborator = `

CREATE TABLE IF NOT EXISTS Course_Collaborator
(
 courseId     uuid NOT NULL,
 InstructorId uuid NOT NULL,
 CONSTRAINT PK_teacher PRIMARY KEY ( courseId, InstructorId ),
 CONSTRAINT FK_1348 FOREIGN KEY ( courseId ) REFERENCES Course ( courseId ),
 CONSTRAINT FK_2085 FOREIGN KEY ( InstructorId ) REFERENCES Instructor ( InstructorId )
);

CREATE INDEX fkIdx_1348 ON Course_Collaborator
(
 courseId
);

CREATE INDEX fkIdx_2085 ON Course_Collaborator
(
 InstructorId
);

`;
const Quiz_Question = `

CREATE TABLE IF NOT EXISTS Quiz_Question
(
 quizId       uuid NOT NULL,
 questionNo   int NOT NULL,
 questionName varchar(255) NOT NULL,
 questionType varchar(15) NOT NULL,
 score        int NOT NULL,
 CONSTRAINT PK_quiz_question PRIMARY KEY ( quizId, questionNo ),
 CONSTRAINT FK_3570 FOREIGN KEY ( quizId ) REFERENCES Course_Quiz ( quizId )
);

CREATE INDEX fkIdx_3570 ON Quiz_Question
(
 quizId
);

`;
const Quiz_Question_Answer = `

CREATE TABLE IF NOT EXISTS Quiz_Question_Answer
(
 quizId        uuid NOT NULL,
 correctAnswer varchar(255) NOT NULL,
 questionNo    int NOT NULL,
 CONSTRAINT PK_quiz_question_answer PRIMARY KEY ( quizId, questionNo ),
 CONSTRAINT FK_3592 FOREIGN KEY ( quizId, questionNo ) REFERENCES Quiz_Question ( quizId, questionNo )
);

CREATE INDEX fkIdx_3592 ON Quiz_Question_Answer
(
 quizId,
 questionNo
);

`;
const Course_Log = `

CREATE TABLE IF NOT EXISTS Course_Log
(
 courseId     uuid NOT NULL,
 logTime      timestamp NOT NULL,
 status       varchar(50) NOT NULL,
 InstructorId uuid NULL,
 adminId      uuid NULL,
 type         varchar(10) NOT NULL,
 CONSTRAINT PK_course_log PRIMARY KEY ( courseId, logTime ),
 CONSTRAINT FK_3489 FOREIGN KEY ( courseId ) REFERENCES Course ( courseId ),
 CONSTRAINT FK_3495 FOREIGN KEY ( InstructorId ) REFERENCES Instructor ( InstructorId ),
 CONSTRAINT FK_3849 FOREIGN KEY ( adminId ) REFERENCES Admin_Login ( adminId )
);

CREATE INDEX fkIdx_3489 ON Course_Log
(
 courseId
);

CREATE INDEX fkIdx_3495 ON Course_Log
(
 InstructorId
);

CREATE INDEX fkIdx_3849 ON Course_Log
(
 adminId
);

`;
const Quiz_Question_Choice = `

CREATE TABLE IF NOT EXISTS Quiz_Question_Choice
(
 quizId     uuid NOT NULL,
 choiceName varchar(255) NOT NULL,
 questionNo int NOT NULL,
 choiceNo   int NOT NULL,
 CONSTRAINT PK_quiz_question_choice PRIMARY KEY ( quizId, questionNo, choiceNo ),
 CONSTRAINT FK_3576 FOREIGN KEY ( quizId, questionNo ) REFERENCES Quiz_Question ( quizId, questionNo )
);

CREATE INDEX fkIdx_3576 ON Quiz_Question_Choice
(
 quizId,
 questionNo
);

`;
const Quiz_Correct_Choice = `

CREATE TABLE IF NOT EXISTS Quiz_Correct_Choice
(
 quizId     uuid NOT NULL,
 questionNo int NOT NULL,
 choiceNo   int NOT NULL,
 CONSTRAINT PK_quiz_correct_choice PRIMARY KEY ( quizId, questionNo, choiceNo ),
 CONSTRAINT FK_3584 FOREIGN KEY ( quizId, questionNo, choiceNo ) REFERENCES Quiz_Question_Choice ( quizId, questionNo, choiceNo )
);

CREATE INDEX fkIdx_3584 ON Quiz_Correct_Choice
(
 quizId,
 questionNo,
 choiceNo
);

`;

exports.createG11Table = async (req, res) => {
  try{
    await createTable_Categories;
    await createTable_Course;
    await createTable_Course_Collaborator;
    await createTable_Course_Log;
    await createTable_Course_Quiz;
    await createTable_Course_Section;
    await createTable_Course_Section_Part_Material;
    await createTable_Course_Section_Part_Video;
    await createTable_Course_categories;
    await createTable_Quiz_Correct_Choice;
    await createTable_Quiz_Question;
    await createTable_Quiz_Question_Answer;
    await createTable_Quiz_Question_Choice;
    await createTable_Section_Part;
    await createTable_User_Interact_Part;
    console.log('Create G11 Table Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }

}

const createTable_Course_Section_Part_Material = async (req, res, next) => {
    try {
      const job = await pool.query(Course_Section_Part_Material);
      console.log('Create table Course_Section_Part_Material Successfully');
    } catch (err) {
      console.error(err.stack.red);
    }
};
const createTable_User_Interact_Part = async (req, res, next) => {
  try {
    const job = await pool.query(User_Interact_Part);
    console.log('Create table User_Interact_Part Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Course_Section_Part_Video = async (req, res, next) => {
  try {
    const job = await pool.query(Course_Section_Part_Video);
    console.log('Create table Course_Section_Part_Video Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Section_Part = async (req, res, next) => {
  try {
    const job = await pool.query(Section_Part);
    console.log('Create table Section_Part Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Course_Section = async (req, res, next) => {
  try {
    const job = await pool.query(Course_Section);
    console.log('Create table Course_Section Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Course_Quiz = async (req, res, next) => {
  try {
    const job = await pool.query(Course_Quiz);
    console.log('Create table Course_Quiz Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Course_categories = async (req, res, next) => {
  try {
    const job = await pool.query(Course_categories);
    console.log('Create table Course_categories Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Categories = async (req, res, next) => {
  try {
    const job = await pool.query(Categories);
    console.log('Create table Categories Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Course = async (req, res, next) => {
  try {
    const job = await pool.query(Course);
    console.log('Create table Course Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Course_Collaborator = async (req, res, next) => {
  try {
    const job = await pool.query(Course_Collaborator);
    console.log('Create table Course_Collaborator Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Quiz_Question = async (req, res, next) => {
  try {
    const job = await pool.query(Quiz_Question);
    console.log('Create table Quiz_Question Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Quiz_Question_Answer = async (req, res, next) => {
  try {
    const job = await pool.query(Quiz_Question_Answer);
    console.log('Create table Quiz_Question_Answer Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Course_Log = async (req, res, next) => {
  try {
    const job = await pool.query(Course_Log);
    console.log('Create table Course_Log Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Quiz_Question_Choice = async (req, res, next) => {
  try {
    const job = await pool.query(Quiz_Question_Choice);
    console.log('Create table Quiz_Question_Choice Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Quiz_Correct_Choice = async (req, res, next) => {
  try {
    const job = await pool.query(Quiz_Correct_Choice);
    console.log('Create table Quiz_Correct_Choice Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};