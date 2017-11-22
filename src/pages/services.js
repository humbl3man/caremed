import React from 'react';
import Container from './../components/container';
import Slider from 'react-slick';

import './../styles/slider.scss';

import checkCircleImage from './../images/check-circle.png';

import serviceImage1 from './../images/services-1.jpg';
import serviceImage2 from './../images/services-2.jpg';
import serviceImage3 from './../images/services-3.jpg';
import serviceImage4 from './../images/services-4.jpg';
import serviceImage5 from './../images/services-5.jpg';
import serviceImage6 from './../images/services-6.jpg';
import serviceImage7 from './../images/services-7.jpg';
import serviceImage8 from './../images/services-8.jpg';

const reactSliderOptions = {
	dots: true,
	infinite: false,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	mobileFirst: true
};

const ServicesBuckets = () => {
	return (
		<div className="service-buckets row-4-across">
			<div>
				<div className="bucket">
					<h3>Same day appointments</h3>
				</div>
			</div>
			<div>
				<div className="bucket">
					<h3>Schedule Dialysis patients</h3>
				</div>
			</div>
			<div>
				<div className="bucket">
					<h3>Discharge from Hospital</h3>
				</div>
			</div>
			<div>
				<div className="bucket">
					<h3>Follow up appointments</h3>
				</div>
			</div>

			<style jsx>{`
				.service-buckets h3 {
					margin: 0;
				}
			`}</style>
		</div>
	);
};

export default () => (
	<div className="site-content">
		<Container>
			<div className="services cf">
				<div>
					<h1>
						<strong>Services</strong>
					</h1>
					<p>
						Care MED transport provides Wheelchair Transport Service
						7 days a week, 24 hours a day to provide a quality and
						prompt response to meet your needs.
					</p>
					<ul className="services-bullets">
						<li>Same day appointments</li>
						<li>Schedule Dialysis patients</li>
						<li>Discharge from Hospital</li>
						<li>Follow up appointments</li>
					</ul>
				</div>

				{/* <ServicesBuckets /> */}

				<div>
					<Slider {...reactSliderOptions}>
						<div className="slider-item">
							<img src={serviceImage1} />
						</div>
						<div className="slider-item">
							<img src={serviceImage2} />
						</div>
						<div className="slider-item">
							<img src={serviceImage3} />
						</div>
						<div className="slider-item">
							<img src={serviceImage4} />
						</div>
						<div className="slider-item">
							<img src={serviceImage5} />
						</div>
						<div className="slider-item">
							<img src={serviceImage6} />
						</div>
						<div className="slider-item">
							<img src={serviceImage7} />
						</div>
						<div className="slider-item">
							<img src={serviceImage8} />
						</div>
					</Slider>
				</div>
			</div>

			<style jsx>{`
				.services {
					padding-bottom: 3rem;
				}

				.services > div {
					display: inline-block;
					vertical-align: top;
					width: 45%;
				}

				.services > div:first-child {
					margin-right: 10%;
				}

				.services > div:nth-child(2) {
					padding: 0 1rem;
				}

				.slider-item img {
					width: 100%;
					height: auto;
				}

				.services-bullets {
					list-style: none;
					padding: 0;
					margin: 0;
				}

				.services-bullets li:before {
					content: '';
					width: 24px;
					height: 24px;
					background: url(${checkCircleImage});
					background-size: 24px 24px;
					display: inline-block;
					margin-right: 12px;
					vertical-align: middle;
				}

				@media only screen and (max-width: 767px) {
					.services > div {
						width: 100%;
						display: block;
					}

					.services > div:first-child {
						margin-right: 0;
					}

					.services > div:nth-child(2) {
						padding: 0 2.2rem;
					}
				}
			`}</style>
		</Container>
	</div>
);
