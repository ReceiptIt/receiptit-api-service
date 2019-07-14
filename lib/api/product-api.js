let apiHelper = require('./components/api-helper');
let InternalError = require('../error/InternalError');
let logger = require('../plugins/Logger');
let receiptService = require("../service/receipt-service");
let userService = require("../service/user-service");
let productService = require("../service/product-service");

let productAPI = {
    retrieveProduct: async function(req, res){
        try {
            const productId = parseInt(req.params.productID);
            if (isNaN(productId)) {
                throw new InternalError("Invalid product id. Product id should be an integer.", InternalError.Types.UserError);
            }

            logger.debug(`Get product by product id: ${productId}`);
            const result = await productService.retrieveProduct(productId);

            apiHelper.sendAPISuccess(req, res, result || {});
        } catch (error) {
            apiHelper.sendAPIFailure(req, res, error);
        }
    },
    retrieveAllProducts: async function(req, res){
        try {
            apiHelper.preProcess(req, {}, {mandatory: ["receiptId"]});

            const receiptId = parseInt(req.query.receiptId);
            // Validate recepitId
            if (isNaN(receiptId)) {
                throw new InternalError("Invalid receipt id. Receipt id should be an integer.", InternalError.Types.UserError);
            }
            const foundReceipt = await receiptService.retrieveReceipt(receiptId);
            if (!foundReceipt) {
                throw new InternalError("Receipt does not exist!", InternalError.Types.UserError);
            }

            logger.debug(`Get all products by receipt id ${receiptId}`);
            const result = await productService.retrieveAllProducts(receiptId);

            apiHelper.sendAPISuccess(req, res, {products: result});
        } catch (error) {
            apiHelper.sendAPISuccess(req, res, error);
        }
    },
    createProduct: async function(req, res){

    },
    updateProduct: async function(req, res){

    },
    deleteProduct: async function(req, res){
        try {
            const productId = parseInt(req.params.productID);
            if (isNaN(productId)) {
                throw new InternalError("Invalid product id. Product id should be an integer.", InternalError.Types.UserError);
            }

            logger.debug(`Delete product by product id: ${productId}`);
            const result = await productService.deleteProduct(productId);
            
            if(result){
                const data = {
                    result: 'success',
                    message: 'Product is deleted successfully'
                };

                apiHelper.sendAPISuccess(req, res, data);
            }else{
                throw new InternalError(`Nonexitent product with ID ${productId} cannot be deleted`, InternalError.Types.UserError);
            }
        } catch (error) {
            apiHelper.sendAPIFailure(req, res, error);
        }
    }
}

module.exports = productAPI;
