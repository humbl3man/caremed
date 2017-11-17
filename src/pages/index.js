import React from 'react';
import Link from 'gatsby-link';
import Container from './../components/container';
import FlexContainer from './../components/flex-container';
import Button from './../components/button';
import heroImage from './../images/hero-background.jpg';
import splashImage from './../images/splash.jpg';

// icons
import './../styles/icons.scss';

const heroButtonProps = {
	cssClass: 'callout-btn--primary',
	isLink: true,
	to: '/contact'
};

const IndexPage = () => (
	<div>
		<div className="hero">
			<FlexContainer className="hero-flex">
				<h1>Care Med Transport</h1>
				<p>
					We are a non-emergency transport service that understands
					your needs. <br />Wheelchair Transportation | Ambulatory
					Services
				</p>
				<div>
					<Button {...heroButtonProps}>Schedule Appointment</Button>
				</div>
			</FlexContainer>

			<style jsx>{`
				.hero h1 {
					color: #fff;
					font-size: 3rem;
					margin-bottom: 10px;
				}
				.hero p {
					font-size: 1.2rem;
					margin-bottom: 50px;
				}

				.hero {
					color: #fff;
					display: flex;
					justify-content: center;
					align-items: center;
					height: 450px;
					margin-bottom: 60px;
					background-color: #222;
					background: linear-gradient(
							rgba(0, 0, 0, 0.6),
							rgba(0, 0, 0, 0.6)
						),
						url(${heroImage});
					background-size: cover;
					background-position: center;
					background-repeat: no-repeat;
				}

				@media only screen and (max-width: 767px) {
					.hero {
						text-align: center;
					}

					.hero h1 {
						font-size: 2.2rem;
					}

					.hero p {
						font-size: 1.2rem;
					}
				}
			`}</style>
		</div>

		<Container>
			<div className="row-3-across featured">
				<div>
					<div className="bucket">
						<h3>
							<i className="icon icon-clock" /> 24 HOUR SERVICE
						</h3>
						<p>
							We understand that patients dealing with different
							kinds of afflictions require special care round the
							clock.
						</p>
						<p>
							That's why we at Care MED Transport are providing a
							24-hour service that should answer to their needs
							whenever they need it, wherever they are.
						</p>
					</div>
				</div>

				<div>
					<div className="bucket">
						<h3>
							<i className="icon icon-calendar" /> SAME-DAY
							APPOINTMENT
						</h3>
						<p>
							We know that dealing with an ailment is already
							tough. That's why we chose not to burden our
							patients with more things to worry about and decided
							to allow same-day appointments that will allow us to
							cater to more people who require the special kind of
							care that we can provide.
						</p>
					</div>
				</div>

				<div>
					<div className="bucket">
						<h3>
							<i className="icon icon-star" /> QUALITY SERVICE
						</h3>
						<p>
							We believe that our clients deserve only the best
							quality service that we can provide and it is our
							mission to make life easier for people who can use
							for things to get better.
						</p>
					</div>
				</div>
			</div>

			<style jsx>{`
				.featured {
					margin-bottom: 60px;
				}

				.featured h3 {
					color: #b3001b;
					border-bottom: 2px solid #b3001b;
					padding-bottom: 20px;
					margin-bottom: 20px;
					font-weight: 700;
					font-size: 1.2rem;
				}

				.featured h3 i {
					display: inline-block;
					margin-right: 5px;
					transform: scale(1.2) translateY(-2px);
				}
			`}</style>
		</Container>

		<div className="extra">
			<Container>
				<div className="inner">
					<h2>
						Serving our community with pride, respect and safe
						transportation.
					</h2>
					<Button
						cssClass="callout-btn--secondary"
						to="/contact"
						isLink={true}
					>
						Contact Us
					</Button>
				</div>
			</Container>

			<style jsx>{`
				.extra {
					padding: 90px 30px;
					text-align: center;
					background-color: #222;
					background-image: linear-gradient(
							rgba(0, 0, 0, 0.6),
							rgba(0, 0, 0, 0.6)
						),
						url(${splashImage});
					background-position: center;
					background-size: cover;
					background-repeat: no-repeat;
				}

				.extra h2 {
					color: #fff;
					margin: 0;
				}

				.inner {
					display: flex;
					justify-content: space-between;
					align-items: center;
				}

				@media only screen and (min-width: 767px) and (max-width: 1024px) {
					.extra h2 {
						flex: 0 0 70%;
					}
				}

				@media only screen and (max-width: 767px) {
					.extra h2 {
						margin-bottom: 30px;
					}

					.inner {
						flex-direction: column;
					}
				}
			`}</style>
		</div>
	</div>
);

export default IndexPage;
