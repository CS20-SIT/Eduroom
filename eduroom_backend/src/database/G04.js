const pool = require('../database/db')

const Financial_Transaction = `

CREATE TABLE IF NOT EXISTS Financial_Transaction
(
 transactionId uuid NOT NULL,
 amount        decimal(18,2) NOT NULL,
 description   varchar(100) NOT NULL,
 CONSTRAINT PK_financial PRIMARY KEY ( transactionId )
);

`

const Transaction_user = `

CREATE TABLE IF NOT EXISTS Transaction_user
(
 transactionId uuid NOT NULL,
 userId        uuid NOT NULL,
 CONSTRAINT PK_transaction_user PRIMARY KEY ( transactionId ),
 CONSTRAINT FK_3787 FOREIGN KEY ( transactionId ) REFERENCES Financial_Transaction ( transactionId ),
 CONSTRAINT FK_3799 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_3787 ON Transaction_user
(
 transactionId
);

CREATE INDEX fkIdx_3799 ON Transaction_user
(
 userId
);

`

const Transaction_ad = `

CREATE TABLE IF NOT EXISTS Transaction_ad
(
 transactionId uuid NOT NULL,
 adId          int NOT NULL,
 CONSTRAINT PK_transaction_ad PRIMARY KEY ( transactionId ),
 CONSTRAINT FK_3781 FOREIGN KEY ( transactionId ) REFERENCES Financial_Transaction ( transactionId ),
 CONSTRAINT FK_3793 FOREIGN KEY ( adId ) REFERENCES Ad_Payment ( adId )
);

CREATE INDEX fkIdx_3781 ON Transaction_ad
(
 transactionId
);

CREATE INDEX fkIdx_3793 ON Transaction_ad
(
 adId
);

`

const Transaction_instructor = `

CREATE TABLE IF NOT EXISTS Transaction_instructor
(
 transactionId uuid NOT NULL,
 InstructorId  uuid NOT NULL,
 CONSTRAINT PK_transaction_instructor PRIMARY KEY ( transactionId ),
 CONSTRAINT FK_3784 FOREIGN KEY ( transactionId ) REFERENCES Financial_Transaction ( transactionId ),
 CONSTRAINT FK_3796 FOREIGN KEY ( InstructorId ) REFERENCES Instructor ( InstructorId )
);

CREATE INDEX fkIdx_3784 ON Transaction_instructor
(
 transactionId
);

CREATE INDEX fkIdx_3796 ON Transaction_instructor
(
 InstructorId
);

`

exports.createG04Table = async () => {
  try {
    await createTable_Financial_Transaction()
    await createTable_Transaction_User()
    await createTable_Transaction_instructor()
    await createTable_Transaction_ad()
    console.log('Create ALL G04 Tables Successfully')
  } catch (err) {
    console.error(err)
  }
}

const createTable_Financial_Transaction = async () => {
  try {
    const job = await pool.query(Financial_Transaction)
    console.log('Create table Financial_Transaction Successfully')
  } catch (err) {
    console.error(err)
  }
}

const createTable_Transaction_User = async () => {
  try {
    const job = await pool.query(Transaction_user)
    console.log('Create table Transaction_user Successfully')
  } catch (err) {
    console.error(err)
  }
}

const createTable_Transaction_instructor = async () => {
  try {
    const job = await pool.query(Transaction_instructor)
    console.log('Create table Transaction_instructor Successfully')
  } catch (err) {
    console.error(err)
  }
}

const createTable_Transaction_ad = async () => {
  try {
    const job = await pool.query(Transaction_ad)
    console.log('Create table Transaction_ad Successfully')
  } catch (err) {
    console.error(err)
  }
}
