let apiHelper = require('./components/api-helper');
let InternalError = require('../error/InternalError');
let logger = require('../plugins/Logger');
let receiptService = require("../service/receipt-service");
let userService = require("../service/user-service");
let moment = require("moment");

let receiptAPI = {
    createReceipt: async function(){

    },
    retrieveAllReceipt: async function(req, res){
        try {
            apiHelper.preProcess(req, {}, {mandatory: ["userId"]});

            const userId = parseInt(req.query.userId);
            const user = await userService.retrieveUser(userId);
            if (!user) {
                throw new InternalError("User does not exist!", InternalError.Types.UserError);
            }

            const startDate = req.query.startDate && moment(req.query.startDate).utc().format();
            const endDate = req.query.endDate && moment(req.query.endDate).utc().format();

            if (startDate === "Invalid date") {
                throw new InternalError("Invalid Start Date", InternalError.Types.UserError);
            }
            if (endDate === "Invalid date") {
                throw new InternalError("Invalid End Date", InternalError.Types.UserError);
            }
            if (startDate && endDate && startDate > endDate) {
                throw new InternalError("Invalid input. Start date must be smaller than end date", InternalError.Types.UserError);
            }

            logger.debug(`Get all receipts by user ${userId}, from ${startDate} to ${endDate}.`);
            const result = await receiptService.retrieveAllReceipt(userId, startDate, endDate);

            apiHelper.sendAPISuccess(req, res, result);
        } catch (error) {
            apiHelper.sendAPIFailure(req, res, error);
        }

    },
    retrieveReceipt: async function(){

    },
    deleteReceipt: async function(){

    },
    updateReceipt: async function(){

    }
}

module.exports = receiptAPI;