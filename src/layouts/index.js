import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import favicon from './../favicon.png';

import Container from './../components/container';
import './../styles/index.css';
import './../styles/layout.scss';

import instagram from './../images/instagram.png';
import linkedin from './../images/linkedin.png';
import facebook from './../images/facebook.png';
import twitter from './../images/twitter.png';
import yelp from './../images/yelp.png';

// Components
import GlobalNav from './../components/global-nav';
import HaveQuestions from './../components/have-questions';

import logo from './../images/cmt-logo.png';

// Config
import config from './../config';

const Header = () => (
	<header className="site-header">
		<Container>
			<div className="inner-header">
				<div className="brand">
					<Link to="/" activeClassName="active">
						<img src={logo} />
					</Link>
				</div>
				<GlobalNav links={config.links} />
			</div>
		</Container>
	</header>
);

const Footer = () => (
	<footer className="site-footer">
		<Container>
			<div className="site-footer__inner">
				<small className="copyright">
					{new Date().getFullYear()} &copy; Care MED Transport |
					Designed and built by{' '}
					<a href="https://www.apkomatic.com">Apkomatic</a>
				</small>
				<ul className="social">
					<li>
						<a href="https://www.yelp.com/biz/care-med-transport-garden-grove">
							<img src={yelp} />
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/caremedtransport/">
							<img src={instagram} />
						</a>
					</li>
					<li>
						<a href="https://www.facebook.com/careMEDtransport/">
							<img src={facebook} />
						</a>
					</li>
				</ul>
			</div>
		</Container>
	</footer>
);

const TemplateWrapper = ({ children }) => (
	<div>
		<Helmet
			titleTemplate="Care MED Transport - %s"
			defaultTitle="Care MED Transport"
		>
			<meta charSet="utf-8" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, shrink-to-fit=no"
			/>
			<meta
				name="description"
				content="Care MED Transport is a privately owned and operated company providing Non-emergency transportation to the community of Greater Los Angeles and Orange County. Care MED Transport was founded in 2016 based on experience that many people needed a service for transportation to go for doctor's appointment, medical treatments and other medical necessity."
			/>
			<link rel="shortcut icon" href={favicon} />
			<link rel="canonical" href="http://caremedtransportoc.com/" />
			<script
				src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"
				async
			/>
		</Helmet>
		<Header />

		{children()}

		<HaveQuestions />

		<Footer />
	</div>
);

TemplateWrapper.propTypes = {
	children: PropTypes.func
};

export default TemplateWrapper;
