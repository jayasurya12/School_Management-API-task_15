const express=require("express")
const connectDB=require('./config/db');
const dotenv=require("dotenv");
const router=require("./routers");
const app=express();
dotenv.config({path:"./config/env.env"})
app.use(express.json());
connectDB();


app.get("/",(req,res)=>{
    res.json("it is working")
})
app.use("/router",router);


app.listen(process.env.PORT || 5000,()=>{
    console.log("server started")
})