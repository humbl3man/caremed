import React from 'react';

export default () => (
  <div className="submit-success bucket">
    <h3>
      <i className="icon icon-check-circle" style={{ color: '#2BA84A' }} />
      <strong>Thank you!</strong>
    </h3>
    <p>We received your pickup request. We will be contacting you soon.</p>

    <style jsx>{`
      .submit-success {
        padding: 25px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        border: 1px solid green;
        margin-bottom: 20px;
        position: relative;
        z-index: 1;
      }
      .submit-success .icon-check-circle {
        margin-right: 6px;
        display: inline-block;
      }
    `}</style>
  </div>
);
