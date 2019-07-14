let userAPI = require('../user-api');
let receiptAPI = require('../receipt-api');
let productAPI = require('../product-api');

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
    },
    /** Product API **/
    {
        method: 'get',
        endpoint: '/product',
        description: 'Retrieve all products of a particular receipt.',
        function: productAPI.retrieveAllProducts
    },
    {
        method: 'get',
        endpoint: '/product/:productID',
        description: 'Retrieve one product given its product id',
        function: productAPI.retrieveProduct
    },
    {
        method: 'post',
        endpoint: '/product',
        description: 'Create a new product given information',
        function: productAPI.createProduct
    },
    {
        method: 'put',
        endpoint: '/product/:productID',
        description: 'Update an existing product given its id',
        function: productAPI.updateProduct
    },
    {
        method: 'delete',
        endpoint: '/product/:productID',
        description: 'Delete a product given its id',
        function: productAPI.deleteProduct
    }
]