/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _MobileMenu = __webpack_require__(1);

var _MobileMenu2 = _interopRequireDefault(_MobileMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mobile = new _MobileMenu2.default();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MobileMenu = function () {
    function MobileMenu() {
        _classCallCheck(this, MobileMenu);

        this.modifi = document.querySelector('.modifi');
        this.slider = document.querySelector('.slider');
        this.contador = document.querySelector('.contador');
        this.color = document.querySelector('.color');
        this.blur = document.querySelector('.blur');
        this.propbutton = document.querySelector('.propbutton');
        this.props = document.querySelector('.props');
        this.events();
    }

    _createClass(MobileMenu, [{
        key: 'events',
        value: function events() {
            this.slider.addEventListener('input', this.spacing.bind(this));
            this.color.addEventListener('input', this.changeColor.bind(this));
            this.blur.addEventListener('input', this.addBlur.bind(this));
            this.propbutton.addEventListener('click', this.callCss.bind(this));
        }
    }, {
        key: 'spacing',
        value: function spacing() {
            this.sliderval = this.slider.value;
            this.contador.innerHTML = this.sliderval;
            this.modifi.style.padding = this.sliderval + 'px';
        }
    }, {
        key: 'changeColor',
        value: function changeColor() {
            this.colorval = this.color.value;
            this.modifi.style.backgroundColor = this.colorval;
        }
    }, {
        key: 'addBlur',
        value: function addBlur() {
            this.blurval = this.blur.value;
            this.modifi.style.filter = 'blur(' + this.blurval + 'px)';
        }
    }, {
        key: 'callCss',
        value: function callCss() {
            this.attrstyle = this.modifi.getAttribute('style');
            this.props.innerHTML = "<p class='attr'>" + this.attrstyle + "</p>";
            console.log(_typeof(this.attrstyle));
        }
    }]);

    return MobileMenu;
}();

exports.default = MobileMenu;

// document.querySelector('.button').addEventListener('click', function(){
//     var valores = document.querySelector('.texto').value;
//     if (valores){
//         document.querySelector('.parrafo').innerHTML = valores;
//     } else {
//         valores = '';
//     }
//     document.querySelector('.texto').value = '';
// });

/***/ })
/******/ ]);