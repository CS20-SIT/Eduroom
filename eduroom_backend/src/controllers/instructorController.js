const pool = require('../database/db')
const { v4: uuidv4 } = require('uuid')

exports.Register = async (req, res, next) => {
	const data = req.body
	const userId = req.user.id

	//check whether this user already register or not
	const userRows = await pool.query('SELECT userId from instructor where userid = $1', [userId])
	if (userRows.rowCount > 0) {
		res.status(200).json({ success: false, err: 'This user already register' })
		return
	}

	await pool.query('INSERT INTO instructor(userid,biography) VALUES ($1,$2)', [userId, data.bio])
	const result = await pool.query('SELECT instructorid FROM instructor WHERE userid = $1 ', [userId])
	const id = result.rows[0].instructorid
	await pool.query('INSERT INTO instructor_degree(instructorid,degree_name,evidence) VALUES ($1,$2,$3)', [
		id,
		data.degree,
		data.degreepath,
	])
	await pool.query(
		'INSERT INTO instructor_expert(instructorid,expertnumber,subjectname,evidence) VALUES ($1,$2,$3,$4)',
		[id, '1', data.expert, data.expertpath]
	)
	res.status(200).json({ success: true, data: data })
}

exports.GetProfile = async (req, res, next) => {
	const instructorId = req.user.instructor
	const result = await pool.query('SELECT isverified from instructor where instructorid = $1', [instructorId])
	const isverified = result.rows[0].isverified
	res.status(200).json({ role: 'instructor', isverified })
}

exports.GetProfileDetail = async (req, res, next) => {
	const instructorId = req.user.instructor
	const bioResult = await pool.query('SELECT biography from instructor where instructorid = $1', [instructorId])
	const expertResult = await pool.query('SELECT subjectname from instructor_expert where instructorid = $1', [
		instructorId,
	])
	const expert = expertResult.rows.map((ex) => {
		return ex.subjectname
	})

	const degreeResult = await pool.query('SELECT degree_name from instructor_degree where instructorid = $1', [
		instructorId,
	])
	const degree = degreeResult.rows.map((deg) => {
		return deg.degree_name
	})

	const result = { bio: bioResult.rows[0].biography, expert, degree }
	res.status(200).json(result)
}

exports.UpdateProfile = async (req, res, next) => {
	const instructorId = req.user.instructor
	const data = req.body
	await pool.query('UPDATE instructor_degree SET degree_name = $2 where instructorid = $1', [
		instructorId,
		data.degree,
	])
	await pool.query('UPDATE instructor_expert SET subjectname = $2 where instructorid = $1', [
		instructorId,
		data.expert,
	])
	await pool.query('UPDATE instructor SET bio = $2 where instructorid = $1', [instructorId, data.bio])
	res.status(200).json({ success: true, data: data })
}

exports.UpdateAvatar = async (req, res, next) => {
	const instructorId = req.user.instructor
	const file = req.files[0]
	const result = { linkUrl: file.linkUrl, fieldname: file.fieldname }
	await pool.query('UPDATE instructor SET avatar = $2 where instructorid = $1', [instructorId, result])
	res.status(200).json({ success: true, data: data })
}

exports.UpdateWallpaper = async (req, res, next) => {
	const instructorId = req.user.instructor
	const file = req.files[0]
	const result = { linkUrl: file.linkUrl, fieldname: file.fieldname }
	await pool.query('UPDATE instructor SET wallpaper = $2 where instructorid = $1', [instructorId, result])
	res.status(200).json({ success: true, data: data })
}

exports.GetCourses = async (req, res, next) => {
	const instructorId = req.user.instructor
	const result = await pool.query('SELECT * from course where ownerid = $1', [instructorId])
	res.send(result.rows)
}

exports.GetCategories = async (req, res, next) => {
	const result = await pool.query('SELECT * from categories')
	res.send(result.rows)
}

exports.Upload = async (req, res, next) => {
	const files = req.files
	const results = files.map((file) => {
		return { linkUrl: file.linkUrl, fieldname: file.fieldname }
	})
	res.send(results)
}

