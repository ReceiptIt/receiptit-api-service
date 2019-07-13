let logger = require('../plugins/Logger');
let receipt = require('../db/models/index').Receipt;
let product = require('../db/models/index').Product;
let moment = require("moment");
let _ = require("lodash");
const { Op } = require('sequelize')


let receiptService = {
    createReceipt: async function(userID, purchaseDate, totalAmount, merchant, postcode){
        let result = await receipt.create({
            user_id: userID,
            purchase_date: purchaseDate,
            total_amount: totalAmount,
            merchant: merchant,
            postcode: postcode
        });

        return result;
    },
    retrieveAllReceipt: async function(userId, startDate, endDate){
        // Construct where condition
        const whereCondition = {user_id : userId};

        if (startDate && endDate) {
            whereCondition.purchase_date = {
                [Op.gte]: startDate,
                [Op.lte]: endDate
            }
        }

        // Get all receipts based on user id, start date, end date
        const result = await receipt.findAll({ where: whereCondition });

        // Convert purchase date from UTC to EDT
        const formattedResult = _.forEach(result, (receiptItem) => {
            receiptItem.dataValues.purchase_date = moment(receiptItem.dataValues.purchase_date).tz("EDT").format();
            return receipt;
        });

        return {receipts: formattedResult};
    },
    retrieveReceipt: async function(receiptId){
        const result = await receipt.findOne({
            include: [
                {
                    model: product,
                    required: true
                }
            ],
            where: {
                receipt_id: receiptId
            }
        })

        // Convert purchase date from UTC to EDT
        if (result) {
            result.dataValues.purchase_date = moment(result.dataValues.purchase_date).tz("EDT").format();
        }

        return result || {};
    },
    deleteReceiptWithAssociatedProducts: async function(receiptID){
        let result = await receipt.destroy({
            where: {
                receipt_id: receiptID
            }
        });

        return result;
    },
    updateReceipt: async function(receiptID, values){
        let result = await receipt.update(values, { where: {receipt_id: receiptID} });

        return result;
    }
};

module.exports = receiptService;