const ErrorResponse = require("../../utils/errorResponse");
const pool = require("../../database/db");

const Upload = async (req, res, next) => {
    const files = req.files
    const results = files.map((file) => {
        return { linkUrl: file.linkUrl, fieldname: file.fieldname }
    })
    res.send(results)
}

const CreateCodeForSale = async (req, res, next) => {
    const ccname = req.body.codename;
    const description = req.body.description;
    const discount = req.body.discount;
    let coin_use = req.body.coinprice;
    const duration = req.body.duration;
    const createby = req.user.id;
    const picture = req.body.img;
    const min_total = req.body.minprice;
    let codelimit = req.body.uselimit;
    const codeType = req.body.codetype;

    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
     

    if (codeType == 'Private') {
        codelimit = 1;
        await pool.query(
            "insert into code_list(ccname, description, discount, coin_use, duration, createby, picture, min_total, codelimit)" +
            "values ($1, $2 ,$3,$4,$5,$6,$7,$8,$9)",
            [ccname, description, discount, coin_use, duration, createby, picture, min_total, codelimit]
        )
    }
    else if(codeType == 'Public'){
        codelimit = -1;
        coin_use = 0;
        let duration2 = duration+' days';
        let pcode = makeid(10);
       
  
        await pool.query(
            "insert into code_list(ccname, description, discount, coin_use, duration, createby, picture, min_total, codelimit)" +
            "values ($1, $2 ,$3,$4,$5,$6,$7,$8,$9)",
            [ccname, description, discount, coin_use, duration, createby, picture, min_total, codelimit]
        )
        await pool.query(
         "insert into promotioncode(pcode, starttime, expiretime, discountamount, mintotal, codetype, coderef)"+
         "values ($1,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP + $2::INTERVAL,$3,$4,'Public',(select max(ccid) from code_list))",
            [pcode,duration2,discount,min_total]

        )

    }
    else if(codeType == 'Limited Public'){
        coin_use = 0;
        let duration2 = duration+' days';
        let pcode = makeid(10);
       
  
        await pool.query(
            "insert into code_list(ccname, description, discount, coin_use, duration, createby, picture, min_total, codelimit)" +
            "values ($1, $2 ,$3,$4,$5,$6,$7,$8,$9)",
            [ccname, description, discount, coin_use, duration, createby, picture, min_total, codelimit]
        )
        await pool.query(
         "insert into promotioncode(pcode, starttime, expiretime, discountamount, mintotal, codetype, coderef)"+
         "values ($1,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP + $2::INTERVAL,$3,$4,'Lpublic',(select max(ccid) from code_list))",
            [pcode,duration2,discount,min_total]
        )
        
    }
    res.send({ success: true })
}
const GetCodeType = async (req, res, next) => {
    const data = await pool.query("Select distinct case when codetype = 'Lpublic' then 'Limited Public'" +
        "when codetype = 'Public' then 'Public'" +
        "when codetype = 'Private' then 'Private' end codetype from promotioncode")
    const codeType = data.rows;
    res.send(codeType);
}

module.exports = { Upload, CreateCodeForSale, GetCodeType } 