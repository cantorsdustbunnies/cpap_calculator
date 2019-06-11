import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// change the method to register() if you want this to be a real-boy PWA.
serviceWorker.unregister();
