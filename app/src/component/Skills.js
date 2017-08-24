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
                { label: <FormattedMessage id='develop' description='develop' defaultMessage='no data'/>,
                  progress: 90 },
                { label: <FormattedMessage id='html' description='html' defaultMessage='no data'/>,
                  progress: 95 },
                { label: <FormattedMessage id='css' description='css' defaultMessage='no data'/>,
                    progress: 95 },
                { label: <FormattedMessage id='js' description='js' defaultMessage='no data'/>,
                    progress: 90 },
                { label: <FormattedMessage id='ajax' description='ajax' defaultMessage='no data'/>,
                    progress: 95 },
                { label: <FormattedMessage id='jq' description='jq' defaultMessage='no data'/>,
                    progress: 90 },
                { label: <FormattedMessage id='debug' description='debug' defaultMessage='no data'/>,
                    progress: 90 },
                { label: <FormattedMessage id='layout' description='layout' defaultMessage='no data'/>,
                    progress: 85 },
                { label: <FormattedMessage id='node' description='node' defaultMessage='no data'/>,
                    progress: 60 },
                { label: <FormattedMessage id='express' description='express' defaultMessage='no data'/>,
                    progress: 60 },
                { label: <FormattedMessage id='koa' description='koa' defaultMessage='no data'/>,
                    progress: 60 },
                { label: <FormattedMessage id='code' description='code' defaultMessage='no data'/>,
                    progress: 95 },
                { label: <FormattedMessage id='wechat' description='wechat' defaultMessage='no data'/>,
                    progress: 95 },
                { label: <FormattedMessage id='vue' description='vue' defaultMessage='no data'/>,
                    progress: 95 },
                { label: <FormattedMessage id='react' description='react' defaultMessage='no data'/>,
                    progress: 85 },
                { label: <FormattedMessage id='angular' description='angular' defaultMessage='no data'/>,
                    progress: 90 },
                { label: <FormattedMessage id='libraryPlugin' description='libraryPlugin' defaultMessage='no data'/>,
                    progress: 90 },
                { label: <FormattedMessage id='module' description='module' defaultMessage='no data'/>,
                    progress: 85 },
                { label: <FormattedMessage id='chip' description='chip' defaultMessage='no data'/>,
                    progress: 70 },
                { label: <FormattedMessage id='c' description='c' defaultMessage='no data'/>,
                    progress: 70 },
                { label: <FormattedMessage id='matlab' description='matlab' defaultMessage='no data'/>,
                    progress: 65 },
                { label: <FormattedMessage id='Altiumdesigner' description='Altiumdesigner' defaultMessage='no data'/>,
                    progress: 65 }
            ]
        };
        // This binding is necessary to make `this` work in the callback
    };
    render () {
        return (
            <IntlProvider locale="en" messages={storeData.getState()}>
                <div>
                    <Panel title={<FormattedMessage
                        id='skills'
                        description='skills'
                        defaultMessage='no data'
                        />}
                           style="warning"
                           layout="progress"
                           items={this.state.items}>
                    </Panel>
                </div>
            </IntlProvider>
        )
    }
}

export default Base;
