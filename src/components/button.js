import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

import './../styles/button.scss';

const Button = props => {
	const { isLink, cssClass, to, type, children, size } = props;

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
	children: PropTypes.array,
	className: PropTypes.string,
	isLink: PropTypes.bool,
	size: PropTypes.string,
	to: PropTypes.string,
	type: PropTypes.string
};

Button.defaultProps = {
	className: '',
	isLink: false,
	size: 'large',
	type: 'submit'
};

export default Button;
