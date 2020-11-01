/*

Changelog
- Drop following table:
    User_chatColor
    User_hideChatRoom
    User_hideMessage
    Quiz_Question_Answer
    Quiz_Correct_Choice (Redunancy)
    Node_Question_Correct_Answer (Redunancy)
    Student_Appointments
    Student_Appointment_Instructor
    Student_Appointment_Members
- Alter table : Quiz_Question drop questionType (G11 No longer have shortAnswer)
- Alter table : Quiz_Question_Choice add isCorrect
- Alter table : Node_Question_choice add isCorrect
- Alter table : Chat_roomMember add color, sender_color, receiver_color, hide
- Alter table : instrucotr add 3 columns: avatar, wallpaper, bio
- Alter table : Instructor_Appointments sAppointmentId > AppointmentId
- Drop incorrect identity on following columns
    announcements > id
    contest > examno
    contest_question > id
    question_attempt > attempno

*/

const pool = require('../database/db');

const drop_table = `

drop table if exists User_chatColor;

drop table if exists User_hideChatRoom;

drop table if exists User_hideMessage;

drop table if exists Quiz_Question_Answer;

drop table if exists Quiz_Correct_Choice;

drop table if exists Node_Question_Correct_Answer;

drop table if exists Student_Appointment_Instructor;

drop table if exists Student_Appointment_Members;

drop table if exists Student_Appointments;

`;

const alter_table = `

alter table if exists Quiz_Question
    drop column if exists questiontype ;

alter table if exists quiz_question_choice
    add column if not exists isCorrect  boolean NOT NULL;

alter table if exists node_question_choice
    add column if not exists isCorrect  boolean NOT NULL;

alter table if exists chat_roommember
    add column  if not exists color          varchar(50) NOT NULL,
    add column  if not exists sender_color   varchar(50) NOT NULL,
    add column  if not exists receiver_color varchar(50) NOT NULL,
    add column  if not exists hide           boolean NOT NULL;

alter table if exists instructor
    add column  if not exists avatar       path NOT NULL,
    add column  if not exists wallpaper    path NOT NULL,
    add column  if not exists biography    varchar(255) NOT NULL;

`;

// Dangerous Query ---> Required additional condition to check
const alter_table_dangerous = `

DO $$
BEGIN
  IF EXISTS(SELECT *
    FROM information_schema.columns
    WHERE table_name='instructor_appointments' and column_name='iappointmentid')
  THEN
      alter table if exists instructor_appointments rename column iappointmentid to appointmentid;
  END IF;
END $$;

`;


const drop_idenitiy = `

ALTER  table if exists announcements
    ALTER COLUMN  id drop identity if exists  ;

do $$
begin
    if EXISTS(SELECT *
        FROM information_schema.columns
        WHERE table_name='contest' and column_name='examno')
    then
        Alter table if exists contest
            ALTER column examno drop identity if exists;
    end if;
end $$;

alter table if exists contest_question
    alter column id drop identity if exists  ;

alter table if exists question_attempt
    alter column attempno drop identity if exists ;

`;

exports.applyPatchV1 = async () => {
  try{
    await dropIdentity()
    await dropTable()
    await alterTable()
    await alterTableDangerous()
    console.log('Applied Database Patch V1 Successfully');
  } catch (err) {
    console.error(err);
  }

}

const dropTable = async () => {
    try {
      const job = await pool.query(drop_table);
      console.log('Drop tables Successfully');
    } catch (err) {
      console.error(err);
    }
};

const dropIdentity = async () => {
  try {
    const job = await pool.query(drop_idenitiy);
    console.log('Drop identities Successfully');
  } catch (err) {
    console.error(err);
  }
};

const alterTable = async () => {
  try {
    const job = await pool.query(alter_table);
    console.log('Alter tables Successfully');
  } catch (err) {
    console.error(err);
  }
};

const alterTableDangerous = async () => {
  try {
    const job = await pool.query(alter_table_dangerous);
    console.log('Alter tables with dangerous query Successfully');
  } catch (err) {
    console.error(err);
  }
};