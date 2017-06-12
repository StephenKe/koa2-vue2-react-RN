/**
 * Created by sinowinner on 17/6/8.
 */
import React, { Component } from 'react';
import { Nav as Nav1, NavItem } from 'react-bootstrap';
import '../css/Navigation.css';
import { Link } from 'react-router-dom';
import store from '../redux/Navigation';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = ({atKey: store.getState()});

        // This binding is necessary to make `this` work in the callback
        this.handleSelect = this.handleSelect.bind(this);
    };
    handleSelect (e) {
        this.setState({atKey: e});
        store.dispatch({ type: e });
        this.props.pfn();
    };
    render () {
        return (
            <Nav1 bsStyle="pills" stacked activeKey={this.state.atKey} onSelect={this.handleSelect} className="pills">
                <NavItem eventKey={1}><Link to="/github">github</Link></NavItem>
                <NavItem eventKey={2}><Link to="/jianshu">简书</Link></NavItem>
                <NavItem eventKey={3}><Link to="/zhihu">知乎</Link></NavItem>
            </Nav1>
        )
    }
}

export default Nav;
