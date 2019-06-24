import React from 'react';
import { connect } from 'react-redux';

import GrandChild from './GrandChild';

const Child = ({ count, firingComponent }) => {
	const arrowStyle = { visibility: count % 2 === 0 || firingComponent === 'sibling' ? 'hidden' : 'visible' };
	const arrowDirection = `fas fa-arrow-alt-circle-${firingComponent === 'greatGrandChild' ? 'up' : 'down'}`;

	return (
		<div className="child">
			<h3>Child</h3>
			<div className="icon" style={arrowStyle}>
				<i className={arrowDirection} />
			</div>
			<GrandChild />
		</div>
	);
};

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Child);
