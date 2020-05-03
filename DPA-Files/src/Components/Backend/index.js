const express = require('express')
const cors = require('cors')

const app = express()

require('./database/mongoose')

app.use(express.json())
app.use(cors())

//Add External Routes
const PatientRouter = require('./routes/patient.route')
const DoctorRouer= require('./routes/doctor.route')
const SignupRouter= require('./routes/signup.route')

//Use External Routes
app.use(PatientRouter)
app.use(DoctorRouer)
app.use(SignupRouter)







app.listen(5000, () => {
    console.log("Server is on...")
})