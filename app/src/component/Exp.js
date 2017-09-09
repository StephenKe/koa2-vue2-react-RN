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
                  panelGroup: [{
                      panel: <label><FormattedMessage id='cyjService' description='cyjService' defaultMessage='no data'/></label>,
                      content: [
                          [<FormattedMessage id='desc' description='desc' defaultMessage='no data'/>, <FormattedMessage id='cyjServiceDesc' description='cyjServiceDesc' defaultMessage='no data'/>],
                          [<FormattedMessage id='duty' description='duty' defaultMessage='no data'/>, <FormattedMessage id='cyjServiceDuty' description='cyjServiceDuty' defaultMessage='no data'/>],
                          [<FormattedMessage id='tech' description='tech' defaultMessage='no data'/>, <FormattedMessage id='cyjServiceTech' description='cyjServiceTech' defaultMessage='no data'/>]]
                  }, {
                      panel: <label><FormattedMessage id='cyjWechat' description='cyjWechat' defaultMessage='no data'/></label>,
                      content: [
                          [<FormattedMessage id='desc' description='desc' defaultMessage='no data'/>, <FormattedMessage id='cyjWechatDesc' description='cyjWechatDesc' defaultMessage='no data'/>],
                          [<FormattedMessage id='duty' description='duty' defaultMessage='no data'/>, <FormattedMessage id='cyjWechatDuty' description='cyjWechatDuty' defaultMessage='no data'/>],
                          [<FormattedMessage id='tech' description='tech' defaultMessage='no data'/>, <FormattedMessage id='cyjWechatTech' description='cyjWechatTech' defaultMessage='no data'/>]]
                  }, {
                      panel: <label><FormattedMessage id='rentService' description='rentService' defaultMessage='no data'/></label>,
                      content: [
                          [<FormattedMessage id='desc' description='desc' defaultMessage='no data'/>, <FormattedMessage id='rentServiceDesc' description='rentServiceDesc' defaultMessage='no data'/>],
                          [<FormattedMessage id='duty' description='duty' defaultMessage='no data'/>, <FormattedMessage id='rentServiceDuty' description='rentServiceDuty' defaultMessage='no data'/>],
                          [<FormattedMessage id='tech' description='tech' defaultMessage='no data'/>, <FormattedMessage id='rentServiceTech' description='rentServiceTech' defaultMessage='no data'/>]]
                  }, {
                      panel: <label><FormattedMessage id='rentWechat' description='rentWechat' defaultMessage='no data'/></label>,
                      content: [
                          [<FormattedMessage id='desc' description='desc' defaultMessage='no data'/>, <FormattedMessage id='rentWechatDesc' description='rentWechatDesc' defaultMessage='no data'/>],
                          [<FormattedMessage id='duty' description='duty' defaultMessage='no data'/>, <FormattedMessage id='rentWechatDuty' description='rentWechatDuty' defaultMessage='no data'/>],
                          [<FormattedMessage id='tech' description='tech' defaultMessage='no data'/>, <FormattedMessage id='rentWechatTech' description='rentWechatTech' defaultMessage='no data'/>]]
                  }]
                },
                { label: <FormattedMessage id='miao' description='miao' defaultMessage='no data'/>,
                    desc: ['2015/8 -- 2016/11',
                        <FormattedMessage id='miaoDesc1' description='miaoDesc1' defaultMessage='no data'/>,
                        <FormattedMessage id='miaoDesc2' description='miaoDesc2' defaultMessage='no data'/>],
                    panelGroup: [{
                        panel: <label><FormattedMessage id='miaoPc' description='miaoPc' defaultMessage='no data'/></label>,
                        content: [
                            [<FormattedMessage id='desc' description='desc' defaultMessage='no data'/>, <FormattedMessage id='miaoPcDesc' description='miaoPcDesc' defaultMessage='no data'/>],
                            [<FormattedMessage id='duty' description='duty' defaultMessage='no data'/>, <FormattedMessage id='miaoPcDuty' description='miaoPcDuty' defaultMessage='no data'/>],
                            [<FormattedMessage id='tech' description='tech' defaultMessage='no data'/>, <FormattedMessage id='miaoPcTech' description='miaoPcTech' defaultMessage='no data'/>]]
                    }, {
                        panel: <label><FormattedMessage id='miaoMobile' description='miaoMobile' defaultMessage='no data'/></label>,
                        content: [
                            [<FormattedMessage id='desc' description='desc' defaultMessage='no data'/>, <FormattedMessage id='miaoMobileDesc' description='miaoMobileDesc' defaultMessage='no data'/>],
                            [<FormattedMessage id='duty' description='duty' defaultMessage='no data'/>, <FormattedMessage id='miaoMobileDuty' description='miaoMobileDuty' defaultMessage='no data'/>],
                            [<FormattedMessage id='tech' description='tech' defaultMessage='no data'/>, <FormattedMessage id='miaoMobileTech' description='miaoMobileTech' defaultMessage='no data'/>]]
                    }]
                },
                { label: <FormattedMessage id='souyun' description='souyun' defaultMessage='no data'/>,
                    desc: ['2014/8 -- 2015/6',
                        <FormattedMessage id='souyunDesc1' description='souyunDesc1' defaultMessage='no data'/>,
                        <FormattedMessage id='souyunDesc2' description='souyunDesc2' defaultMessage='no data'/>],
                    panelGroup: [{
                        panel: <label><FormattedMessage id='souyunPc' description='souyunPc' defaultMessage='no data'/></label>,
                        content: [
                            [<FormattedMessage id='desc' description='desc' defaultMessage='no data'/>, <FormattedMessage id='souyunPcDesc' description='souyunPcDesc' defaultMessage='no data'/>],
                            [<FormattedMessage id='duty' description='duty' defaultMessage='no data'/>, <FormattedMessage id='souyunPcDuty' description='souyunPcDuty' defaultMessage='no data'/>],
                            [<FormattedMessage id='tech' description='tech' defaultMessage='no data'/>, <FormattedMessage id='souyunPcTech' description='souyunPcTech' defaultMessage='no data'/>]]
                    }]
                }
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
