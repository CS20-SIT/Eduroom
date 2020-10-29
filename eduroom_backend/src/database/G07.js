const pool = require('../database/db');

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

`;
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

`;
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

`;
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

`;

exports.createG07Table = async (req, res) => {
  try{
    await createTable_Instructor;
    await createTable_Instructor_Finance;
    await createTable_Instructor_degree;
    await createTable_Instructor_expert;
    console.log('Create G07 Table Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }

}

const createTable_Instructor = async (req, res, next) => {
    try {
      const job = await pool.query(Instructor);
      console.log('Create table Instructor Successfully');
    } catch (err) {
      console.error(err.stack.red);
    }
};
const createTable_Instructor_Finance = async (req, res, next) => {
  try {
    const job = await pool.query(Instructor_Finance);
    console.log('Create table Instructor_Finance Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Instructor_degree = async (req, res, next) => {
  try {
    const job = await pool.query(Instructor_degree);
    console.log('Create table Instructor_degree Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Instructor_expert = async (req, res, next) => {
  try {
    const job = await pool.query(Instructor_expert);
    console.log('Create table Instructor_expert Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};