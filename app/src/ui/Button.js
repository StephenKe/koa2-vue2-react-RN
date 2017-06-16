/**
 * Created by sinowinner on 17/6/8.
 */
import React, { Component } from 'react';
import * as bs from 'react-bootstrap';

class Button extends Component {
    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    };
    handleClick () {
      this.props.pclick();
    };
    render () {
        return (
            <div className="Button">
            <bs.Button active onClick={ this.handleClick } bsStyle={ this.props.style }>{ this.props.content }</bs.Button>
            </div>
        )
    }
}

export default Button;
