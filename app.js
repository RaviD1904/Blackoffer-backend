const express=require('express')
const cors = require('cors');
const app=express()
require("./db/conn");
const http = require('http').Server(app);
const PORT=3000


app.use(express.json())
app.use(cors())



app.get("/status", (request, response) => {
    const status = {
       "Status": "Running"
    };
    
    response.send(status);
 });

http.listen(PORT, () =>{
    console.log(`Server is running on the port : ${PORT}`);
});