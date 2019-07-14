let logger = require('../plugins/Logger');
let product = require('../db/models/index').Product;

let productService = {
    retrieveProduct: async function(req, res){

    },
    retrieveAllProducts: async function(req, res){

    },
    createProduct: async function(receiptID, productName, productPrice, productQuantity, productCurrencyCode, productDescription){
        let result = await product.create({
            receipt_id: receiptID,
            name: productName,
            price: productPrice,
            quantity: productQuantity,
            currency_code: productCurrencyCode,
            description: productDescription
        });

        return result;
    },
    updateProduct: async function(receiptID, productID, values){
        let result = await product.update(values, { where: {receipt_id: receiptID, product_id: productID} });

        return result;
    }
};

module.exports = productService;