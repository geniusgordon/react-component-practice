import React from 'react'

const Page = React.createClass({
  render() {
    return <div>{this.props.params.name}</div>
  },
  propTypes: {
    params: React.PropTypes.object
  }
})

export default Page

