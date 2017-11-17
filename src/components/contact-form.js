import React from 'react';
import Button from './button';

const EMAIL = 'konstantindev925@gmail.com';
const FORM_ENDPOINT = `https://formspree.io/${EMAIL}`;

const ContactForm = () => (
	<form className="site-form" method="POST" action={FORM_ENDPOINT}>
		<div className="form-block">
			<label htmlFor="contact-name">Contact name:</label>
			<input
				className="form-input"
				id="contact-name"
				name="contact_name"
				type="text"
				placeholder="Your name"
				required
			/>
		</div>

		<div className="form-block">
			<label htmlFor="contact-phone">Phone:</label>
			<input
				className="form-input"
				id="contact-phone"
				name="contact_phone"
				type="text"
				placeholder="Phone Number"
				required
			/>
		</div>

		<div className="form-block">
			<label htmlFor="contact-email">Email:</label>
			<input
				className="form-input"
				id="contact-email"
				name="contact_email"
				type="email"
				placeholder="Email Address"
				required
			/>
		</div>

		<div className="form-block">
			<label htmlFor="pickup-location">Pickup Location</label>
			<input
				className="form-input"
				id="pickup-location"
				name="pickup_location"
				placeholder="Address for Pickup"
				required
			/>
		</div>

		<div className="form-block">
			<label htmlFor="pickup-time">Pickup Time</label>
			<input
				className="form-input"
				id="pickup-time"
				name="pickup_time"
				placeholder="Convenient Time for Pickup"
				required
			/>
		</div>

		<div className="form-block">
			<label htmlFor="dropoff-location">Drop-off Location</label>
			<input
				className="form-input"
				id="dropoff-location"
				name="dropoff_location"
				placeholder="Address for drop-off"
				required
			/>
		</div>

		<div className="form-block">
			<label htmlFor="time-to-contact">Best Time to Contact</label>
			<input
				className="form-input"
				id="time-to-contact"
				name="prefered_time_to_contact"
				placeholder="(e.g Morning, Afternoon, Evening)"
				required
			/>
		</div>

		<div className="form-block">
			<label>
				<input
					type="radio"
					name="trip_type"
					value="One-way"
					readOnly
					checked
				/>{' '}
				One-way
			</label>
			<label>
				<input
					type="radio"
					name="trip_type"
					readOnly
					value="Round-trip"
				/>{' '}
				Round-trip
			</label>
		</div>

		<div className="form-block">
			<label htmlFor="message">Message (optional)</label>
			<textarea
				className="form-input"
				id="message"
				name="message"
				rows="4"
				placeholder="For special requests, accomodations, or general comments"
			/>
		</div>

		{/* submit button */}

		<div className="form-block">
			<Button
				cssClass="callout-btn--primary callout-btn--with-icon callout-btn--wide"
				type="submit"
				size="small"
			>
				Schedule Pickup <span className="icon icon-calendar" />
			</Button>
		</div>

		<style jsx>{`
			.site-form .form-block {
				display: block;
				margin-bottom: 15px;
			}

			.site-form label {
				display: block;
				font-weight: 700;
				margin-bottom: 5px;
				font-size: 0.9rem;
			}

			.site-form label,
			.site-form .form-input {
				display: block;
			}

			.site-form .form-input {
				display: block;
				appearance: none;
				border: 1px solid #ccc;
				color: #222;
				width: 100%;
				font-size: 0.8rem;
				line-height: 36px;
				padding: 0 5px 0 8px;
				height: 36px;
			}

			.site-form textarea.form-input {
				height: auto;
			}
		`}</style>
	</form>
);

export default ContactForm;
