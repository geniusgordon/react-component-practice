import React from 'react'

const Page = React.createClass({
  render() {
    return <div>{this.props.params.name}</div>
  }
})

export default Page

