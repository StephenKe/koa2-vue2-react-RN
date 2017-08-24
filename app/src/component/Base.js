import React, { Component } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import storeData from '../redux/langSwitch';
import Panel from '../ui/Panel'

class Base extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { key: <FormattedMessage id='name' description='name' defaultMessage='no data'/>,
                  value: <FormattedMessage id='nameVal' description='nameVal' defaultMessage='no data'/> },
                { key: <FormattedMessage id='job' description='job' defaultMessage='no data'/>,
                    value: <FormattedMessage id='jobVal' description='jobVal' defaultMessage='no data'/> },
                { key: <FormattedMessage id='exp' description='exp' defaultMessage='no data'/>,
                    value: <FormattedMessage id='expVal' description='expVal' defaultMessage='no data'/> },
                { key: <FormattedMessage id='gender' description='gender' defaultMessage='no data'/>,
                  value: <FormattedMessage id='genderVal' description='genderVal' defaultMessage='no data'/> },
                { key: <FormattedMessage id='birth' description='birth' defaultMessage='no data'/>,
                    value: <FormattedMessage id='birthVal' description='birthVal' defaultMessage='no data'/> },
                { key: <FormattedMessage id='major' description='major' defaultMessage='no data'/>,
                    value: <FormattedMessage id='majorVal' description='majorVal' defaultMessage='no data'/> },
                { key: <FormattedMessage id='college' description='college' defaultMessage='no data'/>,
                    value: <FormattedMessage id='collegeVal' description='collegeVal' defaultMessage='no data'/> },
                { key: <FormattedMessage id='address' description='address' defaultMessage='no data'/>,
                    value: <FormattedMessage id='addressVal' description='addressVal' defaultMessage='no data'/> },
                { key: <FormattedMessage id='native' description='native' defaultMessage='no data'/>,
                    value: <FormattedMessage id='nativeVal' description='nativeVal' defaultMessage='no data'/> },
                { key: <FormattedMessage id='phone' description='phone' defaultMessage='no data'/>,
                    value: <FormattedMessage id='phoneVal' description='phoneVal' defaultMessage='no data'/> },
                { key: <FormattedMessage id='mail' description='mail' defaultMessage='no data'/>,
                    value: <FormattedMessage id='mailVal' description='mailVal' defaultMessage='no data'/> }
            ]
        };
        // This binding is necessary to make `this` work in the callback
    };
    render () {
        return (
            <IntlProvider locale="en" messages={storeData.getState()}>
                <div>
                    <Panel title={<FormattedMessage
                        id='base'
                        description='base'
                        defaultMessage='no data'
                        />}
                           style="primary"
                           layout="input-group"
                           items={this.state.items}></Panel>
                </div>
            </IntlProvider>
        )
    }
}

export default Base;
