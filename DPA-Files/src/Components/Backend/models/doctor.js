const mongoose= require('mongoose')
const validator= require('validator')


const DoctorSchema= new mongoose.Schema({
    name:{
        type:String,
        default:"Doctor"
    },
    age:{
        type:String
    },
    contact: {
        type: String,
       unique:true,
        // validate(value) {
        //     if (!value===10) {
        //         throw new Error("Invlid Phone Number!")
        //     }
        // }
    },
    
hospital:{
    type:String,
    required:true,

},
location:{
type:String,
},

email:{
    type:String,
    required:true,
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