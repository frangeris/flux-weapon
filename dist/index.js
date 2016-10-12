(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Actions = __webpack_require__(1);
	var Reducers = __webpack_require__(2);
	var Mutations = __webpack_require__(3);
	
	module.exports = { Actions: Actions, Reducers: Reducers, Mutations: Mutations };

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	// register a token
	var TOKENIZE = 'TOKENIZE';
	function tokenize(token) {
	    return {
	        type: TOKENIZE,
	        token: token
	    };
	}
	
	// keep reference of the user logged
	var AUTH = 'AUTH';
	function auth(user) {
	    return {
	        type: AUTH,
	        user: user
	    };
	}
	
	// loggout the user
	var LOGOUT = 'LOGOUT';
	function logout() {
	    return {
	        type: LOGOUT
	    };
	}
	
	// keep reference of instances
	var INSTANCE = 'INSTANCE';
	function instance(instance) {
	    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	
	    return {
	        type: INSTANCE,
	        key: name || instance.constructor.name,
	        instance: instance
	    };
	}
	
	module.exports = {
	    TOKENIZE: TOKENIZE, tokenize: tokenize,
	    AUTH: AUTH, auth: auth,
	    INSTANCE: INSTANCE, instance: instance,
	    LOGOUT: LOGOUT, logout: logout
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Actions = __webpack_require__(1);
	
	module.exports = function overall() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];
	
	    var mutate = state;
	    switch (action.type) {
	        case Actions.TOKENIZE:
	            return Object.assign({}, state, { accessToken: action.token });
	
	        // @deprecated
	        case Actions.AUTH:
	            return Object.assign({}, state, { user: action.user });
	
	        case Actions.LOGOUT:
	            delete mutate.User;
	            return Object.assign({}, mutate);
	
	        case Actions.INSTANCE:
	            mutate[action.key] = action.instance;
	            return Object.assign({}, state, mutate);
	
	        default:
	            return state;
	    }
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {
	    INSTANCE: function INSTANCE(state, mutation) {
	        state[mutation.key] = mutation.instance;
	    }
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map