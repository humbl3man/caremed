import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const ContactFormFail = ({ handleFeedbackDismiss }) => (
  <div>
    <h3>
      <strong>Ooops!</strong>
    </h3>
    <p>
      Something went wrong went submitting the form, please{' '}
      <Button
        clickHandler={e => {
          e.preventDefault();
          e.persist();
          handleFeedbackDismiss();
        }}
      >
        try again
      </Button>
    </p>
  </div>
);

ContactFormFail.propTypes = {
  handleFeedbackDismiss: PropTypes.func.isRequired
};

export default ContactFormFail;
