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
        this.state = {show: false, download: false, email: 'test', myResume: 'MY RESUME', buttonContent: '中文', lang: en_US};

        // This binding is necessary to make `this` work in the callback
        this.openModal = this.openModal.bind(this);
        this.openDownload = this.openDownload.bind(this);
        this.langSwitch = this.langSwitch.bind(this);
    };
    openModal () {
        this.setState({ show: true});
    };
    openDownload () {
        this.setState({ download: true});
    };
    langSwitch () {
        storeData.dispatch({ type: this.state.buttonContent });
        this.setState({ buttonContent: this.state.buttonContent === 'English' ? '中文' : 'English' });
        this.setState({ lang: this.state.buttonContent === 'English' ? en_US : zh_CN });
        this.setState({ myResume: this.state.myResume === 'MY RESUME' ? '我的简历' : 'MY RESUME' });
    };
    render() {
        let close = () => this.setState({ show: false});
        let closeDownload = () => this.setState({ download: false});
        return (
            <IntlProvider locale="en" messages={this.state.lang}>
                <div className="App">
                    <div className="App-header">
                        <p>
                            <FormattedMessage
                                id='author'
                                description='author'
                                defaultMessage='no data'
                            />
                        </p>
                        <img src={logo} className="App-logo" alt="logo" onClick={ this.openDownload }/>
                        <p className="title">
                            <FormattedMessage
                                id='title'
                                description='title'
                                defaultMessage='no data'
                            />
                        </p>
                        <Btn className="Nav-icon" onClick={ this.openModal }><Glyphicon glyph="align-justify" /></Btn>
                        <Button style="default" content={ this.state.buttonContent } pclick={ this.langSwitch }></Button>
                    </div>
                    <div className="App-body">
                        <div className="bg-container"></div>
                        <Modal
                            show={this.state.download}
                            onHide={closeDownload}
                            container={this}
                            aria-labelledby="contained-modal-title"
                        >
                            <Modal.Body>
                                <div>{this.state.myResume}</div>
                                <a href="" className="download-btn"><Btn>中文<Glyphicon glyph="download" /></Btn></a>
                                <a href=""><Btn>English<Glyphicon glyph="download" /></Btn></a>
                            </Modal.Body>
                        </Modal>
                        <Router>
                            <div className="route-container">
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
                </div>
            </IntlProvider>
    );
    }
}

export default App;