const express= require('express')
const Patient= require('../models/patient')
const router= new express.Router()





//Creating Patient
router.post('/patient', async (req,res)=>{
    const patient= new Patient(req.body)
    try{
        await patient.save()
        res.status(201).send(patient)
    }catch(e){
res.status(400).send(e)
    }
})




//Read Patient

router.get('/patient', async (req,res)=>{
    const patient = await Patient.find({})
    try{
     if(patient.length===0){
         res.status(500).send({error:"Not found"})
     } 
     res.send(patient)

    }catch(e){
        res.status(400).send()
    }
    
    
})





//Read Patient by Mail

router.get("/patient/:id", async (req, res) => {
    try {
        const patient = await Patient.findOne({ email: req.params.id })
        if (!patient) {
            res.status(404).send("Patient not found")
        }
        res.send(patient)

    } catch (e) {
        res.status(400).send()
    }


})




//Update Patient by Mail

router.patch('/patient/:id', async (req,res)=>{

    try {
        const patient = await Patient.findOneAndUpdate({email:req.params.id}, req.body, {new:true})
        await patient.save()
        if (!patient) {
            res.status(404).send("Patient not found")
        }
        res.send(patient)
    } catch (e) {
        res.status(400).send(e)
    }
})




//Delete Patient By Mail

router.delete('/patient/:id', async (req,res)=>{
try{
const patient= await Patient.findOneAndDelete({email:req.params.id})
if(!patient){
    res.status(404).send("Patient not found")
}
res.send("Patient info deleted")
}catch(e){
res.status(400).send(e)
}
})




module.exports=router