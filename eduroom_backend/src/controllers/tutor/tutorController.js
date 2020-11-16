const pool = require('../../database/db')
const app = require('../../server')

// GET
const getAvailableInstructor = async (req, res) => {
	try {
		/*
         {
            "availabilities": [[int],[int],[int],[int],[int]],
            "price": int
         }
         */
		// ID from cookies
		const id = '9e6cfde7-af2c-4f56-b76e-2c68d97e847f'

		let result = await pool.query(`select day,time from instructor_availabilities where instructorid = '${id}'`)
		const availabilities = [[], [], [], [], []]
		result.rows.forEach((r) => {
			availabilities[r.day].push(r.time)
		})
		result = await pool.query(`select price from instructor_availabilities_price where instructorid = '${id}'`)
		const { price } = result.rows[0]
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
		res.status(200).send({ instructorInfo })
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
                            "times": [{ "date": int, "time": [int] }]
                    }
                    }
                 */

		// ID : instructorID
		// const { id } = req.query
		// console.log(id)

		// ID : hardcode
		const id = '9e6cfde7-af2c-4f56-b76e-2c68d97e847f'

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

		result = await pool.query(`
		select day,time
		from instructor_availabilities
		where instructorid = '${id}';
        `)
		const availabilities = [[], [], [], [], []]
		result.rows.forEach((r) => {
			availabilities[r.day].push(r.time)
		})

		result = await pool.query(`
		select date_part('hour', starttime) as starttime,date_part('hour', endtime) as endtime,  to_char( starttime, 'YYYY-MM-DD') as date from instructor_appointments
		where instructorid = '${id}';
		`)
		instructorApps = result.rows
		instructorApps.forEach((a) => {
			const days = (a.date + '').split('-')
			let date = new Date(days[0], days[1] - 1, days[2])
			const day = date.getDay() - 1
			const timeremoval = a.endtime - a.starttime
			const index = availabilities[day].indexOf(a.starttime)
			availabilities[day].splice(index, timeremoval)
		})

		let instructor = {
			id: instructorInfo.instructorid,
			name: instructorInfo.firstname + ' ' + instructorInfo.lastname,
			info: instructorInfo.subjectname,
			text: instructorInfo.biography,
			rating: (sum / c).toFixed(1),
			ratingCount: instructorRatingCount.count,
			price: instructorInfo.price,
			times: availabilities,
		}

		res.status(200).send({ instructor })
	} catch (e) {
		res.status(404).send(e)
	}
}
const getStudentAppointments = async (req, res) => {
	try {
		/*
              
                 */

		// ID from cookies
		const id = '71ac8b74-11e5-465c-ae9e-41b56edbbe00'

		let result = await pool.query(`
        select a.appointmentid,u.firstname , u.lastname ,e.subjectname,date_part('hour', a.starttime) as starttime,date_part('hour', a.endtime) as endtime, to_char( starttime, 'DD MON YYYY') as date, a.status
            from  instructor i, user_profile u, instructor_expert e, instructor_appointments a,instructor_appointment_members m
            where i.instructorid = a.instructorid
            and i.userid = u.userid
            and a.appointmentid = m.appointmentid
            and m.userid = '${id}'
            and e.instructorid = i.instructorid;
        `)
		appointment = result.rows

		const appointments = []
		appointment.forEach((a) => {
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
			}
			appointments.push(tmp)
		})

		res.status(200).send({ appointments })
	} catch (e) {
		res.status(404).send(e)
	}
}
const getInstructorReviews = async (req, res) => {
	try {
		// ID : instructorID
		// const { id } = req.query
		// console.log(id)

		// ID : hardcode
		const id = '9e6cfde7-af2c-4f56-b76e-2c68d97e847f'
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
const getUserInfo = async (req, res) => {
	try {
		// name : name key
		// const { name } = req.query
		// console.log(name)

		// name : hardcode
		const name = 'ka'
		let result = await pool.query(`
        select userid, firstname, lastname from user_profile where lower(firstname) like '%${name}%' or lower(lastname) like '%${name}%'
        `)
		const students = []
		result.rows.forEach((s) => {
			let tmp = {
				id: s.userid,
				name: s.firstname + ' ' + s.lastname,
			}
			students.push(tmp)
		})
		res.status(200).send({ students })
	} catch (e) {
		res.status(404).send(e)
	}
}

module.exports = {
	getAvailableInstructor,
	getInstructorList,
	getInstructorInfo,
	getStudentAppointments,
	getInstructorReviews,
	getUserInfo,
}
