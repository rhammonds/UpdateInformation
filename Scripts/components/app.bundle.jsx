/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************************!*\
  !*** ./Scripts/components/app.jsx ***!
  \************************************/
/***/ function(module, exports) {

	"use strict";

	var YouTypeFrame = React.createClass({
	    displayName: "YouTypeFrame",

	    render: function render() {
	        return React.createElement(
	            "div",
	            null,
	            React.createElement(
	                "h1",
	                null,
	                "You typed:"
	            ),
	            React.createElement("br", null),
	            React.createElement(
	                "table",
	                { "class": "table borderless", style: { marginBottom: 10 } },
	                React.createElement(
	                    "tr",
	                    null,
	                    React.createElement(
	                        "td",
	                        { style: { padding: 0, paddingLeft: 12, margin: 0, minWidth: 110 } },
	                        React.createElement(
	                            "label",
	                            { className: "control-label" },
	                            "Name:"
	                        )
	                    ),
	                    React.createElement(
	                        "td",
	                        { style: { padding: 0, paddingLeft: 12, margin: 0 } },
	                        React.createElement(
	                            "label",
	                            { id: "Label1", className: "control-label" },
	                            this.props.nameInfo
	                        )
	                    )
	                ),
	                React.createElement(
	                    "tr",
	                    null,
	                    React.createElement(
	                        "td",
	                        { style: { padding: 0, paddingLeft: 12, margin: 0, minWidth: 110 } },
	                        React.createElement(
	                            "label",
	                            { className: "control-label" },
	                            "Address:"
	                        )
	                    ),
	                    React.createElement(
	                        "td",
	                        { style: { padding: 0, paddingLeft: 12, margin: 0 } },
	                        React.createElement(
	                            "label",
	                            { id: "Label1", className: "control-label" },
	                            this.props.addressInfo
	                        )
	                    )
	                ),
	                React.createElement(
	                    "tr",
	                    null,
	                    React.createElement(
	                        "td",
	                        { style: { padding: 0, paddingLeft: 12, margin: 0, minWidth: 110 } },
	                        React.createElement(
	                            "label",
	                            { className: "control-label" },
	                            "City:"
	                        )
	                    ),
	                    React.createElement(
	                        "td",
	                        { style: { padding: 0, paddingLeft: 12, margin: 0 } },
	                        React.createElement(
	                            "label",
	                            { id: "Label1", className: "control-label" },
	                            this.props.cityInfo
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

	var App = React.createClass({
	    displayName: "App",

	    getInitialState: function getInitialState() {
	        return { nameInfo: "", addressInfo: "", cityInfo: "" };
	    },
	    handleKeyPress: function handleKeyPress(e) {
	        //var x = this.state.nameInfo + String.fromCharCode(e.which);

	        //alert(String.fromCharCode(e.which));
	        //this.setState({ nameInfo: String.fromCharCode(e.which) });
	        //this.state.nameInfo += String.fromCharCode(e.which);
	        var x = document.getElementById('NameInfo').value;
	        this.setState({ nameInfo: x });

	        x = document.getElementById('AddressInfo').value;
	        this.setState({ addressInfo: x });

	        x = document.getElementById('CityInfo').value;
	        this.setState({ cityInfo: x });
	    },

	    render: function render() {

	        return React.createElement(
	            "div",
	            null,
	            React.createElement(
	                "h1",
	                null,
	                "Enter Information"
	            ),
	            React.createElement("br", null),
	            React.createElement(
	                "div",
	                { className: "form-group", style: { margin: 0, marginBottom: 5, padding: 0 } },
	                React.createElement(
	                    "label",
	                    { htmlFor: "NameInfo", className: "control-label col-md-4" },
	                    "Name:"
	                ),
	                React.createElement(
	                    "div",
	                    { className: "col-md-8" },
	                    React.createElement("input", { type: "text", id: "NameInfo", className: "form-control", onKeyUp: this.handleKeyPress })
	                )
	            ),
	            React.createElement(
	                "div",
	                { className: "form-group", style: { margin: 0, marginBottom: 5, padding: 0 } },
	                React.createElement(
	                    "label",
	                    { htmlFor: "AddressInfo", className: "control-label col-md-4" },
	                    "Address:"
	                ),
	                React.createElement(
	                    "div",
	                    { className: "col-md-8" },
	                    React.createElement("input", { type: "text", id: "AddressInfo", className: "form-control", onKeyUp: this.handleKeyPress })
	                )
	            ),
	            React.createElement(
	                "div",
	                { className: "form-group", style: { margin: 0, marginBottom: 5, padding: 0 } },
	                React.createElement(
	                    "label",
	                    { htmlFor: "CityInfo", className: "control-label col-md-4" },
	                    "City:"
	                ),
	                React.createElement(
	                    "div",
	                    { className: "col-md-8" },
	                    React.createElement("input", { type: "text", id: "CityInfo", className: "form-control", onKeyUp: this.handleKeyPress })
	                )
	            ),
	            React.createElement("br", null),
	            React.createElement(
	                "div",
	                { className: "form-group", style: { margin: 0, marginBottom: 5, padding: 0 } },
	                React.createElement(YouTypeFrame, { nameInfo: this.state.nameInfo, addressInfo: this.state.addressInfo, cityInfo: this.state.cityInfo })
	            )
	        );
	    }
	});

	ReactDOM.render(React.createElement(App, null), document.getElementById('container'));

/***/ }
/******/ ]);