import React, { Fragment } from 'react'
import '../Login.css'

class Form extends React.Component {
    state={
        doccolor: "#6381e8",
        patcolor: "#6381e8",
        showtextbox:false
    }
    // shouldComponentUpdate(nextprops,nextstate){
    //     if(nextprops!==this.props)
    //     {
    //         return false
    //     }
    //     else{
    //         return true
    //     }
    // }
    render(){
        var wrong
        var docstyle={
            background: this.state.doccolor,
            color:"white",
            height:"fit-content"
        }
        var patstyle={
            background: this.state.patcolor,
            color:"white",
            height:"fit-content"
        }
        this.props.wrong?
        wrong={
            border:"2px solid red"
        }:
        wrong={
            border:"none"
        }
    return(
        // <div className="" >
        <form className='account-form form-container' onSubmit={ event => this.props.Submit(event)}>
            {this.props.load?<div className="loading">
                <div id="main">
                <div id="a"> </div>
                <div id="b"> </div>
                <div id="c"> </div>
                <div id="d"></div>
                </div>
            </div>:null}
            <div className={'account-form-fields ' + (this.props.option === 1 ? 'sign-in' : 'sign-up') }>
                {this.props.option === 1 ?
                <Fragment>
                    <input style={wrong} value={this.props.signin.email} className="textbox" name='email' type='email' placeholder='E-mail' required={true} onChange={event => this.props.Change2(event)} />
                    <input style={wrong} value={this.props.signin.password} className="textbox" name='password' type='password' placeholder='Password' required={true} onChange={event => this.props.Change2(event)} />
                    <button style={{background:"red"}} className="docpat" onSubmit={event => this.props.Submit(event)} >Sign in</button>
                </Fragment>
                    :
                <Fragment>
                    <input name="name" type="text" className="textbox" placeholder="Name" value={this.props.signup.name} required={true} onChange={event => this.props.Change(event)} />
                    <input name="age" type="number" className="textbox" placeholder="Age" value={this.props.signup.age} required={false} onChange={event => this.props.Change(event)} />
                    <input id='email' className="textbox" name='email' type='email' value={this.props.signup.email} placeholder='E-mail' required={true} onChange={event => this.props.Change(event)} />
                    <input id='password' className="textbox" minLength="6" name='password' type='password' value={this.props.signup.password} placeholder='Create DPA Password' required={true} onChange={event => this.props.Change(event)} />
                    <button className="docpat" id="signas" > Sign Up As... </button>
                    <div className="inline">
                    <input name="Doctor" value="doctor" type="button" style={docstyle} className="docpat" onClick={event => {this.props.Change(event); this.setState({doccolor:"crimson",patcolor:"#6381e8",showtextbox:true}) }} />
                    <input name="Patient" value="patient" type="button" style={patstyle} className="docpat"  onClick={event => {this.props.Change(event); this.setState({doccolor:"#6381e8",patcolor:"crimson",showtextbox:false}) }} />
                    </div>
                    {this.state.showtextbox?<input name="hospital" type="text" value={this.props.signup.hospital} className="textbox" placeholder="Hospital name" required={true} onChange={event => this.props.Change(event)} />:null}
                    <input name="location" type="text" className="textbox" value={this.props.signup.location} placeholder="Your Location" required={true} onChange={event => this.props.Change(event)} />
                    <input name="contact" type="tel" minLength="10" maxLength="10" pattern="[0-9]{10}" className="textbox" value={this.props.signup.contact} placeholder="Contact Number" required={true} onChange={ event => this.props.Change(event) } />
                    <button className="docpat" style={{background:"red"}} onSubmit={ event=> this.props.Submit(event)} >Sign Up</button>
                </Fragment>
                }
            </div>
        </form>
        // </div>
        )
    }
}

export default Form