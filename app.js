const express=require('express')
const cors = require('cors');
const app=express()
require("./db/conn");
const blackofferSchema=require('./models/blackofferSchema')
const http = require('http').Server(app);
const PORT=3000


app.use(express.json())
app.use(cors())



app.get("/status", async(req, res) => {

    const allData=await blackofferSchema.find({})
    res.send(allData);
 });

http.listen(PORT, () =>{
    console.log(`Server is running on the port : ${PORT}`);
});