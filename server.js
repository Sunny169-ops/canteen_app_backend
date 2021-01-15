const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require('cors');
// const User = require("./schema/user");

var app = express();
// // app.use(express.static(path.join(__dirname, './dist/tranzita')));
const port = process.env.PORT || 3004;

mongoose.connect("mongodb://localhost:27017/CanteenApp",
    { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('mongodb connected')
});

mongoose.connection.on('connected',()=>{
    console.log('Connected to Database')
})
mongoose.connection.on('error',(err)=>{
    if(err){
        console.log('err',err);

    }
})

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/plant', require('./Routes/plant'))
app.use('/api/shift', require('./Routes/shift'))
app.use('/api/excel', require('./Routes/excel'))

app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(port, function () {
    console.log('Example app listening on port 3001!');
});

