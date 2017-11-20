import React from 'react';
import Container from './../components/container';
import ContactForm from './../components/contact-form';
import config from './../config';

const iframeSrc =
	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53066.79053654933!2d-118.0035533045438!3d33.76907855495819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd283f9d1dcd8d%3A0x3909622bd0f8b3a!2sGarden+Grove%2C+CA!5e0!3m2!1sen!2sus!4v1510722316762';

const MapIframe = ({ src, height, width }) => (
	<div className="contact-map">
		<iframe
			src={src}
			height={height}
			width={width}
			style={{ border: 0 }}
			frameBorder="0"
			allowFullScreen
		/>

		<style jsx>{`
			.contact-map {
				position: relative;
				padding-bottom: 75%;
				height: 0;
				overflow: hidden;
			}
			.contact-map iframe {
				position: absolute;
				top: 0;
				left: 0;
				width: 100% !important;
				height: 100% !important;
			}
		`}</style>
	</div>
);

export default () => (
	<div className="site-content">
		<Container>
			<h1>
				<strong>
					{config.showContactForm
						? 'Make an Appointment'
						: 'Contact Us'}
				</strong>
			</h1>
			<div className="contact">
				<div>
					<div
						style={{
							borderBottom: '1px solid #ccc',
							marginBottom: '1rem'
						}}
					>
						<p>
							We offer 24/7 service. We also take same-day
							appointments, but we recommend booking with us at
							least 24-48 hours in advance.
						</p>
						<p>
							For same-day appointments please call<br />
							<a href="tel:+17142095739">(714) 209 - 5739</a>{' '}
						</p>
					</div>
					{config.showContactForm && <ContactForm />}
				</div>

				<div>
					<div className="contact-address">
						<p>
							<strong>Care Med Transport</strong>
						</p>
						<p>Garden Grove, CA 92841</p>
						<p>
							Dispatch{' '}
							<a href="tel:+17142095739">(714) 209 - 5739</a>
						</p>
						<p>Fax (714) 462 - 6152</p>
						<p>
							Email:{' '}
							<a href="mailto:caremedtransport@gmail.com">
								caremedtransport@gmail.com
							</a>
						</p>
					</div>
					<MapIframe src={iframeSrc} width={400} height={400} />
				</div>
			</div>

			<style jsx>{`
				.contact {
					display: flex;
					justify-content: space-between;
				}

				.contact-address {
					padding: 25px;
					box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
					border: 1px solid #ccc;
					margin-bottom: 20px;
				}

				.contact > div:first-child {
					flex-basis: 400px;
					margin-right: 40px;
				}

				@media only screen and (max-width: 775px) {
					.contact {
						flex-direction: column;
					}

					.contact > div:first-child {
						flex-basis: auto;
						margin-right: 0;
					}
				}
			`}</style>
		</Container>
	</div>
);
