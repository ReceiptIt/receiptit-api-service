const appRoot = require('app-root-path');
let product = require(appRoot + '/lib/db/models/index').Product;

let productService = {
    retrieveProduct: async function(productId){
        return await product.findByPk(productId);
    },
    retrieveAllProducts: async function(receiptId){
        return await product.findAll({
            where: {
                receipt_id: receiptId
            }
        });
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
    },
    deleteProduct: async function(productId) {
        return await product.destroy({
            where: {
                product_id: productId
            }
        });
    }
};

module.exports = productService;