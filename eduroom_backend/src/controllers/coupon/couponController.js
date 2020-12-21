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
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
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
    else if (codeType == 'Public') {
        codelimit = -1;
        coin_use = 0;
        let duration2 = duration + ' days';
        let pcode = makeid(10);


        await pool.query(
            "insert into code_list(ccname, description, discount, coin_use, duration, createby, picture, min_total, codelimit)" +
            "values ($1, $2 ,$3,$4,$5,$6,$7,$8,$9)",
            [ccname, description, discount, coin_use, duration, createby, picture, min_total, codelimit]
        )
        await pool.query(
            "insert into promotioncode(pcode, starttime, expiretime, discountamount, mintotal, codetype, coderef)" +
            "values ($1,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP + $2::INTERVAL,$3,$4,'Public',(select max(ccid) from code_list))",
            [pcode, duration2, discount, min_total]

        )

    }
    else if (codeType == 'Limited Public') {
        coin_use = 0;
        let duration2 = duration + ' days';
        let pcode = makeid(10);


        await pool.query(
            "insert into code_list(ccname, description, discount, coin_use, duration, createby, picture, min_total, codelimit)" +
            "values ($1, $2 ,$3,$4,$5,$6,$7,$8,$9)",
            [ccname, description, discount, coin_use, duration, createby, picture, min_total, codelimit]
        )
        await pool.query(
            "insert into promotioncode(pcode, starttime, expiretime, discountamount, mintotal, codetype, coderef)" +
            "values ($1,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP + $2::INTERVAL,$3,$4,'Lpublic',(select max(ccid) from code_list))",
            [pcode, duration2, discount, min_total]
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

const GetDiscountFromCoupon = async (req, res, next) => {
    const pcode = req.body.pcode;
    const data = await pool.query("select discountamount from promotioncode where  pcode =$1", [pcode])
    const codeDiscount = data.rows;
    res.send(codeDiscount);
}

const UseCode = async (req, res, next) => {
    try {
        const userid = req.user.id;
        const pcode = req.body.pcode;

        const type = await pool.query("select codetype from promotioncode where  pcode =$1", [pcode])
        const codeType = type.rows[0].codetype;
        if (codeType == 'Private') {
            try {
                await pool.query("update code_owner set isused = true from promotioncode where code_owner.pcode = $1 and userid = $2 and code_owner.pcode = promotioncode.pcode and promotioncode.expiretime > CURRENT_TIMESTAMP",
                    [pcode, userid])
                res.send({ success: true })
            } catch{
                res.send({
                    success: false
                    , reason: 'code is already used or not belong to you or expired'
                })
            }
        }
        if (codeType == 'Public') {
            try {
                let isnotexpired = await pool.query("select expiretime > current_timestamp as isnotexpired from promotioncode where pcode = $1",
                    [pcode])
                isnotexpired = isnotexpired.rows[0].isnotexpired;
                console.log(isnotexpired)
                if (isnotexpired) {
                    await pool.query("insert into public_code_usage(pcode, userid) VALUES ($1,$2)",
                        [pcode, userid])
                    res.send({ success: true })
                } else {
                    res.send({
                        success: false
                        , reason: 'code is expired'
                    })
                }
            } catch{
                res.send({
                    success: false
                    , reason: 'code is already used'
                })
            }
        }
        if (codeType == 'Lpublic') {
            try {
                let isnotexpired = await pool.query("select expiretime > current_timestamp as isnotexpired from promotioncode where pcode = $1",
                    [pcode])
                isnotexpired = isnotexpired.rows[0].isnotexpired;

                if (isnotexpired) {
                    try {

                        let count = await pool.query("select count(*) as freq from public_code_usage where public_code_usage.pcode=$1",[pcode])
                        count = count.rows[0].freq;
                        console.log(count)
                        let isnotfull = await pool.query("select codelimit > $1 as isnotfull from promotioncode,code_list where pcode = $2 and ccid=coderef"
                            , [count,pcode])
                        isnotfull = isnotfull.rows[0].isnotfull
                        if (isnotfull) {
                            await pool.query("insert into public_code_usage(pcode, userid) VALUES ($1,$2)",
                                [pcode, userid])
                            res.send({ success: true })
                        }
                        else {
                            res.send({
                                success: false
                                , reason: 'this code is full already'
                            })
                        }
                    } catch (e) {
                        res.send({
                            success: false
                            , reason: 'code is full or you already use this code'
                        })
                    }
                } else {
                    res.send({
                        success: false
                        , reason: 'code is expired'
                    })
                }
            } catch{
                res.send({
                    success: false
                    , reason: 'code is already used'
                })
            }
        }
        else {
            res.send({
                success: false
                , reason: 'invalidCode'
            })
        }

    } catch{
        res.send({
            success: false
            , reason: 'invalidCode'
        })
    }


}

module.exports = { Upload, CreateCodeForSale,GetDiscountFromCoupon , GetCodeType, UseCode } 