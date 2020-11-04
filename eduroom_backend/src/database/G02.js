const pool = require('../database/db')

const promotionCode = `

CREATE TABLE IF NOT EXISTS promotionCode
(
 pCode          varchar(10) NOT NULL,
 startTime      timestamp NOT NULL,
 expireTime     timestamp NOT NULL,
 discountAmount numeric(5,2) NOT NULL,
 limits          int NOT NULL,
 minTotal       int NOT NULL,
 codeType       varchar(10) NOT NULL,
 CONSTRAINT PK_promotioncode PRIMARY KEY ( pCode )
);

`

const publicCodeUsage = `

CREATE TABLE IF NOT EXISTS Public_Code_Usage
(
 pCode  varchar(10) NOT NULL,
 userId uuid NOT NULL,
 CONSTRAINT PK_festivalcode PRIMARY KEY ( pCode, userId ),
 CONSTRAINT FK_2960 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId ),
 CONSTRAINT FK_53 FOREIGN KEY ( pCode ) REFERENCES promotionCode ( pCode )
);

CREATE INDEX fkIdx_2960 ON Public_Code_Usage
(
 userId
);

CREATE INDEX fkIdx_53 ON Public_Code_Usage
(
 pCode
);

`

const codeOwner = `

CREATE TABLE IF NOT EXISTS Code_owner
(
 pCode  varchar(10) NOT NULL,
 userId uuid NOT NULL,
 isUsed boolean NOT NULL,
 CONSTRAINT PK_usespecificcode PRIMARY KEY ( pCode ),
 CONSTRAINT FK_2963 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId ),
 CONSTRAINT FK_59 FOREIGN KEY ( pCode ) REFERENCES promotionCode ( pCode )
);

CREATE INDEX fkIdx_2963 ON Code_owner
(
 userId
);

CREATE INDEX fkIdx_59 ON Code_owner
(
 pCode
);

`

const ad = `

CREATE TABLE IF NOT EXISTS Ad
(
 adId         int NOT NULL,
 type         int NOT NULL,
 adStartTime  timestamp NOT NULL,
 adExpireTime timestamp NOT NULL,
 ownerName    varchar(20) NOT NULL,
 contactNum   varchar(10) NOT NULL,
 email        varchar(50) NOT NULL,
 fileLocation varchar(100) NOT NULL,
 CONSTRAINT PK_ads PRIMARY KEY ( adId ),
 CONSTRAINT FK_73 FOREIGN KEY ( type ) REFERENCES Ad_Type ( typeId )
);

CREATE INDEX fkIdx_73 ON Ad
(
 type
);

`

const adType = `

CREATE TABLE IF NOT EXISTS Ad_Type
(
 typeId   int NOT NULL,
 typeName varchar(10) NOT NULL,
 CONSTRAINT PK_adtype PRIMARY KEY ( typeId )
);

`

const adPayment = `

CREATE TABLE IF NOT EXISTS Ad_Payment
(
 adId          int NOT NULL,
 receipt       path NOT NULL,
 dateTime      timestamp NOT NULL,
 amount        numeric(12,4) NOT NULL,
 paymentStatus boolean NOT NULL,
 CONSTRAINT PK_adpayment PRIMARY KEY ( adId ),
 CONSTRAINT FK_101 FOREIGN KEY ( adId ) REFERENCES Ad ( adId )
);

CREATE INDEX fkIdx_101 ON Ad_Payment
(
 adId
);

`

const whitelistUniversity = `

CREATE TABLE IF NOT EXISTS Whitelist_University
(
 universityDomain varchar(50) NOT NULL,
 universityName   varchar(255) NOT NULL,
 CONSTRAINT PK_whitelist_university PRIMARY KEY ( universityDomain )
);

`

const userStudentVerification = `

CREATE TABLE IF NOT EXISTS User_student_Verification
(
 userId          uuid NOT NULL,
 isVerified      boolean NOT NULL,
 token           varchar(255) NOT NULL,
 universityEmail varchar(100) NOT NULL,
 CONSTRAINT PK_user_student_verification PRIMARY KEY ( userId ),
 CONSTRAINT FK_3643 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_3643 ON User_student_Verification
(
 userId
);

`

exports.createG02Table = async () => {
  try {
    await createTable_ad_Type()
    await createTable_ad()
    await createTable_ad_Payment()
    await createTable_promotionCode()
    await createTable_public_Code_Usage()
    await createTable_code_Owner()
    await createTable_whitelist_University()
    await createTable_user_Student_Verification()
    console.log('Create ALL G02 Tables Successfully')
  } catch (err) {
    console.error(err)
  }
}

const createTable_promotionCode = async () => {
  try {
    const job = await pool.query(promotionCode)
    console.log('Create table promotionCode Successfully')
  } catch (err) {
    console.error(err)
  }
}

const createTable_public_Code_Usage = async () => {
  try {
    const job = await pool.query(publicCodeUsage)
    console.log('Create table public_Code_Usage Successfully')
  } catch (err) {
    console.error(err)
  }
}

const createTable_code_Owner = async () => {
  try {
    const job = await pool.query(codeOwner)
    console.log('Create table code_Owner Successfully')
  } catch (err) {
    console.error(err)
  }
}

const createTable_ad = async () => {
  try {
    const job = await pool.query(ad)
    console.log('Create ad Successfully')
  } catch (err) {
    console.error(err)
  }
}

const createTable_ad_Type = async () => {
  try {
    const job = await pool.query(adType)
    console.log('Create table ad_Type Successfully')
  } catch (err) {
    console.error(err)
  }
}

const createTable_ad_Payment = async () => {
  try {
    const job = await pool.query(adPayment)
    console.log('Create table ad_Payment Successfully')
  } catch (err) {
    console.error(err)
  }
}

const createTable_whitelist_University = async () => {
  try {
    const job = await pool.query(whitelistUniversity)
    console.log('Create table whitelist_University Successfully')
  } catch (err) {
    console.error(err)
  }
}

const createTable_user_Student_Verification = async () => {
  try {
    const job = await pool.query(userStudentVerification)
    console.log('Create table user_Student_Verification Successfully')
  } catch (err) {
    console.error(err)
  }
}
