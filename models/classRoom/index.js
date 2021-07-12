const mongoose=require("mongoose");

const classroom= new mongoose.Schema({
    classRoomName:{
        type:String,
        required:true
    },
    startDate:{
        type:String,
        required:true
    },
    closeDate:{
        type:String,
        required:true
    },
    student:[{
        type:mongoose.Types.ObjectId,
        ref:"students"
    }],
    teacher:[{
        type:mongoose.Types.ObjectId,
        ref:"teachers"
    }]
},{timestamps:true})

const classRoom=mongoose.model("classrooms",classroom);

module.exports=classRoom;