import React from 'react'
import Header from './header'

const App = React.createClass({
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  },
  propTypes: {
    children: React.PropTypes.element
  }
})

export default App

