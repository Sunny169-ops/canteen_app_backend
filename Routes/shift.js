const express = require("express");
const router = express.Router();
var Shift = require("../Schema/shift");

router.post("/", async (req, res) => {
    try {
        console.log(req.body);
        const shift = new Shift();
        shift.name = req.body.name;
        shift.startTime = req.body.startTime;
        shift.endTime = req.body.endTime;
        await shift.save();
        res.status(200).json({'result': shift})
    } catch (error) {
        console.log(error);
        res.status(500).json({status: 500, data: null});
    }
})
router.get("/", async (request, response, next) => {
    try {
        let result = await Shift.find().sort({created_at: -1}).exec();
        response.send(result);
    } catch (error) {
        console.log(error);
        response.status(500).json({ status: 500, data: null});
    }
});
router.get("/:findById", async (request, response, next) => {
    try {
        let result = await Shift.find({'_id': request.params.findById}).exec();
        response.send(result);
    } catch (error) {
        console.log(error);
        response.status(500).json({status: 500});
    }
});
router.delete("/:findById", async (request, response, next) => {
    try {
        let result = await Shift.findOneAndDelete({'_id': request.params.findById}).exec();
        response.send(result);
    } catch (error) {
        console.log(error);
        response.status(500).json({status: 500});
    }
});


module.exports = router;