/**
 * Created by sinowinner on 17/6/8.
 */
import React, { Component } from 'react';
import * as bs from 'react-bootstrap';

class Button extends Component {
    render () {
        return (
            <div className="Button">
            <bs.Button bsStyle="danger">danger</bs.Button>
            </div>
        )
    }
}

export default Button;
