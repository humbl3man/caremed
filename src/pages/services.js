import React from 'react';
import Container from './../components/container';
import Slider from 'react-slick';

import './../styles/services.scss';

import serviceImage1 from './../images/services-1.jpg';
import serviceImage2 from './../images/services-2.jpg';
import serviceImage3 from './../images/services-3.jpg';
import serviceImage4 from './../images/services-4.jpg';
import serviceImage5 from './../images/services-5.jpg';
import serviceImage6 from './../images/services-6.jpg';

const carouselOptions = {
	emulateTouch: true,
	showThumbs: false,
	showStatus: false
};

var reactSliderOptions = {
	dots: false,
	infinite: false,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 3
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
			<div className="services">
				<div style={{ textAlign: 'center' }}>
					<h1>Services</h1>
					<p>
						Care MED transport provides Wheelchair Transport Service
						7 days a week, 24 hours a day to provide a quality and
						prompt response to meet your needs.
					</p>
				</div>

				<ServicesBuckets />

				<div className="slider" style={{ padding: '0 20px' }}>
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
					</Slider>
				</div>
			</div>

			<style jsx>{`
				.slider-item {
					margin-right: 10px;
				}

				.slider-item img {
					max-width: 100%;
					height: auto;
				}
			`}</style>
		</Container>
	</div>
);
