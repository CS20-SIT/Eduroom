const {jwtAuthenicate}= require('../../middleware/jwtAuthenticate');
const pool = require('../../database/db');
const errorHandler = require('../../middleware/error');

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
exports.getDailyRewardStatus = async (req,res,next) => {
    try{
      res.send({
          success:true
      })

    }catch(error){
        errorHandler(error,req,res);
    }
}
exports.setCoinTransaction = async (req,res) => {
    try{
        const userId = 'db29433b-e05d-41ab-854b-b6f8023464f6'
        const coin = req.body.coin
        await pool.query(`INSERT INTO coin_transaction(userid, date, amountofcointransaction) VALUES ('${userId}',current_timestamp, ${coin})`)
        res.status(201).send({success: true})
    }catch(error){
        errorHandler(error,req,res);
    }
}
exports.ShowCoinOwner =async (req,res) => {
    try{
        const userId='db29433b-e05d-41ab-854b-b6f8023464f6'
        const result = await pool.query(`SELECT amountofcoin FROM coin_owner WHERE userid='${userId}'`)
        res.send(
            result.rows[0]
        )
    }catch(error){
        errorHandler(error,req,res);
    }
}

