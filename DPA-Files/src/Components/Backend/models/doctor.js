const mongoose= require('mongoose')
const validator= require('validator')


const DoctorSchema= new mongoose.Schema({
    name:{
        type:String,
        default:"Doctor"
    },
hospital:{
    type:String,
  

},

email:{
    type:String,
    
    unique:true,
    validate(value){
        if(!validator.isEmail(value)){
throw new Error("Invalid Email!")
        }
    }
},

password:{
    type:String,
    trim:true,
    minlength:6,
    
},

isdoctor:{
    type:Boolean,
    
},

ispatient:{
    type:Boolean
}

})


const Doctor= mongoose.model('Doctor',DoctorSchema)

module.exports= Doctor