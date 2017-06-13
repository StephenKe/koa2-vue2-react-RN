/**
 * Created by sinowinner on 17/6/13.
 */
import http from '../redux/fecthData'

function ajax(url) {
    http.dispatch({ type: url });
    const data = http.getState();
    return data;
}

export default ajax;