import React from 'react'
import axios from 'axios'
import App from '../../Containers/App'
import './Login.css'
import Decide from './login components/Decide'

class Login extends React.Component {

    state={
        fromDB:{
            doctorInfo:[],
            patientInfo:[],
            isdoctor:"false",
            ispatient:"true",
            // location:"",
            islogin:false
        },
        signin:{
            email:"",
            password:""
        },
        signup:{
            name:"",
            age:'',
            isdoctor:"false",
            ispatient:"false",
            location:"",
            email:"",
            password:"",
            hospital:"",
            contact:""
        },
        option:2,
        islogin:false,
        wrong:false
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
        // this.setState({ islogin:true })
        event.preventDefault()
        if( (this.state.option===2) && (this.state.signup.isdoctor==="true" || this.state.signup.ispatient==="true" ) ){
        // this.setState({islogin:true})
        console.log("Submitted ")
        var details
        if(this.state.option === 2 ){
        details = {...this.state.signup}
        console.log(details)
        axios.post(`http://localhost:5000/signup`, details)
        .then(res => {console.log(res.data[0].name);
            this.setState({islogin:true})
            })
        }
    }
        else if(this.state.option === 1 ){
            details = {...this.state.signin}
            axios.post(`http://localhost:5000/login`, details)
            .then(res => {console.log(res.data.doctor);
                if(res.data==="Incorrect"){
                    this.setState({wrong:true})
                }
                else if(res.data.isdoctor==="true") {
                    var set = {...this.state.fromDB}
                    set.doctorInfo=[{...res.data.doctor}]
                    set.patientInfo=[...res.data.data]
                    set.isdoctor="true"
                    set.ispatient="false"
                    set.islogin=true
                this.setState({islogin:true,fromDB:{...set}})
                }
                })
        }
    }

    handlesignup = event => {
        event.preventDefault()
        var n = {...this.state}
        var to = event.target.name
        var val = event.target.value
        if(to==="Doctor"){
            n.signup.isdoctor="true"
            n.signup.ispatient="false"
        }
        else if(to==="Patient"){
            n.signup.ispatient="true"
            n.signup.isdoctor="false"
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
                    isdoctor:"false",
                    ispatient:"false",
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
            <div className="body2" >
            <Decide 
                wrong={this.state.wrong}
                option={this.state.option}
                signup={this.state.signup}
                signin={this.state.signin}
                handlesignup={this.handlesignup}
                handleSubmit={this.handleSubmit} 
                option1={this.option1}   
                option2={this.option2}
                handlesignin={this.handlesignin}
            />
            </div>
        )
    }
    }
export default Login