const mongoose=require("mongoose");


let url='mongodb+srv://jai:27121998vj@cluster0.ytezm.mongodb.net/classRoomDetails?retryWrites=true&w=majority'
const connectDB=async ()=>{
    try {
        const connectDB=await mongoose.connect(process.env.DB,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        })
        console.log(`mongoose ${connectDB.connection.host}`);
    } catch (error) {
        console.log(error)
    }
};


module.exports=connectDB;