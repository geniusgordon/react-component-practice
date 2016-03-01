import React from 'react'
import './ripple.scss'

const Ripple = ({size}) => (
  <div className='ripple' style={size}></div>
)

Ripple.propTypes = {
  size: React.PropTypes.object
}

export default Ripple

