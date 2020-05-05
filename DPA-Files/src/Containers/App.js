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
            setTimeout(() => {
                this.close()
            }, 100);
            setTimeout(() => {
                this.setState({showdetails:true})
            }, 100);
        }
        else if(this.state.isDoctor==="true"){
            console.log("isdoctor signup ",this.state.showdetails)
            newState.withidpatientInfo = newpatientInfo
            newState.withidpatientInfo.map( info => {
                if( info.id === id ){
                    newState.displaypatient = {...info}
                }
                return null
            } )
            this.setState({...newState} )
            setTimeout(() => {
                this.close()
            }, 100);
            setTimeout(() => {
                this.setState({showdetails:true})
            }, 100);
        }
    }
    close = () => {
        this.setState({showdetails : false }) 
    }
    render = () => { 
        var person
        var details = {}
        if(this.state.isLogin && this.state.isDoctor==="true"){
            newpatientInfo = [...this.state.patientInfo]
            person=(
                this.state.patientInfo.map(
                    (patient,index) => {    var patientInfo = this.state.patientInfo[index]
                                            patientInfo = {id:index,...patientInfo}
                                            newpatientInfo[index] = {...patientInfo}
                                            // console.log(newpatientInfo)
                                            return(
                                            <Doctor
                                                key={index}
                                                id={index}
                                                Patient_name={patient.name}
                                                Patient_place={patient.location}
                                                Patient_contact={patient.contact}
                                                Click={this.UpdateState}
                                            />)}
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
                                        return(
                                        <Patient 
                                            key={index}
                                            id={index}
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
                    <MyProfile email={this.props.State.fromDB.doctorInfo[0].email} name={this.props.State.fromDB.doctorInfo[0].name} age={this.props.State.fromDB.doctorInfo[0].age} location={this.props.State.fromDB.doctorInfo[0].location} isdoctor={this.props.State.fromDB.isdoctor} contact={this.props.State.fromDB.doctorInfo[0].contact} />
                    :
                    <MyProfile email={this.props.State.fromDB.patientInfo[0].email} name={this.props.State.fromDB.patientInfo[0].name} age={this.props.State.fromDB.patientInfo[0].age} location={this.props.State.fromDB.patientInfo[0].location} isdoctor={this.props.State.fromDB.isdoctor} contact={this.props.State.fromDB.patientInfo[0].contact} />
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