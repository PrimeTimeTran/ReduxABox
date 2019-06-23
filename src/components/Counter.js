import React from 'react';
import { connect } from 'react-redux';

import Child from './Child';

import { useInterval } from '../utils';
import Arrow from './Arrow';

const Counter = ({ count, dispatch, firingComponent, increaseCount }) => {
	useInterval(increaseCount, 1000);

	let conditionalBg;
	let arrowDirection = 'fas fa-arrow-alt-circle-';

	if (firingComponent === 'counter') {
		conditionalBg = { backgroundColor: '#508AA8' };
		arrowDirection += 'down';
	} else {
		arrowDirection += 'up';
	}

	const arrowStyle = { opacity: count % 2 === 0 || firingComponent === 'sibling' ? 0 : 1 };

	return (
		<div className="counter" style={conditionalBg}>
			<h3>Counter</h3>
			<span className="number">{count}</span>
			<div style={{ marginBottom: 10 }}>
				<button onClick={() => dispatch({ type: 'COUNTER_FIRING' })}>Increment</button>
			</div>
			<div className="counterChildren">
				<Arrow arrowStyle={arrowStyle} arrowDirection={arrowDirection} />
				<Child />
			</div>
		</div>
	);
};

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
	increaseCount: () => dispatch({ type: 'COUNTER_FIRING', payload: { firingComponent: 'counter' } })
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter);
