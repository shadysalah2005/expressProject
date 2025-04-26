
const modelDoctor=require("../models/doctors.schema");

async function  creatDoctor(req,res){

    let {name ,age,position,phone ,email ,address}=req.body;
    age=parseInt(age);
    try {
        const newDoctor = await modelDoctor.create({ name, age,position, phone, email, address });
        console.log(newDoctor)
        res.status(201).json(newDoctor);  
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Error creating doctor', error: err });
    }

}

async function getAllDoctors(req,res){
    try{
        const count =await modelDoctor.countDocuments();
        if(count>0){
            const doctors=await modelDoctor.find();
            res.status(200).json(doctors);
            console.log(doctors);
        }else{
            res.send("there is no data yet");
        }
    }catch(err){
        console.error("there is something roung ",err);
    }
}

async function checkDoctor(req,res){
    try{
    const { name } = req.body;

    const doctors = await modelDoctor.find({ name: name }); 

    if (doctors.length > 0) {
        return res.status(200).json(doctors);
    } else {
        return res.status(404).json({ message: 'No doctor found with that id' });
    }
    }catch(err){
        console.error("there is something roung ",err);
    }
}
async function updateDoctors(req,res){
    const {id}=req.params;  
    const {name,age ,position,phone,email,address}=req.body;
    try{
        

            const DoctorUpdate=await modelDoctor.findOneAndUpdate(
                {_id :id},
                {name,age ,position,phone,email,address},
                {new :true}
            );
            
        if (!DoctorUpdate) {
            return res.status(404).json({ message: 'doctor not found' });
        }
            res.status(200).json(DoctorUpdate);
        

    }catch(err){
        console.error("there is something roung ",err);
    }
    }
    

async function deleteDoctor(req,res){
    const {id}=req.params;
    // console.log('Received ID:', id); 
    try{
        const deleteDoctor = await modelDoctor.findByIdAndDelete(id);  
        
        if (!deleteDoctor) {
            return res.status(404).json({ message: 'doctor not found' });  
        }

        return res.status(200).json({ message: 'doctor deleted successfully' });  
    }catch(err){
        console.error("there is something roung ",err);
    }
}



module.exports={creatDoctor,getAllDoctors,checkDoctor,updateDoctors,deleteDoctor};