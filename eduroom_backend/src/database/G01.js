const pool = require('../database/db');

const instructorAvailabilities = `

CREATE TABLE IF NOT EXISTS Instructor_availabilities
(
 InstructorId uuid NOT NULL,
 day          varchar(50) NOT NULL,
 startTime    time NOT NULL,
 endTime      time NOT NULL,
 pricePerHour decimal(18,2) NOT NULL,
 CONSTRAINT PK_instructor_availabilities PRIMARY KEY ( InstructorId, day, startTime ),
 CONSTRAINT FK_3697 FOREIGN KEY ( InstructorId ) REFERENCES Instructor ( InstructorId )
);

CREATE INDEX fkIdx_3697 ON Instructor_availabilities
(
 InstructorId
);

`;

const tutorAppointmentForm = `

CREATE TABLE IF NOT EXISTS Tutor_Appointment_Form
(
 appointmentId int NOT NULL GENERATED ALWAYS AS IDENTITY (
 start 1
 ),
 InstructorId  uuid NOT NULL,
 userId        uuid NOT NULL,
 startTime     timestamp NOT NULL,
 endTime       timestamp NOT NULL,
 isAgree       boolean NULL,
 price         decimal(18,2) NOT NULL,
 paymentDue    timestamp NULL,
 CONSTRAINT PK_tutor_appointment PRIMARY KEY ( appointmentId ),
 CONSTRAINT FK_3707 FOREIGN KEY ( InstructorId ) REFERENCES Instructor ( InstructorId )
);

CREATE INDEX fkIdx_3707 ON Tutor_Appointment_Form
(
 InstructorId
);

`;

const appointmentReview = `

CREATE TABLE IF NOT EXISTS Appointment_Review
(
 appointmentId int NOT NULL,
 score         int NOT NULL,
 description   varchar(255) NOT NULL,
 CONSTRAINT PK_appointment_review PRIMARY KEY ( appointmentId ),
 CONSTRAINT FK_3718 FOREIGN KEY ( appointmentId ) REFERENCES Tutor_Appointment_Form ( appointmentId )
);

CREATE INDEX fkIdx_3718 ON Appointment_Review
(
 appointmentId
);

`;


exports.createG01Table = async (req, res) => {
  try{
    await createTable_instructorAvailabilities;
    await createTable_tutorAppointmentForm;
    await createTable_appointmentReview;
    console.log('Create G01 Table Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }

}

const createTable_instructorAvailabilities = async (req, res, next) => {
    try {
      const job = await pool.query(instructorAvailabilities);
      console.log('Create instructorAvailabilities Successfully');
    } catch (err) {
      console.error(err.stack.red);
    }
};

const createTable_tutorAppointmentForm = async (req, res, next) => {
  try {
    const job = await pool.query(tutorAppointmentForm);
    console.log('Create tutorAppointmentForm Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};

const createTable_appointmentReview = async (req, res, next) => {
  try {
    const job = await pool.query(appointmentReview);
    console.log('Create appointmentReview Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};

