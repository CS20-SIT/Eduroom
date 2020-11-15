const ErrorResponse = require("../../utils/errorResponse")
const pool = require("../../database/db")

//Toei
const gPreviewQuestions = async (req, res, next) => {
  const data = await pool.query(
    `select id, title, description, difficulty
    from questions`
  )
  const ann = data.rows
  res.send(ann)
}

const gPreviewContests = async (req, res, next) => {
  const data = await pool.query(
    `select conno, title, conruletype,starttime, endtime, status
    from contest
    where status = true
    order by endtime desc`
  )
  const ann = data.rows
  res.send(ann)
}

const gContestDetails = async (req, res, next) => {
  const id = req.query.id
  const data = await pool.query(
    `select conno, title, description, conruletype,starttime, endtime, status, displayname
    from contest c, admin_login a
    where c.adminid = a.adminid
        and status = true
        and conno = '${id}'`
  )
  const ann = data.rows
  res.send(ann)
}

const gContestAnnouncements = async (req, res, next) => {
  const id = req.query.id
  const data = await pool.query(
    `select cn.title, cn.description, a.displayname, cn.time
    from contest c, admin_login a, contest_announcements cn
    where cn.adminid = c.adminid
        and c.adminid = a.adminid
        and isvisible = true
        and conno = '${id}'
    order by time`
  )
  const ann = data.rows
  console.log(id)
  res.send(ann)
}

module.exports = {
  gPreviewQuestions,
  gPreviewContests,
  gContestDetails,
  gContestAnnouncements,
}
