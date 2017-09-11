import React, { Component } from 'react';
import {FormattedMessage } from 'react-intl';
import Panel from '../ui/Panel';
import CYJservice from '../images/CYJ-service.png';
import CYJwechat from '../images/CYJ-wechat.png';
import YDCXservice from '../images/YDCX-service.png';
import YDCXwechat from '../images/YDCX-wechat.png';
import miaozuPC from '../images/miaozu-PC.png';
import miaozuMobile from '../images/miaozu-mobile.png';
import souyun from '../images/souyun.png';

class Base extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [CYJservice, CYJwechat, YDCXservice, YDCXwechat, miaozuPC, miaozuMobile, souyun]
        };
        // This binding is necessary to make `this` work in the callback
    };
    render () {
        return (
            <div>
                <Panel title={<FormattedMessage
                    id='works'
                    description='works'
                    defaultMessage='no data'
                />}
                       style="default"
                       layout="Carousel"
                       items={this.state.items}>
                </Panel>
            </div>
        )
    }
}

export default Base;
