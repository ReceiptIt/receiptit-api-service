let userAPI = require('../user-api');
let receiptAPI = require('../receipt-api');

module.exports = [
    /** User API **/
    {
        method: 'post',
        endpoint: '/user',
        description: 'create a new user',
        function: userAPI.createUser
    },
    {
        method: 'get',
        endpoint: '/user/:userID',
        description: 'Retrieve information of a user given their ID.',
        function: userAPI.retrieveUser
    },
    {
        method: 'put',
        endpoint: '/user/:userID',
        description: 'Update user information given their id.',
        function: userAPI.updateUser
    },
    /** Receipt API **/
    {
        method: 'post',
        endpoint: '/receipt',
        description: 'create a new receipt',
        function: receiptAPI.createReceipt
    },
    {
        method: 'get',
        endpoint: '/receipt',
        description: 'Retrieve all receipts of a particular user.',
        function: receiptAPI.retrieveAllReceipt
    },
    {
        method: 'delete',
        endpoint: '/receipt/:receiptID',
        description: 'Delete a receipt given receipt id.',
        function: receiptAPI.deleteReceipt
    },
    {
        method: 'get',
        endpoint: '/receipt/:receiptID',
        description: 'Retrieve details of a particular receipt.',
        function: receiptAPI.retrieveReceipt
    },
    {
        method: 'put',
        endpoint: '/receipt/:receiptID',
        description: 'Update product information within a particular receipt.',
        function: receiptAPI.updateReceipt
    }

]