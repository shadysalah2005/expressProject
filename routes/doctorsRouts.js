const express=require("express");
const router=express.Router();
const {creatDoctor,getAllDoctors,checkDoctor,updateDoctors,deleteDoctor}=require("../controller/doctorsLogic");


// student routes

router.get("/",getAllDoctors);
router.get("/:id",checkDoctor);
router.post("/",creatDoctor);
router.put("/",checkDoctor);
router.put("/:id",updateDoctors);
router.delete("/:id",deleteDoctor);


module.exports=router;