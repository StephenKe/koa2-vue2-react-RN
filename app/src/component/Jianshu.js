import React from 'react';
import ajax from '../utils/ajax';
import { IntlProvider, FormattedMessage } from 'react-intl';
import storeData from '../redux/langSwitch';

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
