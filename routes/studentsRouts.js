const express=require("express");
const router=express.Router();
const {creatStudent,getAllStudents,checkStudent,updateStudent,deleteStudent}=require("../controller/studentLogic");


// student routes

router.get("/",getAllStudents);
router.get("/:id",checkStudent);
router.post("/",creatStudent);
router.put("/",checkStudent);
router.put("/:id",updateStudent);
router.delete("/:id",deleteStudent);


module.exports=router;