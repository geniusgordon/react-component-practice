import React from 'react'
import Tab from './tab'

const items = [{
  name: 'AAA'
}, {
  name: 'BBB'
}, {
  name: 'CCC'
}]

const App = React.createClass({
  render() {
    return <div><Tab items={items} />{this.props.children}</div>
  }
})

export default App

