import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
const  app = express()
import authRouters from "./routes/auth.route.js"
dotenv.config()

const PORT =process.env.PORT || 3000
const URI = process.env.MongoDbURI

app.use(express.json())
app.use(cors())


mongoose.connect(URI).then(()=>{
  console.log("DB connected")
}).catch((err)=>{
console.log("db error",err);

})




app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })

app.use("/auth",authRouters)
 
  export default app
