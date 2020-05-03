import React, { Fragment } from 'react'

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
        if(this.state.click){
            fake={
                zIndex:'1000',
                display:"flex",
                backgroundColor:"black",
                opacity:0.5,
                width:"100%",
                height:"100%"
            }
            myprofile ={
                zIndex:'1001',
                height:"50%",
                width:"90%",
                borderRadius:"10px"
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
    }
    return(
        <Fragment>
            <div className="fake-body2" onClick={this.display} style={fake} ></div>
            <div onClick={this.toggle} className="MyProfile"  style={myprofile} ></div>
        </Fragment>
        )
    }
}

export default MyProfile