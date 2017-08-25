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
                { label: <FormattedMessage id='adonging' description='adonging' defaultMessage='no data'/>,
                  desc: ['2016/12 --',
                         <FormattedMessage id='adongingDesc1' description='adongingDesc1' defaultMessage='no data'/>,
                         <FormattedMessage id='adongingDesc2' description='adongingDesc2' defaultMessage='no data'/>,
                         <FormattedMessage id='adongingDesc3' description='adongingDesc3' defaultMessage='no data'/>],
                  panel1: 'test',
                  content1: ['1', '2']}
            ]
        };
        // This binding is necessary to make `this` work in the callback
    };
    render () {
        return (
            <IntlProvider locale="en" messages={storeData.getState()}>
                <div>
                    <Panel title={<FormattedMessage
                        id='exp'
                        description='exp'
                        defaultMessage='no data'
                        />}
                           style="info"
                           layout="Thumbnail"
                           items={this.state.items}>
                    </Panel>
                </div>
            </IntlProvider>
        )
    }
}

export default Base;
