var React = require('react')
var NavbarTitle = require('./navbar-title')
var NavbarItem = require('./navbar-item')
require('./navbar.scss')

var scrolledStyle = {
  background: '#fff',
  boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.1)'
}

var Navbar = React.createClass({
  getInitialState() {
    return {scrolled: false}
  },
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  },
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  },
  onScroll(e) {
    let scrollTop = e.srcElement.body.scrollTop
    this.setState({scrolled: scrollTop !== 0})
  },
  render() {
    let items = this.props.items.map((item) => (
      <NavbarItem key={item.text} {...item} scrolled={this.state.scrolled} />
    ))
    return (
      <nav
        className='navbar'
        style={this.state.scrolled ? scrolledStyle : {}}
      >
        <NavbarTitle scrolled={this.state.scrolled} />
        <div className='nav-right'>{items}</div>
      </nav>
    )
  },
  propTypes: {
    items: React.propTypes.array
  }
})

module.exports = Navbar

