import React, { Component } from 'react';
import '../css/Navigation.css';
import { IntlProvider, FormattedMessage } from 'react-intl';
import storeData from '../redux/langSwitch';
import Panel from '../ui/Panel'
import noPicture from '../images/no-picture.png';
import fanThree from '../images/fan-three.png';
import degree from '../images/degree.png';

class Base extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { label: <FormattedMessage id='degree' description='degree' defaultMessage='no data'/>,
                  src: degree,
                  desc: [<FormattedMessage id='degreeDesc' description='degreeDesc' defaultMessage='no data'/>] },
                { label: <FormattedMessage id='CET4' description='CET4' defaultMessage='no data'/>,
                  src: noPicture,
                  desc: [<FormattedMessage id='CET4desc' description='CET4desc' defaultMessage='no data'/>] },
                { label: <FormattedMessage id='fan' description='fan' defaultMessage='no data'/>,
                  src: fanThree,
                  desc: [<FormattedMessage id='fanDesc' description='fanDesc' defaultMessage='no data'/>] }
            ]
        };
        // This binding is necessary to make `this` work in the callback
    };
    render () {
        return (
            <IntlProvider locale="en" messages={storeData.getState()}>
                <div>
                    <Panel title={<FormattedMessage
                        id='certificate'
                        description='certificate'
                        defaultMessage='no data'
                        />}
                           style="success"
                           layout="Thumbnail"
                           items={this.state.items}>
                    </Panel>
                </div>
            </IntlProvider>
        )
    }
}

export default Base;
