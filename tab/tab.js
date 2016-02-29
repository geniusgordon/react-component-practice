import React from 'react'
import Item from './item'
import Indicator from './indicator'

const style = {
  tab: {
    position: 'relative',
    width: '100%',
    height: 80
  }
}

const Tab = React.createClass({
  getInitialState() {
    return {
      selected: 0,
      indicator: {
        left: 10,
        width: 33
      }
    }
  },
  handleItemClick(index, left, width) {
    this.setState({
      selected: index,
      indicator: {left, width}
    })
    this.props.onClick(index, left);
  },
  render() {
    let items = this.props.items.map((item, i) => (
      <Item
        {...item}
        key={i}
        index={i}
        selected={i==this.state.selected} 
        onClick={this.handleItemClick} />
    ))
    return (
      <div style={style.tab}>
        {items}
        <Indicator position={this.state.indicator} />
      </div>
    )
  }
})

export default Tab

