import React from 'react'

const style = {
  height: 3,
  background: 'white',
  position: 'absolute',
  bottom: 22,
  transition: 'all 0.25s ease'
}

const Indicator = ({position}) => (
  <div style={Object.assign({}, style, position)}></div>
)

Indicator.propTypes = {
  position: React.PropTypes.object
}

export default Indicator

