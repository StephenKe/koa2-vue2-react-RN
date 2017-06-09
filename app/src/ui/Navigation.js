/**
 * Created by sinowinner on 17/6/8.
 */
import React, { Component } from 'react';
import * as bs from 'react-bootstrap'
import '../css/Navigation.css'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import myRoutes from '../route'

const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
        <route.component {...props} routes={route.routes}/>
    )}/>
)

class Nav extends Component {
    render () {
        return (
            <Router>
                <bs.Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
                    <bs.NavItem eventKey="1">
                        <Link to="/github">github</Link>
                    </bs.NavItem>
                    <bs.NavItem eventKey="2" title="Item">知乎</bs.NavItem>
                    <bs.NavItem eventKey="3" disabled>简书</bs.NavItem>
                    <bs.NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
                        <bs.MenuItem eventKey="4.1">Action</bs.MenuItem>
                        <bs.MenuItem eventKey="4.2">Another action</bs.MenuItem>
                        <bs.MenuItem eventKey="4.3">Something else here</bs.MenuItem>
                        <bs.MenuItem divider />
                        <bs.MenuItem eventKey="4.4">Separated link</bs.MenuItem>
                    </bs.NavDropdown>
                    {myRoutes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route}/>
                    ))}
                </bs.Nav>
            </Router>
        )
    }
}

export default Nav;
