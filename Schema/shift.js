const Sequelize = require("sequelize");

module.exports.ShiftSchema = {
    name: {
        type: Sequelize.STRING
    },
    sub_name: {
        type: Sequelize.STRING
    },
    startTime:{
        type: Sequelize.INTEGER
    },
    endTime: {
        type: Sequelize.INTEGER
    }
}