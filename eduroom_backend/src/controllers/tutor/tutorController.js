const pool = require('../../database/db')

// GET
const getAvailableInstructor = async (req, res) => {
	try {
		/*
         {
            "availabilities": [[int],[int],[int],[int],[int]],
            "price": int
         }
         */
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

module.exports = { getAvailableInstructor, getInstructorList }
