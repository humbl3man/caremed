import React from 'react';

export default ({ handleFeedbackDismiss }) => {
	return (
		<div>
			<h3>
				<strong>Ooops!</strong>
			</h3>
			<p>
				Something went wrong went submitting the form, please{' '}
				<a
					href="#"
					onClick={e => {
						e.preventDefault();
						e.persist();
						handleFeedbackDismiss();
					}}
				>
					try again
				</a>.
			</p>
		</div>
	);
};
