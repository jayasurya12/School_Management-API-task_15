const router=require("express").Router();
const student=require("../../models/").student;
const classRoom=require("../../models").classroom;
const teacher =require("../../models").teacher;


router.post("/add",async(req,res)=>{
    try {
        const stuReg= await student(req.body)
        const classReg= await classRoom.findById({_id:req.body.classRoomId});

            async function saveFunc(){
                const session= await student.startSession();
                const addstu=new student(req.body);
                const stusave= await addstu.save({session:session});
                const addClass=await classRoom
                .findByIdAndUpdate(
                    {_id:stusave.classRoomId},
                    {$push:{student:stusave._id}},
                    {new:true}
                )
                .session(session)
                res.json("successfull")
        }
    let current= new Date();
    let enrolledDate= new Date(stuReg.Enrollment_Date);
    
    if(enrolledDate !="Invalid Date"){
        if(enrolledDate > current){
            if(classReg.student == ""){
                saveFunc()
            }else{
                let datas = await student.find({_id:classReg.student});
                let da=datas.find((dat)=>{
                    let collectionDate=new Date(dat.Enrollment_Date)  
                    if( enrolledDate.valueOf() === collectionDate.valueOf()){
                       return res.json("same date already booked some one")
                    }
                })
                da ? "" : saveFunc()
            }
            
        }else{
            res.json("your date expired")
        }
    }else{
        res.json("date not valid")
    }     
    } catch (error) {
        res.json({msg:error})
    }
})

router.get("/viewStudent",async(req,res)=>{
    try {
        const view=await student.find({})
        .populate({path:'classRoomId',select:"-_id classRoomName"})
        .populate({path:"teacherId",select:"-_id contact name"})
        .select({_id:0,name:1})
        res.json(view)
    } catch (error) {
        res.json({msg:error})
    }
})

module.exports=router;