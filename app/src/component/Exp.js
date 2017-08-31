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
                  panel1: <label><FormattedMessage id='cyjService' description='cyjService' defaultMessage='no data'/></label>,
                  content1: [
                             [<FormattedMessage id='desc' description='desc' defaultMessage='no data'/>, <FormattedMessage id='cyjServiceDesc' description='cyjServiceDesc' defaultMessage='no data'/>],
                             [<FormattedMessage id='duty' description='duty' defaultMessage='no data'/>, <FormattedMessage id='cyjServiceDuty' description='cyjServiceDuty' defaultMessage='no data'/>],
                             [<FormattedMessage id='tech' description='tech' defaultMessage='no data'/>, <FormattedMessage id='cyjServiceTech' description='cyjServiceTech' defaultMessage='no data'/>]] }
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
