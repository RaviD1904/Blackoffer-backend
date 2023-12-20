const express=require('express')
const cors = require('cors');
const dotenv=require('dotenv')
dotenv.config()
const app=express()
const connectDatabase=require("./db/conn");
const BlackOfferModal=require('./models/blackofferSchema');
const PORT=3000
app.use(express.json())
app.use(cors())



app.get("/getdata", async(req, res) => {
 try {
    const allData=await BlackOfferModal.find({})
    // console.log(allData)
    res.send(allData);
 } catch (error) {
    res.send(error.messege)
 }
 });

//end year filter


app.get("/endyearfilter", async(req, res) => {
    console.log(req.query)
    const {end_year}=req.query
    try {
       const allData=await BlackOfferModal.find({end_year})
       // console.log(allData)
       res.send(allData);
    } catch (error) {
       res.send(error.messege)
    }
    });

    app.get("/topicfilter", async(req, res) => {
        console.log(req.query)
        const {topic}=req.query
        try {
           const results=await BlackOfferModal.find({topic:{$regex:topic,$options:"i"}})
           // console.log(allData)
           res.send(results);
        } catch (error) {
           res.send(error.messege)
        }
        });

        app.get("/sectorfilter", async(req, res) => {
            console.log(req.query)
            const {sector}=req.query
            try {
               const results=await BlackOfferModal.find({sector:{$regex:sector,$options:"i"}})
               // console.log(allData)
               res.send(results);
            } catch (error) {
               res.send(error.messege)
            }
            });


            app.get("/regionfilter", async(req, res) => {
                console.log(req.query)
                const {region}=req.query
                try {
                   const results=await BlackOfferModal.find({region:{$regex:region,$options:"i"}})
                   // console.log(allData)
                   res.send(results);
                } catch (error) {
                   res.send(error.messege)
                }
                });


                
            app.get("/pestlefilter", async(req, res) => {
                console.log(req.query)
                const {pestle}=req.query
                try {
                   const results=await BlackOfferModal.find({pestle:{$regex:pestle,$options:"i"}})
                   // console.log(allData)
                   res.send(results);
                } catch (error) {
                   res.send(error.messege)
                }
                });




                app.get("/sourcefilter", async(req, res) => {
                    console.log(req.query)
                    const {source}=req.query
                    try {
                       const results=await BlackOfferModal.find({source:{$regex:source,$options:"i"}})
                       // console.log(allData)
                       res.send(results);
                    } catch (error) {
                       res.send(error.messege)
                    }
                    });

                app.get("/countryfilter", async(req, res) => {
                    console.log(req.query)
                    const {country}=req.query
                    try {
                       const results=await BlackOfferModal.find({country:{$regex:country,$options:"i"}})
                       console.log(allData)  
                       res.send(results);
                    } catch (error) {
                       res.send(error.messege)
                    }
                    });

app.listen(8080, () =>{
    connectDatabase()
    console.log(`Server is running on the port : ${8080}`);
});