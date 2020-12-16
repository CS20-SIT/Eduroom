const pool = require('../../database/db')
const app = require('../../server')

const ErrorResponse = require('../../utils/errorResponse')

// INSTRUCTOR
// 1: 9e6cfde7-af2c-4f56-b76e-2c68d97e847f
// 2: 14bbc17c-e4cd-4e16-851f-29298171381d

// STUDENT
// 1: 44f8e863-226c-4bed-9556-aa6e1600d3bc
// 2: 123e4567-e89b-12d3-a456-426614174000
// 3: 08e9d239-b3f2-4db8-b29a-da99a314df92

// GET
const getInstructorAvailabilities = async (req, res, next) => {
	try {
		/*
         {
            "availabilities": [[int],[int],[int],[int],[int]],
            "price": int
         }
         */

		// ID from cookies
		// const id = '9e6cfde7-af2c-4f56-b76e-2c68d97e847f'
		// const id = '14bbc17c-e4cd-4e16-851f-29298171381d'

		const id = req.user.id
		if (!id) {
			return next(new ErrorResponse('Unauthorize', 401))
		}
		let result = await pool.query(`select instructorid from instructor where userid = '${id}'`)
		const { instructorid } = result.rows[0]
		result = await pool.query(
			`select day,time from instructor_availabilities where instructorid = '${instructorid}' order by day, time`
		)
		const availabilities = [[], [], [], [], []]
		if (result.rows.length > 0) {
			result.rows.forEach((r) => {
				availabilities[r.day].push(r.time - 9)
			})
		}
		result = await pool.query(
			`select price from instructor_availabilities_price where instructorid = '${instructorid}'`
		)
		let price = 0
		if (result.rows.length > 0) {
			price = result.rows[0].price
		}
		res.status(200).send({ availabilities, price })
	} catch (e) {
		res.status(404).send(e)
	}
}
const getInstructorList = async (req, res) => {
	try {
		/*
         {
        "instructors": [
                {
                        "id",
                        "name": String,
                        "info": String,
                        "rating": decimal,
                        "ratingCount": int,
                }
            ],
        }   
         */

		// WHY INSTRUCTOR EXPERT IS NOT INSERTED ??
		let result = await pool.query(`select i.instructorid,u.firstname,u.lastname,e.subjectname from instructor_availabilities_price p, instructor i, user_profile u, instructor_expert e
            where p.instructorid = i.instructorid and i.userid = u.userid and e.instructorid = p.instructorid;
        `)
		instructorInfo = result.rows
		result = await pool.query(
			`select i.instructorid, m.score from instructor_appointment_members m,instructor_appointments i where i.appointmentid = m.appointmentid AND m.score is not null;`
		)
		instructorRating = result.rows

		result = await pool.query(
			`select COUNT(*),i.instructorid from instructor_appointment_members m,instructor_appointments i where i.appointmentid = m.appointmentid AND m.score is not null group by i.instructorid;`
		)
		instructorRatingCount = result.rows

		instructorInfo.forEach((i) => {
			i.name = i.firstname + ' ' + i.lastname
			let sum = 0
			let c = 0
			instructorRating.forEach((r) => {
				if (i.instructorid == r.instructorid) {
					sum += r.score
					c++
				}
			})
			i.rating = (sum / c).toFixed(1)
			instructorRatingCount.forEach((c) => {
				if (i.instructorid == c.instructorid) i.ratingCount = c.count
			})
			delete i.firstname
			delete i.lastname
		})
		res.status(200).send(instructorInfo)
	} catch (e) {
		res.status(404).send(e)
	}
}
const getInstructorInfo = async (req, res) => {
	try {
		/*
                 {
                    "instructor": {
                            "id",
                            "name": String,
                            "info": String,
                            "text": String,
                            "rating": decimal,
                            "ratingCount": int,
                            "price": decimal
                    }
                    }
                 */

		// ID : instructorID
		const { id } = req.query
		console.log('id', id)

		// ID : hardcode
		// const id = '9e6cfde7-af2c-4f56-b76e-2c68d97e847f'

		let result = await pool.query(`select i.instructorid,u.firstname,u.lastname,e.subjectname, i.biography,p.price from instructor_availabilities_price p, instructor i, user_profile u, instructor_expert e
        where i.instructorid = '${id}' and p.instructorid = i.instructorid and i.userid = u.userid and e.instructorid = p.instructorid;
        `)
		instructorInfo = result.rows[0]

		result = await pool.query(`select m.score from instructor_appointment_members m,instructor_appointments i
		where instructorid = '${id}'
		  and i.appointmentid = m.appointmentid
		  AND m.score is not null;
		`)
		instructorRating = result.rows
		let sum = 0
		let c = 0
		instructorRating.forEach((r) => {
			sum += r.score
			c++
		})

		result = await pool.query(`select COUNT(*) from instructor_appointment_members m,instructor_appointments i
		where instructorid = '${id}'
		  and i.appointmentid = m.appointmentid
		  AND m.score is not null
		group by i.instructorid;
		`)
		instructorRatingCount = result.rows[0]

		let instructor = {
			id: instructorInfo.instructorid,
			name: instructorInfo.firstname + ' ' + instructorInfo.lastname,
			info: instructorInfo.subjectname,
			text: instructorInfo.biography,
			rating: (sum / c).toFixed(1),
			ratingCount: instructorRatingCount.count,
			price: instructorInfo.price,
		}

		res.status(200).send({ instructor })
	} catch (e) {
		res.status(404).send(e)
	}
}
const getInstructorReview = async (req, res) => {
	try {
		// ID : instructorID
		const { id } = req.query
		console.log(id)

		// ID : hardcode
		// const id = '9e6cfde7-af2c-4f56-b76e-2c68d97e847f'

		let result = await pool.query(`
        select m.score, m.description, u.firstname, u.lastname,to_char( starttime, 'YYYYMMDD') as date
        from instructor_appointments a, instructor_appointment_members m, user_profile u
        where a.appointmentid = m.appointmentid
          and a.instructorid = '${id}'
          and m.score is not null
          and u.userid = m.userid`)

		rates = result.rows
		const rating = []
		rates.forEach((r) => {
			let tmp = {
				score: r.score,
				desc: r.description,
				name: r.firstname + ' ' + r.lastname,
				date: r.date,
			}
			rating.push(tmp)
		})
		res.status(200).send({ rating })
	} catch (e) {
		res.status(404).send(e)
	}
}
const getInstructorAvailability = async (req, res) => {
	try {
		// id, dates : instructorID + dd-mm-yyyy
		const { id, dates } = req.query
		// console.log('INSTRUCTOR AVAILABILITTY')
		// console.log(id, dates)

		// name : hardcode
		// const id = '9e6cfde7-af2c-4f56-b76e-2c68d97e847f'
		// const dates = '2020-11-17'

		const date = dates.split('-')
		const start = `${date[0]}-${date[1]}-${date[2]}`
		const end = `${date[0]}-${date[1]}-${parseInt(date[2]) + 1}`
		const d = new Date(date[0], date[1] - 1, date[2])
		const day = d.getDay() - 1

		let result = await pool.query(`
        select date_part('hour', starttime) as starttime, date_part('hour', endtime) as endtime
        from instructor_appointments
        where starttime >= timestamp '${start} 00:00:00'
          and starttime < timestamp '${end} 00:00:00'
		  and instructorid = '${id}'
			and status = 'true'
		  ;`)
		sameDay = result.rows

		result = await pool.query(`
        select time from instructor_availabilities
        where day = '${day}'
          and instructorid = '${id}';`)
		const times = []
		result.rows.forEach((r) => {
			times.push(r.time)
		})

		sameDay.forEach((d) => {
			const removal = parseInt(d.endtime) - parseInt(d.starttime)
			const removeIndex = times.indexOf(d.starttime)
			times.splice(removeIndex, removal)
		})

		res.status(200).send({ times })
	} catch (e) {
		res.status(404).send(e)
	}
}
const getInstructorAppointments = async (req, res, next) => {
	try {
		// ID from cookies
		// const id = '9e6cfde7-af2c-4f56-b76e-2c68d97e847f'
		// const id = '14bbc17c-e4cd-4e16-851f-29298171381d'
		const id = req.user.id
		if (!id) {
			return next(new ErrorResponse('Unauthorize', 401))
		}
		let result = await pool.query(`select instructorid from instructor where userid = '${id}'`)
		const { instructorid } = result.rows[0]

		result = await pool.query(`
		select a.appointmentid, a.headerid as id, u.firstname as firstname, u.lastname as lastname, date_part('hour', a.starttime) as starttime,date_part('hour', a.endtime) as endtime, a.status,to_char( a.starttime, 'DD-MM-YYYY') as date, m.userid as mid, me.firstname as mfn, me.lastname as mln
        from instructor_appointments a,user_profile u, instructor_appointment_members m, (select userid, firstname, lastname from user_profile) me
        where a.instructorid = '${instructorid}'
		  and a.headerid = u.userid
		  and m.appointmentid = a.appointmentid
          and me.userid = m.userid
        order by a.starttime;
        `)

		appointments = result.rows
		// console.log(appointments)

		const tmps = []
		let c = -1
		appointments.forEach((a) => {
			if (c != a.appointmentid) {
				c = a.appointmentid
				let isAgree = 'Pending'
				if (a.status === true) isAgree = 'Approved'
				if (a.status === false) isAgree = 'Rejected'
				let tmp = {
					appointmentID: a.appointmentid,
					id: a.id,
					name: a.firstname + ' ' + a.lastname,
					date: a.date.split('-'),
					starttime: a.starttime,
					endtime: a.endtime,
					status: isAgree,
					members: [],
				}
				if (a.mid != a.id)
					tmp.members.push({
						id: a.mid,
						name: a.mfn + ' ' + a.mln,
					})
				tmps.push(tmp)
			} else {
				if (a.mid != a.id) {
					let index = -1
					tmps.forEach((x, i) => {
						if (x.appointmentID == a.appointmentid) {
							index = i
						}
					})
					console.log(index)

					tmps[index].members.push({
						id: a.mid,
						name: a.mfn + ' ' + a.mln,
					})
				}
			}
		})
		const pending = []
		const approved = []
		const rejected = []
		tmps.forEach((t) => {
			if (t.status == 'Pending') pending.push(t)
			if (t.status == 'Approved') approved.push(t)
			if (t.status == 'Rejected') rejected.push(t)
		})
		const appointment = [...pending, ...approved, ...rejected]

		res.status(200).send({ appointment })
	} catch (e) {
		res.status(404).send(e)
	}
}
const getStudentAppointments = async (req, res, next) => {
	try {
		// ID from cookies

		// const id = '44f8e863-226c-4bed-9556-aa6e1600d3bc'
		const id = req.user.id
		if (!id) {
			return next(new ErrorResponse('Unauthorize', 401))
		}
		// console.log(id)

		let result = await pool.query(`
		select a.appointmentid,u.firstname , u.lastname ,e.subjectname,date_part('hour', a.starttime) as starttime,date_part('hour', a.endtime) as endtime, 
		to_char( starttime, 'DD MON YYYY') as date, a.status, to_char( starttime, 'YYYYMMDD') as sorted, m.score
            from  instructor i, user_profile u, instructor_expert e, instructor_appointments a,instructor_appointment_members m
            where i.instructorid = a.instructorid
            and i.userid = u.userid
            and a.appointmentid = m.appointmentid
            and m.userid = '${id}'
            and e.instructorid = i.instructorid
			order by sorted;
        `)
		appointment = result.rows

		const tmps = []
		appointment.forEach((a) => {
			score = a.score ? true : false
			const starttime = a.starttime > 9 ? '' + a.starttime + ':00' : '0' + a.starttime + ':00'
			const endtime = a.endtime > 9 ? '' + a.endtime + ':00' : '0' + a.endtime + ':00'
			let isAgree = 'Pending'
			if (a.status === true) isAgree = 'Approved'
			if (a.status === false) isAgree = 'Rejected'
			let tmp = {
				id: a.appointmentid,
				name: a.firstname + ' ' + a.lastname,
				info: a.subjectname,
				date: a.date,
				starttime,
				endtime,
				isAgree,
				sorted: a.sorted,
				score,
			}
			tmps.push(tmp)
		})

		const today = new Date()
		const now = '' + today.getFullYear() + (today.getMonth() + 1) + today.getDate()

		const need = []
		const normal = []
		tmps.forEach((t) => {
			if (!t.score && t.isAgree == 'Approved' && t.sorted < now) {
				need.push(t)
			} else {
				normal.push(t)
			}
		})
		// console.log('need', need)
		// console.log('normal', normal)

		const appointments = [...need, ...normal]
		// const appointments = [...tmps]
		res.status(200).send({ appointments })
	} catch (e) {
		res.status(404).send(e)
	}
}
const getUserInfo = async (req, res, next) => {
	try {
		// name : name key
		const { name, iid } = req.query
		console.log(name)

		const id = req.user.id
		if (!id) {
			return next(new ErrorResponse('Unauthorize', 401))
		}

		let result = await pool.query(`select userid from instructor where instructorid = '${iid}'`)
		let insID = ''
		if (result.rows[0]) insID = result.rows[0].userid

		// name : hardcode
		// const name = 'ka'
		result = await pool.query(`
        select userid, firstname, lastname from user_profile where  CONCAT(lower(firstname),' ',lower(lastname)) like '%${name}%'  limit 5
        `)
		const students = []

		result.rows.forEach((s) => {
			console.log(s.firstname)
			console.log(s.userid, id)

			if (s.userid != id && s.userid != insID) {
				let tmp = {
					id: s.userid,
					name: s.firstname + ' ' + s.lastname,
				}
				students.push(tmp)
			}
		})
		res.status(200).send({ students })
	} catch (e) {
		res.status(404).send(e)
	}
}

