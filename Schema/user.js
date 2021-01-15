const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    t_number:{
        type:String
    },
    coins:{
        type:Number
    },
    created_at: { type: Date },
    updated_at: { type: Date },
});
UserSchema.pre("save", function (next) {
    now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
});
module.exports = mongoose.model("user", UserSchema);