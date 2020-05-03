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
        <div className="form-container" >
        <form className='account-form' onSubmit={(event) => this.props.Submit(event)}>
            <div className={'account-form-fields ' + (this.props.option === 1 ? 'sign-in' : (this.props.option === 2 ? 'sign-up' : 'forgot')) }>
                {this.props.option === 1 ?
                <Fragment>
                    <input id='email' value={this.props.signin.email} className="textbox" name='email' type='email' placeholder='E-mail' required={true} onChange={event => this.props.Change2(event)} />
                    <input id='password' value={this.props.signin.password} className="textbox" name='password' type='password' placeholder='Password' required={true} onChange={event => this.props.Change2(event)} />
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
                    <input name="location" type="text" className="textbox" value={this.props.signup.location} placeholder="Your Location" required={false} onChange={event => this.props.Change(event)} />
                </Fragment>
                }
            </div>
            <button className='btn-submit-form' type='submit' onClick={ event => this.props.Submit(event) } >
                { this.props.option === 1 ? 'Sign in' : (this.props.option === 2 && 'Sign up') }
            </button>
        </form>
        </div>
        )
    }
}

export default Form