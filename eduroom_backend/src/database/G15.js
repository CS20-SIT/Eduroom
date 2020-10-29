const pool = require('../database/db');

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

`;
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

`;
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

`;
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

`;
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

`;
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

`;

exports.createG15Table = async (req, res) => {
  try{
    await createTable_User_Profile;
    await createTable_User_Address;
    await createTable_User_MyCourse;
    await createTable_User_Verification;
    await createTable_User_Wishlist;
    await createTable_User_loginLog;
    console.log('Create G15 Table Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }

}

const createTable_User_Profile = async (req, res, next) => {
    try {
      const job = await pool.query(User_Profile);
      console.log('Create table User_Profile Successfully');
    } catch (err) {
      console.error(err.stack.red);
    }
};
const createTable_User_MyCourse = async (req, res, next) => {
  try {
    const job = await pool.query(User_MyCourse);
    console.log('Create table User_MyCourse Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_User_Wishlist = async (req, res, next) => {
  try {
    const job = await pool.query(User_Wishlist);
    console.log('Create table User_Wishlist Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_User_Verification = async (req, res, next) => {
  try {
    const job = await pool.query(User_Verification);
    console.log('Create table User_Verification Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_User_Address = async (req, res, next) => {
  try {
    const job = await pool.query(User_Address);
    console.log('Create table User_Address Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};
const createTable_User_loginLog = async (req, res, next) => {
  try {
    const job = await pool.query(User_loginLog);
    console.log('Create table User_loginLog Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};