const express=require("express");
const path = require('path');
const mongoose=require("./db"); 
const cors = require('cors');
const studentRouts=require("./routes/studentsRouts");
const doctorRouts=require("./routes/doctorsRouts");


const app =express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));  
app.use(express.json());
app.use(cors());
const port= 5000;



// apis for students
app.use("/students",studentRouts)
app.use("/doctors",doctorRouts)








app.listen(port,()=>{

    console.log(`server is running on http://localhost:${port}`);

});