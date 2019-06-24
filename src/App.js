import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import store from './redux/store';

import Sibling from './components/Sibling';
import Counter from './components/Counter';
import Arrow from './components/Arrow';

const App = () => {
	return (
		<Provider store={store}>
			<div className="App">
				<Sibling />
				<Arrow isBig />
				<Counter />
			</div>
		</Provider>
	);
};

export default App;
