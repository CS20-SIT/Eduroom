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
    const coin_use = req.body.coinprice;
    const duration = req.body.duration;
    const createby = req.user.id;
    const picture =  req.body.img;
    const min_total = req.body.minprice;
    const codelimit = req.body.uselimit;
    await pool.query(
        "insert into code_list(ccname, description, discount, coin_use, duration, createby, picture, min_total, codelimit)"+
        "values ($1, $2 ,$3,$4,$5,$6,$7,$8,$9)",
        [ccname, description, discount, coin_use, duration, createby, picture,min_total,codelimit]
    )
    res.send({ success: true })
}

module.exports = {Upload,CreateCodeForSale} 