import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
const  app = express()
import authRouters from "./routes/auth.route.js"
import userRouters from "./routes/user.route.js"
import productRouter from './routes/product.route.js'
import adminProductRouter from './routes/adminProduct.routes.js'
import cartRouter from './routes/cart.route.js'
import cartItemRouter from './routes/cartItem.route.js'
import customerOrderRouter from './routes/customerOrder.route.js'
import adminOrderRouter from './routes/customerOrder.route.js'
import reviewRouter from './routes/review.route.js'
import ratingRouter from './routes/customerOrder.route.js'
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

app.use("/auth",authRouters);
app.use("api/users",userRouters);
app.use("api/products",productRouter);
app.use("api/admin/products",adminProductRouter);
app.use("api/cart",cartRouter);
app.use("api/cart_items",cartItemRouter);//order 
app.use("api/orders",customerOrderRouter);
app.use("api/admin/orders",adminOrderRouter);

app.use("api/reviews",reviewRouter);
app.use("api/ratings",ratingRouter);

 
  export default app
