const pool = require('../database/db')

const Coin_Owner = `

CREATE TABLE IF NOT EXISTS Coin_Owner
(
 userId       uuid NOT NULL,
 AmountOfCoin int NOT NULL,
 CONSTRAINT PK_coin_own PRIMARY KEY ( userId ),
 CONSTRAINT FK_2732 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_2732 ON Coin_Owner
(
 userId
);

`
const Coin_Transaction = `

CREATE TABLE IF NOT EXISTS Coin_Transaction
(
 userId                  uuid NOT NULL,
 Date                    timestamp NOT NULL,
 AmountOfCoinTransaction int NOT NULL,
 CONSTRAINT PK_coin_usage PRIMARY KEY ( userId, Date ),
 CONSTRAINT FK_124 FOREIGN KEY ( userId ) REFERENCES Coin_Owner ( userId )
);

CREATE INDEX fkIdx_124 ON Coin_Transaction
(
 userId
);

`
const DailyReward_History = `

CREATE TABLE IF NOT EXISTS DailyReward_History
(
 userId    uuid NOT NULL,
 Date      date NOT NULL,
 CoinDaily int NOT NULL,
 CONSTRAINT PK_code_expired PRIMARY KEY ( userId, Date ),
 CONSTRAINT FK_2743 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_2743 ON DailyReward_History
(
 userId
);

`
const Sticker_Owner = `

CREATE TABLE IF NOT EXISTS Sticker_Owner
(
 StickerId int NOT NULL,
 userId    uuid NOT NULL,
 CONSTRAINT PK_sticker_owner PRIMARY KEY ( StickerId, userId ),
 CONSTRAINT FK_140 FOREIGN KEY ( StickerId ) REFERENCES Sticker_All ( StickerId ),
 CONSTRAINT FK_2746 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_140 ON Sticker_Owner
(
 StickerId
);

CREATE INDEX fkIdx_2746 ON Sticker_Owner
(
 userId
);

`
const Sticker_All = `

CREATE TABLE IF NOT EXISTS Sticker_All
(
 StickerId    int NOT NULL,
 StickerName  varchar(50) NOT NULL,
 StickerType  varchar(50) NOT NULL,
 StickerImg   path NOT NULL,
 StickerPrice int NOT NULL,
 CONSTRAINT PK_sticker_all PRIMARY KEY ( StickerId )
);

`
const Pack_Sticker = `

CREATE TABLE IF NOT EXISTS Pack_Sticker
(
 StickerId     int NOT NULL,
 StickerNumber int NOT NULL,
 StickerImg    path NOT NULL,
 CONSTRAINT PK_pack_sticker PRIMARY KEY ( StickerId, StickerNumber ),
 CONSTRAINT FK_147 FOREIGN KEY ( StickerId ) REFERENCES Sticker_All ( StickerId )
);

CREATE INDEX fkIdx_147 ON Pack_Sticker
(
 StickerId
);

`

exports.createG09Table = async () => {
  try {
    await createTable_Coin_Owner()
    await createTable_Coin_Transaction()
    await createTable_DailyReward_History()
    await createTable_Sticker_All()
    await createTable_Pack_Sticker()
    await createTable_Sticker_Owner()
    console.log('Create G09 Table Successfully')
  } catch (err) {
    console.error(err)
  }
}

const createTable_Coin_Owner = async () => {
  try {
    const job = await pool.query(Coin_Owner)
    console.log('Create table Coin_Owner Successfully')
  } catch (err) {
    console.error(err)
  }
}
const createTable_Coin_Transaction = async () => {
  try {
    const job = await pool.query(Coin_Transaction)
    console.log('Create table Coin_Transaction Successfully')
  } catch (err) {
    console.error(err)
  }
}
const createTable_DailyReward_History = async () => {
  try {
    const job = await pool.query(DailyReward_History)
    console.log('Create table DailyReward_History Successfully')
  } catch (err) {
    console.error(err)
  }
}
const createTable_Sticker_Owner = async () => {
  try {
    const job = await pool.query(Sticker_Owner)
    console.log('Create table Sticker_Owner Successfully')
  } catch (err) {
    console.error(err)
  }
}
const createTable_Sticker_All = async () => {
  try {
    const job = await pool.query(Sticker_All)
    console.log('Create table Sticker_All Successfully')
  } catch (err) {
    console.error(err)
  }
}
const createTable_Pack_Sticker = async () => {
  try {
    const job = await pool.query(Pack_Sticker)
    console.log('Create table Pack_Sticker Successfully')
  } catch (err) {
    console.error(err)
  }
}
