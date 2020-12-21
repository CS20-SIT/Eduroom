const ErrorResponse = require('../utils/errorResponse')
const pool = require('../database/db')
const fs = require('fs')
// const unzip = require('unzip')

exports.test = async (req, res, next) => {
	const time = await pool.query('SELECT NOW()')
	// res.status(200).json({success:true,msg: 'test from backend',time:time.rows[0]})
	res.send({ success: true })
	return
}

exports.zipTest = async (req, res, next) => {
  const pathToZip = 'https://storage.googleapis.com/eduroom/test1/da1afaa0-4137-11eb-9544-f38322265bfd.zip'
	let fileStream = fs.createReadStream(pathToZip)
  fileStream.pipe(res)
  

	fileStream.on('error', function (error) {
		/** error handling happening here **/
	})

	fileStream.on('close', function () {
		/** Close Filestream and delete ZIP File from Server **/
		fileStream.destroy()
		fs.unlink(path)
  })
  
  res.send('hello')
}
