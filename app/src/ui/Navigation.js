/**
 * Created by sinowinner on 17/6/8.
 */
import React, { Component } from 'react';
import { Nav as Nav1, NavItem } from 'react-bootstrap';
import '../css/Navigation.css';
import { Link } from 'react-router-dom';
import store from '../redux/Navigation';
import { IntlProvider, FormattedMessage } from 'react-intl';

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
            <IntlProvider locale="en" messages={this.props.lang}>
                <Nav1 bsStyle="pills" stacked activeKey={this.state.atKey} onSelect={this.handleSelect} className="pills">
                    {/*<NavItem eventKey={1}><Link to="/github">*/}
                        {/*<FormattedMessage*/}
                            {/*id='github'*/}
                            {/*description='github'*/}
                            {/*defaultMessage='no data'*/}
                        {/*/>*/}
                    {/*</Link></NavItem>*/}
                    {/*<NavItem eventKey={2}><Link to="/jianshu">*/}
                        {/*<FormattedMessage*/}
                            {/*id='jianshu'*/}
                            {/*description='jianshu'*/}
                            {/*defaultMessage='no data'*/}
                        {/*/>*/}
                    {/*</Link></NavItem>*/}
                    {/*<NavItem eventKey={3}><Link to="/zhihu">*/}
                        {/*<FormattedMessage*/}
                            {/*id='zhihu'*/}
                            {/*description='zhihu'*/}
                            {/*defaultMessage='no data'*/}
                        {/*/>*/}
                    {/*</Link></NavItem>*/}
                    <NavItem eventKey={1}><Link to="/base">
                        <FormattedMessage
                            id='base'
                            description='base'
                            defaultMessage='no data'
                        />
                    </Link></NavItem>
                    <NavItem eventKey={2}><Link to="/certificate">
                        <FormattedMessage
                            id='certificate'
                            description='certificate'
                            defaultMessage='no data'
                        />
                    </Link></NavItem>
                </Nav1>
            </IntlProvider>
        )
    }
}

export default Nav;
