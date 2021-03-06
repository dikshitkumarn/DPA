const express= require('express')
const router= new express.Router()
const Doctor= require('../models/doctor')


//Creating Doctor

router.post('/doctor',async (req,res)=>{
try{
    const doctor= await new Doctor(req.body)
await doctor.save()
res.send(doctor)
}catch(e){
res.status(400).send(e)
}
})



//Read Doctor
router.get('/doctor', async (req, res) => {
    try {
        const doctor = await Doctor.find({})
        if (doctor.length===0) {
            res.status(404).send("Doctor not found")
        }

        res.send(doctor)

    }catch(e){
        res.status(400).send(e)
    }
})





//Read Doctor by Mail
router.get('/doctor/:id', async (req, res) => {

    try {
        const doctor = await Doctor.findOne({ email: req.params.id })
        if (!doctor) {
            res.status(404).send("Doctor not found")
        }
        res.send(doctor)
    }catch(e){
        res.status(400).send(e)
    }

})



//Update Patient by Mail
router.patch('/doctor/:id', async (req, res) => {

    try {
        const doctor = await Doctor.findOneAndUpdate({ email: req.params.id }, req.body, { new: true })
        if (!doctor) {
            res.status(404).send("Doctor not found")
        }
        res.send(doctor)
    } catch(e){
        res.status(400).send(e)
    }
})




//Delete Doctor By Mail
router.delete('/doctor/:id', async (req, res) => {
    try {
        const doctor = await Doctor.findOneAndDelete({ email: req.params.id })
        if (!doctor) {
            res.status(404).send("Doctor not found")
        }
        res.send(doctor)
    }catch(e){
        res.status(400).send(e)
    }
})

module.exports= router