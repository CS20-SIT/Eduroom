const bcrypt = require('bcryptjs')
const sharp = require('sharp')
const { v4: uuidv4 } = require('uuid')
const ErrorResponse = require('../utils/errorResponse')
const pool = require('../database/db')
const { uploadFile } = require('../utils/cloudStorage')

exports.editAdminProfile = async (req,res,next) => {
    try {
        const adminId = req.user.id
        let { firstname, lastname, displayname } = req.body
        const existingProfile = await pool.query(`SELECT displayname, firstname, lastname FROM admin_login WHERE adminid = '${adminId}';`)

        if(firstname === '') firstname = existingProfile.rows[0].firstname
        if(lastname === '') lastname = existingProfile.rows[0].lastname
        if(displayname === '') displayname = existingProfile.rows[0].displayname
        
        await pool.query(`UPDATE admin_login SET displayname = '${displayname}', firstname = '${firstname}', lastname = '${lastname}' WHERE adminid = '${adminId}';`)
        res.send({firstname, lastname, displayname})
    } catch (error) {
        return next(new ErrorResponse(error,500))
    }
}

exports.editAdminPassword = async (req, res, next) => {
   try {
        const adminId = req.user.id
        const { oldPassword, newPassword } = req.body

        const dbHashedPassword = await pool.query(`SELECT password FROM admin_login where adminid = '${adminId}';`)

        const matchPassword = await bcrypt.compare(oldPassword, dbHashedPassword.rows[0].password)
        if(!matchPassword){
            return next(new ErrorResponse("Old password doesn't match",400))
        }
        const newHashedPassword = await bcrypt.hash(newPassword, 10)
        await pool.query(`UPDATE admin_login SET password = '${newHashedPassword}' WHERE adminid = '${adminId}';`)
        res.status(201).send({ success: true })
   } catch (error) {
        return next(new ErrorResponse(error,500))
   }
}

exports.editAdminProfilePic = async (req, res, next) => {
    try {
        const adminId = req.user.id
        const filePath = req.files[0].path
        const optimizedFileName = `${uuidv4()}.png`
        await sharp(filePath).resize({
            height: 400,
            width: 400
        }).png().toFile(`${optimizedFileName}`)
        const avatarURL = await uploadFile(optimizedFileName, `profile_pic/${optimizedFileName}`)
        await pool.query(`UPDATE admin_login SET avatar = '${avatarURL}' WHERE adminid = '${adminId}';`)
        res.status(201).send({avatarURL})
    } catch (error) {
        return next(new ErrorResponse(error,500))
    }
}


exports.approveCourse = async (req, res, next) => {
    try {
        const {courseId} = req.body
        await pool.query(`UPDATE course SET status = 'Approved' WHERE courseid = '${courseId}'`)
        const courses = await pool.query(`SELECT * FROM course WHERE status = 'In_review'`)
        res.send(courses.rows)
    } catch (error) {
        console.log(error)
        return next(new ErrorResponse(error,500))
    }
}

exports.getInReviewCourse = async (req, res, next) => {
    try {
        const courses = await pool.query(`SELECT coursepicture,price,coursename,courseid,firstname,coursedescription,lastname,user_profile.avatar as avatar FROM course JOIN instructor ON course.ownerid = instructor.instructorid JOIN user_profile ON instructor.userid = user_profile.userid WHERE status = 'In_review' `)
        return res.send(courses.rows)
    } catch (error) {
        return next(new ErrorResponse(error,500))
    }
}

exports.verifyInstructor = async (req, res, next) => {
    const adminId = req.user.id
    const {instructorId} = req.body
    try {
        await pool.query(`UPDATE instructor SET isverified = true, approveat = CURRENT_TIMESTAMP, approver = '${adminId}' WHERE instructorid = '${instructorId}';`)
        const instructors = await pool.query(`SELECT * FROM instructor INNER JOIN user_profile up on instructor.userid = up.userid wHERE isverified = false`)
        return res.send(instructors.rows)
    } catch (error) {
        return next(new ErrorResponse(error,500))
    }
}

exports.getUnVerifiedInstructor = async (req, res, next) => {
    try {
        const instructors = await pool.query(`SELECT * FROM instructor INNER JOIN user_profile up on instructor.userid = up.userid wHERE isverified = false`)
        return res.send(instructors.rows)
    } catch (error) {
        return next(new ErrorResponse(error,500))
    }
}