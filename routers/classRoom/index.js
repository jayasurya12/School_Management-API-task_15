const router=require("express").Router();
const classroom=require("../../models").classroom;

router.post("/add",async(req,res)=>{
    try {
        const clsAdd=await classroom.create(req.body);
        res.json(clsAdd)
    } catch (error) {
        res.json(error)
    }
})

router.get("/viewData",async(req,res)=>{
    try {
        const roomData=await classroom
        .find({})
        .populate({path:"student",select:"-_id name Enrollment_Date"})
        .populate({path:"teacher" ,select:"-_id name experience"})
        .select("-_id -__v -startDate -closeDate -createdAt -updatedAt")
        res.json(roomData)
    } catch (error) {
        res.json(error)
    }
})
module.exports=router;
