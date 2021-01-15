const mongoose = require("mongoose");
const OrderSchema = mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Products",
    },
    status:{
        type:Number
    },
    orderDate:{
        type:Date
    },
    created_at: { type: Date },
    updated_at: { type: Date },
});
OrderSchema.pre("save", function (next) {
    now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
});
module.exports = mongoose.model("order", OrderSchema);