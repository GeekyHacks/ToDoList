/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/addTask.js":
/*!********************************!*\
  !*** ./src/modules/addTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   taskarr: () => (/* binding */ taskarr)
/* harmony export */ });
/* harmony import */ var _userInput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userInput.js */ "./src/modules/userInput.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var taskarr = JSON.parse(localStorage.getItem('taskarr')) || [];
var addTask = function addTask(description, index) {
  index = taskarr.length;
  var newTask = new _userInput_js__WEBPACK_IMPORTED_MODULE_0__.TaskObject(description, index);
  taskarr.push(newTask);
  // this will sort out the  user input index
  var sortedArr = _toConsumableArray(taskarr);
  sortedArr.sort(function (a, b) {
    return a.index - b.index;
  });
  (0,_userInput_js__WEBPACK_IMPORTED_MODULE_0__.saveData)(taskarr);
  return taskarr;
};
var checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {};
var $checkboxes = $('#checkbox-container :checkbox');
$checkboxes.on('change', function () {
  $checkboxes.each(function () {
    checkboxValues[this.id] = this.checked;
  });
  localStorage.setItem('checkboxValues', JSON.stringify(checkboxValues));
});

/***/ }),

/***/ "./src/modules/displayList.js":
/*!************************************!*\
  !*** ./src/modules/displayList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   tasksList: () => (/* binding */ tasksList)
/* harmony export */ });
/* harmony import */ var _addTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTask.js */ "./src/modules/addTask.js");
/* harmony import */ var _assets_trash_can_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/trash-can.png */ "./src/assets/trash-can.png");
/* harmony import */ var _userInput_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userInput.js */ "./src/modules/userInput.js");



var tasksList = document.querySelector('#tasksList');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (task) {
  for (var i = 0; i < _addTask_js__WEBPACK_IMPORTED_MODULE_0__.taskarr.length; i += 1) {
    task = document.createElement('li');
    task.classList.add('newTask');
    if (_addTask_js__WEBPACK_IMPORTED_MODULE_0__.taskarr[i].description !== '' && _addTask_js__WEBPACK_IMPORTED_MODULE_0__.taskarr[i].completed === true) {
      task.innerHTML = "\n      <input type=\"checkbox\" checked class=\"checkB\" ".concat(_addTask_js__WEBPACK_IMPORTED_MODULE_0__.taskarr[i].completed, " autocomplete=\"false\"  />\n      <input class=\"newTasks\" type=\"text\" id=\"addItem\" value=\"").concat(_addTask_js__WEBPACK_IMPORTED_MODULE_0__.taskarr[i].description, "\" />\n      <img class=\"trash\" id=\"trash\"  src='./assets/trash-can.png' alt=\"\" />\n   \n      ");
    }
    if (_addTask_js__WEBPACK_IMPORTED_MODULE_0__.taskarr[i].description !== '' && _addTask_js__WEBPACK_IMPORTED_MODULE_0__.taskarr[i].completed === false) {
      task.innerHTML = "\n      <input type=\"checkbox\" class=\"checkB\" ".concat(_addTask_js__WEBPACK_IMPORTED_MODULE_0__.taskarr[i].completed, "  />\n      <input class=\"newTasks\" type=\"text\" id=\"addItem\" value=\"").concat(_addTask_js__WEBPACK_IMPORTED_MODULE_0__.taskarr[i].description, "\" />\n      <img class=\"trash\" id=\"trash\"  src='/assets/three-dots.png' alt=\"\" />\n      ");
    }
    if (_addTask_js__WEBPACK_IMPORTED_MODULE_0__.taskarr[i].description === '') {
      tasksList.innerHTML = '';
    }
    tasksList.appendChild(task);
  }
  var taskDescription = document.querySelectorAll('#addItem');
  taskDescription.forEach(function (task, index) {
    task.addEventListener('click', function (event) {
      task.classList.add('edit');
      return event.preventDefault();
    });
    task.addEventListener('change', function (event) {
      task.readOnly = false;
      task.classList.remove('edit');
      RTCRtpReceiver;
      return event.preventDefault();
    });
    // the trick is with input
    task.addEventListener('input', function () {
      _addTask_js__WEBPACK_IMPORTED_MODULE_0__.taskarr[index].description = task.value;
      (0,_userInput_js__WEBPACK_IMPORTED_MODULE_2__.saveData)(_addTask_js__WEBPACK_IMPORTED_MODULE_0__.taskarr);
    });
  });
});

/***/ }),

