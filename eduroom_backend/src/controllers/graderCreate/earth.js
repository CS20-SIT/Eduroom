const ErrorResponse = require('../../utils/errorResponse')
const pool = require('../../database/db')


const pQuestion= async (req, res, next) => {
    const title = 'mockup data here'
    const description =  'mockup data here'
    const hint =  'mockup data here'
    const intputDes = 'mockup data here'
    const outputDes = 'mockup data here'
    const timeLimit = 'mockup data here'
    const memoryLimit = 'mockup data here'
    const difficulty = 'mockup data here'
    const visibility =  false
    const ruleType = 'acm'
    const adminid = '12345678-1234-1234-1234-123456789123'
  
    await pool.query(
      'INSERT INTO announcements(title,description,hint,intputDes,outputDes,timeLimit,memoryLimit,difficulty,visibility,ruleType) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)',
      [title, description,hint,intputDes,outputDes,timeLimit,memoryLimit,difficulty,visibility,ruleType,adminid]
    )
    res.send({ success: true })
  }

  const pQuestionTag = async (req, res, next) => {
  
  }
  const pTag = async (req, res, next) => {
    const tagId = 123456
    const tagName = 'testName'

    await pool.query(
      'INSERT INTO tags(tagId,tagName) VALUES ($1 , $2,)',
      [tagId, tagName]
    )
    res.send({ success: true })
  }
  const pQuestionSample = async (req, res, next) => {
 
  }
  const pQuestionTestcase = async (req, res, next) => {
 
}
  

  module.exports = { pQuestion,pQuestionTag,pTag,pQuestionSample, pQuestionTestcase}

  ///// dont forget to go to routes => graderRoute  and add your api