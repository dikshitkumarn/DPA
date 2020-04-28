import React from 'react'

class Patient extends React.Component {
    shouldComponentUpdate = (nextprops,nextstate) => {
        console.log("PATIENT shouldcomponentupdate")
        if(nextprops.withiddoctorInfo === this.props.withiddoctorInfo || 
           nextprops.displaydoctor === this.props.displaydoctors ||
           nextprops.withiddoctorInfo !== this.props.withiddoctorInfo || 
           nextprops.displaydoctor !== this.props.displaydoctors){
                return false
            }
        else{
            return true
        }
    }
    componentDidUpdate(){
        console.log("PATIENT componentDidUpate")
    }
    render (){
        console.log("patient rendering...")
        return(
        <div className="Doctor Patient" onClick={ () => this.props.Click(this.props.id) } >
            <div className="Profile" ></div>
            <div className="Content" >
                Name:  {this.props.Doctor_name}<br/>
                Place:  {this.props.Doctor_place}<br/>
                Contact:  {this.props.Doctor_contact}<br/>
            </div>
        </div>
        )
    }
}

export default Patient