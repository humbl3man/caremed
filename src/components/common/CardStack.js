import React from 'react';
// import PropTypes from 'prop-types';
import './../../styles/card-stack.scss';

const CardStack = props => <div className="card-stack">{props.children}</div>;
// CardStack.propTypes = {
//   children: PropTypes.shape({}).isRequired
// };

export default CardStack;
