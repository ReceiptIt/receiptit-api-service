let logger = require('../plugins/Logger');
let receipt = require('../db/models/index').Receipt;
let moment = require("moment");
let _ = require("lodash");
const { Op } = require('sequelize')

let receiptService = {
    createReceipt: async function(){

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
        const formattedResult = _.forEach(result, (receipt) => {
            receipt.purchase_date = moment(receipt.purchase_date);
            return receipt;
        });

        return {receipts: formattedResult};
    },
    retrieveReceipt: async function(){

    },
    deleteReceipt: async function(){

    },
    updateReceipt: async function(){

    }
};

module.exports = receiptService;