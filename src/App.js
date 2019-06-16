import React from 'react'
import { Provider, connect } from 'react-redux'

import './App.css'
import store from './redux/store'

import Sibling from './components/Sibling'
import Counter from './components/Counter'

const App = ({ count, firingComponent }) => {
  const arrowStyle = { visibility: count % 2 === 0 ? 'hidden' : 'visible' }
  const arrowDirection = `fas fa-arrow-alt-circle-${firingComponent === 'sibling' ? 'right' : 'left'}`

  return (
    <div className="App">
      <Sibling />
      <div className="icon icon-big" style={arrowStyle}>
        <i className={arrowDirection} />
      </div>
      <Counter />
    </div>
  )
}

const mapStateToProps = state => ({ ...state })

const ConnectWrappedAppComponent = connect(mapStateToProps)(App)

const ProviderWrappedConnectWrappedAppComponent = () => {
  return (
    <Provider store={store}>
      <ConnectWrappedAppComponent />
    </Provider>
  )
}

export default ProviderWrappedConnectWrappedAppComponent
