import React from 'react';
import ReactDOM from 'react-dom';
import FeedActivityList from './FeedActivityList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FeedActivityList />, div);
});
