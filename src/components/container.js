import React from 'react';

export default ({ children }) => (
	<div className="container">
		{children}

		<style jsx>{`
			.container {
				padding: 0 15px;
				max-width: 1200px;
				margin: auto;
			}
		`}</style>
	</div>
);
