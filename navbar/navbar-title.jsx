var React = require('react');

var scrolledStyle = {
    left: 0
};
var scrolledColor = {
    color: 'black !important'
};

var NavbarTitle = React.createClass({
    render() {
        return (
            <div 
                className="nav-left"
                style={this.props.scrolled ? scrolledStyle : {}}
            >
                <div className="nav-item" id="nav-logo">G</div>
                <div 
                    key={this.props.scrolled}
                    className="nav-item"
                    id="nav-title"
                    style={this.props.scrolled ? scrolledColor : {}}
                >ganxus</div>
            </div>
        );
    }
});

module.exports = NavbarTitle;

