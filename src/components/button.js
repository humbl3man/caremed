import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

import './../styles/button.scss';

const Button = props => {
	const { children, cssClass, isLink, size, to, type } = props;

	if (isLink) {
		return (
			<Link
				data-size={size}
				className={'callout-btn ' + (cssClass ? cssClass : '')}
				to={to}
			>
				{children}
			</Link>
		);
	}

	return (
		<button
			type={type}
			data-size={size}
			className={'callout-btn ' + (cssClass ? cssClass : '')}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	cssClass: PropTypes.string,
	isLink: PropTypes.bool,
	size: PropTypes.string,
	to: PropTypes.string,
	type: PropTypes.string
};

Button.defaultProps = {
	cssClass: '',
	isLink: false,
	size: 'large',
	to: '',
	type: 'button',
	type: 'submit'
};

export default Button;
