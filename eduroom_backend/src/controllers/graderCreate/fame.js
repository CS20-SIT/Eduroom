const ErrorResponse = require('../../utils/errorResponse')
const pool = require('../../database/db')



const pAdminLog = async (req, res, next) => {
    const title = 'mockup data here'
    const description =  'mockup data here'
    const adminid = '12345678-1234-1234-1234-123456789123'
    const visible =  false
  
    await pool.query(
      'INSERT INTO announcements(title,description,"adminid",isvisible) VALUES ($1 , $2, $3,$4)',
      [title, description, adminid,visible]
    )
  
    res.send({ success: true })
}


const pContest = async (req, res, next) => {
 
}
const pContestQuestion = async (req, res, next) => {
 
}
const pContestAnn = async (req, res, next) => {
 
}



      
module.exports = {  pAdminLog,pContest,pContestAnn,pContestQuestion }

///// dont forget to go to routes => graderRoute  and add your api