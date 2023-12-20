

const mongoose=require('mongoose')




const connectDatabase=async()=>{
try {
  const conn=await mongoose.connect(process.env.MONGO_URL)
  console.log("Successfully Connected to database")
} catch (error) {
  // conn.disconnect()
  console.log("Failed to connect database")
} 


}

module.exports=connectDatabase;