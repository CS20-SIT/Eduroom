const pool = require('../database/db');

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

`;

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

`;

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

`;



exports.createG00Table = async (req, res) => {
  try{
    await createTable_Local_Auth;
    await createTable_OAuth;
    await createTable_Admin_Login;
    console.log('Create ALL G00 Tables Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }

}

const createTable_Local_Auth = async (req, res, next) => {
    try {
      const job = await pool.query(Local_Auth);
      console.log('Create table Local_Auth Successfully');
    } catch (err) {
      console.error(err.stack.red);
    }
};


const createTable_OAuth = async (req, res, next) => {
  try {
    const job = await pool.query(OAuth);
    console.log('Create table OAuth Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};


const createTable_Admin_Login = async (req, res, next) => {
  try {
    const job = await pool.query(Admin_Login);
    console.log('Create table Admin_Login Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }
};