const ErrorResponse = require('../utils/errorResponse')
const pool = require('../database/db')
const e = require('express')

const getAllCourse = async (req, res) => {
    try {
        const { rows } = await pool.query(`select * from course
        join instructor i on course.ownerid = i.instructorid
        join user_profile up on i.userid = up.userid`)

        if(!rows)
            res.status(404).send({msg: 'Not Found'})

        res.status(200).send(rows)
        
    } catch(err) {
        res.status(400).send(err.message)
    }
}

const getCourseFromID = async (req, res) => {
    try {
        console.log("asd",req.body);
        const { rows } = await pool.query(`SELECT * FROM course
        join instructor i on course.ownerid = i.instructorid
        join user_profile up on i.userid = up.userid
        WHERE course.courseid = '${req.body.courseID}'`)
        

        

        if(!rows)
            res.status(404).send({msg: 'Not Found'})

        res.status(200).send(rows)
    } catch(err) {
        console.log(err.message);
        res.status(400).send(err.message)
    }
}

const getCourseSectionPart = async (req, res, next) => {
    try {
        // const {rows} = await pool.query(`SELECT * FROM course
        // join course_section cs on course.courseid = cs.courseid
        // join course_quiz cq on course.courseid = cq.courseid
        // join course_section_part_material cspm on course.courseid = cspm.courseid
        // WHERE course.courseid = '6714b449-03fe-41ae-9d91-60438d8ebf51'`)
        
        const id = req.body.courseID;
        console.log(req.body);
		if (!id) {
			return next(new ErrorResponse('Unauthorize', 401))
        }
        
        //select the id
        let result = await pool.query(`select * from course where courseid = '${id}'`)
        console.log("req.body.courseID");
        const courseDes = {id,courseName:'',section:[
            // {
            //     id:'',sectionName:'',part:[{
            //         id:'',partName:'',type:'',src:'',questionNum:[]
            //     }]
            // }

        ], }
        // const courseDes = {}
        courseDes.id = result.rows[0].courseid
        courseDes.courseName = result.rows[0].coursename
		// const { instructorid } = result.rows[0]

        //select the section
		result = await pool.query(
			`SELECT * FROM course
            join course_section cs on course.courseid = cs.courseid where course.courseid = '${id}'`
        )
        result.rows.map((e,i) => {
            courseDes.section.push({
                id:'',sectionName:'', time:"37" , questionNow:0 , choiceNow:[], ansChoice:[], submitValid:0, submitYet:0, part:[
                    // {
                    //     id:'',partName:'',type:'',src:'',questionNum:[]
                    // }
                ]
            })
            courseDes.section[i].id = e.sectionno
            courseDes.section[i].sectionName = e.sectionname

            // console.log(i);
        })
        console.log("End map sec")

        result = await pool.query(
			`SELECT * FROM course
            join course_section cs on course.courseid = cs.courseid where course.courseid = '${id}'`
        )
        result.rows.map((e,i) => {
            // console.log(e.sectionno+"asdd");
            courseDes.section[i].id = e.sectionno
            courseDes.section[i].sectionName = e.sectionname
        })
        console.log("End map part")

        //Select the part
        result = await pool.query(
            `select * from course
            join course_section cs on course.courseid = cs.courseid
            join section_part sp on cs.courseid = sp.courseid and cs.sectionno = sp.sectionno
            where course.courseid = '${id}'
            order by partno`
        )
        console.log("In each part")
        courseDes.section.map((e,i) => {
            let j=0
            result.rows.map((e2,i2) =>{
                // console.log(e.id)
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
                    // console.log("VidePath "+eResult.partno+" "+ePart.id+" "+eResult.videopath)
                    if(ePart.id == eResult.partno){
                        console.log("VidePath "+eResult.videopath)
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
                        console.log("MatePath "+eResult.materialpath)
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
                    // console.log("Quiz "+eResult.partno+" "+ePart.id)
                    if(ePart.id == eResult.partno){
                        ePart.questionNum.push({
                            id: eResult.quizid,
                            question: eResult.questionname,
                            choice:[],
                            answer:''
                        })
                        // console.log("Quiz "+eResult.quizid+" "+eResult.questionname)
                        
                    }
                })
            })
        })
        console.log("End of question")

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
                        // console.log("Quiz "+eResult.partno+" "+ePart.id)
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


        

		// const availabilities = [[], [], [], [], []]
		// if (result.rows.length > 0) {
		// 	result.rows.forEach((r) => {
		// 		availabilities[r.day].push(r.time - 9)
		// 	})
		// }
		// result = await pool.query(
		// 	`select price from instructor_availabilities_price where instructorid = '${instructorid}'`
		// )
		// let price = 0
		// if (result.rows.length > 0) {
		// 	price = result.rows[0].price
		// }
        // res.status(200).send({ availabilities, price })
        courseDes.section.map((eSection,iSection) => {
            eSection.part.map((ePart,iPart) =>{
                ePart.id = ePart.id%10
            })
        })
        console.log('End!!!');
        if(!courseDes)
            res.status(404).send({msg: 'Not Found'})
            console.log( courseDes );
        res.status(200).send(courseDes)
    } catch(err) {
        console.log(err.message);
        res.status(400).send(err.message)
    }
}

const searchCourse = async (req, res, next) => {
    const search = req.body.search;
    const user = req.user
    if(search){
        const data = await pool.query(
            'select * from course join instructor i on course.ownerid = i.instructorid join user_profile up on i.userid = up.userid WHERE UPPER(coursename) LIKE $1',
            ['%' + search.toUpperCase()+'%']
      )
    const course = data.rows
      res.status(200).json({ success: true, data: course })
    } else {
      return next(new ErrorResponse("Not Found",404))
    }
}


module.exports = {
    getAllCourse,
    getCourseFromID,
    getCourseSectionPart,
    searchCourse
}