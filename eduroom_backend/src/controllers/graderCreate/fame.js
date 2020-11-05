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
  const title = 'test01'
  const conRuleType =  'oi'
  const description =  'double bruh'
  const startTime = '2020-11-05 15:15:07.902379'
  const endTime = '2020-11-05 15:15:07.90237'
  const status = true
  const adminid = '12345678-1234-1234-1234-123456789123'

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



      
module.exports = {  pAdminLog,pContest,pContestAnn,pContestQuestion }

///// dont forget to go to routes => graderRoute  and add your api