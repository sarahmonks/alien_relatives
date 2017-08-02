import React from 'react';


import ReactDOM from 'react-dom';


import AppContainer from './containers/AppContainer';


import registerServiceWorker from './registerServiceWorker';

import './css/main.css';
import './css/font-awesome.css';

ReactDOM.render(<AppContainer />, document.getElementById('root'));


registerServiceWorker.unregister;
