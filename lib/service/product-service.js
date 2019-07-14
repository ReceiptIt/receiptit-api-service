let logger = require('../plugins/Logger');
let product = require('../db/models/index').Product;

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
    createProduct: async function(req, res){

    },
    updateProduct: async function(req, res){

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