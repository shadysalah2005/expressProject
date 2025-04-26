


// section add students
const studentForm=document.getElementById("studentForm");
const addButtonst=document.querySelector(".addButtonst");

const studnetFormValue={
    "name":"null",
    "age":0,
    "level":"one",
    "phone":"01",
    "email":"null",
    "address":"null"
};
studentForm.addEventListener("submit",(event)=>{
    event.preventDefault();
});
addButtonst.addEventListener("click",()=>{
    
    studnetFormValue.name=studentForm[0].value
    studnetFormValue.age=studentForm[1].value
    studnetFormValue.level=studentForm[2].value
    studnetFormValue.phone=studentForm[3].value
    studnetFormValue.email=studentForm[4].value
    studnetFormValue.address=studentForm[5].value

    if(studnetFormValue.name===null){
        console.log("please enter the data")
    }else{
        fetch("/students",{
            method:"post",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(studnetFormValue)
        })
        .then(response=>response.json())
        .then(result=>{
            console.log("the response from fetch students ",result);
        })
        .catch(error=>{
            console.log("there is problem in fetch students ",error);
        })
    }
});
console.log(studnetFormValue);
//////////////////////////////////
// section add doctor
const doctorForm=document.getElementById("doctorForm");
const addButtondr=document.querySelector(".addButtondr");

const doctorFormValue={
    "name":"null",
    "age":0,
    "position":"null",
    "phone":"01",
    "email":"null",
    "address":"null"
};
doctorForm.addEventListener("submit",(event)=>{
    event.preventDefault();
});
addButtondr.addEventListener("click",()=>{
    
    doctorFormValue.name=doctorForm[0].value
    doctorFormValue.age=doctorForm[1].value
    doctorFormValue.level=doctorForm[2].value
    doctorFormValue.phone=doctorForm[3].value
    doctorFormValue.email=doctorForm[4].value
    doctorFormValue.address=doctorForm[5].value
    if(doctorFormValue.name===null){
        console.log("please enter the data")
    }else{
        fetch("/doctors",{
            method:"post",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(doctorFormValue)
        })
        .then(response=>response.json())
        .then(result=>{
            console.log("the response from fetch doctors ",result);
        })
        .catch(error=>{
            console.log("there is problem in fetch doctors ",error);
        })
    }

});
console.log(doctorFormValue);
////////////////////////////////////////