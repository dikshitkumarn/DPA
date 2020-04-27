import React from 'react'

const Login = props => {
    return(
        <div>
            LOGIN<br/> 
            <form>
                <input type="radio" value="Doctor" name="Doctor" checked={props.checked1} onChange={props.Change1} />Doctor<br/>
                <input type="radio" value="patient" name="Patient" checked={props.checked2} onChange={props.Change2} />Patient<br/>
            </form>
            <button onClick={props.Click} >Login</button>
        </div>
    )
}

export default Login