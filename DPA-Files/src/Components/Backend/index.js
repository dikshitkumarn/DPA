const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
require('./database/mongoose')

app.use(express.json())


//Add External Routes
const PatientRouter = require('./routes/patient.route')
const DoctorRouer= require('./routes/doctor.route')

//Use External Routes
app.use(PatientRouter)
app.use(DoctorRouer)

app.listen(5000, () => {
    console.log("Server is on...")
})