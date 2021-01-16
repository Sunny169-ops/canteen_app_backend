var util=require("../util");
// var sequelize=require("../config/connection")
// var modelInit=require("../model/init");

module.exports.getUser=async (req,res)=>{
try{
    let users=await util.model.User.findAll()
    res.send(users)
}catch(err){
    res.send({message:err})
}
 console.log("hello")
}
module.exports.createUser = (req, res) => {
    try {
    //util.model.Demo.sync({force:true});
        util.model.User.sync({force:true}).then(function(){
            var user= util.model.User.build(req.body).save()
                res.send(user);
        });         
    }
    catch (err) {
        console.log(err)
        res.send({ message: err })
    }
}
