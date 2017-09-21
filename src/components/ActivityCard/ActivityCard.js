import React, { Component } from 'react';
import './ActivityCard.css';

class ActivityCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activity: props.activity
    }
  }

  componentDidMount() {
    this.activity = {};
  }

  render() {
    return <div className="medium-12 columns">
        <div className="callout">
          <div><strong>{ this.state.activity.id }</strong></div>
          <div><em>{ this.state.activity.actor }: { this.state.activity.verb }</em></div>
          <p>{ this.state.activity.object }</p>
        </div>
      </div>;
  }
}

export default ActivityCard;
