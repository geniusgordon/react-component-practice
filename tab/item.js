import React from 'react'
import { findDOMNode } from 'react-dom'
import { Link } from 'react-router'

const style = {
  display: 'inline-block',
  verticalAlign: 'top',
  height: 36,
  lineHeight: '36px',
  margin: '22px 10px',
  textDecoration: 'none',
  color: 'black',
  cursor: 'pointer'
}

const Item = React.createClass({
  handleClick() {
    let node = findDOMNode(this);
    this.props.onClick(node.offsetLeft, node.offsetWidth);
  },
  render() {
    var {name, selected} = this.props;
    return <Link to={name} style={style} onClick={this.handleClick}>{name}</Link>
  }
})

export default Item

