var util=require("../util");




module.exports.createOrder = (req, res) => {
   console.log("order")
    try {
        let orderId=0
        // let reducer=(a,b)=>
        // {
        //     return a.coin+b.coin
        // }
        let pro_order=[]
        let total_coin=0
        req.body.items.forEach(element => {
            total_coin+=element.coin
            
            let productorderData={}
            productorderData.product_id=1
            productorderData.quantity=
            productorderData.order_id=orderId
            pro_order.push(productorderData)
        });

        console.log(total_coin)
        req.body.user_id=req.body.user_id
        req.body.order_date=new Date()
        req.body.status=1
        req.body.total_coins=total_coin
        req.body.total_coins=1
        console.log(req.bod)
        util.model.Order.sync({force:true}).then(async function(){
            var Order= await util.model.Order.build(req.body).save()            
            orderId=Order.id
            var itemData=  req.body.items.map((element)=>{
                    element.order_id=orderId
                    return element
                })
            util.model.ProductOrder.sync({force:true}).then(async function(){
                var ProductOrder= await util.model.ProductOrder.bulkCreate(itemData)            
                // ProductOrder=ProductOrder.id
                console.log(orderId)
               let user_coins = await util.model.User.findOne({attributes: ['coins']},{ where: { id: 1} })
                console.log(user_coins.coins)
                let updateCoins=user_coins.coins-total_coin
            //     console.log(updateCoins)
              let updatedUserData=await util.model.User.update({coins:updateCoins}, { where: { id: 1} })
                // res.send(updatedUserData);
                
                let coin_log={
                    order_id:orderId,
                    user_id:req.body.user_id,
                    coins_effected:total_coin,
                    updates_coins:updateCoins,
                    source:1
                }
                util.model.CoinsLog.sync({force:true}).then(async function(){
                    var coins_log= await util.model.CoinsLog.build(coin_log).save()
                    res.send(coins_log);                   
                });
            });  
            console.log(coins_log)
            // res.send(ProductOrder);
        });  
              
    }
    catch (err) {
        console.log(err)
        res.send({ message: err })
    }
}