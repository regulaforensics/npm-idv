/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config/api_key_connection_config.js":
/*!*************************************************!*\
  !*** ./src/config/api_key_connection_config.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiKeyConnectionConfig: () => (/* binding */ ApiKeyConnectionConfig)
/* harmony export */ });
class ApiKeyConnectionConfig {
    baseUrl
    apiKey
    ttl
    httpTimeoutMs

    constructor(params) {
        this.baseUrl = params?.baseUrl
        this.apiKey = params?.apiKey
        this.ttl = params?.ttl
        this.httpTimeoutMs = params?.httpTimeoutMs
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new ApiKeyConnectionConfig()
        result.baseUrl = jsonObject["baseUrl"]
        result.apiKey = jsonObject["apiKey"]
        result.ttl = jsonObject["ttl"]
        result.httpTimeoutMs = jsonObject["httpTimeoutMs"]
        return result
    }

    toJson() {
        return {
            "baseUrl": this.baseUrl,
            "apiKey": this.apiKey,
            "ttl": this.ttl,
            "httpTimeoutMs": this.httpTimeoutMs,
        }
    }
}


/***/ }),

/***/ "./src/config/credentials_connection_config.js":
/*!*****************************************************!*\
  !*** ./src/config/credentials_connection_config.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CredentialsConnectionConfig: () => (/* binding */ CredentialsConnectionConfig)
/* harmony export */ });
class CredentialsConnectionConfig {
    baseUrl
    userName
    password
    httpTimeoutMs

    constructor(params) {
        this.baseUrl = params?.baseUrl
        this.userName = params?.userName
        this.password = params?.password
        this.httpTimeoutMs = params?.httpTimeoutMs
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new CredentialsConnectionConfig()
        result.baseUrl = jsonObject["baseUrl"]
        result.userName = jsonObject["userName"]
        result.password = jsonObject["password"]
        result.httpTimeoutMs = jsonObject["httpTimeoutMs"]
        return result
    }

    toJson() {
        return {
            "baseUrl": this.baseUrl,
            "userName": this.userName,
            "password": this.password,
            "httpTimeoutMs": this.httpTimeoutMs,
        }
    }
}


/***/ }),

/***/ "./src/config/prepare_workflow_config.js":
/*!***********************************************!*\
  !*** ./src/config/prepare_workflow_config.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrepareWorkflowConfig: () => (/* binding */ PrepareWorkflowConfig)
/* harmony export */ });
class PrepareWorkflowConfig {
    workflowId

    constructor(params) {
        this.workflowId = params?.workflowId
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new PrepareWorkflowConfig()
        result.workflowId = jsonObject["workflowId"]
        return result
    }

    toJson() {
        return {
            "workflowId": this.workflowId,
        }
    }
}


/***/ }),

/***/ "./src/config/start_workflow_config.js":
/*!*********************************************!*\
  !*** ./src/config/start_workflow_config.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StartWorkflowConfig: () => (/* binding */ StartWorkflowConfig)
/* harmony export */ });
class StartWorkflowConfig {
    locale
    metadata

    constructor(params) {
        this.locale = params?.locale
        this.metadata = params?.metadata
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new StartWorkflowConfig()
        result.locale = jsonObject["locale"]
        result.metadata = jsonObject["metadata"]
        return result
    }

    toJson() {
        return {
            "locale": this.locale,
            "metadata": this.metadata,
        }
    }
}


/***/ }),

/***/ "./src/config/token_connection_config.js":
/*!***********************************************!*\
  !*** ./src/config/token_connection_config.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokenConnectionConfig: () => (/* binding */ TokenConnectionConfig)
/* harmony export */ });
class TokenConnectionConfig {
    url

    constructor(params) {
        this.url = params?.url
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new TokenConnectionConfig()
        result.url = jsonObject["url"]
        return result
    }

    toJson() {
        return {
            "url": this.url,
        }
    }
}


/***/ }),

/***/ "./src/internal/bridge.js":
/*!********************************!*\
  !*** ./src/internal/bridge.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   exec: () => (/* binding */ exec),
/* harmony export */   setDidContinueRemoteSessionCompletion: () => (/* binding */ setDidContinueRemoteSessionCompletion),
/* harmony export */   setDidEndSessionCompletion: () => (/* binding */ setDidEndSessionCompletion),
/* harmony export */   setDidStartRestoreSessionCompletion: () => (/* binding */ setDidStartRestoreSessionCompletion),
/* harmony export */   setDidStartSessionCompletion: () => (/* binding */ setDidStartSessionCompletion)
/* harmony export */ });
/* harmony import */ var _cordova__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cordova */ "./src/internal/cordova.js");


