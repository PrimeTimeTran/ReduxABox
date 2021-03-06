import { createStore } from 'redux';

const initialState = {
	count: 0,
	firingComponent: null
};

const counter = (state = initialState, action) => {
	switch (action.type) {
		case 'COUNTER_FIRING':
			return {
				count: state.count + 1,
				firingComponent: action.payload.firingComponent
			};
		default:
			return state;
	}
};

const store = createStore(counter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
