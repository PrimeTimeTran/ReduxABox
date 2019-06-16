import React from 'react'
import { connect } from 'react-redux'

import GreatGrandChild from './GreatGrandChild'

const GrandChild = ({ count, firingComponent }) => {
  const siblingFiring = firingComponent === 'sibling'
  const blinker = count % 2 === 0 || siblingFiring

  const direction = firingComponent === 'greatGrandChild' ? 'up' : 'down'
  const arrowDirection = `fas fa-arrow-alt-circle-${direction}`
  const arrowStyle = { visibility: blinker ? 'hidden' : 'visible' }

  return (
    <div className="grandChild">
      <h3>Grand Child</h3>
      <div className="icon" style={arrowStyle}>
        <i className={arrowDirection} />
      </div>
      <GreatGrandChild />
    </div>
  )
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(GrandChild)
