import React from 'react'
import { connect } from 'react-redux'

import GrandChild from './GrandChild'

const Child = ({ count, firingComponent }) => {
  const siblingFiring = firingComponent === 'sibling'
  const blinker = count % 2 === 0 || siblingFiring
  const arrowStyle = { visibility: blinker ? 'hidden' : 'visible' }

  const direction = firingComponent === 'greatGrandChild' ? 'up' : 'down'
  const arrowDirection = `fas fa-arrow-alt-circle-${direction}`

  return (
    <div className="child">
      <h3>Child</h3>
      <div className="icon" style={arrowStyle}>
        <i className={arrowDirection} />
      </div>
      <GrandChild />
    </div>
  )
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(Child)
