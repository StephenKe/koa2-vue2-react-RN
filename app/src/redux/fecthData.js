/**
 * Created by sinowinner on 17/6/12.
 */
import { createStore } from 'redux';
import $ from 'jquery';

let reqUrl = Number(window.location.port) === 80 ? '119.23.255.54:80' : 'http://localhost:8002';

function router(state = 'initialData', action) {
    switch (action.type) {
        default:
            $.ajax({
                url: reqUrl + action.type,
                dataType: 'json',
                async: false,
                cache: false,
                success: function(data) {
                    if (data.readyState === 4) {
                        state = data.responseText;
                    };
                },
                error: function(data) {
                    if (data.readyState === 4) {
                        state = data.responseText;
                    };
                }
            });
            return state;
    }
};

let http = createStore(router);

export default http;