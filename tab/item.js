import React from 'react'
import { findDOMNode } from 'react-dom'
import { Link } from 'react-router'

const style = {
  display: 'inline-block',
  verticalAlign: 'top',
  height: 36,
  lineHeight: '36px',
  margin: '22px 10px',
  fontWeight: 700,
  textDecoration: 'none',
  color: 'white',
  cursor: 'pointer'
}

const Item = React.createClass({
  handleClick() {
    let node = findDOMNode(this)
    this.props.onClick(this.props.index, node.offsetLeft, node.offsetWidth)
  },
  render() {
    var {name} = this.props
    return (
      <Link
        to={name}
        style={style}
        onClick={this.handleClick}
      >{name}</Link>
    )
  },
  propTypes: {
    index: React.PropTypes.number,
    name: React.PropTypes.string,
    selected: React.PropTypes.bool,
    onClick: React.PropTypes.func
  }
})

export default Item

