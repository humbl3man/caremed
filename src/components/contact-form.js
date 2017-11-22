import React, { Component } from 'react';
import Button from './button';
import { scrollTo } from './../helpers';

const EMAIL = 'konstantindev925@gmail.com';
const FORM_ENDPOINT = `https://formspree.io/${EMAIL}`;

export default class ContactForm extends Component {
	constructor() {
		super();

		this.state = {
			name: '',
			phone: '',
			email: '',
			pickupLocation: '',
			pickupTime: '',
			dropoffLocation: '',
			timeToContact: '',
			tripType: 'one way',
			message: '',
			errors: {
				nameValid: true
			},
			formValid: false,
			formSubmitted: false
		};
	}

	handleFieldChange = e => {
		this.setState(prevState => {
			return {
				...prevState,
				[e.target.name]: e.target.value
			};
		});
		switch (e.target.name) {
			case 'name':
				this.setState(prevState => {
					return {
						...prevState,
						errors: {
							...prevState.errors,
							nameValid: e.target.value.length > 0
						}
					};
				});
			default:
				break;
		}
	};

	handleFormSubmit = e => {
		e.preventDefault();

		let submitInfo = {};

		console.log(this.state);

		this.setState(prevState => {
			scrollTo(document.documentElement, 0, 300);
			return { ...prevState, formSubmitted: true };
		});

		// if (this.state.formValid) {
		// 	submitInfo.name = this.state.name;
		// 	// TODO: get all values from the form

		// 	if (this.state.message && this.state.message.length) {
		// 		submitInfo.message = this.state.message;
		// 	}
		// } else {
		// 	console.log('form is invalid');
		// }
	};

	handleSuccessMessageDismiss = () => {
		this.setState(prevState => {
			// reset form state
			return {
				...this.state,
				name: '',
				phone: '',
				email: '',
				pickupLocation: '',
				pickupTime: '',
				dropoffLocation: '',
				timeToContact: '',
				tripType: 'one way',
				message: '',
				errors: {
					nameValid: true
				},
				formValid: false,
				formSubmitted: false
			};
		});
	};

	render() {
		console.log('name valid', this.state.errors.nameValid);

		if (this.state.formSubmitted) {
			return (
				<div className="submit-success bucket">
					<h3>
						<i
							className="icon icon-check-circle"
							style={{ color: '#2BA84A' }}
						/>
						<strong>Thanks!</strong>
						<i
							className="icon icon-close-circle"
							onClick={this.handleSuccessMessageDismiss}
						/>
					</h3>
					<p>
						We received your pickup request. Please allow up to 24
						hours for us to respond.
					</p>

					<style jsx>{`
						.submit-success {
							padding: 25px;
							box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
							border: 1px solid #ccc;
							margin-bottom: 20px;
							position: relative;
							z-index: 1;
						}
						.submit-success .icon-check-circle {
							margin-right: 6px;
							display: inline-block;
						}

						.submit-success .icon-close-circle {
							float: right;
							cursor: pointer;
							font-size: 26px;
							opacity: 0.8;
						}

						.submit-success .icon-close-circle:hover {
							opacity: 1;
						}
					`}</style>
				</div>
			);
		}

		return (
			<form
				className="site-form"
				method="POST"
				action={'FORM_ENDPOINT'}
				onSubmit={this.handleFormSubmit}
				noValidate={true}
			>
				<div className="form-block">
					<label htmlFor="contact-name">Contact name:</label>
					<input
						className={`form-input${
							this.state.errors.nameValid ? '' : ' has-error'
						}`}
						id="contact-name"
						name="name"
						type="text"
						value={this.state.name}
						onChange={this.handleFieldChange}
						placeholder="Your name"
						required
					/>
				</div>

				<div className="form-block">
					<label htmlFor="contact-phone">Phone:</label>
					<input
						className="form-input"
						id="contact-phone"
						name="phone"
						type="phone"
						value={this.state.phone}
						onChange={this.handleFieldChange}
						placeholder="Phone Number"
						required
					/>
				</div>

				<div className="form-block">
					<label htmlFor="contact-email">Email:</label>
					<input
						className="form-input"
						id="contact-email"
						name="email"
						value={this.state.email}
						onChange={this.handleFieldChange}
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
						name="pickupLocation"
						value={this.state.pickupLocation}
						onChange={this.handleFieldChange}
						placeholder="Address for Pickup"
						required
					/>
				</div>

				<div className="form-block">
					<label htmlFor="pickup-time">Pickup Time</label>
					<input
						className="form-input"
						id="pickup-time"
						name="pickupTime"
						value={this.state.pickupTime}
						onChange={this.handleFieldChange}
						placeholder="Convenient Time for Pickup"
						required
					/>
				</div>

				<div className="form-block">
					<label htmlFor="dropoff-location">Drop-off Location</label>
					<input
						className="form-input"
						id="dropoff-location"
						name="dropoffLocation"
						value={this.state.dropoffLocation}
						onChange={this.handleFieldChange}
						placeholder="Address for drop-off"
						required
					/>
				</div>

				<div className="form-block">
					<label htmlFor="time-to-contact">
						Best Time to Contact
					</label>
					<input
						className="form-input"
						id="time-to-contact"
						name="timeToContact"
						value={this.state.timeToContact}
						onChange={this.handleFieldChange}
						placeholder="(e.g Morning, Afternoon, Evening)"
						required
					/>
				</div>

				<div className="form-block">
					<label>
						<input
							type="radio"
							name="tripType"
							value="one way"
							onChange={this.handleFieldChange}
							checked={this.state.tripType === 'one way'}
						/>{' '}
						One-way
					</label>
					<label>
						<input
							type="radio"
							name="tripType"
							value="round trip"
							onChange={this.handleFieldChange}
							checked={this.state.tripType === 'round trip'}
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
						value={this.state.message}
						onChange={this.handleFieldChange}
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

					.site-form .form-input.has-error {
						border-color: red;
					}

					.site-form textarea.form-input {
						height: auto;
					}
				`}</style>
			</form>
		);
	}
}
