import React, { Fragment } from 'react'
import DPA from '.././Images/DPA_logo'
import doctor from '.././Images/doctorpic.png'
import patient from '.././Images/patientpic.png'
class MyProfile extends React.Component {
    state={
        click:false,
        // fakeDisplay:false,
    }
    toggle = () => {
        this.setState({click:true})
    }
    display = () =>{
        this.setState( prevstate => {return {click:!prevstate.click}})
    }
    render(){
        var fake
        var myprofile
        var hide
        var contain
        if(this.state.click){
            fake={
                display:"flex",
                zIndex:'1000',
                backgroundColor:"black",
                opacity:0.5,
                width:"100%",
                height:"100%"
            }
            myprofile ={
                marginTop:"5px",
                zIndex:'1001',
                height:"fit-content",
                width:"90%",
                borderRadius:"10px"
            }
            hide={
                display:"none"
            }
            contain={
                display:"flex"
            }
        }
        else if(!this.state.click){
            fake={
                zIndex:'-3',
                display:"none"
            }
            myprofile ={
                zIndex:'2',
            }
            hide={
                display:"flex"
            }
            contain={
                display:"none"
            }
    }
    return(
        <Fragment>
            <div className="fake-body2" onClick={this.display} style={fake} ></div>
            <div onClick={this.toggle} className="MyProfile"  style={myprofile} >
                <DPA />
                <div onClick={this.toggle} style={hide} className="fake-profile" > Your Profile </div>
                <div style={contain} className="profile-container" >
                    <div className="profile" > 
                        {this.props.isdoctor==="true"?
                        <img src={doctor} style={{width:"100%",height:"100%"}} alt="doctor" />:
                        <img src={patient} style={{width:"100%",height:"100%"}} alt="patient" />
                        }
                    </div>
                    <button className="button" >{this.props.name}</button>
                    <button className="button" > {this.props.age} </button>
                    <button className="button" > {this.props.location} </button>
                    <button className="button" > {this.props.contact} </button>
                </div>
            </div>
        </Fragment>
        )
    }
}

export default MyProfile