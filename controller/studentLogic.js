
const modelStudent=require("../models/studentsSchema");

async function  creatStudent(req,res){

    let {name ,age,level,phone ,email ,address}=req.body;
    age=parseInt(age);
    try {
        const newStudent = await modelStudent.create({ name, age,level, phone, email, address });
        console.log(newStudent)
        res.status(201).json(newStudent);  
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Error creating student', error: err });
    }

}

async function getAllStudents(req,res){
    try{
        const count =await modelStudent.countDocuments();
        if(count>0){
            const students=await modelStudent.find();
            res.status(200).json(students);
            console.log(students);
        }else{
            res.send("there is no data yet");
        }
    }catch(err){
        console.error("there is something roung ",err);
    }
}

async function checkStudent(req,res){
    try{
    const { name } = req.body;

    const students = await modelStudent.find({ name: name }); 

    if (students.length > 0) {
        return res.status(200).json(students);
    } else {
        return res.status(404).json({ message: 'No student found with that id' });
    }
    }catch(err){
        console.error("there is something roung ",err);
    }
}
async function updateStudent(req,res){
    const {id}=req.params;  
    const {name,age ,level,phone,email,address}=req.body;
    try{
        

            const studentUpdate=await modelStudent.findOneAndUpdate(
                {_id :id},
                {name,age ,level,phone,email,address},
                {new :true}
            );
            
        if (!studentUpdate) {
            return res.status(404).json({ message: 'Student not found' });
        }
            res.status(200).json(studentUpdate);
        

    }catch(err){
        console.error("there is something roung ",err);
    }
    }
    

async function deleteStudent(req,res){
    const {id}=req.params;
    console.log('Received ID:', id); 
    try{
        const deleteStudent = await modelStudent.findByIdAndDelete(id);  
        
        if (!deleteStudent) {
            return res.status(404).json({ message: 'Student not found' });  
        }

        return res.status(204).json({ message: 'Student deleted successfully' });  
    }catch(err){
        console.error("there is something roung ",err);
    }
}



module.exports={creatStudent,getAllStudents,checkStudent,updateStudent,deleteStudent};