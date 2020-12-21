const pool = require('../database/db')
const sendEmail = require('../utils/sendMail')

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
        "insert into support_form (  requesttime, title, prioritytype, description,subproblemid,email,name) values(current_timestamp,$1,$2,$3,$4,$5,$6)",
        [temp.title,temp.priority,temp.content, subcatID, temp.email,temp.name]
      );
      const supportform = data.rows;
      res.status(200).json({ success: true, data: supportform });
      return;
    }
  };

  exports.setRequestForms = async (req, res, next) => {
    const data = await pool.query(`select ticketid, title, f.userid, displayname as author, requesttime, subname, typename 
    from support_form f join subproblemtypes s on f.subproblemid = s.subproblemid join problem_types p on s.typeid = p.typeid join user_profile u on f.userid = u.userid
    where ticketid not in (select ticketid from support_answer_form)
    order by prioritytype;`);
    const forum = data.rows;
    res.status(200).json({ success: true, data: forum });
  };

  exports.selectForm = async (req, res, next) => {
    const id = req.params.id
    console.log('id is ', id)
    const user = req.user
    const data = await pool.query(
      `SELECT ticketid, f.userid, requesttime, title, description, u.displayname AS author, subname, typename 
      FROM support_form f join subproblemtypes s on f.subproblemid = s.subproblemid join problem_types p on s.typeid = p.typeid join user_profile u on f.userid = u.userid 
      WHERE ticketid = $1`, [id]
    )
    const forum = data.rows[0];
    console.log('controller',forum);
    res.status(200).json({ success: true, data: forum });
  }

  exports.createAnswer = async (req, res, next) => {
    const temp = req.body
    const adminID = '12345678-1234-1234-1234-123456789123'
    console.log('adminid : '+adminID)
    console.log(temp)
    const data = await pool.query(
      'insert into support_answer_form (ticketid, answertime, title, description, adminid ) values($1,current_timestamp,$2,$3,$4)',
      [temp.id, 'title',temp.answer,adminID]
    )

    
    const temp2 = await pool.query(
      `select u.email from local_auth u join support_form s on u.userid = s.userid where ticketid = ${temp.id}` 
    )
    const useremail = temp2.rows[0].email
    console.log('temp2 : ',temp2)
    console.log('useremail : ',useremail)

    const temp3 = await pool.query(
      `select firstname from support_form s join user_profile u on u.userid = s.userid where ticketid = ${temp.id}` 
    )
    const userfirstname = temp3.rows[0].email

    console.log(temp.id)
    const emailOptions = {
      email: useremail,
      subject: 'Eduroom Support test',
      htmlMessage: `Hi ${userfirstname} <br><br>
      ${temp.answer}`
    }
    await sendEmail(emailOptions)
    const forum = data.rows
    res.status(200).json({ success: true, data: forum })
    return
  }