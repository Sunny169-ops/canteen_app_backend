const sequelize=require("../config/connection");
var Usermodel=require("../model/user");
var util=require("../util");

module.exports=function(){
 util.model.User=sequelize.define("user",Usermodel.UserSchema,{freezeTableName: true,})
}