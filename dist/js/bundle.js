/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/layout/styles/customBootstrap.css":
/*!***********************************************!*\
  !*** ./src/layout/styles/customBootstrap.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Brand/./src/layout/styles/customBootstrap.css?");

/***/ }),

/***/ "./src/layout/styles/style.css":
/*!*************************************!*\
  !*** ./src/layout/styles/style.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Brand/./src/layout/styles/style.css?");

/***/ }),

/***/ "./src/components/basket.js":
/*!**********************************!*\
  !*** ./src/components/basket.js ***!
  \**********************************/
/***/ (() => {

eval("\r\nclass BasketItem{\r\n    constructor(item){\r\n        this.item = item;\r\n    }\r\n    render(){\r\n        return`\r\n            <div class=\"drop-cart-products-1\">\r\n                <img src=\"${this.item.productImg}\" width=\"85\" height=\"100\" alt=\"\" class=\"drop-cart-products-1-img\">\r\n                <div class=\"drop-cart-products-1-text\">\r\n                    <h3 class=\"drop-cart-products-1-text-h3\">${this.item.productName}</h3>\r\n                    <img src=\"../src/assets/imgs/stars.png\" alt=\"\" class=\"drop-cart-products-1-text-stars\">\r\n                    <div class=\"drop-cart-products-1-text-totallist\">${this.item.amount}\r\n                <span>x</span> $${this.item.productPrice}</div>\r\n                    </div>\r\n                    <div class=\"drop-cart-products-1-delete\"><img src=\"../src/assets/imgs/x.png\" alt=\"\"></div>\r\n                </div>\r\n                \r\n            \r\n            `\r\n    }\r\n    sum(){\r\n        return`\r\n        ${this.item.amount * this.item.productPrice}\r\n        `\r\n    }\r\n\r\n}\r\nnew class Basket {\r\n     constructor(container = '#basket', url = '/basket.json'){\r\n        this.items = [];\r\n        this.container = document.querySelector(container);\r\n        this.containerItems = document.querySelector('#basket-items');\r\n        this.totalPrice = document.querySelector('#total');\r\n        this.price = document.querySelector('#price');\r\n        this.shown = false;\r\n        this.url = 'https://raw.githubusercontent.com/RendarR/Other/master' + url;\r\n        this.init();\r\n     }\r\n    init() {\r\n        // this.container = document.querySelector('#basket');\r\n        // this.containerItems = document.querySelector('#basket-items');\r\n        this._get(this.url)\r\n            .then(basket => {\r\n                this.items = basket.content;\r\n            })\r\n            .finally(() => {\r\n                this._render();\r\n                this._handleActions();\r\n                this._renderSum();\r\n            })\r\n\r\n    }\r\n\r\n    _get(url) {\r\n        return fetch(url).then(d => d.json());\r\n    }\r\n\r\n    _render() {\r\n        let htmlStr = '';\r\n        this.items.forEach(item => {\r\n            htmlStr += new BasketItem(item).render();\r\n        });\r\n        this.containerItems.innerHTML = htmlStr;\r\n    }\r\n    _renderSum(){\r\n        let sum = 0;\r\n        this.items.forEach(item => {\r\n            sum += +new BasketItem(item).sum();\r\n        });\r\n        this.price.innerHTML = sum + \"$\";\r\n\r\n    }\r\n    _handleActions() {\r\n\r\n        document.querySelector('#basket-toggler').addEventListener('click', () => {\r\n            this.container.classList.toggle('invisible');\r\n            //this.totalPrice.classList.toggle('invisible');\r\n            this.shown = !this.shown;\r\n        });\r\n        this.container.addEventListener('click', ev => {\r\n            if (ev.target.name === 'remove') {\r\n                this._remove(ev.target.dataset.id);\r\n            }\r\n        })\r\n        \r\n    }\r\n    add(item) {\r\n        let find = this.items.find(el => el.productId === item.productId);\r\n        if (find) {\r\n            find.amount++;\r\n        } else {\r\n            this.items.push(item);\r\n        }\r\n        this._render();\r\n    }\r\n    _remove(id) {\r\n        let find = this.items.find(el => el.productId === id);\r\n        if (find.amount > 1) {\r\n            find.amount--;\r\n        } else {\r\n            this.items.splice(this.items.indexOf(find), 1);\r\n        }\r\n        this._render();\r\n    }\r\n };\r\n\n\n//# sourceURL=webpack://Brand/./src/components/basket.js?");

/***/ }),

