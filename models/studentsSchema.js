

const mongoose = require('mongoose');

// start schema for students
const studentsschema= new mongoose.Schema({
    name: {
        type: String,
        required: true
        },
    age:Number,
    level: {
        type: String,
        required: true
        },
    phone:String,
    email:String,
    address: {
        type: String,
        required: true
        }
})
const modelStudent=mongoose.model("StudentsModel",studentsschema);
module.exports=modelStudent;
// end schema for students