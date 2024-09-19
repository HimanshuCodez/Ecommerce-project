import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
const  app = express()
const PORT = 6969 || 6000
 
dotenv.config()
app.use(express.json())
app.use(cors())


app.get


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })


 
  
