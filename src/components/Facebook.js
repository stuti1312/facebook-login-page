import React, { Component } from 'react'
import FacebookLoginBtn from 'react-facebook-login'

export class Facebook extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             auth: false,
             name: '',
             picture: ''
        }
    }
    
    clickHandler = () => {
        console.log('facebook button clicked')
    }

    responseFacebook = (response) => {
        console.log(response);
        this.setState({
            auth: true,
            name: response.name,
            picture: response.picture.data.url
        })
    }
    render() {
        let facebookData;

        this.state.auth ?
            facebookData = (
                <div>
                    <div className="Profile">
                    <img src={this.state.picture} alt={this.state.name}/>
                    </div>
                    <h3> Welcome {this.state.name} </h3>
                </div>
            ) : 
            facebookData = (
                <FacebookLoginBtn
                    appId="346525540030696"
                    autoLoad={true}
                    fields="name,picture"
                    onClick={this.clickHandler}
                    callback={this.responseFacebook}
                />
            )

        return (
            <div>
                {facebookData}
            </div>
        )
    }
}

export default Facebook
