import React, { Fragment } from 'react'
import axios from 'axios'
import App from '../../Containers/App'
import './Login.css'
import Decide from './login components/Decide'

class Login extends React.Component {

    state={
        fromDB:{
            doctorInfo:{},
            patientInfo:{},
            isdoctor:false,
            ispatient:true,
            location:"",
            islogin:false
        },
        signin:{
            email:"",
            password:""
        },
        signup:{
            name:"",
            age:'',
            isdoctor:false,
            ispatient:false,
            location:"",
            email:"",
            password:"",
            hospital:""
        },
        option:2,
        islogin:false
    }

    // callAPI = () => {
    //     var e = {...this.state}
    //     axios.get(`http://localhost:5000/patient`)
    //     .then(res => {
    //         if(res.data.length === 0){
    //             console.log("Not found")
    //         }
    //         else if(res.data.length !== 0){
    //             console.log(res);
    //             e.fromDB.check = res.data
    //             this.setState({...e})
    //         }
    //     })
    // }

    handleSubmit = event =>{
        this.setState({ islogin:true })
        event.preventDefault()
        // var details
        // if(this.state.option === 2 ){
        // details = {...this.state.signup}
        // axios.post(`http://localhost:5000/test`, {details})
        // .then(res => {console.log(res);
        //     this.setState({islogin:true})
        //     })
        // }
        // else if(this.state.option === 1 ){
        //     details = {...this.state.signin}
        //     axios.post(`http://localhost:5000/test`, {details})
        //     .then(res => {console.log(res);
        //         this.setState({ islogin:true })
        //         })
        // }
    }

    handlesignup = event => {
        event.preventDefault()
        var n = {...this.state}
        var to = event.target.name
        var val = event.target.value
        if(to==="Doctor"){
            n.signup.isdoctor=true
            n.signup.ispatient=false
        }
        else if(to==="Patient"){
            n.signup.ispatient=true
            n.signup.isdoctor=false
            n.signup.hospital=""
        }
        else{
        n.signup[to] = val
        }
        this.setState({...n})
    }
    handlesignin = event => {
        event.preventDefault()
        var x ={...this.state}
        var t =event.target.name
        var valu = event.target.value
        x.signin[t] = valu
        this.setState({...x})
    }

    // componentDidMount(){
    //     this.callAPI() 
    // }
    option1 = () => {
        this.setState(
            {
                option:1,
                signup:{
                    name:"",
                    age:"",
                    isdoctor:false,
                    ispatient:false,
                    location:"",
                    email:"",
                    password:"",
                    hospital:""
                }
            })
    }
    option2 = () => {
        this.setState(
            {
                option:2,
                signin:{
                    email:"",
                    password:""
                }
            })
    }

   
    render() {
        return (
            this.state.islogin?
            <App State={this.state} />:
            <Decide 
                option={this.state.option}
                signup={this.state.signup}
                signin={this.state.signin}
                handlesignup={this.handlesignup}
                handleSubmit={this.handleSubmit} 
                option1={this.option1}   
                option2={this.option2}
                handlesignin={this.handlesignin}
            />
        )
    }
    }
export default Login