import React from 'react';
import Container from './container';
import Button from './button';

const HaveQuestions = () => {
	return (
		<div className="have-questions">
			<Container>
				<div className="flex-wrapper">
					<div>
						<h3>
							Do you have questions about our non-emergency
							transport service?
						</h3>{' '}
					</div>

					<div>
						<Button
							isLink={true}
							size="small"
							cssClass="callout-btn--secondary"
							to="/faq"
						>
							Visit our FAQ Page{' '}
							<i className="icon icon-double-right" />
						</Button>
					</div>
				</div>
			</Container>
			<style jsx>{`
				.have-questions {
					margin-top: 30px;
					padding: 20px 0;
					background-color: #3c90ea;
					background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.25' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
				}

				.have-questions h3 {
					margin: 0;
					color: #fff;
					font-size: 1.3rem;
				}

				.have-questions .flex-wrapper {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 0 30px;
					height: 120px;
				}

				.have-questions .flex-wrapper > div:first-child {
					flex-basis: 70%;
				}

				@media only screen and (max-width: 767px) {
					.have-questions .flex-wrapper {
						flex-wrap: wrap;
						height: auto;
					}
					.have-questions .flex-wrapper > div:first-child {
						flex-basis: 100%;
						margin-bottom: 15px;
					}
				}
			`}</style>
		</div>
	);
};

export default HaveQuestions;
