const Sequelize = require("sequelize");

module.exports.OrderSchema = {
    user_id: {
        type: Sequelize.INTEGER

    },
        total_coins: {
        type: Sequelize.INTEGER
    },
    status:{
        type: Sequelize.INTEGER
    },
    order_date: {
        type: Sequelize.DATE
    },
    order_Type: {
        type: Sequelize.INTEGER
    }
}