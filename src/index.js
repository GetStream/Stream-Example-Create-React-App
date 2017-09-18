import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import $ from 'jquery';
window.jQuery = window.$ = $;

// Use require() instead of import to avoid ES6 hoisting
// as $ must be globally accessible when importing Foundation.
require('foundation-sites');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
