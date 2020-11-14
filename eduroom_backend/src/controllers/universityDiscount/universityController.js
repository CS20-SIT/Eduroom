const ErrorResponse = require("../../utils/errorResponse");
const pool = require("../../database/db");
const getUniversitylist = async (req, res, next) => {
    const data = await pool.query("select universitydomain from whitelist_university");
    const ulist = data.rows;
    res.send(ulist);
};



const registerUemail = async (req, res, next) => {
    req.body.predomain = 'sakkarin.kmutt';
    req.body.postdomain ='mail.kmutt.ac.th';
    req.body.userid ='c3289d0e-7fbc-4880-b15f-e679f667680f';
    req.body.isverified =false;
    
    const data = await pool.query("select uuid_generate_v4()");
    const uuid = data.rows[0].uuid_generate_v4;
 

    const predomain = req.body.predomain ;
    const postdomain = req.body.postdomain;
    const userid = req.body.userid;
    const isverified = req.body.isverified;
    const token = uuid;
    const universityemail = predomain + '@' + postdomain;

    await pool.query(
        'insert into user_student_verification (userid, isverified, token, universityemail) values ($1, $2, $3, $4 )',
        [userid,isverified, token, universityemail]
    )

    res.send({ success: true })
}
module.exports = { getUniversitylist, registerUemail} 