/***/ "./src/modules/removeItems.js":
/*!************************************!*\
  !*** ./src/modules/removeItems.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (taskarr, index) {
  taskarr.splice(index, 1);
  var i = index;
  while (i < taskarr.length) {
    taskarr[i].index = i;
    i += 1;
  }
  return taskarr;
});

/***/ }),

/***/ "./src/modules/updateStatus.js":
/*!*************************************!*\
  !*** ./src/modules/updateStatus.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskStatus: () => (/* binding */ TaskStatus)
/* harmony export */ });
/* harmony import */ var _addTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTask.js */ "./src/modules/addTask.js");
/* harmony import */ var _userInput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userInput.js */ "./src/modules/userInput.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var TaskStatus = /*#__PURE__*/_createClass(function TaskStatus() {
  _classCallCheck(this, TaskStatus);
});
_defineProperty(TaskStatus, "updateStatus", function () {
  var checkB = document.querySelectorAll('.checkB');
  checkB.forEach(function (checkbox, i) {
    checkbox.addEventListener('change', function () {
      if (!_addTask_js__WEBPACK_IMPORTED_MODULE_0__.taskarr[i].completed) {
        _addTask_js__WEBPACK_IMPORTED_MODULE_0__.taskarr[i].completed = true;
        checkbox.setAttribute('checked', 'checked');
        document.location.reload();
        (0,_userInput_js__WEBPACK_IMPORTED_MODULE_1__.saveData)(_addTask_js__WEBPACK_IMPORTED_MODULE_0__.taskarr);
      } else {
        _addTask_js__WEBPACK_IMPORTED_MODULE_0__.taskarr[i].completed = false;
        document.location.reload();
        (0,_userInput_js__WEBPACK_IMPORTED_MODULE_1__.saveData)(_addTask_js__WEBPACK_IMPORTED_MODULE_0__.taskarr);
      }
    });
  });
});
_defineProperty(TaskStatus, "clearCompleted", function () {
  var clearAllBtn = document.querySelector('#clearAllBtn');
  clearAllBtn.addEventListener('click', function () {
    var notCompleted = _addTask_js__WEBPACK_IMPORTED_MODULE_0__.taskarr.filter(function (task) {
      return task.completed !== true;
    });
    notCompleted.forEach(function (e, i) {
      e.index = i + 1;
    });
    (0,_userInput_js__WEBPACK_IMPORTED_MODULE_1__.saveData)(notCompleted);
    window.location.reload();
  });
});

/***/ }),

/***/ "./src/modules/userInput.js":
/*!**********************************!*\
  !*** ./src/modules/userInput.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskObject: () => (/* binding */ TaskObject),
/* harmony export */   saveData: () => (/* binding */ saveData)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var TaskObject = /*#__PURE__*/_createClass(function TaskObject(description, index) {
  _classCallCheck(this, TaskObject);
  this.description = description;
  this.completed = false;
  this.index = index;
});
var saveData = function saveData(data) {
  localStorage.setItem('taskarr', JSON.stringify(data));
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/sass/main.sass":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/sass/main.sass ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2fa8cc;
  font-family: "Roboto", sans-serif;
  white-space: pre-wrap;
  word-wrap: break-word;
  padding: 3rem;
}

img {
  transition: all 0.5s;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  background-color: #acc6e4;
  border-radius: 4px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  text-align: left;
  width: 50%;
}

#tasksList {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

div, li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  border: 0;
  padding: 0.1rem;
  gap: 0.1rem;
  margin-bottom: 0.25rem;
}

li {
  justify-content: space-evenly;
  margin-bottom: 0;
  padding: 0.5rem;
}

#newTask::focus {
  background: #a8ccf5;
}

div {
  gap: 0.2rem;
}
div h1 {
  color: black;
  font-size: 0.8rem;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  letter-spacing: 0.0025rem;
}

input {
  color: black;
  font-size: 0.6rem;
  font-family: "Inter", sans-serif;
  letter-spacing: 0.0125rem;
  border: 0;
  padding: 0.3rem;
  align-self: stretch;
  border-radius: 4px;
}

#userInput {
  height: 1.5rem;
  width: 100%;
}

#addItem {
  flex: 0.9;
  outline: none;
}

#checkB {
  flex: 0.1;
  border-radius: 4px;
  height: 1.3rem;
  align-self: center;
  cursor: pointer;
  transition: all 0.5s;
}

#recyclImg, #addBtn, #dotsImg, #trash {
  height: 1rem;
  width: 1rem;
  opacity: 0.5;
}
#recyclImg:hover, #addBtn:hover, #dotsImg:hover, #trash:hover {
  opacity: 1;
}

