/**
 * Created by sinowinner on 17/6/8.
 */
import React, { Component } from 'react';
import * as bs from 'react-bootstrap';
import '../css/Panel.css';

class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {activeKey: '0'};
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
    headerClick (e) {
        if (e.target.getAttribute('class')) {
            let classArr = e.target.getAttribute('class').split(' ');
            let targetUrl = classArr.find((val) => {
                return ~val.indexOf('.com') ? val : '';
            });
            targetUrl && window.open(targetUrl);
        }
    };
    render () {
        const layout = this.props.layout;
        const items = this.props.items;
        const map = new Map();
        const _this = this;
        let eventKey = -1;
        let handlePanelGroup = function (panelGroups) {
            let panelGroupArr = [];
            for (let j in panelGroups) {
                panelGroupArr.push(createPanelGroup(panelGroups[j], j));
                if (Number(j) === panelGroups.length - 1) {
                    return panelGroupArr.concat();
                }
            }
        };
        let createPanelGroup = function (panelGroup, j) {
            return <bs.PanelGroup activeKey={_this.state.activeKey} onSelect={_this.handleSelect} accordion key={j}>
                <bs.Panel onClick={_this.headerClick} header={panelGroup.panel} eventKey={(++eventKey).toString()}>
                    <bs.Table striped bordered condensed hover responsive>
                    <tbody>
                    {panelGroup.content && panelGroup.content.map((content1, i) => <tr key={i}>
                    <td>{content1[0]}</td>
                    <td className="td1">{content1[1]}</td>
                    </tr>)}
                    </tbody>
                    </bs.Table>
                </bs.Panel>
            </bs.PanelGroup>
        };
        map.set('input-group', items.map((item, i) =>
            <bs.InputGroup key={i}>
                <bs.InputGroup.Addon>{item.key}</bs.InputGroup.Addon>
                <bs.InputGroup.Addon>{item.value}</bs.InputGroup.Addon>
            </bs.InputGroup>
        ));
        map.set('Thumbnail', items.map((item, i) =>
            <bs.Thumbnail src={item.src} key={i}>
                <h3>{item.label}</h3>
                { item.desc && item.desc.map((desc, i) => <p key={i}>{desc}</p>) }
                { item.panelGroup && handlePanelGroup(item.panelGroup) }
                {/*{item.panel1 && <bs.PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>*/}
                    {/*{item.panel1 && <bs.Panel header={item.panel1} eventKey="1">*/}
                        {/*{item.content1 && <bs.Table striped bordered condensed hover responsive>*/}
                            {/*<tbody>*/}
                            {/*{item.content1 && item.content1.map((content1, i) => <tr key={i}>*/}
                                {/*<td>{content1[0]}</td>*/}
                                {/*<td className="td1">{content1[1]}</td>*/}
                            {/*</tr>)}*/}
                            {/*</tbody>*/}
                        {/*</bs.Table>}*/}
                    {/*</bs.Panel>}*/}
                {/*</bs.PanelGroup>}*/}
            </bs.Thumbnail>
        ));
        map.set('progress', items.map((item, i) =>
            <div key={i}>
                <h3>{item.label}</h3>
                <bs.ProgressBar active bsStyle="danger" now={item.progress} label={`${item.progress}%`} />
            </div>
        ));
        map.set('Carousel', <bs.Carousel>
            {items.map((item, i) => <bs.Carousel.Item key={i}>
                <img className="Carousel-image" src={item}/>
            </bs.Carousel.Item>)}
        </bs.Carousel>);
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
