const pool = require('../database/db')

//insert into support_form values (3,'123e4567-e89b-12d3-a456-426614174000', current_timestamp+interval '7' hour,'title3',2,'des3',201,'oplanwza007@gmail.com')
// exports.submitForm = async (req, res, next)=>{
//     const data=req.body;
//     await pool.query(`INSERT INTO support_form(ticketid,userid,requesttime,title,prioritytype,description,subproblemid,email) VALUES (${ticketid},'123e4567-e89b-12d3-a456-426614174000',current_timestamp+interval '7' hour,$1,$2,$3,$4,$5)`
//     , [data.title,data.priority])
//     res.status(200).json({success:true,data:data})
// }


  exports.submitForm = async (req, res, next) => {
    const temp = req.body;
    console.log(temp);
    const userId = req.user.id
    const subcat = await pool.query(
        "SELECT subproblemid FROM subproblemtypes WHERE subname = $1",
        [temp.subCat]
    );
    if (subcat.rowCount > 0) {
      const subcatID = subcat.rows[0].subproblemid;
      const data = await pool.query(
        "insert into support_form ( userid, requesttime, title, prioritytype, description,subproblemid,email) values($1,current_timestamp,$2,$3,$4,$5,$6)",
        [userId, temp.title,temp.priority,temp.content, subcatID, temp.email]
      );
      const supportform = data.rows;
      res.status(200).json({ success: true, data: supportform });
      return;
    } else {
      return next(new ErrorResponse("Sub Catagory is not valid", 404));
    }
  };

  exports.setRequestForms = async (req, res, next) => {
    const data = await pool.query("select ticketid, title, f.userid, displayname as author, requesttime, subname, typename from support_form f join subproblemtypes s on f.subproblemid = s.subproblemid join problem_types p on s.typeid = p.typeid join user_profile u on f.userid = u.userid;");
    const forum = data.rows;
    res.status(200).json({ success: true, data: forum });
  };