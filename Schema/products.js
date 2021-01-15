const Sequelize = require("sequelize");

module.exports.ProductsSchema = {
    name: {
        type: Sequelize.STRING
    },
    price:{
        type: Sequelize.INTEGER
    },
    plant_id:{
        type:Sequelize.INTEGER
    },
    image:{
        type:Sequelize.STRING
    }
}