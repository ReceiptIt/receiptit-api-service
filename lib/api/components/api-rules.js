let userAPI = require('../user-api');

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
    }
]