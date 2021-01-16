var userController=require("./controller/user");
var orderController=require("./controller/order");



module.exports=function(router){
router.route("/api/user").get(userController.getUser)
router.route("/api/user").post(userController.createUser)
router.route("/api/order").post(orderController.createOrder)
}
