/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/displayList.js":
/*!****************************!*\
  !*** ./src/displayList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _userInput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userInput.js */ "./src/userInput.js");
/* harmony import */ var _removeItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeItems.js */ "./src/removeItems.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var addBtn = document.getElementById('addBtn');
_userInput_js__WEBPACK_IMPORTED_MODULE_0__.TaskObject;
var DisplayTasks = /*#__PURE__*/function () {
  function DisplayTasks() {
    _classCallCheck(this, DisplayTasks);
    _userInput_js__WEBPACK_IMPORTED_MODULE_0__.taskarr;
  }
  _createClass(DisplayTasks, [{
    key: "addTask",
    value: function addTask() {
      var _this = this;
      addBtn.addEventListener('click', function (event) {
        event.preventDefault();
        var addedTasks = document.querySelector('ul');
        var listItem = document.createElement('li');
        listItem.innerHTML = "\n              <input type=\"checkbox\" id=\"checkB\" />\n              <p class=\"listItems\" id=\"addItem\" />".concat(_this.tasks[i].description, "</p>\n              <img id=\"dotsImg\" src=\"./assets/three-dots.png\" alt=\"\" />\n              ");
        addedTasks.appendChild(listItem);
        console.log(addedTasks);
      });
    }
  }]);
  return DisplayTasks;
}(); // const input = document.querySelector('#userInput');
// class TaskList {
//   // tasks property will be add using the methods following
//   constructor() {
//     this.tasks = JSON.parse(localStorage.getItem('ToDolist')) || [];
//   }
//   // in this method she added all events that can be done in the userinput
//   init() {
//     const addBtn = document.getElementById('addBtn');
//     addBtn.addEventListener('click', (event) => {
//       event.preventDefault();
//       this.addingEventListener();
//     });
//     document.getElementById('userInput').addEventListener('keypress', (event) => {
//       if (event.key === 'Enter') {
//         event.preventDefault();
//         this.addingEventListener();
//       }
//     });
//     const clearBtn = document.getElementById('clearBtn');
//     clearBtn.addEventListener('click', () => {
//       this.clearCompleted();
//     });
//     window.addEventListener('load', () => {
//       this.renderList();
//     });
//   }
//   // main task of this method is to verify userInput is displayed(not empty) and also the taskes added are rendered
//   //and when empty it will inject data (atask) using the taskobject class then reset the input for another addition
//   addingEventListener() {
//     const description = document.getElementById('userInput').value;
//     if (description !== '') {
//       const aTask = new TaskObject(description, this.tasks.length); //inject data into the taskobject class
//       this.addTask(aTask);
//       this.renderList();
//       document.getElementById('userInput').value = '';
//     }
//   }
//   addTask(aTask) {
//     this.tasks.push(aTask);
//     localStorage.setItem('ToDolist', JSON.stringify(this.tasks));
//   }
//   deleteTask(index) {
//     this.tasks.splice(index, 1);
//     this.renderList();
//     localStorage.setItem('ToDolist', JSON.stringify(this.tasks));
//   }
//   clearCompleted() {
//     this.tasks = this.tasks.filter(completedIsFalse);
//     this.renderList();
//     localStorage.setItem('ToDolist', JSON.stringify(this.tasks));
//   }
//   renderList() {
//     const ul = document.querySelector('ul');
//     ul.innerHTML = '';
//     const sortedArr = [...this.tasks];
//     sortedArr.sort((a, b) => a.index - b.index);
//     for (let i = 0; i < sortedArr.length; i += 1) {
//       this.tasks[i].index = i + 1;
//       const input = document.querySelector('#userInput');
//       const addedTasks = document.querySelector('ul');
//       const listItem = document.createElement('li');
//       listItem.innerHTML = `
//       <input type="checkbox" id="checkB" />
//       <p class="listItems" id="addItem" />${this.tasks[i].description}</p>
//       <img id="dotsImg" src="./assets/three-dots.png" alt="" />
//       `;
//       addedTasks.appendChild(listItem);
//       input.addEventListener('click', () => {
//         document.querySelectorAll('li').forEach((element) => {
//           element.classList.remove('onEdit');
//         });
//         listItem.classList.add('onEdit');
//       });
//       input.addEventListener('blur', () => {
//         document.querySelectorAll('li').forEach((element) => {
//           element.classList.remove('onEdit');
//         });
//       });
//       input.value = `${sortedArr[i].description}`;
//       input.addEventListener('keyup', () => {
//         sortedArr[i].description = input.value;
//         localStorage.setItem('ToDolist', JSON.stringify(this.tasks));
//       });
//       addedTasks.appendChild(listItem);
//       const checkBox = document.querySelector('#checkB');
//       checkBox.addEventListener('change', () => {
//         if (this.checked) {
//           this.tasks[i].completed = true;
//         } else {
//           this.tasks[i].completed = false;
//         }
//         localStorage.setItem('ToDolist', JSON.stringify(this.tasks));
//       });
//     }
//   }
// }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayTasks);

