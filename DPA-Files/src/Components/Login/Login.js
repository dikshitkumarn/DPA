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
            contact:"",
            lat:"",
            long:""
        },
        option:2,
        islogin:false,
        wrong:false,
        load:false,
        wrongsignup:false
    }

    handleSubmit = event =>{
        event.preventDefault()
        var details,set

        //Signup
        if( (this.state.option===2) && (this.state.signup.isdoctor==="true" || this.state.signup.ispatient==="true" ) ){
        console.log("Submitted ")
        details = {...this.state.signup}
        console.log(details)
        this.setState({load:true})


        // Getting latituede and longitude
        const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ this.state.signup.location +".json?access_token=pk.eyJ1IjoiamFnYWRoZWVzaDYiLCJhIjoiY2s3aXo4MTBlMG5xdDNrbHB1OXZ4NGdnNSJ9.BmItdc7_NyDeeUsFMNL2kA"
        axios.get(url)
        .then(res => {console.log(res.data);
            if(res.data.features.length === 0 || res.data === undefined ){
                details.lat = "48.8566"
                details.long = "2.3522"
            }
            else{
            details.lat = res.data.features[0].center[1].toString()
            details.long = res.data.features[0].center[0].toString()
            }
        })
        console.log(details)
        setTimeout( () => {
            axios.post(`http://localhost:5000/signup`, details)
            .then(res => {console.log(res.data);
                if(res.data==="Incorrect"){
                    this.setState({wrongsignup:true})
                    this.setState({load:false})
                }
                else if(res.data.isdoctor === "true"){
                    set = {...this.state.fromDB}
                    set.doctorInfo = [{...res.data.doctor}]
                    set.patientInfo = [...res.data.data]
                    set.isdoctor = "true"
                    set.ispatient = "false"
                    set.islogin = true
                    this.setState({ islogin:true, fromDB:{...set} })
                }
                else if(res.data.ispatient === "true" ){
                    set = {...this.state.fromDB}
                    set.patientInfo = [{...res.data.patient}]
                    set.doctorInfo = [...res.data.info]
                    set.isdoctor = "false"
                    set.ispatient = "true"
                    set.islogin = true
                    this.setState({ islogin:true, fromDB:{...set} })
                }
                this.setState({load:false})
                })
            }, 3000 )
        }

        //Signin
        else if(this.state.option === 1 ){
            this.setState({load:true})
            details = {...this.state.signin}
            axios.post(`http://localhost:5000/login`, details)
            .then(res => {
                if(res.data==="Incorrect"){
                    this.setState({wrong:true})
                    this.setState({load:false})
                }
                else if(res.data.isdoctor==="true") {
                    set = {...this.state.fromDB}
                    set.doctorInfo = [{...res.data.doctor}]
                    set.patientInfo = [...res.data.data]
                    set.isdoctor = "true"
                    set.ispatient = "false"
                    set.islogin = true
                    this.setState({ islogin:true, fromDB:{...set} })
                    this.setState({load:false})
                }
                else if(res.data.ispatient==="true"){
                    set = { ...this.state.fromDB }
                    set.patientInfo = [{...res.data.patient}]
                    set.doctorInfo = [...res.data.info]
                    set.ispatient = "true"
                    set.isdoctor = "false"
                    set.islogin = true
                    this.setState({ islogin:true, fromDB:{...set} })
                    this.setState({load:false})
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
                wrongsignup={this.state.wrongsignup}
                option={this.state.option}
                signup={this.state.signup}
                signin={this.state.signin}
                handlesignup={this.handlesignup}
                handleSubmit={this.handleSubmit} 
                option1={this.option1}   
                option2={this.option2}
                handlesignin={this.handlesignin}
                load={this.state.load}
            />
            </div>
        )
    }
    }


export default Login