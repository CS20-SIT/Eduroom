const pool = require('../database/db');

const package = `

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

const packageCourses = `

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

const reviewCourses = `

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



exports.createG04Table = async (req, res) => {
  try{
    await createTable_package
    await createTable_packageCourses
    await createTable_reviewCourses
    console.log('Create G13 Table Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }

}

const createTable_package = async (req, res, next) => {
    try {
      const job = await pool.query(package);
      console.log('Create package Successfully');
    } catch (err) {
      console.error(err.stack.red);
    }
};

const createTable_packageCourses = async (req, res, next) => {
  try {
    const job = await pool.query(packageCourses);
    console.log('Create package_Courses Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};

const createTable_reviewCourses= async (req, res, next) => {
  try {
    const job = await pool.query(reviewCourses);
    console.log('Create review_Courses Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};