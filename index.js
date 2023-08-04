const express=require('express')
const dotenv=require("dotenv")
dotenv.config()
const app=express()
const userRouter=require('./route/user')
const proRouter=require('./route/product')
const categoryRouter=require('./route/category')
app.use(express.json())

const connectDB=require("./connect/index");
connectDB()


app.use('/api/v2/user', userRouter)
app.use('/api/v2/product', proRouter)
app.use('/api/v2/category', categoryRouter)

app.listen(process.env.PORT, ()=>{
    console.log(`server listen ${process.env.PORT} port`);
})