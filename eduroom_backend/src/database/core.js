const pool = require('../database/db')

const User_Profile = `

CREATE TABLE IF NOT EXISTS User_Profile
(
 userId      uuid NOT NULL,
 firstName   varchar(50) NOT NULL,
 lastName    varchar(50) NOT NULL,
 birthDate   date NOT NULL,
 initial     varchar(10) NOT NULL,
 phoneNo     varchar(10) NOT NULL,
 countryCode varchar(5) NOT NULL,
 displayName varchar(25) NOT NULL,
 bio         varchar(255) NOT NULL,
 avatar      path NOT NULL,
 isStudent   boolean NOT NULL,
 createAt    timestamp NOT NULL,
 updateAt    timestamp NOT NULL,
 CONSTRAINT PK_profile PRIMARY KEY ( userId )
);

`
const User_MyCourse = `

CREATE TABLE IF NOT EXISTS User_MyCourse
(
 userId     uuid NOT NULL,
 addTime    timestamp NOT NULL,
 lastVisit  timestamp NOT NULL,
 isFinished boolean NOT NULL,
 courseId   uuid NOT NULL,
 CONSTRAINT PK_mycourse PRIMARY KEY ( userId, courseId ),
 CONSTRAINT FK_1063 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId ),
 CONSTRAINT FK_3855 FOREIGN KEY ( courseId ) REFERENCES Course ( courseId )
);

CREATE INDEX fkIdx_1063 ON User_MyCourse
(
 userId
);

CREATE INDEX fkIdx_3855 ON User_MyCourse
(
 courseId
);

`
const User_Wishlist = `

CREATE TABLE IF NOT EXISTS User_Wishlist
(
 userId   uuid NOT NULL,
 courseId uuid NOT NULL,
 addTime  timestamp NOT NULL,
 CONSTRAINT PK_wishlist PRIMARY KEY ( userId, courseId ),
 CONSTRAINT FK_1060 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId ),
 CONSTRAINT FK_2088 FOREIGN KEY ( courseId ) REFERENCES Course ( courseId )
);

CREATE INDEX fkIdx_1060 ON User_Wishlist
(
 userId
);

CREATE INDEX fkIdx_2088 ON User_Wishlist
(
 courseId
);

`
const User_Verification = `

CREATE TABLE IF NOT EXISTS User_Verification
(
 userId     uuid NOT NULL,
 startTime  timestamp NOT NULL,
 endTime    timestamp NOT NULL,
 token      varchar(255) NOT NULL,
 isVerified boolean NOT NULL,
 CONSTRAINT PK_verifyingtime PRIMARY KEY ( userId ),
 CONSTRAINT FK_1057 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_1057 ON User_Verification
(
 userId
);

`
const User_Address = `

CREATE TABLE IF NOT EXISTS User_Address
(
 userId      uuid NOT NULL,
 addressNo   varchar(100) NOT NULL,
 building    varchar(50) NOT NULL,
 soi         varchar(50) NOT NULL,
 road        varchar(50) NOT NULL,
 subDistrict varchar(50) NOT NULL,
 district    varchar(50) NOT NULL,
 province    varchar(50) NOT NULL,
 zipCode     varchar(50) NOT NULL,
 country     varchar(50) NOT NULL,
 createAt    timestamp NOT NULL,
 updateAt    timestamp NOT NULL,
 CONSTRAINT PK_country PRIMARY KEY ( userId ),
 CONSTRAINT FK_3447 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_3447 ON User_Address
(
 userId
);

`
const User_loginLog = `

CREATE TABLE IF NOT EXISTS User_loginLog
(
 userId    uuid NOT NULL,
 loginTime timestamp NOT NULL,
 ip        varchar(15) NOT NULL,
 browser   varchar(50) NOT NULL,
 CONSTRAINT PK_user_loginlog PRIMARY KEY ( userId, loginTime ),
 CONSTRAINT FK_3467 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_3467 ON User_loginLog
(
 userId
);

`
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

