import React, { Component } from 'react';

import config from './../../config/';
import Review from './Review';
import CardStack from './../common/CardStack';

const { reviewsEndpoint } = config.yelp;

export default class Yelp extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      reviewsLoading: true
    };
  }

  componentWillMount() {
    fetch(reviewsEndpoint)
      .then(r => r.json())
      .then(reviews => {
        this.setState({
          reviews,
          reviewsLoading: false
        });
      });
  }

  render() {
    if (!this.state.reviewsLoading) {
      return <CardStack>{this.state.reviews.map(review => <Review key={review.id} review={review} />)}</CardStack>;
    }

    return (
      <div
        style={{
          height: '300px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <span>Loading Reviews</span>
      </div>
    );
  }
}
