import React from 'react';
import ReactDOM from 'react-dom';
import ActivityCard from './ActivityCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const activity = {
    id: '123',
    actor: 'tester',
    verb: 'message',
    object: 'the object'
  };
  ReactDOM.render(<ActivityCard key={activity.id} activity={activity} />, div);
});
