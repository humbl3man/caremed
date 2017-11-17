import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

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

const links = [
	{
		url: '/',
		label: 'Home'
	},
	{
		url: '/about',
		label: 'About Us'
	},
	{
		url: '/services',
		label: 'Services'
	},
	{
		url: '/contact',
		label: 'Contact'
	}
];

const Header = () => (
	<header className="site-header">
		<Container>
			<div className="inner-header">
				<div className="brand">
					<Link to="/" activeClassName="active">
						<h3>Caremed Transport</h3>
					</Link>
				</div>
				<GlobalNav links={links} />
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
			title="Caremed Transport"
			meta={[
				{ name: 'description', content: 'Sample' },
				{ name: 'keywords', content: 'transport, medical' }
			]}
		/>
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
