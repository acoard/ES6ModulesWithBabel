(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

//main.js

var ConsoleWrapper = _interopRequire(require("./imports/ConsoleWrapper"));

var x = new ConsoleWrapper();
x.speak();

},{"./imports/ConsoleWrapper":2}],2:[function(require,module,exports){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var ConsoleWrapper = (function () {
	function ConsoleWrapper() {
		_classCallCheck(this, ConsoleWrapper);
	}

	_prototypeProperties(ConsoleWrapper, null, {
		speak: {
			// constructor(){

			// }

			value: function speak() {
				debugger;
				console.log("Hello, I am ", this);
			},
			writable: true,
			configurable: true
		}
	});

	return ConsoleWrapper;
})();

module.exports = ConsoleWrapper;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYWNvYXJkL0Rldi90ZW1wL2JhYmVsL21haW4uanMiLCIvVXNlcnMvYWNvYXJkL0Rldi90ZW1wL2JhYmVsL2ltcG9ydHMvQ29uc29sZVdyYXBwZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7SUNDTyxjQUFjLDJCQUFNLDBCQUEwQjs7QUFFckQsSUFBSSxDQUFDLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztBQUM3QixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Ozs7Ozs7OztJQ0pKLGNBQWM7VUFBZCxjQUFjO3dCQUFkLGNBQWM7OztzQkFBZCxjQUFjO0FBSW5CLE9BQUs7Ozs7O1VBQUEsaUJBQUU7QUFDTixhQUFTO0FBQ1QsV0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEM7Ozs7OztRQVBJLGNBQWM7OztBQVVwQixNQUFNLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvL21haW4uanNcbmltcG9ydCBDb25zb2xlV3JhcHBlciBmcm9tIFwiLi9pbXBvcnRzL0NvbnNvbGVXcmFwcGVyXCI7XG5cbnZhciB4ID0gbmV3IENvbnNvbGVXcmFwcGVyKCk7XG54LnNwZWFrKCk7IiwiY2xhc3MgQ29uc29sZVdyYXBwZXJ7XG5cdC8vIGNvbnN0cnVjdG9yKCl7XG5cblx0Ly8gfVxuXHRzcGVhaygpe1xuXHRcdGRlYnVnZ2VyO1xuXHRcdGNvbnNvbGUubG9nKFwiSGVsbG8sIEkgYW0gXCIsIHRoaXMpO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29uc29sZVdyYXBwZXI7Il19
