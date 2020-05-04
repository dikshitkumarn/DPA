import React from 'react'
import '../Login.css'
import Form from "./Form"

const Decide = props => {
    return(
        <div className='container'>
            <header>
                <div className={'header-headings ' + (props.option === 1 ? 'sign-in' : (props.option === 2 ? 'sign-up' : 'forgot')) }>
                    <span>Sign in to your account</span>
                    <span>Create an account</span>
                </div>
            </header>
            <ul className='options'>
                <li className={props.option === 1 ? 'active' : ''} onClick={props.option1}>Sign in</li>
                <li className={props.option === 2 ? 'active' : ''} onClick={props.option2}>Sign up</li>
            </ul>
            <Form load={props.load} option={props.option} wrong={props.wrong} Change={props.handlesignup} Change2={props.handlesignin} Submit={props.handleSubmit} signup={props.signup} signin={props.signin} />
        </div>
            // show={props.show} 
    )
}

export default Decide