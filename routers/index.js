const router=require("express").Router();
const classroom=require("./classRoom")
const teacher=require("./teachers");
const students=require("./students");

router.use("/class",classroom);
router.use("/teacher",teacher);
router.use("/student",students);

module.exports=router;

