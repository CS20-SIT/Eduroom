const ErrorResponse = require('../../utils/errorResponse');
const pool = require('../../database/db');

exports.createRoom = async (req, res, next) => {
  const id = '1a9fa554-0c66-4ece-acb4-13a5078aa3b7';
  const { name, capacity, type, typeid, description } = req.body;
  const result = await pool.query('SELECT MAX(id) as id from kahoot_room');
  const newID = result.rows[0].id + 1;
  let room = await pool.query(
    'INSERT INTO kahoot_room(id,name, capacity, type, typeid, instructorid, description) values($1,$2,$3,$4,$5,$6,$7) RETURNING *',
    [newID, name, capacity, type, typeid, id, description]
  );
  room = room.rows[0];
  res.status(201).json(room);
};

exports.player = async (req, res, next) => { //kahoot_player
  const userid = '71ac8b74-11e5-465c-ae9e-41b56edbbe00';
  const { nameforplay } = req.body;
  console.log('nameForplay', nameforplay)
  const result = await pool.query('SELECT userid from kahoot_player where userid = $1', [userid]);
  let player = null;
  if (result.rowCount === 0) {
    player = await pool.query(
      'INSERT INTO kahoot_player(userid,nameforplay) values($1,$2) RETURNING *',
      [userid, nameforplay]
    );
  } else {
    player = await pool.query(
      'UPDATE kahoot_player SET nameforplay = $1 where userid = $2 RETURNING *',
      [nameforplay, userid]
    );
  }
  if (player) {
    player = player.rows[0];
    res.status(201).json(player);
  } else {
    res.status(400).json({ success: false });
  }
};

exports.historyPlayer = async (req, res, next) => { //kahoot_historyPlayer
  const userid = '71ac8b74-11e5-465c-ae9e-41b56edbbe00';
  const { sessionid } = req.body;
  console.log('sessionidbackend', sessionid)
  const rank='99';
  let player = await pool.query(
    'INSERT INTO kahoot_roomhistoryplayer(sessionid,userid,rank) values($1,$2,$3) RETURNING *',
    [sessionid,userid,rank]
  );
  player = player.rows[0];
  res.status(201).json(player);
};

exports.createKahootHistory = async (req, res, next) => {
  const { roomid, pin, isavailable } = req.body;
  console.log(req.body);
  let room = await pool.query(
    'INSERT INTO kahoot_roomhistory(roomid, pin, isavailable) values($1,$2,$3) RETURNING * ',
    [roomid, pin, isavailable]
  );
  room = room.rows[0];
  res.status(201).json(room);
}

exports.createHistoryPlayerAnswer = async (req, res, next) => {
  const userid = '71ac8b74-11e5-465c-ae9e-41b56edbbe00';
  const { sessionid,roomid, pin, isavailable } = req.body;
  console.log(req.body);
  // let room = await pool.query(
  //   'INSERT INTO kahoot_roomhistory(roomid, pin, isavailable) values($1,$2,$3) RETURNING * ',
  //   [roomid, pin, isavailable]
  // );
  // room = room.rows[0];
  // res.status(201).json(room);
}

exports.fetchRoom = async (req, res, next) => {
  const result = await pool.query('SELECT * from kahoot_room');
  const rooms = result.rows;
  res.status(200).json(rooms);
};

exports.fetchRoomHistory = async (req, res, next) => {
  const result = await pool.query('SELECT * from kahoot_roomhistory');
  const roomHistory = result.rows;
  res.status(200).json(roomHistory);
};


exports.fetchExactlyRoom = async (req, res, next) => {
  const { pin } = req.params;
  console.log('pinbackend', pin)
  const result = await pool.query('SELECT sessionid from kahoot_roomhistory where pin=$1 and isavailable = true', [pin]);
  console.log('row', result.rows)
  const exactlyRoom = result.rows[0];
  res.status(200).json(exactlyRoom);
};



