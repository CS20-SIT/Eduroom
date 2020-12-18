const { jwtAuthenicate } = require('../../middleware/jwtAuthenticate');
const pool = require('../../database/db');
const errorHandler = require('../../middleware/error');
const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
dayjs.extend(utc)


//getDaliyReward
//buyCoupon
//getCoinFromEdqiz
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
exports.getDailyRewardStatus = async (req, res, next) => {
    try {
        const today = dayjs.utc().utcOffset(7).format('YYYY-MM-DD')
        const userId = 'db29433b-e05d-41ab-854b-b6f8023464f6'
        const getDate = await pool.query(`SELECT date FROM dailyreward_history WHERE userid='${userId}';`)
        if (getDate !== '') {
            const date = getDate.rows[0].date
            if (date === today) {
                console.log(today)
            }
        }
    } catch (error) {
        errorHandler(error, req, res);
    }
    //amountOfcoin, cointransaction 
}
exports.showCoinOwner = async (req, res) => {
    try {
        const userId = 'db29433b-e05d-41ab-854b-b6f8023464f6'
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
        const userId = 'db29433b-e05d-41ab-854b-b6f8023464f6'
        const result = await pool.query(`SELECT stickername,stickertype,stickerimg,stickerprice FROM sticker_owner
        JOIN sticker_all ON sticker_owner.stickerid = sticker_all.stickerid
        WHERE userid='${userId}';`)
        res.send(result.rows)
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
exports.buySticker = async (req, res) => {
    try {
        const userId = 'db29433b-e05d-41ab-854b-b6f8023464f6'
        const stickerId = req.body.stickerId
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
exports.buyCoupon = async (req, res) => {
    try {
        const userId = 'db29433b-e05d-41ab-854b-b6f8023464f6'

    } catch {

    }
}
exports.getCoinFromEdqiz = async (req, res) => {
    try {
        const userIds = req.body;
        const coins = [15,10,5]
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
