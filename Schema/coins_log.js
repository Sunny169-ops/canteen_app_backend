const mongoose = require("mongoose");
const CoinsLogSchema = mongoose.Schema({
    order_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "order",
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    coins_efficted:{
        type:Number
    },
    updates_coins:{
        type:Number
    },
    source:{
        type:Number
    },
    created_at: { type: Date },
    updated_at: { type: Date },
});
CoinsLogSchema.pre("save", function (next) {
    now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
});
module.exports = mongoose.model("coins_log", CoinsLogSchema);