const { RNIDV } = _cordova__WEBPACK_IMPORTED_MODULE_0__.NativeModules
var eventManager = new _cordova__WEBPACK_IMPORTED_MODULE_0__.NativeEventEmitter(RNIDV)

async function exec(name, params) {
    return RNIDV.exec(name, params)
}

function setEvent(id, completion, transform) {
    eventManager.removeAllListeners(id)
    if (transform === undefined) transform = func => func
    if (completion !== undefined) eventManager.addListener(id, transform(completion))
}

function setDidStartSessionCompletion(completion) {
    setEvent('didStartSessionEvent', completion)
}

function setDidEndSessionCompletion(completion) {
    setEvent('didEndSessionEvent', completion)
}

function setDidStartRestoreSessionCompletion(completion) {
    setEvent('didStartRestoreSessionEvent', completion)
}

function setDidContinueRemoteSessionCompletion(completion) {
    setEvent('didContinueRemoteSessionEvent', completion)
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

/***/ }),

/***/ "./src/model/workflow.js":
/*!*******************************!*\
  !*** ./src/model/workflow.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Workflow: () => (/* binding */ Workflow)
/* harmony export */ });
class Workflow {
    id
    name
    description
    version
    defaultLocale

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new Workflow()
        result.id = jsonObject["id"]
        result.name = jsonObject["name"]
        result.description = jsonObject["description"]
        result.version = jsonObject["version"]
        result.defaultLocale = jsonObject["defaultLocale"]
        return result
    }

    toJson() {
        return {
            "id": this.id,
            "name": this.name,
            "description": this.description,
            "version": this.version,
            "defaultLocale": this.defaultLocale,
        }
    }
}


/***/ }),

/***/ "./src/model/workflow_result.js":
/*!**************************************!*\
  !*** ./src/model/workflow_result.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkflowResult: () => (/* binding */ WorkflowResult)
/* harmony export */ });
/* harmony import */ var _workflow_step__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workflow_step */ "./src/model/workflow_step.js");


class WorkflowResult {
    sessionId
    finalStep

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new WorkflowResult()
        result.sessionId = jsonObject["sessionId"]
        result.finalStep = _workflow_step__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep.fromJson(jsonObject["finalStep"])
        return result
    }

    toJson() {
        return {
            "sessionId": this.sessionId,
            "finalStep": this.finalStep?.toJson(),
        }
    }
}


/***/ }),

/***/ "./src/model/workflow_step.js":
/*!************************************!*\
  !*** ./src/model/workflow_step.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkflowStep: () => (/* binding */ WorkflowStep)
/* harmony export */ });
class WorkflowStep {
    id
    name

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new WorkflowStep()
        result.id = jsonObject["id"]
        result.name = jsonObject["name"]
        return result
    }

    toJson() {
        return {
            "id": this.id,
            "name": this.name,
        }
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
/* harmony export */   ApiKeyConnectionConfig: () => (/* reexport safe */ _config_api_key_connection_config__WEBPACK_IMPORTED_MODULE_3__.ApiKeyConnectionConfig),
/* harmony export */   CredentialsConnectionConfig: () => (/* reexport safe */ _config_credentials_connection_config__WEBPACK_IMPORTED_MODULE_2__.CredentialsConnectionConfig),
/* harmony export */   IDV: () => (/* binding */ IDV),
/* harmony export */   PrepareWorkflowConfig: () => (/* reexport safe */ _config_prepare_workflow_config__WEBPACK_IMPORTED_MODULE_4__.PrepareWorkflowConfig),
/* harmony export */   SessionRestoreMode: () => (/* binding */ SessionRestoreMode),
/* harmony export */   StartWorkflowConfig: () => (/* reexport safe */ _config_start_workflow_config__WEBPACK_IMPORTED_MODULE_5__.StartWorkflowConfig),
/* harmony export */   TokenConnectionConfig: () => (/* reexport safe */ _config_token_connection_config__WEBPACK_IMPORTED_MODULE_1__.TokenConnectionConfig),
/* harmony export */   Workflow: () => (/* reexport safe */ _model_workflow__WEBPACK_IMPORTED_MODULE_6__.Workflow),
/* harmony export */   WorkflowResult: () => (/* reexport safe */ _model_workflow_result__WEBPACK_IMPORTED_MODULE_7__.WorkflowResult),
/* harmony export */   WorkflowStep: () => (/* reexport safe */ _model_workflow_step__WEBPACK_IMPORTED_MODULE_8__.WorkflowStep)
/* harmony export */ });
/* harmony import */ var _internal_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/bridge */ "./src/internal/bridge.js");
/* harmony import */ var _config_token_connection_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/token_connection_config */ "./src/config/token_connection_config.js");
/* harmony import */ var _config_credentials_connection_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/credentials_connection_config */ "./src/config/credentials_connection_config.js");
/* harmony import */ var _config_api_key_connection_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/api_key_connection_config */ "./src/config/api_key_connection_config.js");
/* harmony import */ var _config_prepare_workflow_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/prepare_workflow_config */ "./src/config/prepare_workflow_config.js");
/* harmony import */ var _config_start_workflow_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/start_workflow_config */ "./src/config/start_workflow_config.js");
/* harmony import */ var _model_workflow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/workflow */ "./src/model/workflow.js");
/* harmony import */ var _model_workflow_result__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./model/workflow_result */ "./src/model/workflow_result.js");
/* harmony import */ var _model_workflow_step__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./model/workflow_step */ "./src/model/workflow_step.js");



















