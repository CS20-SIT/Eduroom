const pool = require('../../database/db')


exports.registerUemail = async (req, res, next) => {
    const data = req.body;
    console.log(data);
    const universityEmail = ''+data.localPart+'@'+data.domainName;
    const userId = 'userId01'
    const token = '12345test';
    await pool.query('INSERT INTO User_student_Verification(userId,token,universityEmail) VALUES ($1,$2,$3) RETURNING * ',
        [userId, token, universityEmail])

    res.status(200).json({ registerUemailSuccess: true, data: data })
    return

}