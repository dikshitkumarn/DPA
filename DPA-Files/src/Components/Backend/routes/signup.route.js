const express = require('express')
const bodyParser= require('body-parser')
const router= new express.Router()
const Doctor= require('../models/doctor')
const Patient= require('../models/patient')

var urlencodedParser = bodyParser.urlencoded({ extended: false })


//Signing Up User
router.post('/signup', urlencodedParser,async (req,res)=>{
    
if(req.body.isdoctor=="true"&&req.body.ispatient=="false"){

    try {
        const data= await Patient.find({})
        const isdoctor="true"
        const ispatient="false"
        const doctor = await new Doctor(req.body)
        await doctor.save()
        res.send({doctor,data,isdoctor,ispatient })
    } catch (e) {
        res.status(400).send("Cannot do that")
    }
 
} else if (req.body.isdoctor == "false" && req.body.ispatient == "true"){

    try {
        const info= await Doctor.find({})
        const isdoctor="false"
        const ispatient="true"
        const patient= await new Patient(req.body)
        console.log('working')
        await patient.save()
        res.send({patient,info,isdoctor,ispatient})
    }catch(e){
        res.status(400).send(e)
    }

    
}
})



//Logging in User
router.post('/login', urlencodedParser, async (req, res) => {
    try {
        const data= await Patient.find({})
        const doctor = await Doctor.findOne({ email: req.body.email })
        await console.log(doctor)
        if (doctor) {
            if (req.body.password == doctor.password) {
                console.log("Corect Password")
                var isdoctor = "true"
                var ispatient = "false"
                res.send({doctor,data,isdoctor,ispatient})

            }  if(req.body.password != doctor.password) {
                console.log("Wrong passsword")
                res.send("Incorrect")
            }


        } else {
            const info = await Doctor.find({})
            const patient = await Patient.findOne({ email: req.body.email })
            if (req.body.password == patient.password) {
                console.log("Corect Password")
                var isdoctor = "false"
                var ispatient = "true"
                res.send({patient,info,ispatient,isdoctor})

            }  if(req.body.password != patient.password) {
                res.send("Incorrect")
                console.log("Wrong passsword for patient").send()
            }

        }

    } catch (e) {

        res.status(400).send(e)

    }




})









module.exports= router