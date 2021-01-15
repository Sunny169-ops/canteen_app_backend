const express = require("express");
const router = express.Router();
var PlantName = require("../Schema/plantName");

router.post("/", async (req, res) => {
    try {
        console.log(req.body);
        const plant = new PlantName();
        plant.name = req.body.name;
        await plant.save();
        res.status(200).json({'result': plant})
    } catch (error) {
        console.log(error);
        res.status(500).json({status: 500, data: null});
    }
})
router.get("/", async (request, response, next) => {
    try {
        let result = await PlantName.find().sort({created_at: -1}).exec();
        response.send(result);
    } catch (error) {
        console.log(error);
        response.status(500).json({ status: 500, data: null});
    }
});
router.get("/:findById", async (request, response, next) => {
    try {
        let result = await PlantName.find({'_id': request.params.findById}).exec();
        response.send(result);
    } catch (error) {
        console.log(error);
        response.status(500).json({status: 500});
    }
});

module.exports = router;