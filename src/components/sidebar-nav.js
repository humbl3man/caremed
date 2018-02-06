import React from 'react';
import Link from 'gatsby-link';
import './../styles/generic.scss';

const SidebarNav = () => (
  <aside className="side-nav">
    <Link to="/about" activeClassName="active">
			About <i className="icon icon-double-right" />
    </Link>
    <Link to="/faq" activeClassName="active">
			FAQ <i className="icon icon-double-right" />
    </Link>
  </aside>
);

export default SidebarNav;
