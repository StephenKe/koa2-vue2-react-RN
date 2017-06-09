import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
