import React from 'react'

const Patient = props => {
    return (
        <div className="Doctor Patient" >
            <div className="Profile" ></div>
            <div className="Content" >
                Name:  {props.Doctor_name}<br/>
                Place:  {props.Doctor_place}<br/>
                Contact:  {props.Doctor_contact}<br/>
            </div>
        </div>
    )
}

export default Patient