#trash {
  visibility: visible;
}

#clearAllBtn {
  transition: all 0.5s;
  border-radius: 2px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 0.8rem;
  letter-spacing: 0.001em;
  word-spacing: normal;
  background-color: #2fa8cc;
  color: #acc6e4;
  border: 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  padding: 5px;
  cursor: pointer;
  text-align: center;
  margin-top: 0.3rem;
}
#clearAllBtn:active {
  transform: scale(0.98);
}
#clearAllBtn:focus {
  outline: 0;
}

.edit {
  background-color: #a8ccf5;
}

.hide {
  visibility: hidden;
}

.show {
  visibility: visible;
}`, "",{"version":3,"sources":["webpack://./src/styles/sass/global.sass","webpack://./src/styles/sass/main.sass"],"names":[],"mappings":"AAKA;EACI,sBAAA;EACA,SAAA;EACA,UAAA;ACHJ;;AADA;EDSI,aAAA;EACA,sBAAA;ECRA,uBAAA;EACA,mBAAA;EACA,yBDPY;ECQZ,iCAAA;EACA,qBAAA;EACA,qBAAA;EACA,aAAA;AAKJ;;AAHA;EACI,oBAAA;AAMJ;;AALA;EDHI,aAAA;EACA,sBAAA;ECIA,uBAAA;EACA,oBAAA;EACA,yBDlBc;ECmBd,kBAAA;EACA,wEDlBS;ECmBT,aAAA;EACA,gBAAA;EACA,UAAA;AASJ;;AARA;EDbI,aAAA;EACA,sBAAA;ECcA,WAAA;AAYJ;;AAXA;EDbI,aAAA;EACA,mBAAA;ECcA,8BAAA;EACA,mBAAA;EACA,kBAAA;EAEA,SAAA;EACA,eAAA;EACA,WAAA;EACA,sBAAA;AAcJ;;AAbA;EACI,6BAAA;EACA,gBAAA;EACA,eAAA;AAgBJ;;AAbI;EACI,mBD3CI;AC2DZ;;AAfA;EACI,WAAA;AAkBJ;AAjBI;EDOA,YAAA;EACA,iBAAA;EACA,gCA1DQ;EA2DR,gBAAA;EACA,yBAAA;ACaJ;;AArBA;EDUI,YAAA;EACA,iBAAA;EACA,gCAhEQ;EAiER,yBAAA;ECXA,SAAA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;AA2BJ;;AAzBA;EACI,cAAA;EACA,WAAA;AA4BJ;;AAzBA;EACI,SAAA;EACA,aAAA;AA4BJ;;AA3BA;EACI,SAAA;EACA,kBAAA;EACA,cAAA;EACA,kBAAA;EACA,eAAA;EACA,oBAAA;AA8BJ;;AA5BA;EACI,YAAA;EACA,WAAA;EACA,YAAA;AA+BJ;AA9BI;EACI,UAAA;AAgCR;;AA/BA;EACI,mBAAA;AAkCJ;;AAjCA;EDhEI,oBAAA;EACA,kBAAA;EACA,gCArBQ;EAsBR,gBAAA;EACA,iBAAA;EACA,uBAAA;EACA,oBAAA;EACA,yBAzBY;EA0BZ,cAzBc;EA0Bd,SAAA;EACA,wEAzBS;EA0BT,YAAA;EACA,eAAA;EACA,kBAAA;ECqDA,kBAAA;AAiDJ;AA/CI;EACI,sBAAA;AAiDR;AA/CI;EACI,UAAA;AAiDR;;AAhDA;EACI,yBD1FQ;AC6IZ;;AAlDA;EACI,kBAAA;AAqDJ;;AApDA;EACI,mBAAA;AAuDJ","sourcesContent":["$InterFont: \"Inter\", sans-serif\r\n$primary-color: #2fa8cc\r\n$secondary-color: #acc6e4\r\n$inputColor:#a8ccf5\r\n$box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1)\r\n*\r\n    box-sizing: border-box\r\n    margin: 0\r\n    padding: 0\r\n\r\n// mixings\r\n\r\n@mixin columnFlex\r\n    display: flex\r\n    flex-direction: column\r\n@mixin rowFlex\r\n    display: flex\r\n    flex-direction: row\r\n@mixin button\r\n    transition: all 0.5s\r\n    border-radius: 2px\r\n    font-family: $InterFont\r\n    font-weight: 500\r\n    font-size: .8rem\r\n    letter-spacing: 0.001em\r\n    word-spacing: normal\r\n    background-color: $primary-color\r\n    color: $secondary-color\r\n    border: 0\r\n    box-shadow: $box-shadow\r\n    padding: 5px\r\n    cursor: pointer\r\n    text-align: center\r\n\r\n@mixin twoThreeGrid\r\n    display: grid\r\n    grid-template-columns: 1fr 1fr\r\n    grid-template-rows: 1fr 1fr 1fr\r\n\r\n@mixin globalFont\r\n    font-family: $InterFont\r\n    font-weight: 500\r\n    font-size: 1.2rem\r\n@mixin smlInterH1\r\n    color: black\r\n    font-size: 2rem\r\n    font-family: $InterFont\r\n    font-weight: 800\r\n    letter-spacing: -0.0525rem\r\n@mixin smlInterH2\r\n    color: black\r\n    font-size: 1.5rem\r\n    font-family: $InterFont\r\n    font-weight: 800\r\n    letter-spacing: -0.0225rem\r\n@mixin smlInterH3\r\n    color: black\r\n    font-size: .8rem\r\n    font-family: $InterFont\r\n    font-weight: 600\r\n    letter-spacing: 0.0025rem\r\n@mixin smlInterP\r\n    color: black\r\n    font-size: .6rem\r\n    font-family: $InterFont\r\n    letter-spacing: 0.0125rem","@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap')\r\n@import global\r\n\r\n// $trashcan: \r\nbody\r\n    @include columnFlex\r\n    justify-content: center\r\n    align-items: center\r\n    background-color: $primary-color\r\n    font-family: 'Roboto', sans-serif\r\n    white-space: pre-wrap\r\n    word-wrap: break-word\r\n    padding: 3rem\r\n    // height: 100vh\r\nimg\r\n    transition: all 0.5s\r\n.container\r\n    @include columnFlex\r\n    justify-content: center\r\n    align-items: stretch\r\n    background-color: $secondary-color\r\n    border-radius: 4px\r\n    box-shadow: $box-shadow\r\n    padding: 10px\r\n    text-align: left\r\n    width: 50%\r\n#tasksList\r\n    @include columnFlex\r\n    gap: .2rem\r\ndiv, li\r\n    @include rowFlex\r\n    justify-content: space-between\r\n    align-items: center\r\n    border-radius: 4px\r\n    // margin-top: .3rem\r\n    border: 0\r\n    padding: .1rem\r\n    gap: .1rem\r\n    margin-bottom: .25rem\r\nli\r\n    justify-content: space-evenly\r\n    margin-bottom: 0\r\n    padding: .5rem\r\n\r\n#newTask\r\n    &::focus\r\n        background: $inputColor\r\ndiv\r\n    gap: .2rem\r\n    h1\r\n        @include smlInterH3\r\n\r\ninput\r\n    @include smlInterP\r\n    border: 0\r\n    padding: .3rem\r\n    align-self: stretch\r\n    border-radius: 4px\r\n\r\n#userInput\r\n    height: 1.5rem\r\n    width: 100%\r\n    // margin-bottom: .3rem\r\n\r\n#addItem\r\n    flex: .9\r\n    outline: none\r\n#checkB\r\n    flex: .1\r\n    border-radius: 4px\r\n    height: 1.3rem\r\n    align-self: center\r\n    cursor: pointer\r\n    transition: all 0.5s\r\n\r\n#recyclImg, #addBtn,#dotsImg,#trash\r\n    height: 1rem\r\n    width: 1rem\r\n    opacity: .5\r\n    &:hover\r\n        opacity: 1\r\n#trash\r\n    visibility: visible\r\n#clearAllBtn\r\n    @include button\r\n    margin-top: .3rem\r\n\r\n    &:active\r\n        transform: scale(0.98)\r\n\r\n    &:focus\r\n        outline: 0\r\n.edit\r\n    background-color: $inputColor\r\n.hide\r\n    visibility: hidden\r\n.show\r\n    visibility: visible\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/enter.png":
/*!******************************!*\
  !*** ./src/assets/enter.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/enter.png");

/***/ }),

/***/ "./src/assets/refresh.png":
/*!********************************!*\
  !*** ./src/assets/refresh.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/refresh.png");

/***/ }),

/***/ "./src/assets/three-dots.png":
/*!***********************************!*\
  !*** ./src/assets/three-dots.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/three-dots.png");

/***/ }),

/***/ "./src/assets/trash-can.png":
/*!**********************************!*\
  !*** ./src/assets/trash-can.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/trash-can.png");

/***/ }),

/***/ "./src/styles/sass/main.sass":
/*!***********************************!*\
  !*** ./src/styles/sass/main.sass ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./main.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/sass/main.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_sass_main_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/sass/main.sass */ "./src/styles/sass/main.sass");
/* harmony import */ var _assets_refresh_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/refresh.png */ "./src/assets/refresh.png");
/* harmony import */ var _assets_enter_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/enter.png */ "./src/assets/enter.png");
/* harmony import */ var _assets_trash_can_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/trash-can.png */ "./src/assets/trash-can.png");
/* harmony import */ var _modules_addTask_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/addTask.js */ "./src/modules/addTask.js");
/* harmony import */ var _modules_displayList_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/displayList.js */ "./src/modules/displayList.js");
/* harmony import */ var _assets_three_dots_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/three-dots.png */ "./src/assets/three-dots.png");
/* harmony import */ var _modules_removeItems_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/removeItems.js */ "./src/modules/removeItems.js");
/* harmony import */ var _modules_updateStatus_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/updateStatus.js */ "./src/modules/updateStatus.js");
/* harmony import */ var _modules_userInput_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/userInput.js */ "./src/modules/userInput.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }










var userInput = document.querySelector('#userInput');
var addBtn = document.querySelector('#addBtn');
var refresh = document.querySelector('#recyclImg');
(0,_modules_displayList_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_modules_addTask_js__WEBPACK_IMPORTED_MODULE_4__.taskarr);
// this is to reload the page whenever needed
var reloading = function reloading() {
  setInterval(document.location.reload());
};

// this is for the refresh icon 
refresh.addEventListener('click', function () {
  return reloading();
});
_modules_updateStatus_js__WEBPACK_IMPORTED_MODULE_8__.TaskStatus.updateStatus();
_modules_updateStatus_js__WEBPACK_IMPORTED_MODULE_8__.TaskStatus.clearCompleted();

// add tasks
addBtn.addEventListener('click', function (event) {
  var description = userInput.value;
  var index = _modules_addTask_js__WEBPACK_IMPORTED_MODULE_4__.taskarr.length;
  if (description === '') {
    return null;
  }
  (0,_modules_addTask_js__WEBPACK_IMPORTED_MODULE_4__.addTask)(description, index);
  reloading(_modules_addTask_js__WEBPACK_IMPORTED_MODULE_4__.taskarr);
  return event.preventDefault();
});
userInput.addEventListener('keypress', function (event) {
  var description = userInput.value;
  var index = _modules_addTask_js__WEBPACK_IMPORTED_MODULE_4__.taskarr.length;
  if (description === '') {
    return null;
  }
  if (event.key === 'Enter' && userInput.value !== '') {
    (0,_modules_addTask_js__WEBPACK_IMPORTED_MODULE_4__.addTask)(description, index);
    reloading();
    event.preventDefault();
    (0,_modules_userInput_js__WEBPACK_IMPORTED_MODULE_9__.saveData)(_modules_addTask_js__WEBPACK_IMPORTED_MODULE_4__.taskarr);
    return _modules_addTask_js__WEBPACK_IMPORTED_MODULE_4__.taskarr;
  }
  return _modules_addTask_js__WEBPACK_IMPORTED_MODULE_4__.taskarr;
});

// remove tasks
document.addEventListener('click', function (event) {
  var dotsTrash = document.querySelectorAll('.trash');
  dotsTrash.forEach(function (icon, index) {
    if (event.target === icon) {
      (0,_modules_removeItems_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_modules_addTask_js__WEBPACK_IMPORTED_MODULE_4__.taskarr, index);
      (0,_modules_userInput_js__WEBPACK_IMPORTED_MODULE_9__.saveData)(_modules_addTask_js__WEBPACK_IMPORTED_MODULE_4__.taskarr);

      // this will sort out the index when removing Items
      var sortedArr = _toConsumableArray(_modules_addTask_js__WEBPACK_IMPORTED_MODULE_4__.taskarr);
      index = _modules_addTask_js__WEBPACK_IMPORTED_MODULE_4__.taskarr.length + 1;
      sortedArr.sort(function (a, b) {
        return a.index - b.index;
      });
      reloading(_modules_addTask_js__WEBPACK_IMPORTED_MODULE_4__.taskarr);
      (0,_modules_userInput_js__WEBPACK_IMPORTED_MODULE_9__.saveData)(sortedArr);
    }
  });
});
})();

/******/ })()
;
//# sourceMappingURL=bundlea8a18bec0d8835a1959a.js.map