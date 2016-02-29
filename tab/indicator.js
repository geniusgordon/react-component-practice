import React from 'react'

const style = {
  height: 1,
  background: 'black',
  position: 'absolute',
  bottom: 22,
  transition: 'all 0.25s ease'
}

const Indicator = ({position}) => (
  <div style={Object.assign({}, style, position)}></div>
)

export default Indicator

