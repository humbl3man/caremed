import React from 'react';

export default ({ children, height }) => (
	<div className="flex-wrapper">
		{children}
		<style jsx>{`
			.flex-wrapper {
				padding: 0 15px;
				width: 1200px;
				display: flex;
				flex-direction: column;
			}
		`}</style>
	</div>
);
