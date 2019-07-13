let apiHelper = require('./components/api-helper');
let InternalError = require('../error/InternalError');
let _ = require('lodash');
let logger = require('../plugins/Logger');

let userAPI = {

    createUser: async function(req, res){
        let data = {
            result: 'success',
            message: 'createUser endpoint envoked',
            httpStatusCode: 200
        };
        apiHelper.sendAPISuccess(req, res, data);
        // try{
        //     apiHelper.preProcess(req,
        //         {
        //             mandatory: ['recipients', 'content', 'subject'],
        //             optional: ['fromAddress', 'mail_settings']
        //         });
        //
        //     let recipients = req.body.recipients;
        //     let fromAddress = req.body.fromAddress;
        //     let content = req.body.content;
        //     let subject = req.body.subject;
        //     let mailSettings = req.body.mail_settings;
        //
        //     logger.debug(`Prepare to send regular email - recipients:${JSON.stringify(recipients)}, fromAddress:${fromAddress},
        //      subject: ${subject}, content:${content}, mailSettings: ${JSON.stringify(mailSettings)}`);
        //
        //     let result = await emailService.sendEmail(recipients, fromAddress, content, subject, mailSettings);
        //
        //     let data = {
        //         result: 'success',
        //         message: 'Email sent successfully',
        //         httpStatusCode: 200,
        //         batchId: result[0].batchId
        //     };
        //     apiHelper.sendAPISuccess(req, res, data);
        //
        // }catch(e){
        //     apiHelper.sendAPIFailure(req, res, e);
        // }
    },
    retrieveUser: async function(req, res){
        let data = {
            result: 'success',
            message: 'retrieveUser endpoint envoked',
            httpStatusCode: 200
        };
        apiHelper.sendAPISuccess(req, res, data);
    },
    updateUser: async function(req, res){
        let data = {
            result: 'success',
            message: 'updateUser endpoint envoked',
            httpStatusCode: 200
        };
        apiHelper.sendAPISuccess(req, res, data);
    },

};

module.exports = userAPI;