/***/ }),

/***/ "./src/removeItems.js":
/*!****************************!*\
  !*** ./src/removeItems.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var completedIsFalse = function completedIsFalse(task) {
  return task.completed === false;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (completedIsFalse);

// import TaskObject from './userInput.js';
// import completedIsFalse from './removeItems.js';

// class TaskList {
//   // tasks property will be add using the methods following
//   constructor() {
//     this.tasks = JSON.parse(localStorage.getItem('ToDolist')) || [];
//   }
//   // in this method she added all events that can be done in the userinput
//   init() {
//     const addBtn = document.getElementById('addBtn');
//     addBtn.addEventListener('click', (event) => {
//       event.preventDefault();
//       this.addingEventListener();
//     });

//     document.getElementById('userInput').addEventListener('keypress', (event) => {
//       if (event.key === 'Enter') {
//         event.preventDefault();
//         this.addingEventListener();
//       }
//     });

//     const clearBtn = document.getElementById('clearBtn');
//     clearBtn.addEventListener('click', () => {
//       this.clearCompleted();
//     });

//     window.addEventListener('load', () => {
//       this.renderList();
//     });
//   }
//   // main task of this method is to verify userInput is displayed(not empty) and also the taskes added are rendered
//   //and when empty it will inject data (atask) using the taskobject class then reset the input for another addition

//   addingEventListener() {
//     const description = document.getElementById('userInput').value;
//     if (description !== '') {
//       const aTask = new TaskObject(description, this.tasks.length); //inject data into the taskobject class
//       this.addTask(aTask);
//       this.renderList();
//       document.getElementById('userInput').value = '';
//     }
//   }

//   addTask(aTask) {
//     this.tasks.push(aTask);
//     localStorage.setItem('ToDolist', JSON.stringify(this.tasks));
//   }

//   deleteTask(index) {
//     this.tasks.splice(index, 1);
//     this.renderList();
//     localStorage.setItem('ToDolist', JSON.stringify(this.tasks));
//   }

//   clearCompleted() {
//     this.tasks = this.tasks.filter(completedIsFalse);
//     this.renderList();
//     localStorage.setItem('ToDolist', JSON.stringify(this.tasks));
//   }

//   renderList() {
//     const ul = document.querySelector('ul');
//     ul.innerHTML = '';

//     const sortedArr = [...this.tasks];
//     sortedArr.sort((a, b) => a.index - b.index);

//     for (let i = 0; i < sortedArr.length; i += 1) {
//       this.tasks[i].index = i + 1;
//       const input = document.querySelector('#userInput');
//       const addedTasks = document.querySelector('ul');
//       addedTasks.innerHTML = '';
//       const listItem = document.createElement('li');
//       listItem.innerHTML = `
//       <input type="checkbox" id="checkB" />
//       <input class="listItems" type="text" readonly id=" />
//       <img id="dotsImg" src="./assets/three-dots.png" alt="" />
//       `;
//       //   const userInput = document.querySelector('#checkB');

//       // if (this.tasks[i].completed === true) {
//       //   checkBox=true;
//       // }

//       //   const optionImg = document.querySelector('#dotsImg');
//       //   optionImg.src = Drag;
//       //   moveBtn.appendChild(optionImg);

//       //   const deleteIcon = document.createElement('img');
//       //   deleteIcon.src = Bin;
//       //   deleteBtn.appendChild(deleteIcon);
//       //   deleteBtn.classList.add('hidden');

//       //   deleteBtn.addEventListener('click', () => {
//       //     this.deleteTask(i);
//       //   });

//       addedTasks.appendChild(listItem);

//       // const label = document.createElement('label');
//       //   const input = document.createElement('input');

//       //   const checkmark = document.createElement('span');
//       //   checkmark.classList.add('checkmark');
//       //   if (this.tasks[i].completed === true) {
//       //     checkmark.classList.add('checked');
//       //   }

//       //   const moveBtn = document.createElement('button');
//       //   const deleteBtn = document.createElement('button');

//       input.addEventListener('click', () => {
//         document.querySelectorAll('li').forEach((element) => {
//           element.classList.remove('onEdit');
//         });
//         listItem.classList.add('onEdit');
//       });

//       input.addEventListener('blur', () => {
//         document.querySelectorAll('li').forEach((element) => {
//           element.classList.remove('onEdit');
//         });
//         // setTimeout(() => {
//         //     dotsImg.classList.add('hidden');
//         //   moveBtn.classList.remove('hidden');
//         // }, 200);
//       });

//       //   li.appendChild(checkmark);
//       //   li.appendChild(input);

//       input.value = `${sortedArr[i].description}`;
//       input.addEventListener('keyup', () => {
//         sortedArr[i].description = input.value;
//         localStorage.setItem('ToDolist', JSON.stringify(this.tasks));
//       });
//       //   li.appendChild(deleteBtn);
//       //   li.appendChild(moveBtn);
//       addedTasks.appendChild(listItem);
//       const checkBox = document.querySelector('#checkB');

//       checkBox.addEventListener('change', () => {
//         // checkBox.classList.toggle('checked');
//         if (this.checked) {
//           this.tasks[i].completed = true;
//         } else {
//           this.tasks[i].completed = false;
//         }
//         localStorage.setItem('ToDolist', JSON.stringify(this.tasks));
//       });
//     }
//   }
// }

// export default TaskList;

// import TaskObject from './TaskObject.js';
// import completedIsFalse from './CompletedFilter.js';
// import Drag from './drag-handle-minor-svgrepo-com.svg';
// import Bin from './bin-svgrepo-com.svg';

// class TaskList {
// // tasks property will be add using the methods following
//   constructor() {
//     this.tasks = JSON.parse(localStorage.getItem('ToDolist')) || [];
//   }
// // in this method she added all events that can be done in the userinput 
//   init() {

//     const addButton = document.getElementById('add-btn');
//     addButton.addEventListener('click', (event) => {
//       event.preventDefault();
//       this.addingEventListener();
//     });

//     document.getElementById('userInput').addEventListener('keypress', (event) => {
//       if (event.key === 'Enter') {
//         event.preventDefault();
//         this.addingEventListener();
//       }
//     });

//     const clearBtn = document.getElementById('clear');
//     clearBtn.addEventListener('click', () => {
//       this.clearCompleted();
//     });

//     window.addEventListener('load', () => {
//       this.renderList();
//     });
//   }
// // main task of this method is to verify userInput is displayed(not empty) and also the taskes added are rendered
// //and when empty it will inject data (atask) using the taskobject class then reset the input for another addition

//   addingEventListener() {
//     const description = document.getElementById('userInput').value;
//     if (description !== '') {
//       const aTask = new TaskObject(description, this.tasks.length);//inject data into the taskobject class
//       this.addTask(aTask);
//       this.renderList();
//       document.getElementById('userInput').value = '';
//     }
//   }

//   addTask(aTask) {
//     this.tasks.push(aTask);
//     localStorage.setItem('ToDolist', JSON.stringify(this.tasks));
//   }

//   deleteTask(index) {
//     this.tasks.splice(index, 1);
//     this.renderList();
//     localStorage.setItem('ToDolist', JSON.stringify(this.tasks));
//   }

//   clearCompleted() {
//     this.tasks = this.tasks.filter(completedIsFalse);
//     this.renderList();
//     localStorage.setItem('ToDolist', JSON.stringify(this.tasks));
//   }

//   renderList() {
//     const ul = document.querySelector('ul');
//     ul.innerHTML = '';

//     const sortedArr = [...this.tasks];
//     sortedArr.sort((a, b) => a.index - b.index);

//     for (let i = 0; i < sortedArr.length; i += 1) {
//       this.tasks[i].index = i + 1;
//       const addedTasks = document.createElement('ul');
//       addedTasks.innerHTML='';
//       const listItem = document.createElement('li');
//       listItem.innerHTML=`
//       <input type="checkbox" id="checkB" />
//       <input class="listItems" type="text" readonly />
//       <img id="dotsImg" src="./assets/three-dots.png" alt="" />
//       `
//       addedTasks.appendChild(listItem);

//       // const label = document.createElement('label');
//       const input = document.createElement('input');

//       const checkmark = document.createElement('span');
//       checkmark.classList.add('checkmark');
//       if (this.tasks[i].completed === true) {
//         checkmark.classList.add('checked');
//       }

//       const moveBtn = document.createElement('button');
//       const deleteBtn = document.createElement('button');

//       const moveIcon = document.createElement('img');
//       moveIcon.src = Drag;
//       moveBtn.appendChild(moveIcon);

//       const deleteIcon = document.createElement('img');
//       deleteIcon.src = Bin;
//       deleteBtn.appendChild(deleteIcon);
//       deleteBtn.classList.add('hidden');

//       deleteBtn.addEventListener('click', () => {
//         this.deleteTask(i);
//       });

//       input.addEventListener('click', () => {
//         document.querySelectorAll('li').forEach((element) => {
//           element.classList.remove('on-edit');
//         });
//         li.classList.add('on-edit');
//         checkmark.classList.add('darken');
//         moveBtn.classList.add('hidden');
//         deleteBtn.classList.remove('hidden');
//       });

//       input.addEventListener('blur', () => {
//         document.querySelectorAll('li').forEach((element) => {
//           element.classList.remove('on-edit');
//         });
//         setTimeout(() => {
//           deleteBtn.classList.add('hidden');
//           moveBtn.classList.remove('hidden');
//         }, 500);
//       });

//       li.appendChild(checkmark);
//       li.appendChild(input);
//       input.value = `${sortedArr[i].description}`;
//       input.addEventListener('keyup', () => {
//         sortedArr[i].description = input.value;
//         localStorage.setItem('ToDolist', JSON.stringify(this.tasks));
//       });
//       li.appendChild(deleteBtn);
//       li.appendChild(moveBtn);
//       ul.appendChild(li);

//       checkmark.addEventListener('click', () => {
//         checkmark.classList.toggle('checked');
//         if (checkmark.classList.contains('checked')) {
//           this.tasks[i].completed = true;
//         } else {
//           this.tasks[i].completed = false;
//         }
//         localStorage.setItem('ToDolist', JSON.stringify(this.tasks));
//       });
//     }
//   }
// }

// export default TaskList;

/***/ }),

