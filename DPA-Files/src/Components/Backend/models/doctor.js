const mongoose= require('mongoose')
const validator= require('validator')


const DoctorSchema= new mongoose.Schema({
    name:{
        type:String,
        default:"Doctor",
        required:true
    },
    age:{
        type:String,
        required:true
    },
    contact: {
        type: String,
       unique:true,
     
    },
    
hospital:{
    type:String,
    required:true,

},
location:{
type:String,
required:true
},

lat:{
    type:String
},

long:{
    type:String
},

email:{
    type:String,
    required:true,
    unique:true,

},

password:{
    type:String,
    trim:true,
    minlength:6
    
},

isdoctor:{
    type:String,
    required:true
},

ispatient:{
    type:String,
    required:true
}

})


const Doctor= mongoose.model('Doctor',DoctorSchema)

module.exports= Doctor