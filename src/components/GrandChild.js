import React from 'react';
import { connect } from 'react-redux';

import GreatGrandChild from './GreatGrandChild';
import Arrow from './Arrow';

const GrandChild = ({ count, firingComponent }) => {
	const arrowDirection = `fas fa-arrow-alt-circle-${firingComponent === 'greatGrandChild' ? 'up' : 'down'}`;
	const arrowStyle = { visibility: count % 2 === 0 || firingComponent === 'sibling' ? 'hidden' : 'visible' };

	return (
		<div className="grandChild">
			<h3>Grand Child</h3>
			<Arrow arrowStyle={arrowStyle} arrowDirection={arrowDirection} />
			<GreatGrandChild />
		</div>
	);
};

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(GrandChild);