class IDV {
    static get instance() { return IDV._instance }
    static _instance = new IDV()

    setListener(options) {
        const value = options ?? {}
        ;(0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.setDidStartSessionCompletion)(value.didStartSession)
        ;(0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.setDidEndSessionCompletion)(value.didEndSession)
        ;(0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.setDidStartRestoreSessionCompletion)(value.didStartRestoreSession)
        ;(0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.setDidContinueRemoteSessionCompletion)(value.didContinueRemoteSession)
    }

    set sessionRestoreMode(val) {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)('setSessionRestoreMode', [val])
    }

    async getCurrentSessionId() {
        return await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)('getCurrentSessionId', [])
    }

    async initialize() {
        const response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)('initialize', [])
        return completionFromResponse(response)
    }

    async deinitialize() {
        const response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)('deinitialize', [])
        return completionFromResponse(response)
    }

    async configureWithToken(config) {
        config = ensureInstance(config, _config_token_connection_config__WEBPACK_IMPORTED_MODULE_1__.TokenConnectionConfig)
        const response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)('configureWithToken', [config?.toJson()])
        return completionFromResponse(response, success => success?.map(item => String(item)))
    }

    async configureWithCredentials(config) {
        config = ensureInstance(config, _config_credentials_connection_config__WEBPACK_IMPORTED_MODULE_2__.CredentialsConnectionConfig)
        const response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)('configureWithCredentials', [config?.toJson()])
        return completionFromResponse(response)
    }

    async configureWithApiKey(config) {
        config = ensureInstance(config, _config_api_key_connection_config__WEBPACK_IMPORTED_MODULE_3__.ApiKeyConnectionConfig)
        const response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)('configureWithApiKey', [config?.toJson()])
        return completionFromResponse(response)
    }

    async prepareWorkflow(config) {
        config = ensureInstance(config, _config_prepare_workflow_config__WEBPACK_IMPORTED_MODULE_4__.PrepareWorkflowConfig)
        const response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)('prepareWorkflow', [config?.toJson()])
        return completionFromResponse(response, json => _model_workflow__WEBPACK_IMPORTED_MODULE_6__.Workflow.fromJson(json))
    }

    async startWorkflow(config) {
        config = ensureInstance(config, _config_start_workflow_config__WEBPACK_IMPORTED_MODULE_5__.StartWorkflowConfig)
        const response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)('startWorkflow', [config?.toJson()])
        return completionFromResponse(response, json => _model_workflow_result__WEBPACK_IMPORTED_MODULE_7__.WorkflowResult.fromJson(json))
    }

    async getWorkflows() {
        const response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)('getWorkflows', [])
        return completionFromResponse(response, json => {
            const result = []
            if (json != null) for (const item of json) {
                const workflow = _model_workflow__WEBPACK_IMPORTED_MODULE_6__.Workflow.fromJson(item)
                if (workflow != null) result.push(workflow)
            }
            return result
        })
    }
}

const SessionRestoreMode = {
    ENABLED: 0,
    DISABLED: 1,
}

function completionFromResponse(response, transform) {
    const jsonObject = JSON.parse(response)
    let success = jsonObject['success']
    const error = jsonObject['error']
    if (transform != null && success != null) success = transform(success)
    return [success, error]
}

function ensureInstance(value, ctor) {
    if (value == null) return null
    if (value instanceof ctor) return value
    return new ctor(value)
}

})();

var __webpack_export_target__ = exports;
for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;