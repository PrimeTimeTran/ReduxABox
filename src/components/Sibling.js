import React from 'react'
import { connect } from 'react-redux'

const Sibling = ({ count, dispatch, firingComponent }) => {
  const origin = firingComponent === 'sibling'
  let siblingStyle
  if (origin) {
    siblingStyle = { backgroundColor: '#508AA8' }
  }

  return (
    <div className="sibling" style={siblingStyle}>
      <h3>Sibling</h3>
      <span className="number">{count}</span>
      <button onClick={() => dispatch({ type: 'SIBLING_FIRING' })}>
        Increment
      </button>
    </div>
  )
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(Sibling)