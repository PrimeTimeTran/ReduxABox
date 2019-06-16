import React from 'react'
import { connect } from 'react-redux'

const Sibling = (props) => {
  const increment = () => props.dispatch({ type: 'SIBLING_FIRING' })
  const origin = props.firingComponent === 'sibling'
  let color
  if (origin) {
    color = '#508AA8'
  }

  return (
    <div className="sibling" style={{ backgroundColor: color }}>
      <h3>Sibling</h3>
      <span className="number">{props.count}</span>
      <button onClick={increment}>
        Increment
      </button>
    </div>
  )
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(Sibling)