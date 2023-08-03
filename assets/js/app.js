/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("document.querySelector('#codeMapGetters').value = \r\n`import { mapGetters } from 'vuex'\r\n\r\ncomputed: {\r\n    ...mapGetters({\r\n        exampleData: 'example/exampleData',\r\n        exampleDataSecond: 'example/exampleDataSecond',\r\n    })\r\n}`\r\ndocument.querySelector('#codeMapAction').value = \r\n`this.$store.dispatch('example/exampleActionFunction', data)`\r\ndocument.querySelector('#codeStoreMutation').value = \r\n`mutations: {\r\n    SET_EXAMPLE_DATA: (state, data) => state.exampleData = data,\r\n},`\r\ndocument.querySelector('#codeComponentImports').value = \r\n`components: {\r\n    HeaderDeleted: () => import('~/components/common/the-header/HeaderDeleted.vue'),\r\n    \r\n    ContractsIcon: () => import('~/components/common/icons/ContractsIcon.vue'),\r\n    DeletedFilesIcon: () => import('~/components/common/icons/DeletedFilesIcon.vue'),\r\n    FolderIcon: () => import('~/components/common/icons/FolderIcon.vue'),\r\n    ClipIcon: () => import('~/components/common/icons/ClipIcon.vue'),\r\n\r\n    SkeletonProjectsFolder: () => import('~/components/common/skeletons/SkeletonProjectsFolder.vue'),\r\n},`\r\ndocument.querySelector('#codeLanguageImport').value = \r\n`export default {\r\n    contractSelectHeaderCategory: 'Category',\r\n},`\n\n//# sourceURL=webpack://wafelt/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/imask.js":
/*!********************************!*\
  !*** ./src/assets/js/imask.js ***!
  \********************************/
/***/ (function() {

eval("const tels = document.querySelectorAll(\"input[type=\\\"tel\\\"]\");\r\n\r\nif (tels) {\r\n    tels.forEach(el => {\r\n        IMask(el, { mask: \"+ {0} (000) 000 00 000 00\" });\r\n    });\r\n}\n\n//# sourceURL=webpack://wafelt/./src/assets/js/imask.js?");

/***/ }),

/***/ "./src/assets/js/lozad.js":
/*!********************************!*\
  !*** ./src/assets/js/lozad.js ***!
  \********************************/
/***/ (function() {

eval("const observer = lozad('.lozad', {\r\n    loaded: function(img) {\r\n        img.addEventListener('load', function() {\r\n            img.classList.add('loaded');\r\n        });\r\n        \r\n        if(img.hasAttribute('data-background-image')) {\r\n            img.classList.add('loaded');\r\n        };\r\n    },\r\n});\r\n\r\n\r\nobserver.observe();\n\n//# sourceURL=webpack://wafelt/./src/assets/js/lozad.js?");

/***/ }),

/***/ "./src/assets/js/smooth-links.js":
/*!***************************************!*\
  !*** ./src/assets/js/smooth-links.js ***!
  \***************************************/
/***/ (function() {

eval("const smoothLinks = document.querySelectorAll('a[href^=\"#\"]');\r\nif (smoothLinks) {\r\n    for (let smoothLink of smoothLinks) {\r\n        smoothLink.addEventListener('click', function (e) {\r\n            e.preventDefault();\r\n            const id = smoothLink.getAttribute('href');\r\n    \r\n            if (id === \"#\") return\r\n            document.querySelector(id).scrollIntoView({\r\n                behavior: 'smooth',\r\n                block: 'start'\r\n            });\r\n        });\r\n    };\r\n}\n\n//# sourceURL=webpack://wafelt/./src/assets/js/smooth-links.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	__webpack_modules__["./src/assets/js/imask.js"]();
/******/ 	__webpack_modules__["./src/assets/js/lozad.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/smooth-links.js"]();
/******/ 	
/******/ })()
;