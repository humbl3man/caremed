/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import Container from './../components/container';
import SidebarNav from './../components/sidebar-nav';

const Faq = () => (
  <Container>
    <div className="site-content generic-content">
      <SidebarNav />
      <section className="content">
        <h1>
          <strong>FAQ</strong>
        </h1>
        <h3>
          <strong>What type of transport services do you offer?</strong>
        </h3>
        <p>Care MED Transport offers ambulatory wheelchair and gurney transportation to:</p>
        <ul>
          <li>Nursing Facility Transfers</li>
          <li>Outpatient Care</li>
          <li>Dialysis Center</li>
          <li>Doctors Appointments</li>
          <li>Discharge from Hospitals</li>
          <li>Discharge from Care Center</li>
          <li>Radiation Treatment</li>
          <li>Chemotherapy Treatment</li>
        </ul>

        <h3>
          <strong>What are your rates for your transport services?</strong>
        </h3>
        <p>
					Please call <a href="tel:+17142095739">(714) 209 - 5739</a> for a custom quote.{' '}
        </p>

        <h3>
          <strong>What areas do you service?</strong>
        </h3>
        <p>We service Orange County and Greater Los Angeles area.</p>

        <h3>
          <strong>What are your service hours?</strong>
        </h3>
        <p>
					We offer 24/7 service. We also take same-day appointments, but we recommend booking with
					us at least 24-48 hours in advance.{' '}
        </p>

        <h3>
          <strong>Do you require deposits?</strong>
        </h3>
        <p>
					We don’t require deposits. We just need the payment information to book the appointment.{' '}
        </p>

        <h3>
          <strong>How can I make a payment?</strong>
        </h3>
        <p>You can make a payment by credit card, check, or cash. </p>
      </section>
    </div>
  </Container>
);

export default Faq;
