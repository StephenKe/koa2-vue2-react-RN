/**
 * Created by sinowinner on 17/6/9.
 */
import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../ui/Navigation'
import { Button, Glyphicon, Modal } from 'react-bootstrap'
import myRoutes from '../route';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
        <route.component {...props} routes={route.routes}/>
    )}/>
);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {show: false, email: 'test'};

        // This binding is necessary to make `this` work in the callback
        this.openModal = this.openModal.bind(this);
    };
    openModal () {
        this.setState({ show: true});
    };
    render() {
        let close = () => this.setState({ show: false});
        return (
            <div className="App">
                <div className="App-header">
                    <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
                    <h2>Stephen.K</h2>
                    <Button className="Nav-icon" onClick={ this.openModal }><Glyphicon glyph="align-justify" /></Button>
                </div>
                <Router>
                    <div>
                        <Modal
                            show={this.state.show}
                            onHide={close}
                            container={this}
                            aria-labelledby="contained-modal-title"
                        >
                            {/*<Modal.Header closeButton>*/}
                            {/*<Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>*/}
                            {/*</Modal.Header>*/}
                            <Modal.Body>
                                <Nav pfn={close}></Nav>
                            </Modal.Body>
                            {/*<Modal.Footer>*/}
                            {/*<Button onClick={close}>Close</Button>*/}
                            {/*</Modal.Footer>*/}
                        </Modal>
                        {myRoutes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route}/>
                        ))}
                    </div>
                </Router>
            </div>
    );
    }
}

export default App;