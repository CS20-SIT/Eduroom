const pool = require('../../database/db');
const errorHandler = require('../../middleware/error');
const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
dayjs.extend(utc)


//getDaliyReward  Done
//buyCoupon 
//getCoinFromEdqiz  Done
//getCoinFromCourse 
//jwt
//uploadFile
exports.getStickers = async (req, res, next) => {
    try {
        const result = await pool.query('SELECT * from sticker_all');
        const stickers = result.rows;
        const temp = stickers.map(sticker => {
            return {
                id: sticker.stickerid,
                title: sticker.stickername,
                price: sticker.stickerprice,
                img: sticker.stickerimg,
                type: sticker.stickertype
            };
        });
        res.status(200).json(temp);
    } catch (error) {
        errorHandler(error, req, res);
    }
};
// exports.getStickerInPackage = async (req, res, next) => {
//     try {

//         const id = req.query.stickerid;
//         const userId = 'db29433b-e05d-41ab-854b-b6f8023464f6'
//         const coins = await pool.query(`SELECT amountofcoin FROM coin_owner WHERE userid='${userId}';`)

//         const data = await pool.query(`SELECT p.stickerimg,p.stickerid, p.stickernumber,s.stickername from pack_sticker  p,sticker_all s where p.stickerid = s.stickerid AND s.stickerid = ${id}`);
//         const package = data.rows;
//         res.send(package);
//         console.log(id);

