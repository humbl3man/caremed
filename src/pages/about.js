import React from 'react';
import Container from './../components/container';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './../styles/generic.scss';

const SideLink = ({ to, children }) => {
	return <Link to={to}>{children}</Link>;
};

export default () => (
	<Container>
		<div className="site-content generic-content">
			<aside className="side-nav">
				<Link to="/about" activeClassName="active">
					About <i className="icon icon-double-right" />
				</Link>
				<Link to="/faq" activeClassName="active">
					FAQ <i className="icon icon-double-right" />
				</Link>
			</aside>
			<section className="content">
				<h1>
					<strong>About Us</strong>
				</h1>
				<p>
					Care MED Transport is a privately owned and operated company
					providing Non-emergency transportation to the community of
					Greater Los Angeles and Orange County. Care MED Transport
					was founded in 2016 based on experience that many people
					needed a service for transportation to go for doctor's
					appointment, medical treatments and other medical necessity.
				</p>
				<p>
					We decided to establish our own transportation services to
					be of service to the community. Care MED Transport is
					operated by well trained and experienced staffs over 10
					years in medical field. Our Vision and Dedication of our
					team are to build the greatest medical transportation to the
					community and role model for American Health Care.
				</p>
			</section>
		</div>
	</Container>
);
