const pool = require('../database/db')


//Course Method

//GET Method
const getAmountOfCourse = async (req, res) => {
    try {
        const NumberOfCourse = await pool.auery('SELECT COUNT(*) FROM COURSE ')

        if(!NumberOfCourse)
        res.status(404).send({ msg: 'Not Found' })

        res.status(200).send(NumberOfCourse)
    } catch(err){
        res.status(500).send(err.massage)
    }
}

const getAmountOfSpecificCourse = async (req, res) => {
    try {
        const amountOfSpecificCourse = await pool.query('SELECT COUNT(*) as "Amount Of Course", Categories.cata_name ' +
            'FROM Course_categories, Categories ' +
            'GROUP BY Categories.cata_id')

        if (!amountOfSpecificCourse)
            res.status(404).send({ msg: 'Not Found' })

        res.status(200).send(amountOfSpecificCourse)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

//get SoldOutCourse
const getSoldOutCourse = async (req, res) => {
    try {
        const Financial_Transaction = await pool.query(" SELECT COUNT(*) as 'Amount Of SoldOut Course' " +
            'FROM Financial_Transaction ' +
            'WHERE Financition_Transaction.description LIKE "%course%" ')

        if (!Financial_Transaction)
            res.status(404).send({ msg: 'Not Found' })

        res.status(200).send(Financial_Transaction)
    }catch(err){
        res.status(500).send(err.message)
    }

}

//POST Method

module.exports = {
    getAmountOfCourse,
    getAmountOfSpecificCourse,
    getSoldOutCourse
    
}

