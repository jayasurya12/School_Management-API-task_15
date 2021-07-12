const router=require("express").Router();
const teachers=require("../../models/").teacher;
const classRoom=require("../../models").classroom;

router.post("/add",async(req,res)=>{
    try {
        const session= await teachers.startSession();
        const addTeach= new teachers(req.body);
        const saveTeach=await addTeach.save({session:session});
        const clsroom= await classRoom
        .findByIdAndUpdate(
            {_id:saveTeach.classroomId},
            {$addToSet:{teacher:saveTeach._id}},
            {new:true}
        )
        .session(session)
        res.json({teacher:saveTeach, room:clsroom})
    } catch (error) {
        res.json({msg:error})
    }
})
module.exports=router;