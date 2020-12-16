const pool = require('../database/db')

const getAllCourse = async (req, res) => {
    try {
        const { rows } = await pool.query(`SELECT * FROM course
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

const getCourseSectionPart = async (req, res) => {
    console.log(req.body.courseID, 'rty');
    try {
        const {rows} = await pool.query(`SELECT * FROM course
        join course_section cs on course.courseid = cs.courseid
        join course_quiz cq on course.courseid = cq.courseid
        join course_section_part_material cspm on course.courseid = cspm.courseid
        WHERE course.courseid = '6714b449-03fe-41ae-9d91-60438d8ebf51'`)
        

        if(!rows)
            res.status(404).send({msg: 'Not Found'})


            console.log( rows );

        res.status(200).send(rows)
    } catch(err) {
        console.log(err.message);
        res.status(400).send(err.message)
    }
}

module.exports = {
    getAllCourse,
    getCourseFromID,
    getCourseSectionPart
}