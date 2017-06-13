/**
 * Created by sinowinner on 17/6/12.
 */
import { createStore } from 'redux';

function matcher(state, action) {
    switch (action.type) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 3:
            return 3;
        default:
            return state;
    }
};

let store = createStore(matcher);

export default store;