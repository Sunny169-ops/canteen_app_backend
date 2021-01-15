const Sequelize = require("sequelize");

module.exports.OrderSchema = {
    productId: {
        type: Sequelize.INTEGER
    },
    status:{
        type: Sequelize.INTEGER
    },
    orderDate: {
        type: Sequelize.INTEGER
    },
    user: {
        type: Sequelize.INTEGER

    },
    total_coins: {
        type: Sequelize.INTEGER
    }
}