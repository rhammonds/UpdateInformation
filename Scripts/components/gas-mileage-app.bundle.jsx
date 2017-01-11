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
/*!************************************************!*\
  !*** ./Scripts/components/gas-mileage-app.jsx ***!
  \************************************************/
/***/ function(module, exports) {

	"use strict";

	var MileageListFrame = React.createClass({
	    displayName: "MileageListFrame",

	    render: function render() {
	        return React.createElement(
	            "div",
	            null,
	            React.createElement(
	                "table",
	                { className: "table table-bordered", style: { marginBottom: 10 } },
	                React.createElement(
	                    "thead",
	                    null,
	                    React.createElement(
	                        "tr",
	                        null,
	                        React.createElement(
	                            "td",
	                            { style: { minWidth: 60 } },
	                            React.createElement(
	                                "label",
	                                { className: "control-label" },
	                                "Date"
	                            )
	                        ),
	                        React.createElement(
	                            "td",
	                            { style: { minWidth: 30 } },
	                            React.createElement(
	                                "label",
	                                { className: "control-label" },
	                                "Miles"
	                            )
	                        ),
	                        React.createElement(
	                            "td",
	                            { style: { minWidth: 30 } },
	                            React.createElement(
	                                "label",
	                                { className: "control-label" },
	                                "Gallons"
	                            )
	                        ),
	                        React.createElement(
	                            "td",
	                            { style: { minWidth: 30 } },
	                            React.createElement(
	                                "label",
	                                { className: "control-label" },
	                                "MPG"
	                            )
	                        )
	                    )
	                ),
	                this.props.items.map(function (i) {
	                    return React.createElement(
	                        "tr",
	                        null,
	                        React.createElement(
	                            "td",
	                            null,
	                            i.dateInfo
	                        ),
	                        React.createElement(
	                            "td",
	                            null,
	                            i.miles
	                        ),
	                        React.createElement(
	                            "td",
	                            null,
	                            i.gallons
	                        ),
	                        React.createElement(
	                            "td",
	                            null,
	                            i.mpgInfo
	                        )
	                    );
	                })
	            )
	        );
	    }
	});

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
	                            "Date:"
	                        )
	                    ),
	                    React.createElement(
	                        "td",
	                        { style: { padding: 0, paddingLeft: 12, margin: 0 } },
	                        React.createElement(
	                            "label",
	                            { id: "Label1", className: "control-label" },
	                            this.props.dateInfo
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
	                            "Miles:"
	                        )
	                    ),
	                    React.createElement(
	                        "td",
	                        { style: { padding: 0, paddingLeft: 12, margin: 0 } },
	                        React.createElement(
	                            "label",
	                            { id: "Label1", className: "control-label" },
	                            this.props.milesInfo
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
	                            "Gallons:"
	                        )
	                    ),
	                    React.createElement(
	                        "td",
	                        { style: { padding: 0, paddingLeft: 12, margin: 0 } },
	                        React.createElement(
	                            "label",
	                            { id: "Label1", className: "control-label" },
	                            this.props.gallonsInfo
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

	function calculateMpg(miles, gallons) {
	    var mpg = 0;
	    if (gallons > 0) {
	        var mpg = (miles / gallons).toFixed(2);
	    };
	    return mpg;
	}

	var App = React.createClass({
	    displayName: "App",

	    getInitialState: function getInitialState() {
	        return {
	            dateInfo: null, miles: '', gallons: '', mpgInfo: 0, mileageList: []
	        };
	    },
	    updateDateInfo: function updateDateInfo(e) {
	        this.setState({ dateInfo: e.target.value });
	    },
	    handleMileageChange: function handleMileageChange(e) {
	        this.setState({ miles: e.target.value });
	        var mpg = calculateMpg(e.target.value, this.state.gallons);
	        this.setState({ mpgInfo: mpg });
	    },
	    handleGallonsChange: function handleGallonsChange(e) {
	        this.setState({ gallons: e.target.value });
	        var mpg = calculateMpg(this.state.miles, e.target.value);
	        this.setState({ mpgInfo: mpg });
	    },
	    addToMileageList: function addToMileageList() {
	        var mpg = this.state.mpgInfo;
	        if (mpg == 0) {
	            return;
	        };

	        var mileageListData = this.state.mileageList;
	        mileageListData.push({
	            dateInfo: this.state.dateInfo,
	            miles: this.state.miles,
	            gallons: this.state.gallons,
	            mpgInfo: this.state.mpgInfo

	        });

	        this.setState({ mileageList: mileageListData });

	        this.setState({ dateInfo: '' });
	        this.setState({ miles: '' });
	        this.setState({ gallons: '' });
	        this.setState({ mpgInfo: 0 });
	    },

	    render: function render() {
	        var mileageList = this.state.mileageList;
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
	                    { htmlFor: "DateInfo", className: "control-label col-md-4" },
	                    "Date:"
	                ),
	                React.createElement(
	                    "div",
	                    { className: "col-md-8" },
	                    React.createElement("input", { type: "text", id: "DateInfo", className: "form-control", value: this.state.dateInfo, onChange: this.updateDateInfo.bind(this) })
	                )
	            ),
	            React.createElement(
	                "div",
	                { className: "form-group", style: { margin: 0, marginBottom: 5, padding: 0 } },
	                React.createElement(
	                    "label",
	                    { htmlFor: "MilesInfo", className: "control-label col-md-4" },
	                    "Miles:"
	                ),
	                React.createElement(
	                    "div",
	                    { className: "col-md-8" },
	                    React.createElement("input", { type: "text", id: "MilesInfo", className: "form-control", value: this.state.miles, onChange: this.handleMileageChange.bind(this) })
	                )
	            ),
	            React.createElement(
	                "div",
	                { className: "form-group", style: { margin: 0, marginBottom: 5, padding: 0 } },
	                React.createElement(
	                    "label",
	                    { htmlFor: "GallonsInfo", className: "control-label col-md-4" },
	                    "Gallons:"
	                ),
	                React.createElement(
	                    "div",
	                    { className: "col-md-8" },
	                    React.createElement("input", { type: "text", id: "GallonsInfo", className: "form-control", value: this.state.gallons, onChange: this.handleGallonsChange.bind(this) })
	                )
	            ),
	            React.createElement("br", null),
	            React.createElement("br", null),
	            React.createElement(
	                "div",
	                { className: "form-group", style: { margin: 0, marginBottom: 5, padding: 0 } },
	                React.createElement(
	                    "label",
	                    { htmlFor: "GallonsInfo", className: "control-label col-md-4" },
	                    "MPG:"
	                ),
	                React.createElement(
	                    "div",
	                    { className: "col-md-8" },
	                    React.createElement(
	                        "label",
	                        { className: "control-label col-md-4" },
	                        this.state.mpgInfo
	                    ),
	                    React.createElement("br", null),
	                    React.createElement("br", null),
	                    React.createElement("br", null)
	                )
	            ),
	            React.createElement(
	                "div",
	                { className: "form-group" },
	                React.createElement(
	                    "button",
	                    { "class": "btn btn-primary bt-lg col-md-4", id: "addButton", onClick: this.addToMileageList },
	                    "Add"
	                )
	            ),
	            React.createElement(
	                "div",
	                { className: "form-group" },
	                React.createElement(
	                    "label",
	                    { className: "control-label" },
	                    "Mileage List"
	                )
	            ),
	            React.createElement(
	                "div",
	                { className: "form-group" },
	                React.createElement(MileageListFrame, { items: mileageList })
	            )
	        );
	    }
	});

	ReactDOM.render(React.createElement(App, null), document.getElementById('container'));

/***/ }
/******/ ]);