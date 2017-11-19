import React from 'react';
import Container from './../components/container';

import aboutPic from './../images/about.jpg';

export default () => (
	<Container>
		<div className="site-content">
			<h1>
				<strong>About Us</strong>
			</h1>

			<div className="about">
				<div className="about__image">
					<img src={aboutPic} alt="Caremed Transport" />
				</div>
				<div className="about__description">
					<p>
						Care MED Transport is a privately owned and operated
						company providing Non-emergency transportation to the
						community of Greater Los Angeles and Orange County. Care
						MED Transport was founded in 2016 based on experience
						that many people needed a service for transportation to
						go for doctor's appointment, medical treatments and
						other medical necessity.
					</p>
					<p>
						We decided to establish our own transportation services
						to be of service to the community. Care MED Transport is
						operated by well trained and experienced staffs over 10
						years in medical field. Our Vision and Dedication of our
						team are to build the greatest medical transportation to
						the community and role model for American Health Care.
					</p>
				</div>
			</div>
		</div>
		<style jsx>{`
			.about {
				display: flex;
				justify-content: space-between;
			}

			.about__image {
				flex: 0 0 35%;
				margin-right: 10%;
			}

			.about__image img {
				width: 100%;
				height: auto;
			}

			@media only screen and (max-width: 767px) {
				.about {
					flex-wrap: wrap;
				}

				.about__image {
					display: none;
				}
			}
		`}</style>
	</Container>
);
