const mongoose = require('mongoose')
const validator= require('validator')


const PatientSchema= new mongoose.Schema({
    name:{
        type:String,
        default:"User",
        required:true
    },


    age:{
        type:String,
        required:true,
     
    },

    location:{
        type:String,
        required:true
    },



    contact: {
        type: String,
       unique:true,
      
    },

    email:{
        type:String,
        unique: true,
        

    },

    password:{
        type: String,
        trim:true,
        minlength:6
    },
    isdoctor: {
        type: String,
        required: true
    },

    ispatient: {
        type: String,
        required: true
    },
    hospital:{
        type:String
    }




})









const Patient=  mongoose.model('patient',PatientSchema)

module.exports= Patient




