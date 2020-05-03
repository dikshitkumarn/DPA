import React from 'react'
import MyProfile from '../Components/MyProfile/MyProfile'
import Doctor from '../Components/Person/Doctor'
import Patient from '../Components/Person/Patient'
import './App.css'
import Details from '../Components/Detail Page/Details'
import doctorimage from '.././Components/Images/doctorpic.png'
import patientimage from '.././Components/Images/patientpic.png'

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
            ...this.props.State.fromDB.doctorInfo
        ],
        patientInfo: [
            ...this.props.State.fromDB.patientInfo
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
        if(this.state.isPatient==="true"){
            newState.withiddoctorInfo = newdoctorInfo
            newState.withiddoctorInfo.map( info => {
                if( info.id === id ){
                    newState.displaydoctor = {...info}
                }
                return null
            } )
            this.setState({...newState})
        }
        else if(this.state.isDoctor==="true"){
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
        // console.log(this.state)
        var person
        var details = {}
        if(this.state.isLogin && this.state.isDoctor==="true"){
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
                                                // withidpatientInfo={this.state.withidpatientInfo}
                                                // displaypatient={this.state.withidpatientInfo}
                                                // Patient_profile={patientimage}
                                                Patient_name={patient.name}
                                                Patient_place={patient.location}
                                                Patient_contact={patient.contact}
                                                Click={this.UpdateState}
                                                // patientClick= {this.state.patientClick}
                                            />)}
                                       // </Doctorcontext.Provider> 
                )
            )
            details={profilepic:patientimage,...this.state.displaypatient}
        }
        else if(this.state.isLogin && this.state.isPatient==="true"){
            newdoctorInfo = [...this.state.doctorInfo]
            person=(
                this.state.doctorInfo.map(
                    (doctor,index) => {
                                        var doctorInfo = this.state.doctorInfo[index]
                                        doctorInfo = {id:index,...doctorInfo}
                                        newdoctorInfo[index] = {...doctorInfo}
                                        // console.log(newdoctorInfo)
                                        return(
                                        <Patient 
                                            key={index}
                                            id={index}
                                            // withiddoctorInfo={this.state.withiddoctorInfo}
                                            // displaydoctor={this.state.withiddoctorInfo}
                                            Doctor_name={doctor.name}
                                            Doctor_place={doctor.location}
                                            Doctor_contact={doctor.contact}   
                                            Click={this.UpdateState}
                                        />)}
                )
            )
            details={profilepic:doctorimage,...this.state.displaydoctor}
        }
        return ( 
            <div className="body" >
                {this.props.State.fromDB.isdoctor==="true"?
                    <MyProfile name={this.props.State.fromDB.doctorInfo[0].name} age={this.props.State.fromDB.doctorInfo[0].age} location={this.props.State.fromDB.doctorInfo[0].location} isdoctor={this.props.State.fromDB.isdoctor} contact={this.props.State.fromDB.doctorInfo[0].contact} />
                    :
                    <MyProfile name={this.props.State.fromDB.patientInfo[0].name} age={this.props.State.fromDB.patientInfo[0].age} location={this.props.State.fromDB.patientInfo[0].location} isdoctor={this.props.State.fromDB.isdoctor} contact={this.props.State.fromDB.patientInfo[0].contact} />
                }
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