const mongoose = require('mongoose')
const validator= require('validator')


const PatientSchema= new mongoose.Schema({
    name:{
        type:String,
        default:"User"
    },


    age:{
        type:Number,
        
        validate(value){
            if(value<=0){
                throw new Error("Invalid Age!")
            }
        }
    },

    location:{
type:String
    },



    contact: {
        type: Number,
       unique:true,
        validate(value) {
            if (!value===10) {
                throw new Error("Invlid Phone Number!")
            }
        }
    },

    email:{
        type:String,
        unique: true,
         validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email!")
            }
        }   

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




