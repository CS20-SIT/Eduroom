const pool = require('../database/db')

const Instructor_Availabilities = `

CREATE TABLE IF NOT EXISTS Instructor_Availabilities
(
 InstructorId uuid NOT NULL,
 day          varchar(50) NOT NULL,
 time         time NOT NULL,
 price        decimal(18,2) NOT NULL,
 CONSTRAINT PK_instructor_availabilities PRIMARY KEY ( InstructorId, day, time ),
 CONSTRAINT FK_4059 FOREIGN KEY ( InstructorId ) REFERENCES Instructor ( InstructorId )
);

CREATE INDEX fkIdx_4059 ON Instructor_Availabilities
(
 InstructorId
);

`
const Instructor_Appointments = `

CREATE TABLE IF NOT EXISTS Instructor_Appointments
(
 iAppointmentId int NOT NULL,
 startTime      timestamp NOT NULL,
 endTime        timestamp NOT NULL,
 status         boolean NULL,
 price          decimal(18,2) NOT NULL,
 paymentDue     timestamp NULL,
 approveTime    timestamp NOT NULL,
 isPaid         boolean NOT NULL,
 InstructorId   uuid NOT NULL,
 CONSTRAINT PK_instructor_appointments PRIMARY KEY ( iAppointmentId ),
 CONSTRAINT FK_4065 FOREIGN KEY ( InstructorId ) REFERENCES Instructor ( InstructorId )
);

CREATE INDEX fkIdx_4065 ON Instructor_Appointments
(
 InstructorId
);

`
const Instructor_Appointment_Members = `

CREATE TABLE IF NOT EXISTS Instructor_Appointment_Members
(
 iAppointmentId int NOT NULL,
 userId         uuid NOT NULL,
 score          int NULL,
 description    varchar(255) NULL,
 CONSTRAINT PK_instructor_appointment_members PRIMARY KEY ( iAppointmentId, userId ),
 CONSTRAINT FK_4062 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId ),
 CONSTRAINT FK_55 FOREIGN KEY ( iAppointmentId ) REFERENCES Instructor_Appointments ( iAppointmentId )
);
CREATE INDEX fkIdx_4062 ON Instructor_Appointment_Members
(
 userId
);
CREATE INDEX fkIdx_55 ON Instructor_Appointment_Members
(
 iAppointmentId
);

`
const Student_Appointments = `

CREATE TABLE IF NOT EXISTS Student_Appointments
(
 sAppointmentId int NOT NULL,
 userId         uuid NOT NULL,
 subject        varchar(50) NOT NULL,
 startTime      timestamp NOT NULL,
 endTime        timestamp NOT NULL,
 status         boolean NOT NULL,
 paymentDue     timestamp NULL,
 isPaid         boolean NOT NULL,
 CONSTRAINT PK_student_instructor_availabilities PRIMARY KEY ( sAppointmentId ),
 CONSTRAINT FK_4053 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);
CREATE INDEX fkIdx_4053 ON Student_Appointments
(
 userId
);

`
const Student_Appointment_Instructor = `

CREATE TABLE IF NOT EXISTS Student_Appointment_Instructor
(
 sAppointmentId int NOT NULL,
 status         boolean NOT NULL,
 requestTime    timestamp NOT NULL,
 approveTime    timestamp NOT NULL,
 price          decimal(18,2) NOT NULL,
 InstructorId   uuid NOT NULL,
 CONSTRAINT PK_student_appointment_instructor PRIMARY KEY ( sAppointmentId, InstructorId ),
 CONSTRAINT FK_4068 FOREIGN KEY ( InstructorId ) REFERENCES Instructor ( InstructorId ),
 CONSTRAINT FK_61 FOREIGN KEY ( sAppointmentId ) REFERENCES Student_Appointments ( sAppointmentId )
);

CREATE INDEX fkIdx_4068 ON Student_Appointment_Instructor
(
 InstructorId
);

CREATE INDEX fkIdx_61 ON Student_Appointment_Instructor
(
 sAppointmentId
);

`
const Student_Appointment_Members = `

CREATE TABLE IF NOT EXISTS Student_Appointment_Members
(
 sAppointmentId int NOT NULL,
 userId         uuid NOT NULL,
 CONSTRAINT PK_student_instructor_appointment_members PRIMARY KEY ( sAppointmentId, userId ),
 CONSTRAINT FK_4056 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId ),
 CONSTRAINT FK_58 FOREIGN KEY ( sAppointmentId ) REFERENCES Student_Appointments ( sAppointmentId )
);

CREATE INDEX fkIdx_4056 ON Student_Appointment_Members
(
 userId
);

CREATE INDEX fkIdx_58 ON Student_Appointment_Members
(
 sAppointmentId
);

`

exports.createG01Table = async () => {
  try {
    await createTable_Instructor_Availabilities()
    await createTable_Instructor_Appointments()
    await createTable_Instructor_Appointment_Members()
    await createTable_Student_Appointments()
    await createTable_Student_Appointment_Instructor()
    await createTable_Student_Appointment_Members()
    console.log('Create G01 Table Successfully')
  } catch (err) {
    console.error(err)
  }
}

const createTable_Instructor_Availabilities = async () => {
  try {
    const job = await pool.query(Instructor_Availabilities)
    console.log('Create table Instructor_Availabilities Successfully')
  } catch (err) {
    console.error(err)
  }
}
const createTable_Instructor_Appointments = async () => {
  try {
    const job = await pool.query(Instructor_Appointments)
    console.log('Create table Instructor_Appointments Successfully')
  } catch (err) {
    console.error(err)
  }
}
const createTable_Instructor_Appointment_Members = async () => {
  try {
    const job = await pool.query(Instructor_Appointment_Members)
    console.log('Create table Instructor_Appointment_Members Successfully')
  } catch (err) {
    console.error(err)
  }
}
const createTable_Student_Appointments = async () => {
  try {
    const job = await pool.query(Student_Appointments)
    console.log('Create table Student_Appointments Successfully')
  } catch (err) {
    console.error(err)
  }
}
const createTable_Student_Appointment_Instructor = async () => {
  try {
    const job = await pool.query(Student_Appointment_Instructor)
    console.log('Create table Student_Appointment_Instructor Successfully')
  } catch (err) {
    console.error(err)
  }
}
const createTable_Student_Appointment_Members = async () => {
  try {
    const job = await pool.query(Student_Appointment_Members)
    console.log('Create table Student_Appointment_Members Successfully')
  } catch (err) {
    console.error(err)
  }
}
