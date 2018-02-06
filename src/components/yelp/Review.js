import React from 'react';
import PropTypes from 'prop-types';
import Card from './../common/Card';
import CardSection from './../common/CardSection';

const styles = {
  authorName: {
    marginBottom: 0,
    fontSize: '14px',
    fontStyle: 'italic'
  },
  authorAvatar: {
    width: '50px',
    height: '50px',
    marginBottom: 0,
    marginRight: '8px',
    borderRadius: '50%'
  }
};

const Review = ({ review }) => {
  const { user, text } = review;
  return (
    <Card>
      <CardSection>
        <p className="card__text">{text}</p>
      </CardSection>
      <CardSection>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img style={styles.authorAvatar} src={user.image_url} alt={user.name} />
          <p style={styles.authorName} className="review__author">
            {user.name}
          </p>
        </div>
      </CardSection>
    </Card>
  );
};

Review.propTypes = {
  review: PropTypes.shape({}).isRequired
};

export default Review;
