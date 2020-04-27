import React, { Fragment } from 'react'
import Doctor from '../Components/Person/Doctor'
import Patient from '../Components/Person/Patient'
import Login from '../Components/Login/Login'
import './App.css'
// import Doctorcontext from '../hoc/Context/Doctorcontext'
// import Patientcontext from '../hoc/Context/Patientcontext'

class App extends React.Component{
    state={
        //Database
        isDoctor: false,
        isPatient: false,
        isLogin: false,
        checked1: false,
        checked2: false,
        doctorInfo: [
            {
                name: "doctor mani",
                place: "doctor manipur",
                profile: "doctor_mani.jpeg",
                contact: 9600714338
            },
            {
                name: "doctor mani2",
                place: 'doctor Manipur2',
                profile: "doctor_mani2.jpeg",
                contact: 9994959031
            },
            {
                name: "doctor mani",
                place: "doctor manipur",
                profile: "doctor_mani.jpeg",
                contact: 9600714338
            },
            {
                name: "doctor mani2",
                place: 'doctor Manipur2',
                profile: "doctor_mani2.jpeg",
                contact: 9994959031
            },
            {
                name: "doctor mani",
                place: "doctor manipur",
                profile: "doctor_mani.jpeg",
                contact: 9600714338
            },
            {
                name: "doctor mani2",
                place: 'doctor Manipur2',
                profile: "doctor_mani2.jpeg",
                contact: 9994959031
            },
            {
                name: "doctor mani",
                place: "doctor manipur",
                profile: "doctor_mani.jpeg",
                contact: 9600714338
            },
            {
                name: "doctor mani2",
                place: 'doctor Manipur2',
                profile: "doctor_mani2.jpeg",
                contact: 9994959031
            }
        ],
        patientInfo: [
            {
                name: "patient mani",
                place: "patient manipur",
                profile: "patient_mani.jpeg",
                contact: 9600277564
            },
            {
                name: "patient mani2",
                place: "patient manipur2",
                profile: "patient_mani2.jpeg",
                contact: 9443340679
            }
        ],
        //original state
        doctorClick: false,
        patientClick: false
    }

    handleLogin = () => {
        var State = [...this.state]
        if(this.state.checked1) State.isDoctor=true
        else if(this.state.checked2) State.isPatient=true
        State.isLogin=true
        this.setState( {...State} )
    }
    handleChange1 = () => {
        this.setState(
            PrevState => {return({checked1: !PrevState.checked1, checked2:false})}
        )
    }

    handleChange2 = () => {
        this.setState(
            PrevState => {return({checked2: !PrevState.checked2, checked1:false})}
        )
    }

    render(){
        var person
        if(this.state.isLogin && this.state.isDoctor){
            person=(
                this.state.patientInfo.map(
                    (patient,index) => //<Doctorcontext.Provider value={{patientClick: this.state.patientClick}} >
                                            <Doctor
                                                key={index}
                                                Patient_profile={patient.profile}
                                                Patient_name={patient.name}
                                                Patient_place={patient.place}
                                                Patient_contact={patient.contact}
                                                // patientClick= {this.state.patientClick}
                                            />
                                       // </Doctorcontext.Provider> 
                )
            )
        }
        else if(this.state.isLogin && this.state.isPatient){
            person=(
                this.state.doctorInfo.map(
                    (doctor,index) => //<Patientcontext.Provider value={{doctorClick: this.state.doctorClick}} >
                                        <Patient 
                                            key={index}
                                            Doctor_profile={doctor.profile}
                                            Doctor_name={doctor.name}
                                            Doctor_place={doctor.place}
                                            Doctor_contact={doctor.contact} 
                                            doctorClick= {this.state.doctorClick}     
                                        />
                                     // </Patientcontext.Provider>
                )
            )
        }
        else{
            person = (<Login Click={this.handleLogin} checked1={this.state.checked1} checked2={this.state.checked2} Change1={this.handleChange1} Change2={this.handleChange2} />)
        }
        return ( 
            <Fragment>
                <div className="MyProfile" ></div>
                <div className="fake-body" >
                    <div className="Container" >
                            {person}
                    </div>
                    <div className="Details" >
                            DOCTOR/PATIENT DETAILS
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default App