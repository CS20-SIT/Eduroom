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
  // const userid = '71ac8b74-11e5-465c-ae9e-41b56edbbe00';
  const userid = req.user.id;
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
exports.historyPlayerFirstTime = async (req, res, next) => { //kahoot_historyPlayer
  const userid = req.user.id;
  const { sessionid } = req.body;
  console.log('sessionidbackend', sessionid)
  const rank = '0';
  let player = await pool.query(
    'INSERT INTO kahoot_roomhistoryplayer(sessionid,userid,rank) values($1,$2,$3) RETURNING *',
    [sessionid, userid, rank]
  );
  player = player.rows[0];
  res.status(201).json(player);
};

exports.historyPlayer = async (req, res, next) => { //kahoot_historyPlayer
  const userid = req.user.id;
  const { sessionid, point } = req.body;
  const score = await pool.query('SELECT rank from kahoot_roomhistoryplayer where userid = $1 and sessionid=$2', [userid, sessionid]);
  let scoreUpdate = score.rows[0].rank + parseInt(point);
  console.log(scoreUpdate, 'here')
  let player = await pool.query(
    'update kahoot_roomhistoryplayer SET rank=$3 where sessionid=$1 and userid=$2 RETURNING *',
    [sessionid, userid, scoreUpdate]
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
  const userid = req.user.id;
  console.log(req.user.id)
  const { sessionid, questionid, answerno } = req.body;
  console.log(req.body);
}

exports.fetchRoom = async (req, res, next) => {
  const userid = req.user.instructor;
  const result = await pool.query('SELECT * from kahoot_room where instructorid=$1', [userid]);
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


exports.fetchScoreRank = async (req, res, next) => {
  const { sessionid } = req.params;
  console.log('sessionScoreRank', sessionid)
  const result = await pool.query('SELECT * from kahoot_roomhistoryplayer where sessionid=$1 order by rank desc fetch first 9 rows only;', [sessionid]);
  let rank = [];
  let score = [];
  for (let i = 0; i < result.rows.length; i++) {
    let scoreRank = await pool.query(
      'SELECT nameforplay from kahoot_player where userid=$1;', [result.rows[i].userid]
    )
    rank.push(scoreRank.rows[0].nameforplay)
    rank[i] = rank[i].replaceAll(' ', '')
    score.push(result.rows[i].rank);
  }
  res.status(200).json({ rank, score });
};

exports.Upload = async (req, res, next) => {
  const files = req.files
  const result = files.map(file => {
    return { linkUrl: file.linkUrl, fieldname: file.fieldname }
  })
  res.send(result)
};

exports.createQuiz = async (req, res, next) => {
  const userid = req.user.instructor;//
  const { name, description, questionList, picturepath } = req.body;
  let quiz = await pool.query(
    'INSERT INTO kahoot_room(name, instructorid, description) values($1,$2,$3) RETURNING * ',
    [name, userid, description]
  );
  result = quiz.rows[0].id;
  const roomid = quiz.rows[0].id;
  let question
  let answerQuiz = []
  let questionid
  for (let i = 0; i < questionList.length; i++) {
    question = await pool.query(
      'INSERT INTO kahoot_question(roomid, questionno, text,time,point,picturepath) values($1,$2,$3,$4,$5,$6) RETURNING * ',
      [roomid, i, questionList[i].question, questionList[i].time, questionList[i].point, picturepath[i].linkUrl]
    );
    let answer = [false, false, false, false]
    answer[questionList[i].correct] = true;
    answerQuiz.push(answer);
    questionid = question.rows[0].questionid;
    for (let j = 0; j < 4; j++) {
      answerQ = await pool.query(
        'INSERT INTO kahoot_answer(questionid, answerno, text,iscorrect) values($1,$2,$3,$4) RETURNING * ',
        [questionid, j, questionList[i].answer[j], answerQuiz[i][j]]

      );
    }
  }
  res.status(201).json({ result, question });

}

exports.fetchQuiz = async (req, res, next) => {
  const { sessionid } = req.params;
  const room = await pool.query('SELECT * from kahoot_roomhistory where sessionid=$1;', [sessionid]);
  const question = await pool.query('SELECT * from kahoot_question where roomid=$1;', [room.rows[0].roomid]);
  const exactlyQuestion = await pool.query('SELECT * from kahoot_question where roomid=$1;', [question.rows[0].roomid]);
  const answerAll = [];
  const correct=[]
  console.log('rows',exactlyQuestion.rows.length)
  for (let i = 0; i < exactlyQuestion.rows.length; i++) {
    const answer = [];
    const tempAnswer = await pool.query('select * from kahoot_answer where questionid=$1;', [exactlyQuestion.rows[i].questionid]);
    for (let j = 0; j < 4; j++) {
      answer.push(tempAnswer.rows[j])
    }
    const correctTemp = await pool.query(`select case when iscorrect =true then answerno END as correct from kahoot_answer where questionid=$1
    order by correct fetch first 1 rows only;`, [exactlyQuestion.rows[i].questionid]);
    correct.push(correctTemp.rows[0].correct)
    // console.log('coorectTemp',correctTemp.rows[0].correct)
    answerAll.push(answer);
  }
  console.log('answerAll',answerAll)
  res.status(200).json({ room, question, answerAll, correct });
};