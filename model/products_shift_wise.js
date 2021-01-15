const Sequelize = require("sequelize");

module.exports.ProductsShiftWiseSchema = {
    product_id: {
        type: Sequelize.INTEGER
    },
    shift_id:{
        type: Sequelize.INTEGER
    }
  
}