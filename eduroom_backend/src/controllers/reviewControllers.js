const ErrorResponse = require('../utils/errorResponse')
const pool = require('../database/db')
exports.reviewTest = async (req, res, next) => {
	const data = [
		{ reviewrate: '5', comment: 'Good 1', date: '2020-01-01' },
		{ reviewrate: '2', comment: 'Good 2', date: '2020-01-02' },
	]
	res.status(200).json({ success: true, data: data })
	return
}
exports.createReview = async (req, res, next) => {
	const data = req.body
	const user = req.user
	const date = new Date()
	const currentDate = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
	if(data.type=="course"){
	await pool.query("INSERT INTO review_course(userid, courseid, reviewrate, comment, date) values($1, $2, $3,$4,$5)",[user.id,data.courseid,data.rate,data.comment,currentDate])
	res.status(201).json({success:true})
}
}
exports.getReview = async (req, res, next) => {
	const{type,id} = req.query
	if(type=="course"){
		const data=await pool.query("SELECT reviewrate, comment, date, displayname, avatar FROM review_course JOIN user_profile ON review_course.userid = user_profile.userid WHERE courseid = $1 ORDER BY date desc",[id])
		let rates = {"1":0,"2":0,"3":0,"4":0,"5":0}
		data.rows.map((el)=>{
			rates[parseInt(el.reviewrate)]+=1
		})
		const average = (rates[1]*1 + rates[2]*2 + rates[3]*3 + rates[4]*4 + rates[5]*5)/(rates[1]+rates[2]+rates[3]+rates[4]+rates[5])
		res.status(200).json({success:true,average,count:data.rowCount,data:data.rows,rates})
	}
}