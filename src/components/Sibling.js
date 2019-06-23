import React from 'react';
import { connect } from 'react-redux';

const Sibling = ({ count, increaseCount, firingComponent }) => {
	const origin = firingComponent === 'sibling';
	let siblingStyle;
	if (origin) {
		siblingStyle = { backgroundColor: '#508AA8' };
	}

	return (
		<div className="sibling" style={siblingStyle}>
			<h3>Sibling</h3>
			<span className="number">{count}</span>
			<button onClick={increaseCount}>Increment</button>
		</div>
	);
};

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
	increaseCount: () => dispatch({ type: 'COUNTER_FIRING', payload: { firingComponent: 'sibling' } })
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Sibling);
