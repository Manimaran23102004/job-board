const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require("morgan");
const bodyParser = require("body-parser")
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')
dotenv.config();


app.use(express.json());
app.use(cors());



mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(()=>console,log("DB Connected"))
.catch((err)=>console.log(err)); 

app.use(morgan('dev'));
app.use(bodyParser.json({limit:"5mb"}))
app.use(bodyParser.urlencoded({
    limit:"5mb",
    extended:true
}));
app.use(cookieParser());
app.use(cors());

const port = process.env.PORT || 6000

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
});