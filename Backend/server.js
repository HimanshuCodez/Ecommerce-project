
import express from  'express'
import mongoose from'mongoose'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'



const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(cors())
dotenv.config()



const PORT=process.env.PORT || 5000
const URI=process.env.MongodbURI;
mongoose
  .connect(URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));





  


app.listen(PORT, () => {
  console.log(` app listening on port ${PORT}`)
})
