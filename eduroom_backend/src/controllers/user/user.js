const ErrorResponse = require('../../utils/errorResponse')
const pool = require('../../database/db')

const test = async (req, res, next) => {
  const time = await pool.query('SELECT NOW()')

  res.send({ success: true })
  return
}

const getAnn = async (req, res, next) => {
  const data = await pool.query('select * from announcements order by 1 DESC ')
  const ann = data.rows
  res.send(ann)
}
const postAnn = async (req, res, next) => {
  const title = req.body.title
  const description = req.body.description
  const adminid = req.body.adminid

  await pool.query(
    'INSERT INTO announcements(title,description,"adminid") VALUES ($1 , $2, $3)',
    [title, description, adminid]
  )

  res.send({ success: true, title, description, adminid })
}

const getWishlist = async (req, res, next) => {
    const data = await pool.query(
    'select w.userid,w.courseid,addtime,coursename,coursepicture,price,p.firstname,p.lastname'+
    'from user_wishlist w'+
    'inner join course c on c.courseid=w.courseid'+
    'inner join instructor i on i.instructorid=c.ownerid'+
    'inner join user_profile p on i.userid=p.userid'+
    'order by addtime desc;')
    const ann = data.rows
    res.send(ann)
}

const getMycourse = async (req, res, next) => {
    const data = await pool.query(
    'select m.userid,m.courseid,addtime,lastvisit,isfinished,coursename,coursepicture,p.firstname,p.lastname'+
    'from user_mycourse m'+
    'inner join course c on c.courseid=m.courseid'+
    'inner join instructor i on i.instructorid=c.ownerid'+
    'inner join user_profile p on i.userid=p.userid'+
    'order by addtime desc;')
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

module.exports = { getAnn, test, postAnn,getWishlist,getMycourse,postDeleteWishlist}
