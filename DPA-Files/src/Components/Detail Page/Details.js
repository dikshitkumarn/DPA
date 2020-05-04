import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import MapContainer from './Map'


class Details extends React.Component {

    // shouldComponentUpdate(nextProps,nextState){
    //     console.log(nextProps.Details,"DETAILS shouldComponentUpdate")
    //     if(nextProps.Details !== this.props.Details ){
    //         return true
    //     }
    //     else if( nextProps.Details === this.props.Details ) {
    //         return false
    //     }
    // }

    // componentDidUpdate(){
    //     console.log("DETAILS componentDidUpdate")
    // }

    render(){
        var allset = Object.keys(this.props.Details)
        var output
        var style={
            color:"red"
        }
        // var Map = "https://www.google.com/maps/place/11.2189°N+78.1674°E"
        // var Map = "https://www.google.com/maps/place/"+this.props.Details.latitude+"°N+"+this.props.Details.longitude+"°E"
        console.log( "Details rendering...", allset.length)
        if(allset.length !== 0 && this.props.isLogin)
            output = ( 
                this.props.showdetails ?
                <Fragment>
                    <div className="Details-container" onClick={this.props.Click} ></div>
                        <div className="Details" >
                            <div className="Profile2" >
                                <img src={this.props.Details.profilepic} style={{width:"100%",height:"100%"}} alt="profile" />
                            </div>
                            <div className="detailed-content" >
                                <button className="Details-inner" >{this.props.Details.name}</button>
                                <button className="Details-inner">{this.props.Details.age}</button>
                                <button className="Details-inner">{this.props.Details.email}</button>
                                <button className="Details-inner"><FontAwesomeIcon style={style} icon={faPhone} aria-hidden="true" /> {this.props.Details.contact}</button>
                                <button className="Details-inner"> <FontAwesomeIcon style={style} icon={faMapMarker} aria-hidden="true" /> {this.props.Details.location}</button>
                                {/* <button className="Details-inner"><a className="link" href={Map} target="_blank" > Directions</a></button> */}
                            </div>
                            <div className="map">
                                    <MapContainer lat={this.props.Details.lat} long={this.props.Details.long} />
                            </div>
                        <div className="close" onClick={this.props.Click} ></div>
                    </div>
                </Fragment>
                : null
            )
        else if( this.props.isLogin === false ) {
            output = null
        } 
        else if ( allset.length === 0 && this.props.isLogin )
        {
            output = (
                this.props.showdetails ?
                <Fragment>
                    <div className="Details-container" onClick={this.props.Click} ></div>
                    <div className="Details" >  Choose your Doctor
                    <div className="close" onClick={this.props.Click} ></div>
                    </div>
                </Fragment>
                : null
            )
        }
        return(
            <Fragment>
                {this.props.isLogin ? <div className="fake-Details"> CHOOSE YOUR OPTION </div> : null }
                {output}
            </Fragment>
            )
    }
}

export default Details