/**
 * Created by sinowinner on 17/6/9.
 */
import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../ui/Navigation'
import Button from '../ui/Button'
import { Button as Btn, Glyphicon, Modal } from 'react-bootstrap'
import myRoutes from '../route';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { zh_CN, en_US } from '../config/lang/lang';
import storeData from '../redux/langSwitch';

const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
        <route.component {...props} routes={route.routes}/>
    )}/>
);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {show: false, email: 'test', buttonContent: '中文', lang: en_US};

        // This binding is necessary to make `this` work in the callback
        this.openModal = this.openModal.bind(this);
        this.langSwitch = this.langSwitch.bind(this);
    };
    openModal () {
        this.setState({ show: true});
    };
    langSwitch () {
        storeData.dispatch({ type: this.state.buttonContent });
        this.state.buttonContent = this.state.buttonContent === 'English' ? '中文' : 'English';
        this.state.lang = this.state.buttonContent === 'English' ? zh_CN : en_US;
        this.setState({ buttonContent: this.state.buttonContent, lang: this.state.lang });
    };
    render() {
        let close = () => this.setState({ show: false});
        return (
            <IntlProvider locale="en" messages={this.state.lang}>
                <div className="App">
                    <div className="App-header">
                        <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
                        <h2>
                            <FormattedMessage
                                id='author'
                                description='author name'
                                defaultMessage='no data'
                            />
                        </h2>
                        <Btn className="Nav-icon" onClick={ this.openModal }><Glyphicon glyph="align-justify" /></Btn>
                        <Button style="default" content={ this.state.buttonContent } pclick={ this.langSwitch }></Button>
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
                                    <Nav pfn={close} lang={this.state.lang}></Nav>
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
            </IntlProvider>
    );
    }
}

export default App;