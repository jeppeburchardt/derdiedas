'use strict';

var React = require('react'),
	ReactDOM = require('react-dom'),
	App = require('./app.jsx');

// Here we put our React instance to the global scope. Make sure you do not put it 
// into production and make sure that you close and open your console if the 
// DEV-TOOLS does not display
window.React = React; 

var AppFactory = React.createFactory(App)();
ReactDOM.render(AppFactory, document.getElementById('app'));

// module.exports = AppFactory();