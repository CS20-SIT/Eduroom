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

exports.createKahootHistory = async (req, res, next) => {
  const { roomid, pin, isavailable } = req.body;
  console.log('kk');
  console.log(req.body);
  const result = await pool.query('SELECT MAX(id) as id from kahoot_room');
  const newID = result.rows[0].id + 1;
  let room = await pool.query(
    'INSERT INTO kahoot_roomhistory(roomid, pin, isavailable) values($1,$2,$3) RETURNING * ',
    [roomid, pin, isavailable]
  );
  room = room.rows[0];
  res.status(201).json(room);
};

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
