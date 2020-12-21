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
        const optimizedFileName = `${uuidv4()}`
        // console.log(filePath);
        // sharp(filePath).resize({
        //     height: 400,
        //     width: 400
        // }).jpeg().toFile(`/upload/${optimizedFileName}`)
        // console.log(`/upload/${optimizedFileName}`);
        // console.log('DONE WITH SHARP');
        const avatarURL = await uploadFile(filePath, `profile_pic/${optimizedFileName}.jpeg`)
        // console.log(avatarURL);
        res.status(201).send({avatarURL})
        
        await pool.query(`UPDATE admin_login SET avatar = '${avatarURL}' WHERE adminid = '${adminId}';`)
    } catch (error) {
        return next(new ErrorResponse(error,500))
    }
}
