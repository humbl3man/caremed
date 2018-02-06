/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

import Container from './../components/container';
import SidebarNav from './../components/sidebar-nav';

const About = () => (
  <Container>
    <div className="site-content generic-content">
      <SidebarNav />

      <section className="content">
        <h1>
          <strong>About Us</strong>
        </h1>
        <p>
					Care MED Transport is a privately owned and operated company providing Non-emergency
					transportation to the community of Greater Los Angeles and Orange County. Care MED
					Transport was founded in 2016 based on experience that many people needed a service for
					transportation to go for doctor&apos;s appointment, medical treatments and other medical
					necessity.
        </p>
        <p>
					We decided to establish our own transportation services to be of service to the community.
					Care MED Transport is operated by well trained and experienced staffs over 10 years in
					medical field. Our Vision and Dedication of our team are to build the greatest medical
					transportation to the community and role model for American Health Care.
        </p>
      </section>
    </div>
  </Container>
);

export default About;
