import React from 'react'
import { connect } from 'react-redux'

import GreatGrandChild from './GreatGrandChild'

const GrandChild = ({ count, firingComponent }) => {
  const arrowDirection = `fas fa-arrow-alt-circle-${firingComponent === 'greatGrandChild' ? 'up' : 'down'}`
  const arrowStyle = { visibility: count % 2 === 0 || firingComponent === 'sibling' ? 'hidden' : 'visible' }

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
