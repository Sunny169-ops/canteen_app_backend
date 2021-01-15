var userController=require("./controller/user");



module.exports=function(router){
router.route("/api/user").get(userController.getUser)
router.route("/api/user").post(userController.createUser)
}
