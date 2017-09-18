import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import $ from 'jquery';
window.jQuery = window.$ = $;

// Use require() instead of import to avoid ES6 hoisting
// as $ must be globally accessible when importing Foundation.
require('foundation-sites');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
