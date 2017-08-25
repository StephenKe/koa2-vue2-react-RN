import React, { Component } from 'react';
import '../css/Navigation.css';
import { IntlProvider, FormattedMessage } from 'react-intl';
import storeData from '../redux/langSwitch';
import Panel from '../ui/Panel'

class Base extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { label: <FormattedMessage id='en' description='en' defaultMessage='no data'/>,
                  progress: 85 },
                { label: <FormattedMessage id='Cantonese' description='Cantonese' defaultMessage='no data'/>,
                  progress: 90 },
                { label: <FormattedMessage id='Chinese' description='Chinese' defaultMessage='no data'/>,
                    progress: 100 },
                { label: <FormattedMessage id='com' description='com' defaultMessage='no data'/>,
                    progress: 90 },
                { label: <FormattedMessage id='lead' description='lead' defaultMessage='no data'/>,
                    progress: 85 },
                { label: <FormattedMessage id='con' description='con' defaultMessage='no data'/>,
                    progress: 86 }
            ]
        };
        // This binding is necessary to make `this` work in the callback
    };
    render () {
        return (
            <IntlProvider locale="en" messages={storeData.getState()}>
                <div>
                    <Panel title={<FormattedMessage
                        id='skills1'
                        description='skills1'
                        defaultMessage='no data'
                        />}
                           style="danger"
                           layout="progress"
                           items={this.state.items}>
                    </Panel>
                </div>
            </IntlProvider>
        )
    }
}

export default Base;
