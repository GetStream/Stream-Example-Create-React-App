import React, { Component } from 'react';
import './FeedActivity.css';

class FeedActivity extends Component {
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
          <div><strong>{ this.state.activity.summary }</strong></div>
          <div><em>Activity ID:</em>{ this.state.activity.id } | <em>Actor:</em> { this.state.activity.actor } | <em>verb:</em> { this.state.activity.verb }</div>
        </div>
      </div>;
  }
}

export default FeedActivity;
