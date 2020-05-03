import React from 'react'

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
        console.log("Doctor rendering...")
        return(
        <div className="Doctor" onClick={ () => this.props.Click(this.props.id) } >
          <div className="Profile" ></div>
            {/* <div className="Content" > */}
               <h4> Name:  {this.props.Patient_name}<br/>
                Place:  {this.props.Patient_place}<br/>
                Contact:  {this.props.Patient_contact}<br/></h4>
            {/* </div> */}
        </div>
        )
    }
}

export default Doctor