`
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

`
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

`
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

`
const Course_Section = `

CREATE TABLE IF NOT EXISTS Course_Section
(
 courseId    uuid NOT NULL,
 sectionNo   int NOT NULL,
 sectionName varchar(50) NOT NULL,
 CONSTRAINT PK_section PRIMARY KEY ( courseId, sectionNo ),
 CONSTRAINT FK_1317 FOREIGN KEY ( courseId ) REFERENCES Course ( courseId )
);
CREATE INDEX fkIdx_1317 ON Course_Section
(
 courseId
);

`
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

`
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

`
const Categories = `

CREATE TABLE IF NOT EXISTS Categories
(
 cataId   int NOT NULL,
 cataName varchar(50) NOT NULL,
 CONSTRAINT PK_categories PRIMARY KEY ( cataId )
);


`
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

`
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

`
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

`
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

`
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

`
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

`
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

`
const Instructor = `

CREATE TABLE IF NOT EXISTS Instructor
(
 InstructorId uuid NOT NULL,
 userId       uuid NOT NULL,
 isVerified   boolean NOT NULL,
 createAt     timestamp NOT NULL,
 approveAt    timestamp NULL,
 approver     uuid NOT NULL,
 CONSTRAINT PK_instructor_information PRIMARY KEY ( InstructorId )
);

`
const Instructor_Finance = `

CREATE TABLE IF NOT EXISTS Instructor_Finance
(
 InstructorId uuid NOT NULL,
 accountName  varchar(100) NOT NULL,
 accountNo    varchar(25) NOT NULL,
 accountBank  varchar(100) NOT NULL,
 CONSTRAINT PK_instructor_finance PRIMARY KEY ( InstructorId ),
 CONSTRAINT FK_3770 FOREIGN KEY ( InstructorId ) REFERENCES Instructor ( InstructorId )
);

CREATE INDEX fkIdx_3770 ON Instructor_Finance
(
 InstructorId
);

`
const Instructor_degree = `

CREATE TABLE IF NOT EXISTS Instructor_degree
(
 InstructorId uuid NOT NULL,
 degreeNumber int NOT NULL,
 degree_name  varchar(50) NOT NULL,
 evidence     path NOT NULL,
 date         timestamp NOT NULL,
 CONSTRAINT PK_instructor_degree PRIMARY KEY ( InstructorId, degreeNumber ),
 CONSTRAINT FK_125 FOREIGN KEY ( InstructorId ) REFERENCES Instructor ( InstructorId )
);

CREATE INDEX fkIdx_125 ON Instructor_degree
(
 InstructorId
);

`
const Instructor_expert = `

CREATE TABLE IF NOT EXISTS Instructor_expert
(
 InstructorId uuid NOT NULL,
 expertNumber int NOT NULL,
 subjectName  varchar(50) NOT NULL,
 evidence     path NULL,
 date         timestamp NOT NULL,
 CONSTRAINT PK_instructor_expert PRIMARY KEY ( InstructorId, expertNumber ),
 CONSTRAINT FK_117 FOREIGN KEY ( InstructorId ) REFERENCES Instructor ( InstructorId )
);

CREATE INDEX fkIdx_117 ON Instructor_expert
(
 InstructorId
);

`
const Local_Auth = `

