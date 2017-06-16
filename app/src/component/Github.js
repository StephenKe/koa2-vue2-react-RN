import React from 'react';
import ajax from '../utils/ajax';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { zh_CN, en_US } from '../config/lang/lang';
import storeData from '../redux/StoreData';

let email = ajax('/api/email');

const Github = () => (
    <IntlProvider locale="en" messages={storeData.getState()}>
        <div>
            <h2>
                <FormattedMessage
                    id='github'
                    description='github'
                    defaultMessage='no data'
                />
            </h2>
            <h2>
                <FormattedMessage
                    id='server'
                    description='server'
                    defaultMessage='no data'
                />{email}
            </h2>
        </div>
    </IntlProvider>
)

export default Github;
