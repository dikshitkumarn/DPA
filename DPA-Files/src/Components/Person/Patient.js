import React from 'react'
import doctor from '../Images/doctorpic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons'

class Patient extends React.Component {
    // shouldComponentUpdate = (nextprops,nextstate) => {
    //     console.log("PATIENT shouldcomponentupdate")
    //     if(nextprops.withiddoctorInfo === this.props.withiddoctorInfo || 
    //        nextprops.displaydoctor === this.props.displaydoctors ||
    //        nextprops.withiddoctorInfo !== this.props.withiddoctorInfo || 
    //        nextprops.displaydoctor !== this.props.displaydoctors){
    //             return false
    //         }
    //     else{
    //         return true
    //     }
    // }
    // componentDidUpdate(){
    //     console.log("PATIENT componentDidUpate")
    // }
    render (){
        var style={
            color:"red"
        }
        console.log("patient rendering...")
        return(
        <button className="Doctor" onClick={ () => this.props.Click(this.props.id) } >
            <div className="Profile" ><img src={doctor} style={{width:"100%",height:"100%"}} alt="profile" /></div>
               <h4> Dr.{this.props.Doctor_name}<br/>
               <FontAwesomeIcon style={style} icon={faMapMarker} aria-hidden="true" /> {this.props.Doctor_place}<br/>
               <FontAwesomeIcon style={style} icon={faPhone} aria-hidden="true" />  {this.props.Doctor_contact}<br/></h4>
        </button>
        )
    }
}

export default Patient