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
  }
})

export default App

