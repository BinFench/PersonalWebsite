import React, { Component } from 'react';
import Hexagon from './Hexagon.jsx'
import projects from './Pictures/coding.jpg'
import resume from './Pictures/webprofile.jpg'
import blog from './Pictures/web-page.jpg'
import contact from './Pictures/email.jpg'

class HomePage extends Component {
    render() {
        return (
            <div id={"HomePage"}>
                <h1 id="HomeBody">Learn About Me,</h1>

                <Hexagon link='/Projects' header='My Portfolio' text='My collection of various projects.' source={projects} />
                <Hexagon link='/Resume' header='My Resume' text='A summary of my professional profile.' source={resume} />
                <Hexagon link='/Blog' header='My Blog' text='A place to collect my thoughts.' source={blog} />
                <Hexagon link='/Contact' header='My Contacts' text='How you can get ahold of me.' source={contact} />

            </div>
        )
    }
}

export default HomePage;