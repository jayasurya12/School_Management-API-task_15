const mongoose=require("mongoose");

const studentSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Enrollment_Date:{
        type:String,
        required:true
    },
    classRoomId:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    teacher:{
        type:String,
        required:true
    }
},{timestamps:true});

const stu=mongoose.model("students",studentSchema);

module.exports=stu;