const mongoose = require("mongoose");
const ShiftSchema = mongoose.Schema({
    name:{
        type:String
    },
    startTime:{
        type:Number
    },
    endTime:{
        type:Number
    },
    created_at: { type: Date },
    updated_at: { type: Date },
});
ShiftSchema.pre("save", function (next) {
    now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
});
module.exports = mongoose.model("shift", ShiftSchema);