/***/ "./src/userInput.js":
/*!**************************!*\
  !*** ./src/userInput.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskObject: () => (/* binding */ TaskObject),
/* harmony export */   taskarr: () => (/* binding */ taskarr)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var taskarr = JSON.parse(localStorage.getItem('taskarr')) || [];
var TaskObject = /*#__PURE__*/function () {
  function TaskObject(description, index) {
    _classCallCheck(this, TaskObject);
    this.description = description;
    this.completed = false;
    this.index = index;
  }
  _createClass(TaskObject, [{
    key: "addObject",
    value: function addObject(description, index) {
      var newTask = new TaskObject(description, index + 1);
      taskarr.unshift(newTask);
      localStorage.setItem('taskarr', JSON.stringify(taskarr));
    }
  }, {
    key: "removeObject",
    value: function removeObject(description, index) {
      var newTask = new TaskObject(description, index - 1);
      taskarr.splice(newTask);
      localStorage.setItem('taskarr', JSON.stringify(taskarr));
    }
  }]);
  return TaskObject;
}();


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
  background-color: #2fa8cc;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 20px;
  font-size: 14px;
}

img {
  cursor: pointer;
  transition: all 0.5s;
}

#formContainer {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  justify-content: center;
  align-items: center;
}

div, li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 2.5rem;
  border-radius: 4px;
  border: 0;
  padding: 0.1rem;
  align-self: stretch;
}

