import React from 'react';
import ajax from '../utils/ajax';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { zh_CN, en_US } from '../config/lang/lang';
import storeData from '../redux/StoreData';

let color = ajax('/api/color');

const Jianshu = () => (
    <IntlProvider locale="en" messages={storeData.getState()}>
        <div>
            <h2>
                <FormattedMessage
                    id='jianshu'
                    description='jianshu'
                    defaultMessage='no data'
                />
            </h2>
            <h2>
                <FormattedMessage
                    id='server'
                    description='server'
                    defaultMessage='no data'
                />{color}
            </h2>
        </div>
    </IntlProvider>
)

export default Jianshu;
