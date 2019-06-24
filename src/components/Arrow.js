import React from 'react';
import { connect } from 'react-redux';

const Arrow = ({ count, firingComponent, arrowStyle, arrowDirection, isBig }) => {
	const _arrowStyle = arrowStyle || { visibility: count % 2 === 0 ? 'hidden' : 'visible' };
	const _arrowDirection =
		arrowDirection || `fas fa-arrow-alt-circle-${firingComponent === 'sibling' ? 'right' : 'left'}`;

	return (
		<div className={`icon ${isBig && 'icon-big'}`} style={_arrowStyle}>
			<i className={_arrowDirection} />
		</div>
	);
};

Arrow.defaultProps = {
	isBig: false
};

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Arrow);
