import React from 'react'
import { connect } from 'react-redux'

const GreatGrandChild = ({ count, dispatch, firingComponent }) => {

  let bgStyle
  if (firingComponent === 'greatGrandChild') {
    bgStyle = { backgroundColor: '#508AA8' }
  }

  return (
    <div className="greatGrandChild" style={bgStyle}>
      <h3>Great Grand Child</h3>
      <span className="number">{count}</span>
      <button onClick={() => dispatch({ type: 'GREAT_GRAND_CHILD_FIRING' })}>
        Increment
      </button>
    </div>
  )
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(GreatGrandChild)