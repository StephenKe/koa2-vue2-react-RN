/**
 * Created by sinowinner on 17/6/8.
 */
import React, { Component } from 'react';
import * as bs from 'react-bootstrap';
import '../css/Panel.css';

class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {activeKey: '1'};
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    };
    handleClick () {
        this.props.pclick();
    };
    handleSelect (activeKey) {
        if (this.state.activeKey === activeKey) {
            this.setState({ activeKey: '' });
            return;
        }
        this.setState({ activeKey: activeKey });
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
            <bs.Thumbnail src={item.src} key={i}>
                <h3>{item.label}</h3>
                { item.desc && item.desc.map((desc) => <p>{desc}</p>) }
                {item.panel1 && <bs.PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>
                    {item.panel1 && <bs.Panel header={item.panel1} eventKey="1">
                        {item.content1 && <bs.Table striped bordered condensed hover>
                            <tbody>
                            <tr>
                                {item.content1 && item.content1.map((content1) => <label>
                                    <td>{content1[0]}</td>
                                    <td>{content1[1]}</td>
                                </label>)}
                            </tr>
                            </tbody>
                        </bs.Table>}
                    </bs.Panel>}
                </bs.PanelGroup>}
            </bs.Thumbnail>
        ));
        map.set('progress', items.map((item, i) =>
            <div key={i}>
                <h3>{item.label}</h3>
                <bs.ProgressBar active bsStyle="danger" now={item.progress} label={`${item.progress}%`} />
            </div>
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
