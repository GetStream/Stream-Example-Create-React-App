import React, { Component } from 'react';
import './FeedActivityList.css';
import FeedActivity from '../FeedActivity/FeedActivity';

import * as stream from 'getstream';

class FeedActivityList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activities: []
    }
  }

  componentDidMount() {
    this.activities = [];

    var client = stream.connect(
      process.env.REACT_APP_STREAM_APP_KEY,
      null,
      process.env.REACT_APP_STREAM_APP_ID
    );
    var feed = client.feed(
      process.env.REACT_APP_STREAM_FEED_GROUP,
      process.env.REACT_APP_STREAM_FEED_ID,
      process.env.REACT_APP_STREAM_FEED_READ_ONLY_TOKEN
    );
    feed.get().then(response => {
      this.setState({ activities: response['results'] });
    });
  }

  render() {
    return <div>
        <h1>Feed</h1>
        <div>
          <ul>
            {this.state.activities.map(activity =>
              <FeedActivity
                key={activity.id}
                activity={activity}>
              </FeedActivity>
            )}
          </ul>
        </div>
      </div>;
  }
}

export default FeedActivityList;
