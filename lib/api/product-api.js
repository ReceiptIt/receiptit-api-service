let apiHelper = require('./components/api-helper');
let InternalError = require('../error/InternalError');
let logger = require('../plugins/Logger');
let receiptService = require("../service/receipt-service");
let userService = require("../service/user-service");
let productService = require("../service/product-service");

let productAPI = {
    retrieveProduct: async function(req, res){

    },
    retrieveAllProducts: async function(req, res){

    },
    createProduct: async function(req, res){
        try{
            apiHelper.preProcess(req,
                { mandatory: ['receipt_id', 'name', 'price', 'quantity'], optional: ['description', 'currency_code'] },null);

            let receiptID = req.body.receipt_id;
            let productName = req.body.name;
            let productPrice = parseFloat(req.body.price);
            let productQuantity = req.body.quantity || 1;
            let productCurrencyCode = req.body.currency_code || 'CAD';
            let productDescription = req.body.description || '';

            //throw error if receiptID is nonexistent
            let receipt = await receiptService.retrieveReceipt(receiptID);
            if(!receipt){
                throw new InternalError("Cannot attach new product to an nonexistent receipt", InternalError.Types.UserError);
            }
            // throw error if product name is empty or price is non-positive
            if((!productName) || productPrice < 0){
                throw new InternalError("Invalid product data", InternalError.Types.UserError);
            }

            logger.debug(`Prepare to create new product for receipt ${receiptID}, product detail: ${JSON.stringify(req.body)}`);
            let result = await productService.createProduct(receiptID, productName,
                productPrice, productQuantity, productCurrencyCode, productDescription);

            let data = {
                result: 'success',
                message: 'Product is created successfully',
                productInfo: result
            };
            apiHelper.sendAPISuccess(req, res, data);
        }catch(e){
            apiHelper.sendAPIFailure(req, res, e);
        }
    },
    updateProduct: async function(req, res){
        try{
            apiHelper.preProcess(req,
                { mandatory: ['receipt_id', 'product_id'], optional: ['name', 'price', 'quantity','description', 'currency_code'] },null)
            let receiptID = req.body.receipt_id;
            let productID = req.body.product_id;

            //throw error if receiptID is nonexistent
            let receipt = await receiptService.retrieveReceipt(receiptID);
            if(!receipt){
                throw new InternalError("Cannot attach new product to an nonexistent receipt", InternalError.Types.UserError);
            }

            logger.debug(`Prepare to update product with productID ${productID} receiptID ${receiptID},
             new detail: ${JSON.stringify(req.body)}`);
            let result = await productService.updateProduct(receiptID, productID, req.body);
            if(result){
                let data = {
                    result: 'success',
                    message: 'Product is updated successfully'
                };
                apiHelper.sendAPISuccess(req, res, data);
            }else{
                throw new InternalError("Failed to update product", InternalError.Types.ServiceError);
            }
        }catch(e){
            apiHelper.sendAPIFailure(req, res, e);
        }
    }
}

module.exports = productAPI;
