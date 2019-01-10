import React, { Component } from 'react';
import profile from './Pictures/Profile.jpg'

class Greeting extends Component {
    render() {
        return (
            <div id="Greeting">
                <div id="empty"></div>
                <h1 id="GreetingText"><b>Hello.</b></h1>
                <p id="GreetingBody">And welcome to my site.</p>
                <img id="Profile" src={profile}></img>
            </div>
        )
    }
}

export default Greeting;