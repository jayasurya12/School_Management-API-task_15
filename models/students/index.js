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
        type:mongoose.Types.ObjectId,
        ref:"classrooms",
        required:true
    },
    teacherId:{
        type:mongoose.Types.ObjectId,
        ref:"teachers",
        required:true
    },
    address:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    }
},{timestamps:true});

const stu=mongoose.model("students",studentSchema);

module.exports=stu;