let logger = require('../plugins/Logger');
let receipt = require('../db/models/index').Receipt;
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
    retrieveAllReceipt: async function(){

    },
    retrieveReceipt: async function(){

    },
    deleteReceipt: async function(){

    },
    updateReceipt: async function(){

    }
};

module.exports = receiptService;