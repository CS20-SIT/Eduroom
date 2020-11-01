const ErrorResponse = require('../../utils/errorResponse')
const pool = require('../../database/db')


const pQuestion= async (req, res, next) => {
    const title = 'mockup data here'
    const description =  'mockup data here'
    const adminid = 'df3b7cb7-6a95-11e7-8846-b05adad3f0ae'
    const visible =  false
  
    await pool.query(
      'INSERT INTO announcements(title,description,"adminid",isvisible) VALUES ($1 , $2, $3,$4)',
      [title, description, adminid,visible]
    )
    res.send({ success: true })
  }


  const pQuestionTag = async (req, res, next) => {
 
  }
  const pQuestionSample = async (req, res, next) => {
 
  }
  const pQuestionTestcase = async (req, res, next) => {
 
}
  

  module.exports = { pQuestion,pQuestionTag,pQuestionSample, pQuestionTestcase}

  ///// dont forget to go to routes => graderRoute  and add your api