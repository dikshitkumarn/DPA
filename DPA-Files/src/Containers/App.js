import React from 'react'
import MyProfile from '../Components/MyProfile/MyProfile'
import Doctor from '../Components/Person/Doctor'
import Patient from '../Components/Person/Patient'
// import Login from '../Components/Login/Login'
import './App.css'
import Details from '../Components/Detail Page/Details'
// import Doctorcontext from '../hoc/Context/Doctorcontext'
// import Patientcontext from '../hoc/Context/Patientcontext'


var newdoctorInfo
var newpatientInfo

class App extends React.Component{

    state={
        //Database
        isDoctor: this.props.State.fromDB.isdoctor,
        isPatient: this.props.State.fromDB.ispatient,
        isLogin: true,
        // checked1: false,
        // checked2: false,
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
        withiddoctorInfo:[],
        withidpatientInfo:[],
        displaydoctor:{},
        displaypatient:{},
        showdetails:false
    }

    // static getDerivedStateFromProps = (props,State) => {
    //     console.log("derivedstate")
    //     return State
    // }

    // shouldComponentUpdate(nextProps,nextState){
    //     console.log("APP shouldcomponentupdate")
    //     if(nextState.withiddoctorInfo !== this.state.withiddoctorInfo || 
    //        nextState.withidpatientInfo !== this.state.withidpatientInfo
    //        )
    //         return false
    //     else
    //         return true
    // }

    // componentDidUpdate(){
    //     console.log("componentdidupdate")
    // }

    UpdateState = (id) => {
        
        var newState = {...this.state}
        newState.showdetails=true
        if(this.state.isPatient){
            newState.withiddoctorInfo = newdoctorInfo
            newState.withiddoctorInfo.map( info => {
                if( info.id === id ){
                    newState.displaydoctor = {...info}
                }
                return null
            } )
            this.setState({...newState})
        }
        else if(this.state.isDoctor){
            newState.withidpatientInfo = newpatientInfo
            newState.withidpatientInfo.map( info => {
                if( info.id === id ){
                    newState.displaypatient = {...info}
                }
                
                return null
            } )
            this.setState({...newState} )
        }
    }

    // handleLogin = () => {
    //     var State = [...this.state]
    //     if(this.state.checked1) State.isDoctor=true
    //     else if(this.state.checked2) State.isPatient=true
    //     State.isLogin=true
    //     this.setState( {...State} )
    // }
    // handleChange1 = () => {
    //     this.setState(
    //         PrevState => {return({checked1: !PrevState.checked1, checked2:false})}
    //     )
    // }

    // handleChange2 = () => {
    //     this.setState(
    //         PrevState => {return({checked2: !PrevState.checked2, checked1:false})}
    //     )
    // }
    close = () => {
        this.setState({showdetails : false }) 
    }
    render = () => { 
        console.log(this.state)
        var person
        var details = {}
        if(this.state.isLogin && this.state.isDoctor){
            newpatientInfo = [...this.state.patientInfo]
            person=(
                this.state.patientInfo.map(
                    (patient,index) => {//<Doctorcontext.Provider value={{patientClick: this.state.patientClick}} >
                                            var patientInfo = this.state.patientInfo[index]
                                            patientInfo = {id:index,...patientInfo}
                                            newpatientInfo[index] = {...patientInfo}
                                            // console.log(newpatientInfo)
                                            return(
                                            <Doctor
                                                key={index}
                                                id={index}
                                                withidpatientInfo={this.state.withidpatientInfo}
                                                displaypatient={this.state.withidpatientInfo}
                                                Patient_profile={patient.profile}
                                                Patient_name={patient.name}
                                                Patient_place={patient.place}
                                                Patient_contact={patient.contact}
                                                Click={this.UpdateState}
                                                // patientClick= {this.state.patientClick}
                                            />)}
                                       // </Doctorcontext.Provider> 
                )
            )
            details=this.state.displaypatient
        }
        else if(this.state.isLogin && this.state.isPatient){
            newdoctorInfo = [...this.state.doctorInfo]
            person=(
                this.state.doctorInfo.map(
                    (doctor,index) => {//<Patientcontext.Provider value={{doctorClick: this.state.doctorClick}} >
                                        var doctorInfo = this.state.doctorInfo[index]
                                        doctorInfo = {id:index,...doctorInfo}
                                        newdoctorInfo[index] = {...doctorInfo}
                                        // console.log(newdoctorInfo)
                                        return(
                                        <Patient 
                                            key={index}
                                            id={index}
                                            withiddoctorInfo={this.state.withiddoctorInfo}
                                            displaydoctor={this.state.withiddoctorInfo}
                                            Doctor_profile={doctor.profile}
                                            Doctor_name={doctor.name}
                                            Doctor_place={doctor.place}
                                            Doctor_contact={doctor.contact}   
                                            Click={this.UpdateState}
                                        />)}
                                     // </Patientcontext.Provider>
                )
            )
            details=this.state.displaydoctor
        }
        return ( 
            <div className="body" >
                <MyProfile />
                <div className="fake-body" ></div>
                    <div className="Container" >
                            {person}
                    </div>
                    <Details Details={details} showdetails={this.state.showdetails} isLogin={this.state.isLogin} Click={this.close} />
                
            </div>
        )
    }
}

export default App