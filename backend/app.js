const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();


app.use(express.json());
app.use(cors());



mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(()=>console,log("DB Connected"))
.catch((err)=>console.log(err)); 



const port = process.env.PORT || 6000

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
});