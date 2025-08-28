const Transaction = require('../models/Transaction');


// @desc get all data
// @route GET api/v1/transactions

exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();
        
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (error) {
        return res.send(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

// @desc add trasactions
// @route POST api/v1/transactions
exports.addTransactions = async (req, res, next) => {
    try {
        const {text, body} = req.body;
        const transactions = await Transaction.create(req.body);

        return res.status(201).json({
            success: true,
            data: transactions
    });
    } catch (error) {
        return res.send(500).json({
            success: false,
            error: 'Server Error'
        })
    }

}

// @desc delete data 
// @route DELETE api/v1/transactions/:id

exports.deleteTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.findById(req.params.id);
        if(!transactions){
            return res.status(401).json({
                success: false,
                error: 'no transaction found'
            });
        }
        await Transaction.remove();
        return res.status(200).json({
            success: true,
            data: []
        })
    } catch (err) {
        return res.send(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}


