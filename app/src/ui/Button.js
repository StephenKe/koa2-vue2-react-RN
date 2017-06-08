/**
 * Created by sinowinner on 17/6/8.
 */
import React, { Component } from 'react';
import * as bootstrap from 'react-bootstrap';

class Button extends Component {
    render () {
        return (
            <div className="Button">
            <bootstrap.Button bsStyle="danger">danger</bootstrap.Button>
            </div>
        )
    }
}

export default Button;
