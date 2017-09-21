import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import $ from 'jquery';

import FeedActivityList from './components/FeedActivityList/FeedActivityList';

class App extends Component {
  componentDidMount () {
    $(document).foundation();
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="grid-container text-center">
          <div className="callout">
            <ul id="dropdown-menu" className="dropdown menu" data-dropdown-menu>
              <li>
                <a>Dropdown for links</a>
                <ul className="menu">
                  <li><a href="https://facebook.github.io/react/" target="_blank" rel="noopener noreferrer">React</a></li>
                  <li><a href="https://github.com/facebookincubator/create-react-app" target="_blank" rel="noopener noreferrer">create-react-app</a></li>
                  <li><a href="https://foundation.zurb.com/" target="_blank" rel="noopener noreferrer">Foundation</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="callout">
            <FeedActivityList></FeedActivityList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