exports.CreateCourse = async (req, res, next) => {
	const instructorId = req.user.instructor
	const courseId = uuidv4()
	console.log(req.body)
	const data = req.body
	await pool.query(
		`INSERT INTO course(courseid, coursename, coursedescription, coursepicture, samplevideo, price, language, havecert, ownerid, status, certpath)
	values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
		[courseId, data.name,'No Description', data.picturePath, data.videoPath, data.price, 'English', true, instructorId, 'Approved','/certpath']
	)
	await pool.query(
		'INSERT INTO course_categories(courseid, cataid) values ($1, $2)', [courseId, data.subject]
	)

	for(i = 0; i< data.sections.length; i++ ){
		await pool.query(
			'INSERT INTO course_section(courseid,sectionno,sectionname) values ($1, $2, $3)',
			[courseId, i+1, data.sections[i].name]
		)

		for(j=0; j<data.sections[i].videos.length; j++){
			await pool.query(
				'INSERT INTO section_part(courseid, sectionno, partno, partname, partdescription, partrole) values ($1, $2, $3, $4, $5, $6)',
				[courseId, i+1, j+1, data.sections[i].videos[j].name, 'Mock Description', 'Video']
			)
			await pool.query(
				'INSERT INTO course_section_part_video(courseid, videopath, sectionno, partno) values ($1, $2, $3, $4)',
				[courseId, data.sections[i].videos[j].path, i+1, j+1]
			)
		}
		for(j=0; j<data.sections[i].materials.length;j++){
			await pool.query(
				'INSERT INTO section_part(courseid, sectionno, partno, partname, partdescription, partrole)  values ($1, $2, $3, $4, $5, $6)',
				[courseId, i+1, j+data.sections[i].videos.length+1, 'No', 'Mock', 'Material']
			)
			await pool.query(
				'INSERT INTO course_section_part_material(courseid, materialpath, sectionno, partno) values ($1, $2, $3, $4)',
				[courseId, data.sections[i].videos[j].path, i+1, j+data.sections[i].videos.length+1]
			)
		}
		for(j=0; j<data.sections[i].questions.length;j++){
			const quizId = uuidv4()
			await pool.query(
				'INSERT INTO section_part(courseid, sectionno, partno, partname, partdescription, partrole) values ($1, $2, $3, $4, $5, $6)',
				[courseId, i+1, j+data.sections[i].videos.length+data.sections[i].materials.length+1, 'No', 'Mock', 'Quiz']
			)
			await pool.query(
				'INSERT INTO course_quiz(courseid, quizid, sectionno, partno) values ($1, $2, $3, $4)',
				[courseId, quizId, i+1,j+data.sections[i].videos.length+data.sections[i].materials.length+1]
			)
			await pool.query(
				'INSERT INTO quiz_question(quizid, questionno, questionname, score) values ($1, $2, $3, $4)',
				[quizId,j+1, data.sections[i].questions[j].q, 1 ]
			)
			for(k=0; k< data.sections[i].questions[j].choices.length;k++){
				if(k==data.sections[i].questions[j].correct){
					await pool.query(
						'INSERT INTO quiz_question_choice(quizid, questionno, choiceno, choicename, iscorrect) values ($1, $2, $3, $4, $5)',
						[quizId,j+1, k+1, data.sections[i].questions[j].choices[k], true ]
					)
				}else{
					await pool.query(
						'INSERT INTO quiz_question_choice(quizid, questionno, choiceno, choicename, iscorrect) values ($1, $2, $3, $4, $5)',
						[quizId,j+1, k+1, data.sections[i].questions[j].choices[k], false ]
					)
				}
			}
		}
	}
	
	// const {name,}
	// const result = await pool.query(
	// 	`INSERT INTO course(courseid,coursename, coursedescription, coursepicture, samplevideo, price, language, havecert, ownerid, status, certpath)
	// values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *`,
	// 	[courseId]
	// )
	res.send({ courseId })
}

exports.DeleteCourse = async (req, res, next) => {
	const courseId = req.user.instructor.course
	const sections = await pool.query('SELECT sectionno from course_section where courseid = $1', [courseId])
	const courseQuiz = await pool.query('SELECT quizid from course_quiz where courseid = $1', [courseId])

	for(i=0;i<courseQuiz.rows.length;i++){

		const questionNo = await pool.query('SELECT questionno from quiz_question where quizid = $1', [courseQuiz.rows[i]])

		for(k=0; k<questionNo.rows.length;k++){
			const choiceNo = await pool.query('SELECT choiceno from quiz_question_choice where quizid = $1 and questionno = $2', 
			[courseQuiz.rows[i], questionNo.rows[k]])

			for(j=0;j<choiceNo.rows.length;j++){
				await pool.query('DELETE from quiz_question_choice where quizid = $1 and questionno = $2 and choiceno = $3', 
				[courseQuiz.rows[i], questionNo.rows[k], choiceNo.rows[j]])
			}

			await pool.query('DELETE from quiz_question where quizid = $1 and questionno = $2', [courseQuiz.rows[i], questionNo.rows[k]])
		}

		await pool.query('DELETE from course_quiz where quizid = $1 and courseid = $2', [courseQuiz.rows[i], courseId])

	}


	for(i=0; i<sections.rows.length;i++){
		const courseVideo = await pool.query('SELECT partno from course_section_part_video where courseid = $1 and sectionno = $2', 
		[courseId, sections.rows[i]])
		const courseMaterial = await pool.query('SELECT partno from course_section_part_material where courseid = $1 and sectionno = $2', 
		[courseId, sections.rows[i]])
		const sectionPart = await pool.query('SELECT partno from section_part where courseid = $1 and sectionno = $2', 
		[courseId, sections.rows[i]])

		for(k=0;k<courseVideo.rows.length;k++){
			await pool.query('DELETE from course_section_part_video where sectionno = $1 and courseid = $2 and partno = $3', 
			[sections.rows[i], courseId, courseVideo.rows[k]])
		}
		for(k=0;k<courseMaterial.rows.length;k++){
			await pool.query('DELETE from course_section_part_material where sectionno = $1 and courseid = $2 and partno = $3', 
			[sections.rows[i], courseId, courseVideo.rows[k]])
		}
		for(k=0;k<sectionPart.rows.length;k++){
			await pool.query('DELETE from section_part where sectionno = $1 and courseid = $2 and partno = $3', 
			[sections.rows[i], courseId, courseVideo.rows[k]])
		}

		await pool.query('DELETE from course_section where sectionno = $1 and courseid = $2', [sections.rows[i], courseId])

	}

	await pool.query('DELETE from course where courseid = $1', [courseId])

	res.send({success : true })

}
