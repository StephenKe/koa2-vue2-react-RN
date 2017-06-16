import React from 'react';
import ajax from '../utils/ajax';
import { IntlProvider, FormattedMessage } from 'react-intl';
import storeData from '../redux/langSwitch';

let name = ajax('/api/name');

const Zhihu = () => (
    <IntlProvider locale="en" messages={storeData.getState()}>
        <div>
            <h2>
                <FormattedMessage
                    id='zhihu'
                    description='zhihu'
                    defaultMessage='no data'
                />
            </h2>
            <h2>
                <FormattedMessage
                    id='server'
                    description='server'
                    defaultMessage='no data'
                />{name}
            </h2>
        </div>
    </IntlProvider>
)

export default Zhihu;
