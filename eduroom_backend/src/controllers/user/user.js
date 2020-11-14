const ErrorResponse = require('../../utils/errorResponse')
const pool = require('../../database/db')

const test = async (req, res, next) => {
  const time = await pool.query('SELECT NOW()')

  res.send({ success: true })
  return
}

// const user="08e9d239-b3f2-4db8-b29a-da99a314df92";
const getWishlist = async (req, res, next) => {
    const user=req.body.userid;
    const condition=req.body.condition;
    // const condition='';
    const orderby=req.body.orderby;
    // const orderby='addtime desc';
    const data = await pool.query(
    'select w.userid,w.courseid,addtime,coursename,coursepicture,price,p.firstname,p.lastname '+
    'from user_wishlist w '+
    'inner join course c on c.courseid=w.courseid '+
    'inner join instructor i on i.instructorid=c.ownerid '+
    'inner join user_profile p on i.userid=p.userid '+
    'where w.userid=$1 '+condition+
    'order by '+orderby+'; ',
    [user])
    const ann = data.rows
    res.send(ann)
}

const getMycourse = async (req, res, next) => {
    const user=req.body.userid;
    const finish=req.body.finish;
    const condition=req.body.condition;
    const orderby=req.body.orderby;

    // const user='08e9d239-b3f2-4db8-b29a-da99a314df92';
    // const condition='';
    // const orderby='addtime desc';

    const data = await pool.query(
    'select m.userid,m.courseid,addtime,lastvisit,isfinished,coursename,coursepicture,p.firstname,p.lastname '+
    'from user_mycourse m '+
    'inner join course c on c.courseid=m.courseid '+
    'inner join instructor i on i.instructorid=c.ownerid '+
    'inner join user_profile p on i.userid=p.userid '+
    'where m.userid=$1 and isfinished=$2 '+condition+
    'order by '+orderby+'; ',
    [user,finish])
    const ann = data.rows
    res.send(ann)
}

const postDeleteWishlist = async (req, res, next) => {
    const course=req.body.courseid;
    const user=req.body.userid;
    await pool.query(
      'delete from user_wishlist where (userid,courseid)=($1,$2)',
      [user,course]
    )
    res.send({ success: true})
  }

module.exports = { test,getWishlist,getMycourse,postDeleteWishlist}
