var React = require('react');
var Radium = require('radium');

var scrolledStyle = {
    color: '#777776 !important'
};
var hoverStyle = {
    ':hover': {
        textDecoration: 'none',
        borderBottom: '3px solid #4db6ac'
    }
};

var NavbarItem = React.createClass({
    render() {
        return (
            <div className="nav-item">
                <a 
                    key={this.props.scrolled + '' + this.state.hover}
                    href={this.props.href}
                    style={[
                        hoverStyle,
                        this.props.scrolled && scrolledStyle
                    ]}
                >
                    {this.props.text}
                </a>
            </div>
        );
    }
});

module.exports = Radium(NavbarItem);

