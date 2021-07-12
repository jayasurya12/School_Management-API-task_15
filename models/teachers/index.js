const mongoose=require("mongoose");

const teacherSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    contact:{
        type:Number,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    experience:{
        type:Number,
        required:true
    },
    classroomId:{
        type:String,
        required:true
    }
},{timestamps:true})
const teach=mongoose.model("teachers",teacherSchema);

module.exports=teach;