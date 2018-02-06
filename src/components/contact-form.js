import React, { Component } from 'react';
import Button from './button';
import FormSuccessFeedback from './contact-form-success';
import FormFailFeedback from './contact-form-fail';
// import { scrollTo } from './../helpers';
import scroll from 'scroll';
import { contactEmail, formBaseURI } from './../config';
import fetch from 'unfetch';

const EMAIL = contactEmail;
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
			_gotcha: '',
			_subject: 'You have an appoinment inquiry',
			_replyTo: contactEmail,
			errors: {
				name: '',
				phone: '',
				email: '',
				pickupLocation: '',
				pickupTime: '',
				dropoffLocation: '',
				timeToContact: ''
			},
			nameValid: false,
			emailValid: false,
			phoneValid: false,
			pickupLocationValid: false,
			pickupTimeValid: false,
			dropoffLocationValid: false,
			timeToContactValid: false,
			formValid: false,
			formSubmitSuccess: false,
			formSubmitFail: false
		};
	}

	componentDidMount() {
		this.setState(prevState => {
			return {
				...prevState,
				formValid:
					prevState.name.length &&
					prevState.email.length &&
					prevState.phone.length &&
					prevState.pickupLocation.length &&
					prevState.pickupTime.length &&
					prevState.dropoffLocation.length &&
					prevState.timeToContact.length,
				nameValid: prevState.name.length,
				emailValid: prevState.email.length,
				phoneValid: prevState.phone.length,
				pickupLocationValid: prevState.pickupLocation.length,
				pickupTimeValid: prevState.pickupTime.length,
				dropoffLocationValid: prevState.dropoffLocation.length,
				timeToContactValid: prevState.timeToContact.length
			};
		});
	}

	handleFieldChange = e => {
		const name = e.target.name;
		const value = e.target.value;

		this.setState(
			{
				[name]: value
			},
			() => {
				this.validateField(name, value);
			}
		);
	};

	validateField = (field, value) => {
		let { errors } = this.state;
		let isEmailEntered;
		let isEmailValidFormat;

		let nameValid = this.state.nameValid;
		let phoneValid = this.state.phoneValid;
		let emailValid = this.state.emailValid;
		let pickupLocationValid = this.state.pickupLocationValid;
		let pickupTimeValid = this.state.pickupTimeValid;
		let dropoffLocationValid = this.state.dropoffLocationValid;
		let timeToContactValid = this.state.timeToContactValid;

		switch (field) {
			case 'name':
				nameValid = value.trim().length > 0;
				errors['name'] = nameValid ? '' : `this field is required`;
				break;
			case 'phone':
				phoneValid = value.trim().length > 0;
				errors['phone'] = phoneValid ? '' : `this field is required`;
				break;
			case 'pickupLocation':
				pickupLocationValid = value.trim().length > 0;
				errors['pickupLocation'] = pickupLocationValid ? '' : `this field is required`;
				break;
			case 'pickupTime':
				pickupTimeValid = value.trim().length > 0;
				errors['pickupTime'] = pickupTimeValid ? '' : `this field is required`;
				break;
			case 'dropoffLocation':
				dropoffLocationValid = value.trim().length > 0;
				errors['dropoffLocation'] = dropoffLocationValid ? '' : `this field is required`;
				break;
			case 'timeToContact':
				timeToContactValid = value.trim().length > 0;
				errors['timeToContact'] = timeToContactValid ? '' : `this field is required`;
				break;
			case 'email':
				isEmailEntered = value.length > 0;
				isEmailValidFormat = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

				emailValid = isEmailEntered && isEmailValidFormat;

				errors['email'] = isEmailEntered
					? !isEmailValidFormat ? `please provide a valid email` : ''
					: `this field is required`;
				break;
			default:
				break;
		}

		this.setState(
			{
				errors,
				nameValid,
				emailValid,
				phoneValid,
				pickupLocationValid,
				pickupTimeValid,
				dropoffLocationValid,
				timeToContactValid
			},
			this.validateForm
		);
	};

	validateForm = () => {
		const formValid =
			this.state.nameValid &&
			this.state.emailValid &&
			this.state.phoneValid &&
			this.state.dropoffLocationValid &&
			this.state.pickupLocationValid &&
			this.state.pickupTimeValid &&
			this.state.timeToContactValid;

		this.setState({
			formValid
		});
	};

	resetState = () => {
		this.setState(prevState => {
			return {
				...prevState,
				name: '',
				phone: '',
				email: '',
				pickupLocation: '',
				pickupTime: '',
				dropoffLocation: '',
				timeToContact: '',
				tripType: 'one way',
				message: '',
				_gotcha: '',
				errors: {
					name: '',
					phone: '',
					email: '',
					pickupLocation: '',
					pickupTime: '',
					dropoffLocation: '',
					timeToContact: ''
				},
				nameValid: false,
				emailValid: false,
				phoneValid: false,
				pickupLocationValid: false,
				pickupTimeValid: false,
				dropoffLocationValid: false,
				timeToContactValid: false,
				formValid: false,
				formSubmitSuccess: false,
				formSubmitFail: false
			};
		});
	};

	sendAppointmentRequest = formData => {
		if (!formData) return;
		let seen = [];

		const replacer = (key, value) => {
			if (value != null && typeof value == 'object') {
				if (seen.indexOf(value) >= 0) {
					return;
				}
				seen.push(value);
			}
			return value;
		};

		// Send a POST request

		const emailJson = JSON.stringify(formData, replacer);

		fetch(FORM_ENDPOINT, {
			body: emailJson,
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			method: 'POST'
		})
			.then(res => {
				if (res.status !== 200) {
					return this.setState(
						{
							formSubmitSuccess: false,
							formSubmitFail: true
						},
						() => {
							scroll.top(document.body, 400);
						}
					);
				}

				this.setState(
					{
						formSubmitSuccess: true,
						formSubmitFail: false
					},
					() => {
						scroll.top(document.body, 400);
					}
				);
			})
			.catch(err => {
				this.setState(
					{
						formSubmitSuccess: false,
						formSubmitFail: true
					},
					() => {
						scroll.top(document.body, 400);
					}
				);
			});
	};

	handleFormSubmit = e => {
		e.preventDefault();

		if (this.state.formValid) {
			const {
				name,
				email,
				phone,
				pickupLocation,
				pickupTime,
				dropoffLocation,
				timeToContact,
				tripType,
				_gotcha,
				_subject
			} = this.state;

			let formData = {
				'Contact Name': name,
				'Email Address': email,
				'Phone Number': phone,
				'Pickup Location': pickupLocation,
				'Pickup Time': pickupTime,
				'Drop-off Location': dropoffLocation,
				'Preferred time to contact': timeToContact,
				'Trip type': tripType,
				_gotcha: _gotcha && _gotcha.length > 0 ? _gotcha : '',
				_replyTo: this.state.email,
				_subject
			};

			if (this.state.message.length) {
				formData['Message'] = this.state.message;
			}

			this.sendAppointmentRequest(formData);
		} else {
			return;
		}
	};

	handleFeedbackDismiss = () => {
		this.resetState();
	};

	render() {
		if (this.state.formSubmitSuccess) {
			return <FormSuccessFeedback />;
		} else if (this.state.formSubmitFail) {
			return <FormFailFeedback handleFeedbackDismiss={this.handleFeedbackDismiss} />;
		}

		function errorClass(error) {
			return error.length > 0 ? ' has-error' : '';
		}

		return (
			<form
				className="site-form"
				method="POST"
				action={FORM_ENDPOINT}
				noValidate={true}
				onSubmit={this.handleFormSubmit}
			>
				{/* gotcha to prevent spamming  */}
				<input
					type="text"
					name="_gotcha"
					style={{ display: 'none' }}
					value={this.state._gotcha}
					onChange={e => this.handleFieldChange(e)}
				/>

				<div
					className={`form-block is-required${errorClass(this.state.errors.name)}`}
					data-error={this.state.errors['name']}
				>
					<label htmlFor="contact-name">Contact name</label>
					<input
						className="form-input"
						id="contact-name"
						name="name"
						type="text"
						value={this.state.name}
						onChange={e => this.handleFieldChange(e)}
						placeholder="Your name"
						required={true}
					/>
				</div>

				<div
					className={`form-block is-required${errorClass(this.state.errors.phone)}`}
					data-error={this.state.errors['phone']}
				>
					<label htmlFor="contact-phone">Phone</label>
					<input
						className="form-input"
						id="contact-phone"
						name="phone"
						type="phone"
						value={this.state.phone}
						onChange={e => this.handleFieldChange(e)}
						placeholder="Phone Number"
						required={true}
					/>
				</div>

				<div
					className={`form-block is-required${errorClass(this.state.errors.email)}`}
					data-error={this.state.errors['email']}
				>
					<label htmlFor="contact-email">Email</label>
					<input
						className="form-input"
						id="contact-email"
						name="email"
						value={this.state.email}
						onChange={e => this.handleFieldChange(e)}
						type="email"
						placeholder="Email Address"
						required={true}
					/>
				</div>

				<div
					className={`form-block is-required${errorClass(this.state.errors.pickupLocation)}`}
					data-error={this.state.errors['pickupLocation']}
				>
					<label htmlFor="pickup-location">Pickup Location</label>
					<input
						className="form-input"
						id="pickup-location"
						name="pickupLocation"
						value={this.state.pickupLocation}
						onChange={e => this.handleFieldChange(e)}
						placeholder="Address for Pickup"
						required={true}
					/>
				</div>

				<div
					className={`form-block is-required${errorClass(this.state.errors.pickupTime)}`}
					data-error={this.state.errors['pickupTime']}
				>
					<label htmlFor="pickup-time">Pickup Time</label>
					<input
						className="form-input"
						id="pickup-time"
						name="pickupTime"
						value={this.state.pickupTime}
						onChange={e => this.handleFieldChange(e)}
						placeholder="Convenient Time for Pickup"
						required={true}
					/>
				</div>

				<div
					className={`form-block is-required${errorClass(this.state.errors.dropoffLocation)}`}
					data-error={this.state.errors['dropoffLocation']}
				>
					<label htmlFor="dropoff-location">Drop-off Location</label>
					<input
						className="form-input"
						id="dropoff-location"
						name="dropoffLocation"
						value={this.state.dropoffLocation}
						onChange={e => this.handleFieldChange(e)}
						placeholder="Address for drop-off"
						required={true}
					/>
				</div>

				<div
					className={`form-bloc is-requiredk${errorClass(this.state.errors.timeToContact)}`}
					data-error={this.state.errors['timeToContact']}
				>
					<label htmlFor="time-to-contact">Best Time to Contact</label>
					<input
						className="form-input"
						id="time-to-contact"
						name="timeToContact"
						value={this.state.timeToContact}
						onChange={e => this.handleFieldChange(e)}
						placeholder="(e.g Morning, Afternoon, Evening)"
						required={true}
					/>
				</div>

				<div className="form-block radio-group">
					<label>
						<input
							type="radio"
							name="tripType"
							value="one way"
							onChange={e => this.handleFieldChange(e)}
							checked={this.state.tripType === 'one way'}
						/>{' '}
						One-way
					</label>
					<label>
						<input
							type="radio"
							name="tripType"
							value="round trip"
							onChange={e => this.handleFieldChange(e)}
							checked={this.state.tripType === 'round trip'}
						/>{' '}
						Round-trip
					</label>
				</div>

				<div className="form-block">
					<label htmlFor="message">
						Message <small>(Optional)</small>
					</label>
					<textarea
						className="form-input"
						id="message"
						name="message"
						value={this.state.message}
						onChange={e => this.handleFieldChange(e)}
						rows="4"
						placeholder="For special requests, accomodations, or general comments"
					/>
				</div>

				<div className={!this.state.formValid ? 'form-block has-warning' : 'form-block'}>
					<Button
						cssClass={`callout-btn--primary callout-btn--with-icon callout-btn--wide${
							this.state.formValid ? '' : ' callout-btn--disabled'
						}`}
						type="submit"
						size="small"
					>
						Schedule Pickup
					</Button>

					<span className="warning">
						{!this.state.formValid && (
							<span>
								<span className="icon icon-warning" /> You are missing required fields. Please
								correct the form before proceeding.
							</span>
						)}
					</span>
				</div>

				<style jsx>{`
					.site-form .form-block {
						display: block;
						margin-bottom: 15px;
						position: relative;
						z-index: 1;
					}

					.site-form label {
						display: block;
						font-weight: 700;
						margin-bottom: 5px;
						font-size: 0.9rem;
						cursor: pointer;
					}

					.site-form .radio-group {
						display: flex;
						padding: 1rem 0 0;
					}

					.site-form .radio-group label {
						margin-right: 20px;
					}

					.site-form .radio-group label:last-child {
						margin-right: 0;
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
						padding: 0 5px 0 8px;
						height: 36px;
						transition: 200ms ease-in-out;
						outline: 0;
					}

					.site-form textarea.form-input {
						padding-top: 8px;
						padding-bottom: 8px;
						line-height: 1;
					}

					.site-form .form-input:focus {
						border-color: rgba(0, 117, 242, 0.5);
						box-shadow: 0 0 4px rgba(0, 117, 242, 0.5);
					}

					.site-form .has-error .form-input {
						border-color: rgb(179, 0, 27);
						box-shadow: 0 0 4px rgba(179, 0, 27, 0.5);
					}

					.site-form .form-block::after {
						display: none;
						content: attr(data-error);
						font-size: 13px;
						padding: 4px 8px;
						background-color: #b3001b;
						border-radius: 0 0 3px 3px;
						color: #fff;
					}
					.site-form .form-block.has-error::after {
						display: block;
					}

					.site-form .form-input.has-error:after {
						content: attr(data-error);
					}

					.site-form textarea.form-input {
						height: auto;
					}

					.site-form .form-block.has-warning {
						position: relative;
						z-index: 1;
					}

					.site-form .is-required label:after {
						content: '*';
						display: inline-block;
						margin-left: 7px;
					}

					.site-form .form-block.has-warning .warning {
						position: absolute;
						bottom: 100%;
						left: 0;
						padding: 0.6rem;
						color: #9f6000;
						background-color: #feefb3;
						pointer-events: none;
						opacity: 0;
						transition: opacity 200ms ease 1ms,
							transform 200ms cubic-bezier(0.68, -0.55, 0.27, 1.55) 300ms;
						font-size: 0.9rem;
						border-radius: 4px;
						text-align: center;
						min-width: 120px;
						width: 100%;
						transform: translateY(-5px);
					}

					.site-form .form-block.has-warning:hover .warning {
						opacity: 1;
						pointer-events: auto;
						transform: translateY(-12px);
					}

					.site-form .form-block.has-warning .warning:before {
						display: block;
						position: absolute;
						top: 100%;
						margin-left: auto;
						margin-right: auto;
						left: -5px;
						right: -5px;
						content: '';
						width: 0;
						height: 0;
						border-left: 12px solid transparent;
						border-right: 12px solid transparent;
						border-bottom: 12px solid transparent;
						border-top: 12px solid #feefb3;
					}
				`}</style>
			</form>
		);
	}
}
