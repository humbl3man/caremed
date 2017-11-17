import React, { Component } from 'react';
import Link from 'gatsby-link';

const MobileNav = props => {
	const { links, isShown } = props;

	return (
		<div className={isShown ? 'mobile-nav' : 'mobile-nav hidden'}>
			{links.map((link, index) => (
				<span key={index}>
					<Link activeClassName="active" exact to={link.url}>
						{link.label}
					</Link>
				</span>
			))}

			<style jsx>{`
				.mobile-nav {
					background: #8e0217;
					left: 0;
					padding: 20px;
					position: absolute;
					top: 80px;
					width: 100%;
				}

				.mobile-nav span {
					display: block;
					margin-bottom: 25px;
					font-size: 17px;
				}

				.mobile-nav span:last-child {
					margin-bottom: 0;
				}

				@media only screen and (min-width: 767px) {
					.mobile-nav {
						display: none;
					}
				}
			`}</style>
		</div>
	);
};

const DesktopNav = props => {
	const { links } = props;
	return (
		<nav className="desktop-nav">
			{links.map((link, index) => (
				<span key={index}>
					<Link activeClassName="active" exact to={link.url}>
						{link.label}
					</Link>
				</span>
			))}

			<style jsx>{`
				@media only screen and (max-width: 767px) {
					.desktop-nav {
						display: none;
					}
				}
			`}</style>
		</nav>
	);
};

export default class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isMobileNavShown: false,
			links: this.props.links
		};
	}

	toggleMobileNav = e => {
		e.preventDefault();
		this.setState({
			isMobileNavShown: !this.state.isMobileNavShown
		});
	};

	render() {
		return (
			<nav className="nav">
				<span
					onClick={this.toggleMobileNav}
					className="js-mobile-nav-toggle mobile-toggle icon icon-navicon"
				/>
				<DesktopNav links={this.props.links} />
				<MobileNav
					links={this.props.links}
					isShown={this.state.isMobileNavShown}
				/>
			</nav>
		);
	}
}
