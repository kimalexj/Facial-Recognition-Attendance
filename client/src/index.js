import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

document.body.style = 'background: #36CEB9;';
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
