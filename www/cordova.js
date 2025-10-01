/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/internal/bridge.js":
/*!********************************!*\
  !*** ./src/internal/bridge.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   exec: () => (/* binding */ exec)
/* harmony export */ });
/* harmony import */ var _cordova__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cordova */ "./src/internal/cordova.js");


const { RNIDV } = _cordova__WEBPACK_IMPORTED_MODULE_0__.NativeModules
var eventManager = new _cordova__WEBPACK_IMPORTED_MODULE_0__.NativeEventEmitter(RNIDV)

async function exec(name, params) {
    return RNIDV.exec(name, params)
}

function _setEvent(id, completion, fromJson) {
    eventManager.removeAllListeners(id)
    if (completion == null) return
    if (fromJson == null) eventManager.addListener(id, completion)
    else eventManager.addListener(id, data => {
        data = fromJson(data)
        if (data !== null && typeof data[Symbol.iterator] === 'function') completion(...data)
        else completion(data)
    })
}


/***/ }),

/***/ "./src/internal/cordova.js":
/*!*********************************!*\
  !*** ./src/internal/cordova.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NativeEventEmitter: () => (/* binding */ NativeEventEmitter),
/* harmony export */   NativeModules: () => (/* binding */ NativeModules)
/* harmony export */ });
var _exec = (completion, params) => cordova.exec(completion, null, "IDV", "exec", params)

const NativeModules = {
    RNIDV: {
        exec: async (name, params) => new Promise((resolve, _) => _exec(data => resolve(data), [name, ...params]))
    }
}

class NativeEventEmitter {
    addListener(id, completion) {
        _exec(completion, ["setEvent", id])
    }

    removeAllListeners(id) {
        _exec(null, ["setEvent", id])
    }
}

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IDV: () => (/* binding */ IDV)
/* harmony export */ });
/* harmony import */ var _internal_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/bridge */ "./src/internal/bridge.js");


class IDV {
    static get instance() { return IDV._instance }
    static _instance = new IDV()
}

})();

var __webpack_export_target__ = exports;
for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;