// POST
const updateInstructorAvailabilities = async (req, res, next) => {
	try {
		/*
		body
         {
            "availabilities": [[int],[int],[int],[int],[int]],
            "price": int
         }
         */

		// ID from cookies
		const { availabilities, price } = req.body
		// const id = 'bef966c3-c352-4044-a6b7-cdab918611b8'
		// const id = '9e6cfde7-af2c-4f56-b76e-2c68d97e847f'
		// const id = '14bbc17c-e4cd-4e16-851f-29298171381d'

		const id = req.user.id
		if (!id) {
			return next(new ErrorResponse('Unauthorize', 401))
		}
		let result = await pool.query(`select instructorid from instructor where userid = '${id}'`)
		const { instructorid } = result.rows[0]
		await pool.query(`delete from instructor_availabilities where instructorid = '${instructorid}'`)
		for (let i = 0; i < availabilities.length; i++) {
			for (let j = 0; j < availabilities[i].length; j++) {
				await pool.query(
					`insert into instructor_availabilities values ('${instructorid}',${i},${availabilities[i][j] + 9})`
				)
			}
		}
		result = await pool.query(
			`select instructorid from instructor_availabilities_price where instructorid = '${instructorid}'`
		)

		if (result.rows.length == 0) {
			console.log('IF')
			await pool.query(`insert into instructor_availabilities_price values ('${instructorid}',${price});`)
		} else {
			console.log('ELSE')
			await pool.query(`
			update instructor_availabilities_price set price = ${price} where instructorid = '${instructorid}'`)
		}
		res.status(200).send({ test: 'Successs' })
	} catch (e) {
		res.status(404).send(e)
	}
}
const insertStudentAppointment = async (req, res, next) => {
	try {
		/*
		body
         {
			"id",
			"startTime": timestamp,
			"endTime": timestamp,
			"price": int,
			"members": [{ "id" }]
		}
         */

		// ID from cookies
		// const headerId = '44f8e863-226c-4bed-9556-aa6e1600d3bc'
		const headerId = req.user.id

		if (!headerId) {
			return next(new ErrorResponse('Unauthorize', 401))
		}
		const { id, startTime, endTime, price, members } = req.body
		// 	console.log(headerId)
		// 	console.log(id, startTime, endTime, price, members)
		// 	console.log(`
		// 	insert into instructor_appointments(starttime, endtime, status, price, paymentdue, approvetime, ispaid, instructorid, headerid)
		// 	values(${startTime}, ${endTime}, null, ${price}, null, null, false, ${id}, ${headerId}) returning appointmentid;
		// `)

		const result = await pool.query(`
			insert into instructor_appointments(starttime, endtime, status, price, paymentdue, approvetime, ispaid, instructorid, headerid)
			values('${startTime}', '${endTime}', null, ${price}, null, null, false, '${id}', '${headerId}') returning appointmentid;
		`)
		const { appointmentid } = result.rows[0]

		for (let i = 0; i < members.length; i++) {
			await pool.query(`
				insert into instructor_appointment_members(appointmentid, userid, score, description)
				values ('${appointmentid}','${members[i].id}',null,null);
			`)
		}
		await pool.query(`
		insert into instructor_appointment_members(appointmentid, userid, score, description)
		values ('${appointmentid}','${headerId}',null,null);
	`)
		res.status(200).send({ test: 'Successs' })
	} catch (e) {
		res.status(404).send(e)
	}
}
const updateInstructorAppointment = async (req, res) => {
	try {
		/*
		body
          {
			"id",
			"status"
		}
         */

		const { id, status } = req.body
		const now = new Date()
		const paymentdue = status ? 'endtime' : null
		const approveTime = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${
			now.getHours() > 10 ? now.getHours() : '0' + now.getHours()
		}:${now.getMinutes() > 10 ? now.getMinutes() : '0' + now.getMinutes()}:${
			now.getSeconds() > 10 ? now.getSeconds() : '0' + now.getSeconds()
		}`

		await pool.query(`
			update instructor_appointments
			set status = ${status}, paymentdue = ${paymentdue},approvetime = '${approveTime}'
			where appointmentid = '${id}';
			`)

		res.status(200).send({ test: 'Successs' })
	} catch (e) {
		res.status(404).send(e)
	}
}
const updateAppointmentReview = async (req, res, next) => {
	try {
		/*
		body
		{
			"id": AppointmentID,
			"score": int,
			"desc": String,
		}
		
         */

		// Cookie
		const userId = req.user.id

		if (!userId) {
			return next(new ErrorResponse('Unauthorize', 401))
		}
		// const userId = '123e4567-e89b-12d3-a456-426614174000'
		const { id, score, desc } = req.body

		await pool.query(`
			update instructor_appointment_members
			set score = ${score}, description = '${desc}'
			where appointmentid = '${id}' and userid = '${userId}';
			`)

		res.status(200).send({ test: 'Successs' })
	} catch (e) {
		res.status(404).send(e)
	}
}

module.exports = {
	getInstructorAvailabilities,
	getInstructorList,
	getInstructorInfo,
	getStudentAppointments,
	getInstructorReview,
	getUserInfo,
	getInstructorAvailability,
	getInstructorAppointments,
	updateInstructorAvailabilities,
	insertStudentAppointment,
	updateInstructorAppointment,
	updateAppointmentReview,
}