//     } catch (error) {
//         errorHandler(error, req, res);
//     }
// };
exports.packStickerStore = async (req, res) => {
    try {
        const id = req.params.id
        const userId = req.user.id
        const coins = await pool.query(`SELECT amountofcoin FROM coin_owner WHERE userid='${userId}';`)
        const packSticker = await pool.query(`SELECT s.stickername, s.stickerimg, s.stickerprice,
        ps.stickernumber, ps.stickerimg FROM sticker_all s
        INNER JOIN pack_sticker ps on s.stickerid = ps.stickerid
        WHERE ps.stickerid=${id};`)
        // const result= []
        const stickers = []
        for (let index = 0; index < packSticker.rows.length; index++) {
            const element = packSticker.rows[index];
            stickers.push(element)

        }

        const result = {
            mycoins: coins.rows[0].amountofcoin,
            stickers: stickers
        }

        res.send(result)

    } catch (error) {
        errorHandler(error, req, res);
    }
}
exports.getDailyRewardStatus = async (req, res, next) => {
    try {
        const today = dayjs.utc().utcOffset(7).format('YYYY-MM-DD')
        const userId = req.user.id
        const getDate = await pool.query(`SELECT * FROM dailyreward_history WHERE userid='${userId}' AND date = '${today}';`)
        if (getDate.rowCount === 0) {
            res.send({ canGet: true })
        } else {
            res.send({ canGet: false })
        }
    } catch (error) {
        errorHandler(error, req, res);
    }
    //amountOfcoin, cointransaction 
}
exports.insertDailyReward = async (req, res) => {
    try {
        const coin = req.body.coin
        const userId = req.user.id
        const today = dayjs.utc().utcOffset(7).format('YYYY-MM-DD')
        const getDate = await pool.query(`SELECT * FROM dailyreward_history WHERE userid='${userId}' AND date = '${today}';`)
        console.log(getDate.rowCount);
        if (getDate.rowCount === 0) {
            await pool.query(`INSERT INTO dailyreward_history(userid, date, coindaily) VALUES ('${userId}','${today}',${coin});`)
            const getCoinOwner = await pool.query(`SELECT amountofcoin FROM coin_owner WHERE userid='${userId}'`)
            let amountCoin = getCoinOwner.rows[0].amountofcoin;
            amountCoin += coin
            await pool.query(`UPDATE coin_owner SET amountofcoin=${amountCoin} WHERE userid='${userId}';`)
            await pool.query(`INSERT INTO coin_transaction(userid, date, amountofcointransaction) VALUES ('${userId}',current_timestamp, ${coin})`)
            res.status(201).send({ mycoins: amountCoin })
        } else {
            res.status(400).send({ success: false })
        }

    } catch (error) {
        errorHandler(error, req, res)
    }
}
exports.showCoinOwner = async (req, res) => {
    try {
        const userId = req.user.id
        const result = await pool.query(`SELECT amountofcoin FROM coin_owner WHERE userid='${userId}'`)
        res.send(
            result.rows[0]
        )
    } catch (error) {
        errorHandler(error, req, res);
    }
}
exports.showStickerOwner = async (req, res) => {
    try {
        const userId = req.user.id
        const getOwnerSticker = await pool.query(`SELECT sticker_owner.stickerid,stickername,stickertype,stickerimg FROM sticker_owner
        JOIN sticker_all ON sticker_owner.stickerid = sticker_all.stickerid
        WHERE userid='${userId}';`)


        const result = [];

        for (let index = 0; index < getOwnerSticker.rows.length; index++) {
            const stickers = []
            const stickerId = getOwnerSticker.rows[index].stickerid
            const stickerAll = getOwnerSticker.rows[index]

            // console.log(result);
            const getPackStickerOfOwner = await pool.query(`SELECT stickernumber,stickerimg FROM pack_sticker WHERE stickerid=${stickerId};`)
            for (let id = 0; id < getPackStickerOfOwner.rows.length; id++) {
                const stickerNum = getPackStickerOfOwner.rows[id]
                stickers.push(stickerNum)
            }
            stickerAll.stickers = stickers
            result.push(stickerAll)
            // console.log(result[index]);
            // console.log(stickers)
        }
        res.send(result)


    } catch (error) {
        errorHandler(error, req, res);
    }
}
exports.addReduceTransOwner = async (req, res) => {
    try {
        const userId = 'db29433b-e05d-41ab-854b-b6f8023464f6'
        const coin = req.body.coin
        const getCoinOwner = await pool.query(`SELECT amountofcoin FROM coin_owner WHERE userid='${userId}'`)
        let amountCoin = getCoinOwner.rows[0].amountofcoin;
        if (coin < 0) {
            amountCoin = amountCoin - coin;
        } else {
            amountCoin = amountCoin + coin;
        }
        console.log(`UPDATE coin_owner SET amountofcoin=${amountCoin} WHERE userid='${userId}';`)
        await pool.query(`UPDATE coin_owner SET amountofcoin=${amountCoin} WHERE userid='${userId}';`)
        await pool.query(`INSERT INTO coin_transaction(userid, date, amountofcointransaction) VALUES ('${userId}',current_timestamp, ${coin})`)
        res.status(201).send({ success: true })
    } catch (error) {
        errorHandler(error, req, res);
    }
}
exports.checkStickerOwner = async (req, res) => {
    try {
        const userId = 'db29433b-e05d-41ab-854b-b6f8023464f6'
        const stickerId = req.body.stickerid
        const getStickerOwner = await pool.query(`SELECT * FROM sticker_owner WHERE 
        userid='${userId}' AND stickerid=${stickerId};`)
        if (getStickerOwner.rowCount === 0) {
            res.send({ sticker: 'not avaliable' })
        } else {
            res.send({ sticker: 'avaliable' })
        }
    } catch (error) {
        errorHandler(error, req, res)
    }
}
exports.buySticker = async (req, res) => {
    try {
        const userId = req.user.id
        const stickerId = req.body.stickerId
        console.log(req.body)
        const getCoinSticker = await pool.query(`SELECT stickerprice FROM sticker_all WHERE stickerid=${stickerId};`)
        if (getCoinSticker.rowCount === 0) {
            const error = {
                statusCode: 400,
                message: 'Sticker is not founded'
            }
            return errorHandler(error, req, res)
        }
        const stickerPrice = getCoinSticker.rows[0].stickerprice

        const getCoinOwner = await pool.query(`SELECT amountofcoin FROM coin_owner WHERE userid='${userId}'`)
        let amountCoin = getCoinOwner.rows[0].amountofcoin;
        if (amountCoin >= stickerPrice) {
            amountCoin -= stickerPrice;
            await pool.query(`UPDATE coin_owner SET amountofcoin=${amountCoin} WHERE userid='${userId}';`)
            await pool.query(`INSERT INTO coin_transaction(userid, date, amountofcointransaction) VALUES ('${userId}',current_timestamp, -${stickerPrice})`)
            await pool.query(`INSERT INTO sticker_owner(stickerid, userid) VALUES (${stickerId} ,'${userId}');`)
            res.status(201).send({ coin: amountCoin })
        } else {
            const error = {
                statusCode: 400,
                message: 'Coin is not enough'
            }
            errorHandler(error, req, res)
        }



    } catch (error) {
        errorHandler(error, req, res);
    }
}
exports.checkCodeOwner = async (req, res) => {
    try {
        const userId = req.user.id
        const pcode = req.body.pcode
        const getCodeFronOwner = await pool.query(`SELECT * FROM code_owner WHERE userid='${userId}' 
        AND pcode='${pcode}';`)
        if (getCodeFronOwner.rowCount === 0) {
            res.send({ canGet: true })
        } else {
            res.send({ canGet: false })
        }
    } catch (error) {
        errorHandler(error, req, res)
    }
}
exports.buyCoupon = async (req, res) => {
    try {
        const userId = req.user.id
        const pcode = req.body.pcode
        const getCodeList = await pool.query(`SELECT cl.coin_use FROM promotioncode p
        INNER JOIN code_list cl on p.coderef = cl.ccid WHERE pcode='${pcode}';`)
        if (getCodeList.rowCount === 0) {
            const error = {
                statusCode: 400,
                massage: 'Code is not founded'
            }
            return errorHandler(error, req, res)
        }
        const codePrice = getCodeList.rows[0].coin_use
        const getCoinOwner = await pool.query(`SELECT amountofcoin FROM coin_owner WHERE userid='${userId}'`)
        let amountCoin = getCoinOwner.rows[0].amountofcoin;
        if (amountCoin >= codePrice) {
            amountCoin -= codePrice;
            await pool.query(`UPDATE coin_owner SET amountofcoin=${amountCoin} WHERE userid='${userId}';`)
            await pool.query(`INSERT INTO coin_transaction(userid, date, amountofcointransaction) VALUES ('${userId}',current_timestamp, -${codePrice})`)
            await pool.query(`INSERT INTO  code_owner(pcode, userid, isused) VALUES ('${pcode}','${userId}',false);`)
            res.status(201).send({ coin: amountCoin })
        } else {
            const error = {
                statusCode: 400,
                message: 'Coin is not enough'
            }
            errorHandler(error, req, res)
        }
    } catch (error) {
        errorHandler(error, req, res)
    }
}
exports.getCoinFromEdqiz = async (req, res) => {
    try {
        const userIds = req.body;
        const coins = [15, 10, 5]
        console.log(userIds)
        for (let index = 0; index < userIds.length; index++) {
            const userId = userIds[index];
            //get amount of coin from coin_owner
            const getCoinOwner = await pool.query(`SELECT amountofcoin FROM coin_owner WHERE userid='${userId}';`)
            let amountOfCoin = getCoinOwner.rows[0].amountofcoin;
            amountOfCoin += coins[index];
            await pool.query(`INSERT INTO coin_transaction(userid, date, amountofcointransaction)
                 VALUES ('${userId}',current_timestamp,${coins[index]});`)
            await pool.query(`UPDATE coin_owner SET amountofcoin=${amountOfCoin} WHERE userid='${userId}';`)

        }
        res.status(201).send({ success: true })
    } catch (error) {
        errorHandler(error, req, res)
    }
}
exports.getCodeListOfCoin = async (req,res) => {
    try{
        const result = await pool.query(`SELECT * FROM code_list WHERE isvisible=true AND coin_use>=1 AND codelimit=1;`)
        const codeLists =result.rows
        const temp = codeLists.map(codelist => {
            return {
                id : codelist.ccid,
                name : codelist.ccname,
                description : codelist.description,
                discount : codelist.discount,
                coinUse : codelist.coin_use,
                endtime : dayjs.utc().utcOffset(7).add(codelist.duration,'day').format('YYYY-MM-DD') ,
                picture : codelist.picture,
                minTotal : codelist.min_total,
                codelimit : codelist.codelimit
            }
        }) 
        console.log(temp);
        res.status(200).json(temp)
    }catch(error){
        errorHandler(error,req,res)
    }
}
exports.getCodeListOfLPublic = async (req,res) => {
    try{
        const result = await pool.query(`SELECT * FROM code_list WHERE isvisible=true AND coin_use=0 AND codelimit>=1;`)
        const codeLists =result.rows
        const temp = codeLists.map(codelist => {
            return {
                id : codelist.ccid,
                name : codelist.ccname,
                description : codelist.description,
                discount : codelist.discount,
                coinUse : codelist.coin_use,
                endtime : dayjs.utc().utcOffset(7).add(codelist.duration,'day').format('YYYY-MM-DD') ,
                picture : codelist.picture,
                minTotal : codelist.min_total,
                codelimit : codelist.codelimit
            }
        }) 
        console.log(temp);
        res.status(200).json(temp)
    }catch(error){
        errorHandler(error,req,res)
    }
}

exports.getCodeListOfPublic = async (req,res) => {
    try{
        const result = await pool.query(`SELECT * FROM code_list WHERE isvisible=true AND coin_use=0 AND codelimit=-1;`)
        const codeLists =result.rows
        const temp = codeLists.map(codelist => {
            return {
                id : codelist.ccid,
                name : codelist.ccname,
                description : codelist.description,
                discount : codelist.discount,
                coinUse : codelist.coin_use,
                endtime : dayjs.utc().utcOffset(7).add(codelist.duration,'day').format('YYYY-MM-DD') ,
                picture : codelist.picture,
                minTotal : codelist.min_total,
                codelimit : codelist.codelimit
            }
        }) 
        console.log(temp);
        res.status(200).json(temp)
    }catch(error){
        errorHandler(error,req,res)
    }
}

