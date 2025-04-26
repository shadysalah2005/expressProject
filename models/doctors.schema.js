

const mongoose = require('mongoose');

// start schema for students
const doctorSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true
        },
    age:Number,
    position: {
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
const modelDoctor=mongoose.model("doctorModel",doctorSchema);
module.exports=modelDoctor;
// end schema for students