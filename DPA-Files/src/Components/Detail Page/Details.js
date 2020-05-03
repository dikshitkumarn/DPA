import React, { Fragment } from 'react'

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
        console.log( "Details rendering...", allset.length)
        if(allset.length !== 0 && this.props.isLogin)
            output = ( 
                this.props.showdetails ?
                <Fragment>
                    <div className="Details-container" onClick={this.props.Click} ></div>
                    <div className="Details" >
                        PROFILE: {this.props.Details.profile}<br/>
                        NAME: {this.props.Details.name}<br/>
                        PLACE: {this.props.Details.place}<br/>
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