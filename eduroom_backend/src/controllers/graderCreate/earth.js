const ErrorResponse = require('../../utils/errorResponse')
const pool = require('../../database/db')


const pQuestion= async (req, res, next) => {
    const title = 'mockup data here'
    const description =  'mockup data here'
    const hint =  'mockup data here'
    const intputDes = 'mockup data here'
    const outputDes = 'mockup data here'
    const timeLimit = 120
    const memoryLimit = 120
    const difficulty = 'mockup data here'
    const visibility =  false
    const ruleType = 'acm'
    const adminid = '12345678-1234-1234-1234-123456789123'
  
    await pool.query(
      'INSERT INTO Questions(title,description,hint,intputDes,outputDes,timeLimit,memoryLimit,difficulty,visibility,ruleType) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)',
      [title, description,hint,intputDes,outputDes,timeLimit,memoryLimit,difficulty,visibility,ruleType,adminid]
    )
    res.send({ success: true })
  }

  const pQuestionTag = async (req, res, next) => {
    res.send({ success: true })
  }
  const pTag = async (req, res, next) => {
    const tagId = 1
    const tagName = 'testName'

    await pool.query(
      'INSERT INTO tags(tagId,tagName) VALUES ($1 , $2)',
      [tagId, tagName]
    )
    res.send({ success: true })
  }
  const pQuestionSample = async (req, res, next) => {
 
  }
  const pQuestionTestcase = async (req, res, next) => {
 
}
  //edit by id
const eQuestion = async (req, res, next) => {
  const title = req.body.title
  const description = req.body.description
  // const adminid = req.body.adminid
  const adminid = '12345678-1234-1234-1234-123456789123'
  const visible = req.body.isvisible
  const id = req.body.id

  await pool.query(
    'UPDATE announcements SET (title,description,"adminid",isvisible) = ($1 , $2, $3 ,$4) WHERE id = ($5)',
    [title, description, adminid,visible,id]

    
  )

  res.send({ success: true, title, description, adminid })
}
const eQuestionSample = async (req, res, next) => {
}
const eQuestionTestcase = async (req, res, next) => {
}

//get all
const gAllAdminLog = async (req, res, next) => {
  const data = await pool.query('select * from announcements order by 1 DESC ')
  const ann = data.rows
  res.send(ann)
}
const gAllQuestions = async (req, res, next) => {
}
const gAllTag  = async (req, res, next) => {
}


//get by id 
const gQuestion = async (req, res, next) => {
  const data = await pool.query("select * from Announcements  where id = 1 ");
  const conann = data.rows;
  res.send(conann);
};
const gQuestionTag = async (req, res, next) => {
};
const gQuestionSample = async (req, res, next) => {
};
const gQuestionTestcase = async (req, res, next) => { 
};


  module.exports = { pQuestion,pQuestionTag,pTag,pQuestionSample, pQuestionTestcase,eQuestion,eQuestionSample,eQuestionTestcase,gAllAdminLog,gAllQuestions,gAllTag,gQuestion,gQuestionSample,gQuestionTag,gQuestionTestcase}

  ///// dont forget to go to routes => graderRoute  and add your api