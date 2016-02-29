import React from 'react'
import { findDOMNode } from 'react-dom'
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
      ripples: null
    }
  },
  componentDidMount() {
    let node = findDOMNode(this)
    let diameter = Math.max(node.offsetWidth, node.offsetHeight)
    this.setState({diameter: diameter})
  },
  handleTabClick(index, left) {
    let diameter = this.state.diameter
    let ripple = {
      width: diameter,
      height: diameter,
      top: 40 - diameter/2,
      left: left - diameter/2,
      background: items[index].color,
      transform: 'scale(0)'
    }
    this.addNewRipple(index, ripple)
  },
  addNewRipple(index, ripple) {
    this.setState({ripple: null})
    setTimeout(() => {
      this.setState({ripple: ripple})
    }, 5)
    setTimeout(() => {
      let newRipple = Object.assign({}, ripple, {transform: 'scale(2.5)'})
      this.setState({ripple: newRipple})
    }, 100)
    setTimeout(() => {
      this.setState({background: items[index].color})
    }, 500)
  },
  render() {
    let ripple = this.state.ripple ? <Ripple key={this.state.selected} size={this.state.ripple} /> : ''
    console.log(this.state.ripple)
    return (
      <div style={Object.assign({}, style.header, {background: this.state.background})}>
        {ripple}
        <Tab items={items} onClick={this.handleTabClick} />
      </div>
    )
  }
})

export default Header

