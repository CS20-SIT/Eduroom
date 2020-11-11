const pool = require('../database/db')

exports.getSupportForm = async (req,res,next)=>{
    const supportFormQuery = await pool.query('select * FROM "supportForm"')
    res.status(200).json({success:true, count: supportFormQuery.rowCount})
}
const ticketid = 4;
exports.submitForm = async (req, res, next)=>{
    const data=req.body;
    await pool.query(`INSERT INTO support_form(ticketid,userid,requesttime,title,prioritytype,description,subproblemid,email) VALUES (${ticketid},'123e4567-e89b-12d3-a456-426614174000',current_timestamp+interval '7' hour,$1,$2,$3,$4,$5)`
    , [data.title])
    res.status(200).json({success:true,data:data})
}
//insert into support_form values (3,'123e4567-e89b-12d3-a456-426614174000', current_timestamp+interval '7' hour,'title3',2,'des3',201,'oplanwza007@gmail.com')