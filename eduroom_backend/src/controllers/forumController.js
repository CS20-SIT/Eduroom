const ErrorResponse = require("../utils/errorResponse");
const pool = require("../database/db");

exports.forumTest = async (req, res, next) => {
  const data = [
    { username: "00001", topic: "topic01", date: "2020-01-01" },
    { username: "00002", topic: "topic02", date: "2020-01-02" },
  ];
  res.status(200).json({ success: true, data: data });
  return;
};

exports.showForum = async (req, res, next) => {
  const data = await pool.query("select forumid, titlethread, userid, posttime, subtypename, typename, c.categorytypeid from forum_form f , category_type c , sub_category s where f.subcategoryiid = s.subcategoryiid and s.categorytypeid = c.categorytypeid ;");
  const forum = data.rows;
  res.status(200).json({ success: true, data: forum });
};
exports.selectForum = async (req, res, next) => {
  const id = req.params.id;
  console.log('id is ',id);
  const data = await pool.query("select * from forum_form where forumid= $1", [
    id,
  ]);
  const data2 = await pool.query("select * from forum_answer_form where forumid= $1", [
    id,
  ]);
  const forum = data.rows;
  const comment = data2.rows;
  console.log(forum);
  res.status(200).json({ success: true, data: {forum,comment} });
};
exports.room = async (req,res,next) =>{
  const data = await pool.query("select * from category_type")
  const room = data.rows;
  res.status(200).json({ success: true, data: room });
}
exports.selectRoom = async (req, res, next) => {
  const roomname = req.params.roomname;
  const data = await pool.query("select titlethread, userid, posttime, subtypename from forum_form f , category_type c , sub_category s where f.subcategoryiid = s.subcategoryiid and c.categorytypeid=s.categorytypeid and c.typename = $1",
   [
    roomname,
  ]);
  const forum = data.rows;
  res.status(200).json({ success: true, data: forum });
  console.log(forum);
};

exports.createForum = async (req, res, next) => {
  console.log(req.body);
  res.status(200).json({ success: true });
  return;
};
exports.createComment = async (req, res, next) => {
  const temp = req.body;
  // const ansno = { no: "3" };
  const result = await pool.query('SELECT MAX(answerno) as answerno from forum_answer_form');
  const ansno = result.rows[0].answerno+1;
  const user = { uid: "123e4567-e89b-12d3-a456-426614174000" };
  const data = await pool.query(
    "insert into forum_answer_form (forumid, answerno, userid, anstime, answer ) values($1,$2,$3,current_timestamp,$4)",
    [temp.id, ansno, user.uid, temp.comment]
  );
  const forum = data.rows;
  res.status(200).json({ success: true, data: forum });
  return;
};
exports.setForum = async (req, res, next) => {
  const temp = req.body;
  // const user = req.user ;
  // const forumid = { id: "8" };
  const user = { uid: "123e4567-e89b-12d3-a456-426614174000" };
  const subcat = await pool.query(
    "SELECT subcategoryiid FROM sub_category WHERE subtypename = $1",
    [temp.subcat]
  );
  if (subcat.rowCount > 0) {
    const subcatID = subcat.rows[0].subcategoryiid;
    const data = await pool.query(
      "insert into forum_form ( userid, posttime, titlethread, subcategoryiid, content) values($1,current_timestamp,$2,$3,$4)",
      [user.uid, temp.title, subcatID, temp.content]
    );
    const forum = data.rows;
    res.status(200).json({ success: true, data: forum });
    return;
  } else {
    return next(new ErrorResponse("Sub Catagory is not valid", 404));
  }
};

//
