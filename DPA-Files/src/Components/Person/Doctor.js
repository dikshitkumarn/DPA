import React from 'react'

const Doctor = props => {
    return (
        <div className="Doctor" >
          <div className="Profile" ></div>
            <div className="Content" >
                Name:  {props.Patient_name}<br/>
                Place:  {props.Patient_place}<br/>
                Contact:  {props.Patient_contact}<br/>
            </div>
        </div>
    )
    
}

export default Doctor