const pool = require('../database/db');

const Instructor_Availabilities = `

CREATE TABLE IF NOT EXISTS "Instructor_Availabilities"
(
 "InstructorId" uuid NOT NULL,
 "day"          varchar(50) NOT NULL,
 "time"         time NOT NULL,
 "price"        decimal(18,2) NOT NULL,
 CONSTRAINT "PK_instructor_availabilities" PRIMARY KEY ( "InstructorId", "day", "time" ),
 CONSTRAINT "FK_4059" FOREIGN KEY ( "InstructorId" ) REFERENCES "Instructor" ( "InstructorId" )
);

CREATE INDEX "fkIdx_4059" ON "Instructor_Availabilities"
(
 "InstructorId"
);

`;
const Instructor_Appointments = `

CREATE TABLE IF NOT EXISTS "Instructor_Appointments"
(
 "iAppointmentId" int NOT NULL,
 "startTime"      timestamp NOT NULL,
 "endTime"        timestamp NOT NULL,
 "status"         boolean NULL,
 "price"          decimal(18,2) NOT NULL,
 "paymentDue"     timestamp NULL,
 "approveTime"    timestamp NOT NULL,
 "isPaid"         boolean NOT NULL,
 "InstructorId"   uuid NOT NULL,
 CONSTRAINT "PK_instructor_appointments" PRIMARY KEY ( "iAppointmentId" ),
 CONSTRAINT "FK_4065" FOREIGN KEY ( "InstructorId" ) REFERENCES "Instructor" ( "InstructorId" )
);

CREATE INDEX "fkIdx_4065" ON "Instructor_Appointments"
(
 "InstructorId"
);

`;
const Instructor_Appointment_Members = `

CREATE TABLE IF NOT EXISTS "Student_Appointment_Members"
(
 "sAppointmentId" int NOT NULL,
 "userId"         uuid NOT NULL,
 CONSTRAINT "PK_instructor_appointment_members" PRIMARY KEY ( "sAppointmentId", "userId" ),
 CONSTRAINT "FK_4056" FOREIGN KEY ( "userId" ) REFERENCES "User_Profile" ( "userId" ),
 CONSTRAINT "FK_58" FOREIGN KEY ( "sAppointmentId" ) REFERENCES "Student_Appointments" ( "sAppointmentId" )
);

CREATE INDEX "fkIdx_4056" ON "Student_Appointment_Members"
(
 "userId"
);

CREATE INDEX "fkIdx_58" ON "Student_Appointment_Members"
(
 "sAppointmentId"
);

`;
const Student_Appointments = `

CREATE TABLE IF NOT EXISTS "Student_Appointment_Instructor"
(
 "sAppointmentId" int NOT NULL,
 "status"         boolean NOT NULL,
 "requestTime"    timestamp NOT NULL,
 "approveTime"    timestamp NOT NULL,
 "price"          decimal(18,2) NOT NULL,
 "InstructorId"   uuid NOT NULL,
 CONSTRAINT "PK_student_appointment_instructor" PRIMARY KEY ( "sAppointmentId", "InstructorId" ),
 CONSTRAINT "FK_4068" FOREIGN KEY ( "InstructorId" ) REFERENCES "Instructor" ( "InstructorId" ),
 CONSTRAINT "FK_61" FOREIGN KEY ( "sAppointmentId" ) REFERENCES "Student_Appointments" ( "sAppointmentId" )
);

CREATE INDEX "fkIdx_4068" ON "Student_Appointment_Instructor"
(
 "InstructorId"
);

CREATE INDEX "fkIdx_61" ON "Student_Appointment_Instructor"
(
 "sAppointmentId"
);


`;
const Student_Appointment_Instructor = `

CREATE TABLE IF NOT EXISTS "Student_Appointment_Instructor"
(
 "sAppointmentId" int NOT NULL,
 "status"         boolean NOT NULL,
 "requestTime"    timestamp NOT NULL,
 "approveTime"    timestamp NOT NULL,
 "price"          decimal(18,2) NOT NULL,
 "InstructorId"   uuid NOT NULL,
 CONSTRAINT "PK_student_appointment_instructor" PRIMARY KEY ( "sAppointmentId", "InstructorId" ),
 CONSTRAINT "FK_4068" FOREIGN KEY ( "InstructorId" ) REFERENCES "Instructor" ( "InstructorId" ),
 CONSTRAINT "FK_61" FOREIGN KEY ( "sAppointmentId" ) REFERENCES "Student_Appointments" ( "sAppointmentId" )
);

CREATE INDEX "fkIdx_4068" ON "Student_Appointment_Instructor"
(
 "InstructorId"
);

CREATE INDEX "fkIdx_61" ON "Student_Appointment_Instructor"
(
 "sAppointmentId"
);

`;
const Student_Appointment_Members = `

CREATE TABLE IF NOT EXISTS "Student_Appointment_Members"
(
 "sAppointmentId" int NOT NULL,
 "userId"         uuid NOT NULL,
 CONSTRAINT "PK_instructor_appointment_members" PRIMARY KEY ( "sAppointmentId", "userId" ),
 CONSTRAINT "FK_4056" FOREIGN KEY ( "userId" ) REFERENCES "User_Profile" ( "userId" ),
 CONSTRAINT "FK_58" FOREIGN KEY ( "sAppointmentId" ) REFERENCES "Student_Appointments" ( "sAppointmentId" )
);

CREATE INDEX "fkIdx_4056" ON "Student_Appointment_Members"
(
 "userId"
);

CREATE INDEX "fkIdx_58" ON "Student_Appointment_Members"
(
 "sAppointmentId"
);

`;

exports.createG01Table = async (req, res) => {
  try{
    await createTable_Instructor_Availabilities;
    await createTable_Instructor_Appointments;
    await createTable_Instructor_Appointment_Members;
    await createTable_Student_Appointments;
    await createTable_Student_Appointment_Instructor;
    await createTable_Student_Appointment_Members;
    console.log('Create G01 Table Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }

}

const createTable_Instructor_Availabilities = async (req, res, next) => {
    try {
      const job = await pool.query(Instructor_Availabilities);
      console.log('Create table Instructor_Availabilities Successfully');
    } catch (err) {
      console.error(err.stack.red);
    }
};
const createTable_Instructor_Appointments = async (req, res, next) => {
  try {
    const job = await pool.query(Instructor_Appointments);
    console.log('Create table Instructor_Appointments Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Instructor_Appointment_Members = async (req, res, next) => {
  try {
    const job = await pool.query(Instructor_Appointment_Members);
    console.log('Create table Instructor_Appointment_Members Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Student_Appointments = async (req, res, next) => {
  try {
    const job = await pool.query(Student_Appointments);
    console.log('Create table Student_Appointments Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Student_Appointment_Instructor = async (req, res, next) => {
  try {
    const job = await pool.query(Student_Appointment_Instructor);
    console.log('Create table Student_Appointment_Instructor Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_Student_Appointment_Members = async (req, res, next) => {
  try {
    const job = await pool.query(Student_Appointment_Members);
    console.log('Create table Student_Appointment_Members Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};