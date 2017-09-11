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
        case 4:
            return 4;
        case 5:
            return 5;
        case 6:
            return 6;
        default:
            return state;
    }
};

let store = createStore(matcher);

export default store;