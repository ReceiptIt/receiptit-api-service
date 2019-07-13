let logger = require('../plugins/Logger');
let receipt = require('../db/models/index').Receipt;
let product = require('../db/models/index').Product;

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
    deleteReceiptWithAssociatedProducts: async function(receiptID){
        let result = await receipt.destroy({
            where: {
                receipt_id: receiptID
            }
        });

        return result;
    },
    updateReceipt: async function(){

    }
};

module.exports = receiptService;