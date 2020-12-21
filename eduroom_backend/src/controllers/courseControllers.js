const ErrorResponse = require('../utils/errorResponse')
const pool = require('../database/db')

exports.getAllCourse = async (req, res) => {
	try {
		const {
			rows,
		} = await pool.query(`select * from course,instructor i,user_profile up, categories, course_categories cocat
        where course.ownerid = i.instructorid and i.userid = up.userid and
              course.courseid = cocat.courseid and cocat.cataid = categories.cataid;`)
		if (!rows) res.status(400).send({ msg: 'Not Found' })
		res.status(200).send(rows)
	} catch (err) {
		res.status(400).send(err.message)
	}
}
exports.getCourseFromID = async (req, res, next) => {
	try {
		const userid = req.user.id
		const courseid = req.query.courseID
		const result = await pool.query(`SELECT * FROM course
        join instructor i on course.ownerid = i.instructorid
        join user_profile up on i.userid = up.userid
        WHERE course.courseid = '${courseid}'`)
		if (result.rowCount === 0) return res.status(400).send({ msg: 'Not Found' })
		const answer = result.rows[0]
		answer.isOwn = false
		answer.isWishlist = false
		const isOwnResult = await pool.query(`SELECT userid from user_mycourse where userid = $1 and courseid = $2`, [
			userid,
			courseid,
		])
		if (isOwnResult.rowCount > 0) {
			answer.isOwn = true
		}
		//check that this course is a wishlist of user or not
		const isWishlistResult = await pool.query(
			`SELECT userid from user_wishlist WHERE userid = $1 and courseid = $2`,
			[userid, courseid]
		)
		if (isWishlistResult.rowCount > 0) {
			answer.isWishlist = true
		}
		res.send(answer)
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}
exports.getCourseSectionPart = async (req, res) => {
	try {
        const id = req.query.courseID;
		if (!id) {
			return next(new ErrorResponse('Unauthorize', 401))
        }
        
        //select the id
        let result = await pool.query(`select * from course where courseid = '${id}'`)
        const courseDes = {id,courseName:'',section:[], }
        courseDes.id = result.rows[0].courseid
        courseDes.courseName = result.rows[0].coursename

        //select the section
		result = await pool.query(
			`SELECT * FROM course
            join course_section cs on course.courseid = cs.courseid where course.courseid = '${id}'`
        )
        result.rows.map((e,i) => {
            courseDes.section.push({
                id:'',sectionName:'', time:'37' , questionNow:0 , choiceNow:[], ansChoice:[], submitValid:0, submitYet:0, part:[]
            })
            courseDes.section[i].id = e.sectionno
            courseDes.section[i].time = e.sectionlength
            courseDes.section[i].sectionName = e.sectionname
        })

        //Select the part
        result = await pool.query(
            `select * from course
            join course_section cs on course.courseid = cs.courseid
            join section_part sp on cs.courseid = sp.courseid and cs.sectionno = sp.sectionno
            where course.courseid = '${id}'
            order by partno`
        )
        courseDes.section.map((e,i) => {
            let j=0
            result.rows.map((e2,i2) =>{
                if(e.id == e2.sectionno){
                    e.part.push({
                            id:'', partName:'', type:'', partDescript:'', src:'', questionNum:[]
                        })
                    e.part[j].id = e2.partno
                    e.part[j].partName = e2.partname
                    e.part[j].partDescript = e2.partdescription
                    if(e2.partrole == "Video"){
                        e.part[j].type= 1
                    }
                    if(e2.partrole == "Material"){
                        e.part[j].type= 2
                    }
                    if(e2.partrole == "Quiz"){
                        e.part[j].type= 3
                        e.choiceNow.push(-1)
                    }
                    j++
                }
            })
        })

        // select part video
        result = await pool.query(
            `select * from course
            join course_section cs on course.courseid = cs.courseid
            join section_part sp on cs.courseid = sp.courseid and cs.sectionno = sp.sectionno
            join course_section_part_video cspv on sp.courseid = cspv.courseid and sp.sectionno = cspv.sectionno and sp.partno = cspv.partno
            where course.courseid = '${id}'`
        )
        courseDes.section.map((eSection,iSection) => {
            eSection.part.map((ePart,iPart) =>{
                result.rows.map((eResult,iResult) =>{
                    if(ePart.id == eResult.partno){
                        ePart.src = eResult.videopath
                    }
                })
            })
        })


        // select part material
        result = await pool.query(
            `select * from course
            join course_section cs on course.courseid = cs.courseid
            join section_part sp on cs.courseid = sp.courseid and cs.sectionno = sp.sectionno
            join course_section_part_material cspm on sp.courseid = cspm.courseid and sp.sectionno = cspm.sectionno and sp.partno = cspm.partno            
            where course.courseid = '${id}'`
        )
        courseDes.section.map((eSection,iSection) => {
            eSection.part.map((ePart,iPart) =>{
                result.rows.map((eResult,iResult) =>{
                    if(ePart.id == eResult.partno){
                        ePart.src = eResult.materialpath
                    }
                })
            })
        })

        // select quiz id
        result = await pool.query(
            `select * from course
            join course_section cs on course.courseid = cs.courseid
            join section_part sp on cs.courseid = sp.courseid and cs.sectionno = sp.sectionno
            join course_quiz cq on sp.courseid = cq.courseid and sp.partno = cq.partno
            join quiz_question qq on cq.quizid = qq.quizid
            where course.courseid = '${id}'`
        )
        courseDes.section.map((eSection,iSection) => {
            eSection.part.map((ePart,iPart) =>{
                result.rows.map((eResult,iResult) =>{
                    if(ePart.id == eResult.partno){
                        ePart.questionNum.push({
                            id: eResult.quizid,
                            question: eResult.questionname,
                            choice:[],
                            answer:''
                        })
                    }
                })
            })
        })

        //select answer
        result = await pool.query(
            `select * from course
            join course_section cs on course.courseid = cs.courseid
            join section_part sp on cs.courseid = sp.courseid and cs.sectionno = sp.sectionno
            join course_quiz cq on sp.courseid = cq.courseid and sp.partno = cq.partno
            join quiz_question_choice qqc on cq.quizid = qqc.quizid
            where course.courseid = '${id}'`
        )
        courseDes.section.map((eSection,iSection) => {
            eSection.part.map((ePart,iPart) =>{
                ePart.questionNum.map((eQuestionNum,iQuestionNum) => {
                    result.rows.map((eResult,iResult) =>{
                        if(eQuestionNum.id == eResult.quizid){
                            eQuestionNum.choice.push(eResult.choicename)
                            if(eResult.iscorrect == 1){
                                eQuestionNum.answer = eResult.choiceno-1
                                eSection.ansChoice.push(eQuestionNum.answer)
                            }
                        }
                    })
                })
            })
        })
        courseDes.section.map((eSection,iSection) => {
            eSection.part.map((ePart,iPart) =>{
                ePart.id = ePart.id%10
            })
        })
        if(!courseDes)
            res.status(404).send({msg: 'Not Found'})
        res.status(200).send(courseDes)
    } catch(err) {
        console.log(err.message);
        res.status(400).send(err.message)
    }
}
exports.searchCourse = async (req, res, next) => {
	const search = req.body.search
	const user = req.user
	if (search) {
		const data = await pool.query(
			'select * from course join instructor i on course.ownerid = i.instructorid join user_profile up on i.userid = up.userid WHERE UPPER(coursename) LIKE $1',
			['%' + search.toUpperCase() + '%']
		)
		const course = data.rows
		res.status(200).json({ success: true, data: course })
	} else {
		return next(new ErrorResponse('Not Found', 404))
	}
}
exports.getCategory = async (req, res, next) => {
	const data = await pool.query('SELECT cataname from categories')
	res.status(200).json({ success: true, category: data.rows })
}

exports.searchCategory = async (req, res, next) => {
	const cataname = req.params.cataname
	if (cataname) {
		const data = await pool.query(
			`select * from course,instructor i,user_profile up, categories, course_categories cocat
            where course.ownerid = i.instructorid and i.userid = up.userid and
                  course.courseid = cocat.courseid and cocat.cataid = categories.cataid and cataname = $1`,
			[cataname]
		)
		const course = data.rows
		res.status(200).json({ success: true, data: course })
	} else {
		return next(new ErrorResponse('Not Found', 404))
	}
}

//course shop page
exports.getCourse = async (req, res, next) => {
	try {
		const data = await pool.query(`select u.firstname,u.lastname, c.coursename, c.coursepicture,c.price,c.courseid
        from course c , instructor i, user_profile u 
        where i.userid = u.userid and c.status = 'Approved' 
        and i.instructorid = c.ownerid `)
		const courseInfo = data.rows
		const temp = courseInfo.map((course) => {
			return {
				id: course.courseid,
				title: course.coursename,
				owner: course.ownerid,
				image: course.coursepicture,
				infname: course.firstname,
				inlname: course.lastname,
				price: parseFloat(course.price).toFixed(2),
			}
		})
		res.status(200).json(temp)
	} catch (err) {
		console.log(err.message)
		res.status(400).send(err.message)
	}
}

exports.addCourseToWishlist = async (req, res, next) => {
	try {
		const userid = req.user.id
		const courseid = req.body.courseid
		const nowTime = new Date()
		//check whether already add this course to wishlist or not
		const check = await pool.query(`SELECT userid from user_wishlist where userid = $1 and courseid = $2`, [
			userid,
			courseid,
		])
		if (check.rowCount > 0) {
			return res.status(400).send({ success: false })
		}
		await pool.query(`INSERT INTO user_wishlist(userid,courseid,addtime) VALUES($1,$2,$3)`, [
			userid,
			courseid,
			nowTime,
		])
		res.status(201).send({ success: true })
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}

exports.removeCourseFromWishlist = async (req, res, next) => {
	try {
		const userid = req.user.id
		const courseid = req.body.courseid
		await pool.query(`DELETE FROM user_wishlist where userid = $1 and courseid = $2`, [userid, courseid])
		res.status(201).send({ success: true })
	} catch (err) {
		return next(new ErrorResponse(err, 500))
	}
}
