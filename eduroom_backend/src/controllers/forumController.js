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
  const data = await pool.query("select forumid, titlethread, f.userid, displayname as author, posttime, subtypename, typename, c.categorytypeid from forum_form f , category_type c , sub_category s , user_profile u where f.userid = u.userid and f.subcategoryiid = s.subcategoryiid and s.categorytypeid = c.categorytypeid order by posttime desc;");
  const forum = data.rows;
  res.status(200).json({ success: true, data: forum });
};
exports.selectForum = async (req, res, next) => {
  const id = req.params.id;
  console.log('id is ',id);
  const data = await pool.query("SELECT forumid, f.userid, posttime, titlethread, subcategoryiid, content, isdelete, up.displayname AS author FROM forum_form f JOIN user_profile up on f.userid = up.userid WHERE isdelete = false AND f.userid = up.userid AND forumid = $1", [
    id,
  ]);
  const data2 = await pool.query("select forumid, answerno, f.userid, displayname as author, anstime, isdelete, answer from forum_answer_form f join user_profile u on f.userid = u.userid where isdelete = false and forumid= $1  ", [
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
  console.log('name is ',roomname);
  const data = await pool.query("select titlethread, f.userid, displayname as author, posttime,typename, subtypename from user_profile u, forum_form f , category_type c , sub_category s where u.userid = f.userid and f.subcategoryiid = s.subcategoryiid and c.categorytypeid=s.categorytypeid and c.typename = $1 order by posttime desc",
   [
    roomname,
  ]);
  const forum = data.rows;
  res.status(200).json({ success: true, data: forum });
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
  const userId = req.user.id
  const data = await pool.query(
    "insert into forum_answer_form (forumid, answerno, userid, anstime, answer ) values($1,$2,$3,current_timestamp,$4)",
    [temp.id, ansno, userId, temp.comment]
  );
  const forum = data.rows;
  res.status(200).json({ success: true, data: forum });
  return;
};
exports.deleteComment = async (req,res,next) =>{
  res.status(200).json({ success: true });
}
exports.editComment = 
exports.setForum = async (req, res, next) => {
  const temp = req.body;
  const userId = req.user.id
  const subcat = await pool.query(
    "SELECT subcategoryiid FROM sub_category WHERE subtypename = $1",
    [temp.subcat]
  );
  if (subcat.rowCount > 0) {
    const subcatID = subcat.rows[0].subcategoryiid;
    const data = await pool.query(
      "insert into forum_form ( userid, posttime, titlethread, subcategoryiid, content) values($1,current_timestamp,$2,$3,$4)",
      [userId, temp.title, subcatID, temp.content]
    );
    const forum = data.rows;
    res.status(200).json({ success: true, data: forum });
    return;
  } else {
    return next(new ErrorResponse("Sub Catagory is not valid", 404));
  }
};

//
