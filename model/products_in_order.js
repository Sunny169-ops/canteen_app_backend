const Sequelize = require("sequelize");

module.exports.ProductsInOrderSchema = {
    product_id: {
        type: Sequelize.INTEGER
    },
    quantity: {
        type: Sequelize.INTEGER,
    },
    order_id:{
        type: Sequelize.INTEGER
    }
  
}