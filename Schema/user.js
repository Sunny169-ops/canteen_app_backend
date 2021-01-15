const Sequelize = require("sequelize");

module.exports.UserSchema = {
    t_number: {
        type: Sequelize.STRING
    },
    coins:{
        type: Sequelize.INTEGER
    }
}