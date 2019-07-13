let logger = require('../plugins/Logger');
let user = require('../db/models/index').User;
let userService = {
    createUser: async function(first_name, last_name, email, password){
        let result = await user.create({
            first_name: first_name,
            last_name: last_name,
            password: password,
            email: email
        });

        return result;
    },
    retrieveUser: async function(userID){
        let result = await user.findOne({ where: {user_id: userID} });

        return result;
    },
    updateUser: async function(userID, values){
        let result = await user.update(values, { where: {user_id: userID} });

        return result;
    }
}

module.exports = userService;