import React, { Component } from 'react';
import './FeedActivityList.css';
import ActivityCard from '../ActivityCard/ActivityCard';

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
      process.env.REACT_APP_STREAM_APP_TOKEN,
      null,
      process.env.REACT_APP_STREAM_APP_ID
    );
    var feed = client.feed(
      process.env.REACT_APP_STREAM_FEED_GROUP,
      process.env.REACT_APP_STREAM_FEED_ID,
      process.env.REACT_APP_STREAM_FEED_TOKEN
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
              <ActivityCard
                key={activity.id}
                activity={activity}>
              </ActivityCard>
            )}
          </ul>
        </div>
      </div>;
  }
}

export default FeedActivityList;
