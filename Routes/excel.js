const router = require("express").Router();
var xlstojson = require("xls-to-json-lc");
var xlsxtojson = require("xlsx-to-json-lc");
const multer = require("multer");
const path = require("path");
const upload = multer({dest: "uploads/"});

router.post("/", upload.single("file"), async (req, res) => {
    var exceltojson;
    parsedArray = [];
    //Initialization
    /** Check the extension of the incoming file and
     *  use the appropriate module
     */
    if (req.file.originalname.split('.')[req.file.originalname.split('.').length - 1] === 'xlsx') {
        console.log("photo from frontend", req.file, req.body, req.file);
        exceltojson = xlsxtojson;
    } else {
        exceltojson = xlstojson;
    }
    try {
        exceltojson({
            input: req.file.path,
            output: null, //since we don't need output.json
            lowerCaseHeaders: true
        }, async function (err, result) {
            console.log(result)
            if (err) {
                return res.json({error_code: 1, err_desc: err, data: null});
            }
            
            
res.json({data: parsedArray, msg: 'Excel file converted to json format'});
});
} catch (e) {
res.json({error_code: 1, err_desc: "Corrupted excel file"});
}
});


module.exports = router;