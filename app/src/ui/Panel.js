/**
 * Created by sinowinner on 17/6/8.
 */
import React, { Component } from 'react';
import * as bs from 'react-bootstrap';
import '../css/Panel.css';
import demo from '../images/demo.png';

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
        const layout = this.props.layout;
        const items = this.props.items;
        const map = new Map();
        map.set('input-group', items.map((item, i) =>
            <bs.InputGroup key={i}>
                <bs.InputGroup.Addon>{item.key}</bs.InputGroup.Addon>
                <bs.InputGroup.Addon>{item.value}</bs.InputGroup.Addon>
            </bs.InputGroup>
        ));
        map.set('Thumbnail', items.map((item, i) =>
            <bs.Thumbnail src={demo} alt="242x200" key={i}>
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                    <bs.Button bsStyle="primary">Button</bs.Button>&nbsp;
                    <bs.Button bsStyle="default">Button</bs.Button>
                </p>
            </bs.Thumbnail>
        ));
        const listItems = map.get(layout);
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
