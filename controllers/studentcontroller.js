const Student = require('../models/student');
async function addStudent(req,res){
    try{
        console.log(req.body,'req.body');
let  student = new Student(req.body);
 await student.save();//  async method
// res.json({message:"Student Added Successfully"});
console.log("data added successfully");
   res.end("added"); }
    catch(err){
        console.log(err)
    }
}
async function getStudents(req,res) {
    try {
        let students = await Student.find({});
        console.log(students,'students');
        res.send(students)
    } catch (error) {
        
    }
}
async function getStudentByRollNo(req,res) {
    try {
        let rollNo = parseInt(req.params.rollNo);
        console.log(rollNo,'rollNo')
        let student = await Student.findOne({rollNo:rollNo});
        console.log(student,'student');
        res.send(student)
    } catch (error) {
        console.log('error')
    }
}
module.exports = {
    addStudent,
    getStudents,
    getStudentByRollNo
}