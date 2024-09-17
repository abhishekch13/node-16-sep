const express= require("express");
const StudentController = require('../controllers/studentcontroller');
// const mongoose  = require("mongoose");
const router = express.Router();
router.post("/add/user",(req,res)=>{
    console.log("here")
StudentController.addStudent(req,res)
})
router.get('/users',(req,res)=>{
   StudentController.getStudents(req,res) 
})
module.exports = router
