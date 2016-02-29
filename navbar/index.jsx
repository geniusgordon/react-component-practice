var React = require('react');
var ReactDOM = require('react-dom');
var Navbar = require('./navbar');

var items = [{
    text: 'SPONSORS',
    href: '#'
}, {
    text: 'SPEAKERS',
    href: '#'
}];

var A = {
    width: '100%',
    height: 500,
    background: '#555'
};

var B = {
    width: '100%',
    height: 1000,
};

var layout = (
    <div>
        <Navbar items={items} />
        <div style={A}></div>
        <div style={B}></div>
    </div>
);

ReactDOM.render(layout, document.getElementById('root'));

