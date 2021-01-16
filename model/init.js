const sequelize=require("../config/connection");
var Usermodel=require("../model/user");
var Ordermodel=require("../model/order");
var ProductOrdermodel=require("../model/products_in_order");
var CoinsLogmodel=require("../model/coins_log");
var util=require("../util");

module.exports=function(){
 util.model.User=sequelize.define("user",Usermodel.UserSchema,{freezeTableName: true,})
 util.model.Order=sequelize.define("order",Ordermodel.OrderSchema,{freezeTableName: true,})
 util.model.ProductOrder=sequelize.define("products_in_order",ProductOrdermodel.ProductsInOrderSchema,{freezeTableName: true,})
 util.model.CoinsLog=sequelize.define("coins_log",CoinsLogmodel.CoinsLogSchema,{freezeTableName: true,})

 util.model.Order.hasMany(util.model.ProductOrder)
}