li {
  justify-content: center;
}
li .onEdit {
  background-color: rgb(253, 227, 178);
}

div h1 {
  color: black;
  font-size: 1.2rem;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  letter-spacing: 0.0025rem;
}
div #userInput {
  width: 100%;
}

input {
  height: 2rem;
  border: 0;
  padding: 0.3rem;
  align-self: stretch;
  border-radius: 2px;
}

#checkB {
  border-radius: 4px;
  width: 5vw;
  align-self: center;
}

.container {
  background-color: #f4f4f4;
  border-radius: 4px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  padding: 15px 5px;
  text-align: left;
  max-width: 100%;
  width: 800px;
}

img {
  height: 1.5rem;
  transition: all 0.2s;
}

#recyclImg {
  opacity: 0.5;
}
#recyclImg:hover {
  opacity: 1;
}

#dotsImg {
  opacity: 7;
}
#dotsImg::active {
  background-size: 100%;
  background-repeat: no-repeat;
}

#clearBtn {
  transition: all 0.5s;
  border-radius: 2px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 0.001em;
  word-spacing: normal;
  background-color: #2fa8cc;
  color: #f4f4f4;
  border: 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  cursor: pointer;
  text-align: center;
  width: 100%;
}
#clearBtn:active {
  transform: scale(0.98);
}
#clearBtn:focus {
  outline: 0;
}`, "",{"version":3,"sources":["webpack://./src/styles/sass/global.sass","webpack://./src/styles/sass/main.sass"],"names":[],"mappings":"AAIA;EAEI,sBAAA;EACA,SAAA;EACA,UAAA;ACHJ;;ADKA;EACI,yBAVY;EAWZ,iCAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;EACA,aAAA;EACA,eAAA;ACFJ;;ADKA;EACI,eAAA;EACA,oBAAA;ACFJ;;AApBA;EDyBI,aAAA;EACA,sBAAA;ECxBA,WAAA;EACA,uBAAA;EACA,mBAAA;AAwBJ;;AAvBA;EDuBI,aAAA;EACA,mBAAA;ECtBA,8BAAA;EACA,mBAAA;EACA,cAAA;EACA,kBAAA;EACA,SAAA;EACA,eAAA;EACA,mBAAA;AA2BJ;;AA1BA;EACI,uBAAA;AA6BJ;AA5BI;EACI,oCAAA;AA8BR;;AA5BI;EDiDA,YAAA;EACA,iBAAA;EACA,gCAxEQ;EAyER,gBAAA;EACA,yBAAA;ACjBJ;AAlCI;EACI,WAAA;AAoCR;;AAnCA;EACI,YAAA;EACA,SAAA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;AAsCJ;;AApCA;EACI,kBAAA;EACA,UAAA;EACA,kBAAA;AAuCJ;;AAtCA;EACI,yBDnCc;ECoCd,kBAAA;EACA,wEDpCS;ECqCT,iBAAA;EACA,gBAAA;EACA,eAAA;EACA,YAAA;AAyCJ;;AAxCA;EACI,cAAA;EACA,oBAAA;AA2CJ;;AA1CA;EACI,YAAA;AA6CJ;AA5CI;EACI,UAAA;AA8CR;;AA7CA;EACI,UAAA;AAgDJ;AA9CI;EAEI,qBAAA;EACA,4BAAA;AA+CR;;AA9CA;EDzBI,oBAAA;EACA,kBAAA;EACA,gCAnCQ;EAoCR,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,oBAAA;EACA,yBAvCY;EAwCZ,cAvCc;EAwCd,SAAA;EACA,uEAAA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;ECcA,WAAA;AA8DJ;AA5DI;EACI,sBAAA;AA8DR;AA5DI;EACI,UAAA;AA8DR","sourcesContent":["$InterFont: \"Inter\", sans-serif\r\n$primary-color: #2fa8cc\r\n$secondary-color: #f4f4f4\r\n$box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1)\r\n*\r\n    // text-decoration: none !important\r\n    box-sizing: border-box\r\n    margin: 0\r\n    padding: 0\r\n\r\nbody\r\n    background-color: $primary-color\r\n    font-family: 'Roboto', sans-serif\r\n    display: flex\r\n    flex-direction: column\r\n    align-items: center\r\n    justify-content: center\r\n    margin: 0\r\n    padding: 20px\r\n    font-size: 14px\r\n\r\n// mixings\r\nimg\r\n    cursor: pointer\r\n    transition: all 0.5s\r\n\r\n@mixin columnFlex\r\n    display: flex\r\n    flex-direction: column\r\n@mixin rowFlex\r\n    display: flex\r\n    flex-direction: row\r\n@mixin button\r\n    transition: all 0.5s\r\n    border-radius: 2px\r\n    font-family: $InterFont\r\n    font-weight: 500\r\n    font-size: 1rem\r\n    letter-spacing: 0.001em\r\n    word-spacing: normal\r\n    background-color: $primary-color\r\n    color: $secondary-color\r\n    border: 0\r\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1)\r\n    padding: 10px\r\n    cursor: pointer\r\n    text-align: center\r\n\r\n@mixin twoThreeGrid\r\n    display: grid\r\n    grid-template-columns: 1fr 1fr\r\n    grid-template-rows: 1fr 1fr 1fr\r\n\r\n@mixin globalFont\r\n    font-family: $InterFont\r\n    font-weight: 500\r\n    font-size: 1.2rem\r\n@mixin smlInterH1\r\n    color: black\r\n    font-size: 2rem\r\n    font-family: $InterFont\r\n    font-weight: 800\r\n    letter-spacing: -0.0525rem\r\n@mixin smlInterH2\r\n    color: black\r\n    font-size: 1.5rem\r\n    font-family: $InterFont\r\n    font-weight: 800\r\n    letter-spacing: -0.0225rem\r\n@mixin smlInterH3\r\n    color: black\r\n    font-size: 1.2rem\r\n    font-family: $InterFont\r\n    font-weight: 600\r\n    letter-spacing: 0.0025rem\r\n@mixin smlInterP\r\n    color: black\r\n    font-size: 1rem\r\n    font-family: $InterFont\r\n    letter-spacing: 0.0125rem\r\n@mixin transparentText\r\n    background-image: url(\"../images/books.svg\")\r\n    background-repeat: repeat-x\r\n    -webkit-background-clip: text\r\n    -webkit-text-fill-color: transparent\r\n","@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap')\r\n@import global\r\n#formContainer\r\n    @include columnFlex\r\n    gap: .2rem\r\n    justify-content: center\r\n    align-items: center\r\ndiv, li\r\n    @include rowFlex\r\n    justify-content: space-between\r\n    align-items: center\r\n    height: 2.5rem\r\n    border-radius: 4px\r\n    border: 0\r\n    padding: .1rem\r\n    align-self: stretch\r\nli\r\n    justify-content: center\r\n    .onEdit\r\n        background-color: rgb(253, 227, 178)\r\ndiv\r\n    h1\r\n        @include smlInterH3\r\n    #userInput\r\n        width: 100%\r\ninput\r\n    height: 2rem\r\n    border: 0\r\n    padding: .3rem\r\n    align-self: stretch\r\n    border-radius: 2px\r\n\r\n#checkB\r\n    border-radius: 4px\r\n    width: 5vw\r\n    align-self: center\r\n.container\r\n    background-color: $secondary-color\r\n    border-radius: 4px\r\n    box-shadow: $box-shadow\r\n    padding: 15px 5px\r\n    text-align: left\r\n    max-width: 100%\r\n    width: 800px\r\nimg\r\n    height: 1.5rem\r\n    transition: all 0.2s\r\n#recyclImg\r\n    opacity: .5\r\n    &:hover\r\n        opacity: 1\r\n#dotsImg\r\n    opacity: 7\r\n\r\n    &::active\r\n        // background-image: url(../assets/trash-can.png)\r\n        background-size: 100%\r\n        background-repeat: no-repeat\r\n#clearBtn\r\n    @include button\r\n    width: 100%\r\n\r\n    &:active\r\n        transform: scale(0.98)\r\n\r\n    &:focus\r\n        outline: 0\r\n"],"sourceRoot":""}]);
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dotsImg: () => (/* binding */ dotsImg),
/* harmony export */   enterImg: () => (/* binding */ enterImg),
/* harmony export */   refreshImg: () => (/* binding */ refreshImg),
/* harmony export */   tarshCanImg: () => (/* binding */ tarshCanImg)
/* harmony export */ });
/* harmony import */ var _styles_sass_main_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/sass/main.sass */ "./src/styles/sass/main.sass");
/* harmony import */ var _assets_refresh_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/refresh.png */ "./src/assets/refresh.png");
/* harmony import */ var _assets_three_dots_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/three-dots.png */ "./src/assets/three-dots.png");
/* harmony import */ var _assets_enter_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/enter.png */ "./src/assets/enter.png");
/* harmony import */ var _assets_trash_can_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/trash-can.png */ "./src/assets/trash-can.png");
/* harmony import */ var _displayList_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./displayList.js */ "./src/displayList.js");





var refreshImg = _assets_refresh_png__WEBPACK_IMPORTED_MODULE_1__["default"];
var dotsImg = _assets_three_dots_png__WEBPACK_IMPORTED_MODULE_2__["default"];
var tarshCanImg = _assets_trash_can_png__WEBPACK_IMPORTED_MODULE_4__["default"];

var taskList = new TaskList();
taskList.init();
var enterImg = _assets_enter_png__WEBPACK_IMPORTED_MODULE_3__["default"];

})();

/******/ })()
;
//# sourceMappingURL=bundle8515c8fa13b5a4e30483.js.map