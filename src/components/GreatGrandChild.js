import React from 'react';
import { connect } from 'react-redux';

const GreatGrandChild = ({ count, firingComponent, increaseCount }) => {
	let bgStyle;
	if (firingComponent === 'greatGrandChild') {
		bgStyle = { backgroundColor: '#508AA8' };
	}

	return (
		<div className="greatGrandChild" style={bgStyle}>
			<h3>Great Grand Child</h3>
			<span className="number">{count}</span>
			<button onClick={increaseCount}>Increment</button>
		</div>
	);
};

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
	increaseCount: () => dispatch({ type: 'COUNTER_FIRING', payload: { firingComponent: 'greatGrandChild' } })
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GreatGrandChild);
