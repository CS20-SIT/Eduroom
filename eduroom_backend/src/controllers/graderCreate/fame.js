const ErrorResponse = require('../../utils/errorResponse')
const pool = require('../../database/db')



const pAdminLog = async (req, res, next) => {
    const title = 'test01'
    const detail =  'double bruh'
    const adminid = '12345678-1234-1234-1234-123456789123'
  
    await pool.query(
      'INSERT INTO adminLog(title,detail,"adminid") VALUES ($1 , $2, $3)',
      [title, detail, adminid]
    )
  
    res.send({ success: true })
}

const pContest = async (req, res, next) => {
  const title = req.body.title
  const conRuleType =  req.body.conRuleType
  const description =  req.body.description
  const startTime = req.body.startTime
  const endTime =  req.body.endTime
  const status = req.body.status
  const adminid = req.body.adminid

  await pool.query(
    'INSERT INTO contest(title,conRuleType,description,startTime,endTime,status,adminid) VALUES ($1 , $2, $3, $4, $5, $6, $7)',
    [title, conRuleType, description, startTime, endTime, status, adminid]
  )

  res.send({ success: true })
}
const pContestQuestion = async (req, res, next) => {
    const conQuestionNo = '1'
    const conid =  '1'
    const questionId = '1'
  
    await pool.query(
      'INSERT INTO contest_question(conQuestionNo,conid,questionId) VALUES ($1 , $2, $3)',
      [conQuestionNo, conid, questionId]
    )
  
    res.send({ success: true })
}
const pContestAnn = async (req, res, next) => {
    const title = 'test01'
    const description =  'double bruh'
    const conId = '1'
    const adminId = '12345678-1234-1234-1234-123456789123'
    const isVisible = true
    

    await pool.query(
      'INSERT INTO contest_announcements(title,description,conId,adminId,isVisible) VALUES ($1 , $2, $3, $4, $5)',
      [title, description, conId,adminId,isVisible]
    )
  
    res.send({ success: true })
}

 //edit by id
 const eContest = async (req, res, next) => {
  const title = req.body.title
  const description = req.body.description
  const adminid = '12345678-1234-1234-1234-123456789123'
  const visible = req.body.isvisible
  const id = req.body.id

  await pool.query(
    'UPDATE announcements SET (title,description,"adminid",isvisible) = ($1 , $2, $3 ,$4) WHERE id = ($5)',
    [title, description, adminid,visible,id]
    
  )
  res.send({ success: true})
}
const eContestAnn = async (req, res, next) => {
}


//get all
const gAllContest = async (req, res, next) => {
  const data = await pool.query('select * from announcements order by 1 DESC ')
  const ann = data.rows
  res.send(ann)
}



//get by id 
const gContest = async (req, res, next) => {
  const data = await pool.query("select * from Announcements  where id = 1 ");
  const conann = data.rows;
  res.send(conann);
};
const gContestAnn  = async (req, res, next) => {
};
const gContestQuestion = async (req, res, next) => {
};

      
module.exports = {  pAdminLog,pContest,pContestAnn,pContestQuestion ,eContest,eContestAnn,gAllContest,gContest,gContestAnn,gContestQuestion}

///// dont forget to go to routes => graderRoute  and add your api