import React from 'react'
import patient from '../Images/patientpic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons'

class Doctor extends React.Component{
    // shouldComponentUpdate = (nextprops,nextstate) => {
    //     console.log("DOCTOR shouldcomponentupdate")
    //     if(nextprops.withidpatientInfo !== this.props.withidpatientInfo || 
    //        nextprops.displaypatient !== this.props.displaypatient ||
    //        nextprops.withidpatientInfo === this.props.withidpatientInfo || 
    //        nextprops.displaypatient === this.props.displaypatient){
    //             return false
    //         }
    //     else{
    //         return true
    //     }
    // }

    // componentDidUpdate(){
    //     console.log("DOCTOR componentDidUpate")
    // }

    render( ){
        var style={
            color:"red"
        }
        console.log("Doctor rendering...")
        return(
        <button className="Doctor" onClick={ () => this.props.Click(this.props.id) } >
          <div className="Profile"> <img src={patient} style={{width:"100%",height:"100%"}} alt="profile" /></div>
               <h4>{this.props.Patient_name}<br/>
               <FontAwesomeIcon style={style} icon={faMapMarker} aria-hidden="true" />{this.props.Patient_place}<br/>
               <FontAwesomeIcon style={style} icon={faPhone} aria-hidden="true" /> {this.props.Patient_contact}<br/></h4>
        </button>
        )
    }
}

export default Doctor