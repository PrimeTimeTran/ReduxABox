import React from 'react'
import { connect } from 'react-redux'

import Child from './Child'

import { useInterval } from '../utils'

const Counter = ({ count, dispatch, firingComponent }) => {
  useInterval(() => {
    dispatch({ type: 'COUNTER_FIRING' })
  }, 1000)

  let conditionalBg
  let arrowDirection = 'fas fa-arrow-alt-circle-'

  if (firingComponent === 'counter') {
    conditionalBg = { backgroundColor: '#508AA8' }
    arrowDirection += 'down'
  } else {
    arrowDirection += 'up'
  }

  const arrowStyle = { opacity: count % 2 === 0 || firingComponent === 'sibling' ? 0 : 1 }

  return (
    <div className="counter" style={conditionalBg}>
      <h3>Counter</h3>
      <span className="number">{count}</span>
      <div style={{ marginBottom: 10 }}>
        <button onClick={() => dispatch({ type: 'COUNTER_FIRING' })}>
          Increment
        </button>
      </div>
      <div className="counterChildren">
        <div className="icon">
          <i className={arrowDirection} style={arrowStyle} />
        </div>
        <Child />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(Counter)