/***/ "./src/components/catalog.js":
/*!***********************************!*\
  !*** ./src/components/catalog.js ***!
  \***********************************/
/***/ (() => {

eval("\r\nclass CatalogItem{\r\n    constructor(item){\r\n        this.item = item;\r\n    }\r\n    \r\n    render() {\r\n        return `\r\n        <div class=\"item\">\r\n            <a href=\"#\" class=\"item_\">\r\n                <div class=\"item__\">\r\n                    <div class=\"img_item\">\r\n                    <div class=\"open_text\">\r\n                            <div class=\"gen_add_to_card\">\r\n                                <img src=\"../src/assets/imgs/1287.png\" alt=\"\">\r\n                                <p class=\"p_add_to_card\">Add to card</p>\r\n                            </div>\r\n                        </div>\r\n                        <img src=\"${this.item.productImg}\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"footer_item\">\r\n                        <h1 class=\"h1_item\">${this.item.productName}</h1>\r\n                        <h2 class=\"h2_item\">$${this.item.productPrice}</h2>\r\n                    </div>\r\n                </div>\r\n            </a>\r\n        </div>`\r\n    }\r\n}\r\n\r\nnew class Catalog {\r\n    constructor(basket, container = '#catalog', url = '/catalog.json') {\r\n        this.container = document.querySelector(container);\r\n        this.items = [];\r\n        this.basket = basket;\r\n        this.url = 'https://raw.githubusercontent.com/RendarR/Other/master/' + url;\r\n        this.init();\r\n    }\r\n    init() {\r\n        this._get(this.url)\r\n            .then(arr => {\r\n                this.items = arr;\r\n            })\r\n            .finally(() => {\r\n                this._render();\r\n                this._handleActions();\r\n            })\r\n    }\r\n\r\n    _get(url) {\r\n        return fetch(url).then(d => d.json());\r\n    }\r\n\r\n    _fillCatalog() { //Инкапсуляция (условная для JS)\r\n        this.items = getArrayOfObjects();\r\n    }\r\n\r\n    _render() {\r\n        let htmlStr = '';\r\n        this.items.forEach(item => {\r\n            htmlStr += new CatalogItem(item).render();\r\n        });\r\n        this.container.innerHTML = htmlStr;\r\n    }\r\n\r\n    _handleActions() {\r\n        this.container.addEventListener('click', ev => {\r\n            if (ev.target.name == 'add') {\r\n                let dataset = ev.target.dataset;\r\n                this.basket.add(this._createNewItem(dataset));\r\n            }\r\n        })\r\n    }\r\n\r\n    _createNewItem(dataset) {\r\n        return {\r\n            productId: dataset.id,\r\n            productName: dataset.name,\r\n            productImg: dataset.img,\r\n            productPrice: +dataset.price,\r\n            amount: 1\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://Brand/./src/components/catalog.js?");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _basket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basket */ \"./src/components/basket.js\");\n/* harmony import */ var _basket__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_basket__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ \"./src/components/catalog.js\");\n/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_catalog__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n    let basket = new _basket__WEBPACK_IMPORTED_MODULE_0__.Basket();\r\n    let catalog = new _catalog__WEBPACK_IMPORTED_MODULE_1__.Catalog(basket)\r\n});\r\n\n\n//# sourceURL=webpack://Brand/./src/components/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _layout_styles_customBootstrap_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/styles/customBootstrap.css */ \"./src/layout/styles/customBootstrap.css\");\n/* harmony import */ var _layout_styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/styles/style.css */ \"./src/layout/styles/style.css\");\n/* harmony import */ var _components_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index.js */ \"./src/components/index.js\");\n\r\n\r\n\r\n\r\n(0,_components_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack://Brand/./src/index.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;