CREATE TABLE IF NOT EXISTS Local_Auth
(
 userId   uuid NOT NULL,
 email    varchar(50) NOT NULL,
 password varchar(255) NOT NULL,
 CONSTRAINT PK_local_auth PRIMARY KEY ( userId ),
 CONSTRAINT FK_3432 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_3432 ON Local_Auth
(
 userId
);

`

const OAuth = `

CREATE TABLE IF NOT EXISTS OAuth
(
 email  varchar(50) NOT NULL,
 token  varchar(255) NOT NULL,
 userId uuid NOT NULL,
 CONSTRAINT PK_oauth PRIMARY KEY ( userId ),
 CONSTRAINT FK_3425 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_3425 ON OAuth
(
 userId
);

`

const Admin_Login = `

CREATE TABLE IF NOT EXISTS Admin_Login
(
 adminId     uuid NOT NULL,
 username    varchar(50) NOT NULL,
 password    varchar(255) NOT NULL,
 firstName   varchar(50) NOT NULL,
 lastname    varchar(50) NOT NULL,
 displayname varchar(50) NOT NULL,
 avatar      path NOT NULL,
 role        varchar(10) NOT NULL,
 CONSTRAINT PK_admin_login PRIMARY KEY ( adminId ),
 CONSTRAINT ind_3813 UNIQUE ( username )
);

`
exports.createCoreTable = async () => {
  try {
    await createTable_User_Profile()
    await createTable_Local_Auth()
    await createTable_OAuth()
    await createTable_Admin_Login()
    await createTable_User_Address()
    await createTable_Categories()
    await createTable_Instructor()
    await createTable_Instructor_Finance()
    await createTable_Instructor_degree()
    await createTable_Instructor_expert()
    await createTable_Course()
    await createTable_User_MyCourse()
    await createTable_User_Verification()
    await createTable_User_Wishlist()
    await createTable_User_loginLog()
    await createTable_Course_Collaborator()
    await createTable_Course_Log()
    await createTable_Course_Section()
    await createTable_Section_Part()
    await createTable_Course_Quiz()
    await createTable_Course_Section_Part_Material()
    await createTable_Course_Section_Part_Video()
    await createTable_Course_categories()
    await createTable_Quiz_Question()
    await createTable_Quiz_Question_Choice()
    await createTable_Quiz_Question_Answer()
    await createTable_Quiz_Correct_Choice()
    await createTable_User_Interact_Part()
    console.log('Create Core Table Successfully')
  } catch (err) {
    console.error(err)
  }
}
const createTable_Local_Auth = async () => {
    try {
      const job = await pool.query(Local_Auth)
      console.log('Create table Local_Auth Successfully')
    } catch (err) {
      console.error(err)
    }
  }
  
  const createTable_OAuth = async () => {
    try {
      const job = await pool.query(OAuth)
      console.log('Create table OAuth Successfully')
    } catch (err) {
      console.error(err)
    }
  }
  
  const createTable_Admin_Login = async () => {
    try {
      const job = await pool.query(Admin_Login)
      console.log('Create table Admin_Login Successfully')
    } catch (err) {
      console.error(err)
    }
  }
  
const createTable_User_Profile = async () => {
  try {
    const job = await pool.query(User_Profile)
    console.log('Create table User_Profile Successfully')
  } catch (err) {
    console.error(err)
  }
}
const createTable_User_MyCourse = async () => {
  try {
    const job = await pool.query(User_MyCourse)
    console.log('Create table User_MyCourse Successfully')
  } catch (err) {
    console.error(err)
  }
}
const createTable_User_Wishlist = async () => {
  try {
    const job = await pool.query(User_Wishlist)
    console.log('Create table User_Wishlist Successfully')
  } catch (err) {
    console.error(err)
  }
}
const createTable_User_Verification = async () => {
  try {
    const job = await pool.query(User_Verification)
    console.log('Create table User_Verification Successfully')
  } catch (err) {
    console.error(err)
  }
}
const createTable_User_Address = async () => {
  try {
    const job = await pool.query(User_Address)
    console.log('Create table User_Address Successfully')
  } catch (err) {
    console.error(err)
  }
}
const createTable_User_loginLog = async () => {
  try {
    const job = await pool.query(User_loginLog)
    console.log('Create table User_loginLog Successfully')
  } catch (err) {
    console.error(err)
  }
}
const createTable_Course_Section_Part_Material = async () => {
    try {
      const job = await pool.query(Course_Section_Part_Material)
      console.log('Create table Course_Section_Part_Material Successfully')
    } catch (err) {
      console.error(err)
    }
  }
  const createTable_User_Interact_Part = async () => {
    try {
      const job = await pool.query(User_Interact_Part)
      console.log('Create table User_Interact_Part Successfully')
    } catch (err) {
      console.error(err)
    }
  }
  const createTable_Course_Section_Part_Video = async () => {
    try {
      const job = await pool.query(Course_Section_Part_Video)
      console.log('Create table Course_Section_Part_Video Successfully')
    } catch (err) {
      console.error(err)
    }
  }
  const createTable_Section_Part = async () => {
    try {
      const job = await pool.query(Section_Part)
      console.log('Create table Section_Part Successfully')
    } catch (err) {
      console.error(err)
    }
  }
  const createTable_Course_Section = async () => {
    try {
      const job = await pool.query(Course_Section)
      console.log('Create table Course_Section Successfully')
    } catch (err) {
      console.error(err)
    }
  }
  const createTable_Course_Quiz = async () => {
    try {
      const job = await pool.query(Course_Quiz)
      console.log('Create table Course_Quiz Successfully')
    } catch (err) {
      console.error(err)
    }
  }
  const createTable_Course_categories = async () => {
    try {
      const job = await pool.query(Course_categories)
      console.log('Create table Course_categories Successfully')
    } catch (err) {
      console.error(err)
    }
  }
  const createTable_Categories = async () => {
    try {
      const job = await pool.query(Categories)
      console.log('Create table Categories Successfully')
    } catch (err) {
      console.error(err)
    }
  }
  const createTable_Course = async () => {
    try {
      const job = await pool.query(Course)
      console.log('Create table Course Successfully')
    } catch (err) {
      console.error(err)
    }
  }
  const createTable_Course_Collaborator = async () => {
    try {
      const job = await pool.query(Course_Collaborator)
      console.log('Create table Course_Collaborator Successfully')
    } catch (err) {
      console.error(err)
    }
  }
  const createTable_Quiz_Question = async () => {
    try {
      const job = await pool.query(Quiz_Question)
      console.log('Create table Quiz_Question Successfully')
    } catch (err) {
      console.error(err)
    }
  }
  const createTable_Quiz_Question_Answer = async () => {
    try {
      const job = await pool.query(Quiz_Question_Answer)
      console.log('Create table Quiz_Question_Answer Successfully')
    } catch (err) {
      console.error(err)
    }
  }
  const createTable_Course_Log = async () => {
    try {
      const job = await pool.query(Course_Log)
      console.log('Create table Course_Log Successfully')
    } catch (err) {
      console.error(err)
    }
  }
  const createTable_Quiz_Question_Choice = async () => {
    try {
      const job = await pool.query(Quiz_Question_Choice)
      console.log('Create table Quiz_Question_Choice Successfully')
    } catch (err) {
      console.error(err)
    }
  }
  const createTable_Quiz_Correct_Choice = async () => {
    try {
      const job = await pool.query(Quiz_Correct_Choice)
      console.log('Create table Quiz_Correct_Choice Successfully')
    } catch (err) {
      console.error(err)
    }
  }
  const createTable_Instructor = async () => {
    try {
      const job = await pool.query(Instructor)
      console.log('Create table Instructor Successfully')
    } catch (err) {
      console.error(err)
    }
  }
  const createTable_Instructor_Finance = async () => {
    try {
      const job = await pool.query(Instructor_Finance)
      console.log('Create table Instructor_Finance Successfully')
    } catch (err) {
      console.error(err)
    }
  }
  const createTable_Instructor_degree = async () => {
    try {
      const job = await pool.query(Instructor_degree)
      console.log('Create table Instructor_degree Successfully')
    } catch (err) {
      console.error(err)
    }
  }
  const createTable_Instructor_expert = async () => {
    try {
      const job = await pool.query(Instructor_expert)
      console.log('Create table Instructor_expert Successfully')
    } catch (err) {
      console.error(err)
    }
  }
  