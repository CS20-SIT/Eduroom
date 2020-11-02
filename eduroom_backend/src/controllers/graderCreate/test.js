const ErrorResponse = require('../../utils/errorResponse')
const pool = require('../../database/db')

const test = async (req, res, next) => {
  const time = await pool.query('SELECT NOW()')

  // res.status(200).json({success:true,msg: 'test from backend',time:time.rows[0]})
  res.send({ success: true })
  return
}
const setTime = (text) => {
  text = ""+text
  return text.substr(4, 11)+" At "+text.substr(16, 5);
};
const getAnn = async (req, res, next) => {
  const data = await pool.query('select a.id, a.title , a.description , b.displayName ,a.time ,a.isvisible from announcements a, admin_login b  where a.adminid = b.adminid order by 1 DESC ')
  const ann = data.rows
  if(ann!=null){
    ann.map( (i)=> {i.time = setTime(i.time) })
  }
  res.send(ann)
}
const postAnn = async (req, res, next) => {
  const title = req.body.title
  const description = req.body.description
  const adminid = req.body.adminid
  const visible = req.body.isvisible

  await pool.query(
    'INSERT INTO announcements(title,description,"adminid",isvisible) VALUES ($1 , $2, $3,$4)',
    [title, description, adminid,visible]
  )

  res.send({ success: true, title, description, adminid })
}
const editAnn = async (req, res, next) => {
  const title = req.body.title
  const description = req.body.description
  // const adminid = req.body.adminid
  const adminid = 'df3b7cb7-6a95-11e7-8846-b05adad3f0ae'
  const visible = req.body.isvisible
  const id = req.body.id

  await pool.query(
    'UPDATE announcements SET (title,description,"adminid",isvisible) = ($1 , $2, $3 ,$4) WHERE id = ($5)',
    [title, description, adminid,visible,id]

    
  )

  res.send({ success: true, title, description, adminid })
}
module.exports = { getAnn, test, postAnn ,editAnn}
