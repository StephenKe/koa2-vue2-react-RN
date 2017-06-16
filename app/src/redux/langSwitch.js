/**
 * Created by sinowinner on 17/6/12.
 */
import { createStore } from 'redux';
import { zh_CN, en_US } from '../config/lang/lang';

function matcher(state, action) {
    switch (action.type) {
        case '中文':
            return zh_CN;
        case 'English':
            return en_US;
        default:
            return state = en_US;
    }
};

let storeData = createStore(matcher);

export default storeData;