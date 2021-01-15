const mongoose = require("mongoose");
const PlantSchema = mongoose.Schema({
    name:{
        type:String
    },
    created_at: { type: Date },
    updated_at: { type: Date },
});
PlantSchema.pre("save", function (next) {
    now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
});
module.exports = mongoose.model("plant", PlantSchema);