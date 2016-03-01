import React from 'react'
import { findDOMNode } from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Ripple from './ripple'
import Tab from './tab'

const items = [{
  name: 'AAA',
  color: '#455A64'
}, {
  name: 'BBB',
  color: '#00BCD4'
}, {
  name: 'CCC',
  color: '#388E3C'
}]

let style = {
  header: {
    height: 300,
    position: 'relative',
    overflow: 'hidden'
  }
}

const Header = React.createClass({
  getInitialState() {
    return {
      background: '#455A64',
      selected: 0,
      diameter: 0,
      ripple: null
    }
  },
  componentDidMount() {
    let node = findDOMNode(this)
    let diameter = Math.max(node.offsetWidth, node.offsetHeight)
    this.setState({diameter: diameter})
    this.initialRipple(0, 0)
  },
  handleTabClick(index, left) {
    this.initialRipple(index, left)
    setTimeout(() => {
      this.setState({background: items[index].color})
    }, 500)
  },
  initialRipple(index, left) {
    let diameter = this.state.diameter
    let ripple = {
      width: diameter,
      height: diameter,
      top: 40 - diameter/2,
      left: left - diameter/2,
      background: items[index].color,
    }
    this.setState({selected: index, ripple: ripple})
  },
  render() {
    let ripple = this.state.ripple ? (
      <ReactCSSTransitionGroup
        transitionName="ripple"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={10}
      >
        <Ripple key={this.state.selected} size={this.state.ripple} />
      </ReactCSSTransitionGroup>
    ) : ''
    return (
      <div style={Object.assign({}, style.header, {background: this.state.background})}>
        {ripple}
        <Tab items={items} onClick={this.handleTabClick} />
      </div>
    )
  }
})

export default Header

