import React from 'react'

const style = {
  ripple: {
    position: 'absolute',
    borderRadius: '100%',
    transition: 'transform 0.5s'
  }
}

const Ripple = ({size}) => (
  <div
    style={Object.assign({}, style.ripple, size)}
  ></div>
)

export default Ripple

