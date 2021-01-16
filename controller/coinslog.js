var util=require("../util");

module.exports.getCoinsLog=async (req,res)=>{
    try{
        let users=await util.model.CoinsLog.findAll({where:{user_id:req.params.id}})
        res.send(users)
    }catch(err){
        res.send({message:err})
    }
}