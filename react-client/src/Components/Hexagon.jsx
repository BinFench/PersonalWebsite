import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Hexagon extends Component {
    render() {
        return (
            <article>
                <figure>
                    <Link to={this.props.link}>
                        <h2>{this.props.header}</h2>
                        <p>{this.props.text}</p>
                    </Link>
                </figure>
                <img src={this.props.source}/>
            </article>
        )
    }
}

export default Hexagon;