var userController=require("./controller/user");
var orderController=require("./controller/order");
var coinslogController=require("./controller/coinslog");


module.exports=function(router){
router.route("/api/user").get(userController.getUser)
router.route("/api/user").post(userController.createUser)
router.route("/api/order").post(orderController.createOrder)
router.route("/api/order/:id").get(orderController.getOrderByUserId) //get order details by user id
router.route("/api/coinslog/:id").get(coinslogController.getCoinsLog)
}
