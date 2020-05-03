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
        var docstyle={
            background: this.state.doccolor
        }
        var patstyle={
            background: this.state.patcolor
        }
    return(
        // <div className="" >
        <form className='account-form form-container' onSubmit={ event => this.props.Submit(event)}>
            <div className={'account-form-fields ' + (this.props.option === 1 ? 'sign-in' : 'sign-up') }>
                {this.props.option === 1 ?
                <Fragment>
                    <input value={this.props.signin.email} className="textbox" name='email' type='email' placeholder='E-mail' required={true} onChange={event => this.props.Change2(event)} />
                    <input value={this.props.signin.password} className="textbox" name='password' type='password' placeholder='Password' required={true} onChange={event => this.props.Change2(event)} />
                    <button style={{background:"red"}} className="docpat" onSubmit={event => this.props.Submit(event)} >Sign in</button>
                </Fragment>
                    :
                <Fragment>
                    <input name="name" type="text" className="textbox" placeholder="Name" value={this.props.signup.name} required={true} onChange={event => this.props.Change(event)} />
                    <input name="age" type="text" className="textbox" placeholder="Age" value={this.props.signup.age} required={false} onChange={event => this.props.Change(event)} />
                    <input id='email' className="textbox" name='email' type='email' value={this.props.signup.email} placeholder='E-mail' required={true} onChange={event => this.props.Change(event)} />
                    <input id='password' className="textbox" name='password' type='password' value={this.props.signup.password} placeholder='Password' required={true} onChange={event => this.props.Change(event)} />
                    <button className="docpat" id="signas" > Sign Up As... </button>
                    <button name="Doctor" style={docstyle} className="docpat" onClick={event => {this.props.Change(event); this.setState({doccolor:"crimson",patcolor:"#6381e8",showtextbox:true}) }} > DOCTOR </button>
                    {this.state.showtextbox?<input name="hospital" type="text" value={this.props.signup.hospital} className="textbox" placeholder="Hospitalname" required={false} onChange={event => this.props.Change(event)} />:null}
                    <button name="Patient" style={patstyle} className="docpat" onClick={event => {this.props.Change(event); this.setState({doccolor:"#6381e8",patcolor:"crimson",showtextbox:false}) }} > Patient </button>
                    <input name="location" type="text" className="textbox" value={this.props.signup.location} placeholder="Your Location" required={true} onChange={event => this.props.Change(event)} />
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