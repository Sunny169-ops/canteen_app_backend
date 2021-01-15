const mongoose = require("mongoose");
const ProductsSchema = mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:Number
    },
    shift:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Shift",
    }],
    created_at: { type: Date },
    updated_at: { type: Date },
});
ProductsSchema.pre("save", function (next) {
    now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
});
module.exports = mongoose.model("products", ProductsSchema);