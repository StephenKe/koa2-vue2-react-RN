/**
 * Created by sinowinner on 17/6/8.
 */
import React, { Component } from 'react';
import * as bs from 'react-bootstrap';
import '../css/Panel.css';

class Panel extends Component {
    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    };
    handleClick () {
      this.props.pclick();
    };
    render () {
        const items = this.props.items;
        const listItems = items.map((item, i) =>
            <bs.InputGroup key={i}>
                <bs.InputGroup.Addon>{item.key}</bs.InputGroup.Addon>
                <bs.InputGroup.Addon>{item.value}</bs.InputGroup.Addon>
            </bs.InputGroup>
        );
        return (
            <div className="Panel">
                <bs.Panel header={this.props.title} bsStyle={this.props.style}>
                    <form>
                        <bs.FormGroup>
                            {listItems}
                        </bs.FormGroup>
                    </form>
                </bs.Panel>
            </div>
        )
    }
}

export default Panel;
