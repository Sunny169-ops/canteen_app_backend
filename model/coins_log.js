const Sequelize = require("sequelize");

module.exports.CoinsLogSchema = {
    order_id: {
        type: Sequelize.INTEGER,
    },
    user_id: {
        type: Sequelize.INTEGER,
    },
    coins_effected:{
        type: Sequelize.INTEGER
    },
    updates_coins: {
        type: Sequelize.INTEGER
    },
    source: {
        type: Sequelize.INTEGER
    }
  
}