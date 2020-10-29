const pool = require('../database/db');

const Package = `

CREATE TABLE IF NOT EXISTS Package
(
 packageId    uuid NOT NULL,
 packageName  char(50) NOT NULL,
 InstructorId uuid NOT NULL,
 discount     decimal(18,2) NOT NULL,
 isPublic     boolean NOT NULL,
 CONSTRAINT PK_package PRIMARY KEY ( packageId ),
 CONSTRAINT FK_3630 FOREIGN KEY ( InstructorId ) REFERENCES Instructor ( InstructorId )
);

CREATE INDEX fkIdx_3630 ON Package
(
 InstructorId
);

`;

const Package_courses = `

CREATE TABLE IF NOT EXISTS Package_courses
(
 packageId uuid NOT NULL,
 courseId  uuid NOT NULL,
 CONSTRAINT PK_package_courses PRIMARY KEY ( packageId, courseId ),
 CONSTRAINT FK_3618 FOREIGN KEY ( courseId ) REFERENCES Course ( courseId ),
 CONSTRAINT FK_466 FOREIGN KEY ( packageId ) REFERENCES Package ( packageId )
);

CREATE INDEX fkIdx_3618 ON Package_courses
(
 courseId
);

CREATE INDEX fkIdx_466 ON Package_courses
(
 packageId
);

`;

const Review_course = `

CREATE TABLE IF NOT EXISTS Review_course
(
 userId     uuid NOT NULL,
 courseId   uuid NOT NULL,
 reviewRate decimal(2,1) NOT NULL,
 comment    char(5000) NOT NULL,
 date       date NOT NULL,
 CONSTRAINT PK_review PRIMARY KEY ( userId, courseId ),
 CONSTRAINT FK_2945 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId ),
 CONSTRAINT FK_3621 FOREIGN KEY ( courseId ) REFERENCES Course ( courseId )
);

CREATE INDEX fkIdx_2945 ON Review_course
(
 userId
);

CREATE INDEX fkIdx_3621 ON Review_course
(
 courseId
);

`;


const User_SearchHistory = `

CREATE TABLE IF NOT EXISTS User_SearchHistory
(
 userId     uuid NOT NULL,
 keyword    varchar(50) NOT NULL,
 searchTime timestamp NOT NULL,
 CONSTRAINT PK_user_searchhistory PRIMARY KEY ( userId, keyword ),
 CONSTRAINT FK_3463 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_3463 ON User_SearchHistory
(
 userId
);


`;



exports.createG13Table = async (req, res) => {
  try{
    await createTable_Package;
    await createTable_Package_courses;
    await createTable_Review_course;
    await createTable_User_SearchHistory
    console.log('Create ALL G13 Tables Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }

}

const createTable_Package = async (req, res, next) => {
    try {
      const job = await pool.query(Package);
      console.log('Create table Package Successfully');
    } catch (err) {
      console.error(err.stack.red);
    }
};

const createTable_Package_courses = async (req, res, next) => {
  try {
    const job = await pool.query(Package_courses);
    console.log('Create table Package_courses Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};

const createTable_Review_course = async (req, res, next) => {
  try {
    const job = await pool.query(Review_course);
    console.log('Create table Review_course Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_User_SearchHistory = async (req, res, next) => {
  try {
    const job = await pool.query(User_SearchHistory);
    console.log('Create table User_SearchHistory Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};