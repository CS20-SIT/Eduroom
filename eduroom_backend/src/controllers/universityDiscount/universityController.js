
const ErrorResponse = require("../../utils/errorResponse");
const pool = require("../../database/db");

const getUniversitylist = async (req, res, next) => {
    const data = await pool.query("select universitydomain from whitelist_university");
    const ulist = data.rows;
    res.send(ulist);
};



const registerUemail = async (req, res, next) => {

    
    const data = await pool.query("select uuid_generate_v4()");
    const uuid = (data.rows[0].uuid_generate_v4).substring(0, 7);
    const localPart = req.body.localPart ;
    const domainName = req.body.domainName;
    const userid = req.user.id;
    const isverified =false;
    const token = uuid;
    const universityemail = localPart + '@' + domainName;

    await pool.query(
        'insert into user_student_verification (userid, isverified, token, universityemail) values ($1, $2, $3, $4 )',
        [userid,isverified, token, universityemail]
    )

    res.send({ success: true })
}
module.exports = { getUniversitylist, registerUemail} 