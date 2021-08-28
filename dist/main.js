/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactUs.js":
/*!**************************!*\
  !*** ./src/contactUs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");


const renderContactUs = () => {
  const contactUsDiv = document.createElement('div');
  contactUsDiv.setAttribute('id', 'contact-us-div');
  contactUsDiv.appendChild(
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.default)(
      'restaurantemail@ginzakyu.com',
      'p',
      'restaurant-email',
    )
  );
  contactUsDiv.appendChild(
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.default)(
      '123-456-789',
      'p',
      'telephone-number',
    )
  );
  contactUsDiv.appendChild(
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.default)(
      'Tokyo, Chuo City, Ginza',
      'p',
      'restaurant-address',
    )
  );
  const map = document.createElement('div');
  map.setAttribute('id', 'map-div');

  const ginzaMap = document.createElement('img');
  ginzaMap.setAttribute('id', 'ginza-map');
  ginzaMap.src = '/src/photos/ginza-map.jpg';
  map.appendChild(ginzaMap);
  contactUsDiv.appendChild(map);
  return contactUsDiv;
};

const initiateContactUs = () => {
  const main = document.getElementById('main');
  main.innerHTML = '';
  main.appendChild(renderContactUs());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initiateContactUs);

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createText = (text, tag, idName, className) => {
  const textElement = document.createElement(tag);
  textElement.textContent = text;
  textElement.setAttribute('id', idName);
  textElement.classList.add(className);
  return textElement;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createText);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");


const renderHome = () => {
  const homeDiv = document.createElement('div');
  homeDiv.setAttribute('id', 'home-div');
  homeDiv.appendChild(
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.default)(
      'Ginza Kyu', 
      'h1', 
      'restaurant-name', 
    )
  );
  homeDiv.appendChild(
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.default)(
      'World-class. Since 1935.',
      'p',
      'restaurant-line',
    )
  );
  return homeDiv;
};

const initiateHome = () => {
  const main = document.getElementById('main');
  main.innerHTML = '';
  main.appendChild(renderHome());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initiateHome);

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _contactUs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactUs */ "./src/contactUs.js");



const createNavBar = () => {
  const navBar = document.createElement('nav');
  navBar.setAttribute('id', 'nav-bar');

  const tabContainer = document.createElement('ul');
  tabContainer.setAttribute('id', 'tab-container');
  navBar.appendChild(tabContainer);

  const homeTab = document.createElement('li');
  homeTab.textContent = 'HOME';
  homeTab.classList.add('tabs');
  tabContainer.appendChild(homeTab);

  const menuTab = document.createElement('li');
  menuTab.textContent = 'MENU';
  menuTab.classList.add('tabs');
  tabContainer.appendChild(menuTab);

  const contactUsTab = document.createElement('li');
  contactUsTab.textContent = 'CONTACT US';
  contactUsTab.classList.add('tabs');
  tabContainer.appendChild(contactUsTab);

  return navBar;
};

const createMain = () => {
  const main = document.createElement('main');
  main.setAttribute('id', 'main');
  return main;
};

const createFooter = () => {
  const footer = document.createElement('footer');
  footer.setAttribute('id', 'footer');

  const footerMessage = document.createElement('p');
  footerMessage.textContent = 'Developed by ';

  const githubLinkUserName = document.createElement('a');
  githubLinkUserName.textContent = 'Centigrams';
  githubLinkUserName.href = 'https://github.com/Centigrams';
  githubLinkUserName.setAttribute('id', 'github-link');
  footerMessage.append(githubLinkUserName);

  const githubLogo = document.createElement('img');
  githubLogo.src = '/src/photos/githubLogo.png';
  githubLogo.setAttribute('id', 'github-logo');

  footer.appendChild(footerMessage);
  footerMessage.appendChild(githubLogo);
  return footer;
};

const loadPage = () => {
  const content = document.getElementById('content');
  content.appendChild(createNavBar());
  content.appendChild(createMain());
  content.appendChild(createFooter());
  // initiateHome();
  //! Initiating tabs aside from home for debugging purposes only.
  // initiateContactUs();
  initiateMenu();
};

document.addEventListener('click',(e) => {
  const clickedTab = e.target.textContent;
  if (clickedTab === 'HOME') {
      (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();
  } else if (clickedTab === 'MENU') {
      initiateMenu();
  } else if (clickedTab === 'CONTACT US') {
      (0,_contactUs__WEBPACK_IMPORTED_MODULE_1__.default)();
  }
});
loadPage();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7O0FDM0NoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7QUNSVTs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWTs7Ozs7O1VDNUIzQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05rQztBQUNVOztBQUU1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhDQUFZO0FBQ2xCLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSixNQUFNLG1EQUFpQjtBQUN2QjtBQUNBLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0VXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVUZXh0IGZyb20gXCIuL2hlbHBlcnNcIjtcblxuY29uc3QgcmVuZGVyQ29udGFjdFVzID0gKCkgPT4ge1xuICBjb25zdCBjb250YWN0VXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFjdFVzRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC11cy1kaXYnKTtcbiAgY29udGFjdFVzRGl2LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZVRleHQoXG4gICAgICAncmVzdGF1cmFudGVtYWlsQGdpbnpha3l1LmNvbScsXG4gICAgICAncCcsXG4gICAgICAncmVzdGF1cmFudC1lbWFpbCcsXG4gICAgKVxuICApO1xuICBjb250YWN0VXNEaXYuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlVGV4dChcbiAgICAgICcxMjMtNDU2LTc4OScsXG4gICAgICAncCcsXG4gICAgICAndGVsZXBob25lLW51bWJlcicsXG4gICAgKVxuICApO1xuICBjb250YWN0VXNEaXYuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlVGV4dChcbiAgICAgICdUb2t5bywgQ2h1byBDaXR5LCBHaW56YScsXG4gICAgICAncCcsXG4gICAgICAncmVzdGF1cmFudC1hZGRyZXNzJyxcbiAgICApXG4gICk7XG4gIGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYXAuc2V0QXR0cmlidXRlKCdpZCcsICdtYXAtZGl2Jyk7XG5cbiAgY29uc3QgZ2luemFNYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgZ2luemFNYXAuc2V0QXR0cmlidXRlKCdpZCcsICdnaW56YS1tYXAnKTtcbiAgZ2luemFNYXAuc3JjID0gJy9zcmMvcGhvdG9zL2dpbnphLW1hcC5qcGcnO1xuICBtYXAuYXBwZW5kQ2hpbGQoZ2luemFNYXApO1xuICBjb250YWN0VXNEaXYuYXBwZW5kQ2hpbGQobWFwKTtcbiAgcmV0dXJuIGNvbnRhY3RVc0Rpdjtcbn07XG5cbmNvbnN0IGluaXRpYXRlQ29udGFjdFVzID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgbWFpbi5hcHBlbmRDaGlsZChyZW5kZXJDb250YWN0VXMoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0aWF0ZUNvbnRhY3RVczsiLCJjb25zdCBjcmVhdGVUZXh0ID0gKHRleHQsIHRhZywgaWROYW1lLCBjbGFzc05hbWUpID0+IHtcbiAgY29uc3QgdGV4dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIHRleHRFbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgdGV4dEVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlkTmFtZSk7XG4gIHRleHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgcmV0dXJuIHRleHRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGV4dDsiLCJpbXBvcnQgY3JlYXRlVGV4dCBmcm9tIFwiLi9oZWxwZXJzXCI7XG5cbmNvbnN0IHJlbmRlckhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaG9tZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUtZGl2Jyk7XG4gIGhvbWVEaXYuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlVGV4dChcbiAgICAgICdHaW56YSBLeXUnLCBcbiAgICAgICdoMScsIFxuICAgICAgJ3Jlc3RhdXJhbnQtbmFtZScsIFxuICAgIClcbiAgKTtcbiAgaG9tZURpdi5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVUZXh0KFxuICAgICAgJ1dvcmxkLWNsYXNzLiBTaW5jZSAxOTM1LicsXG4gICAgICAncCcsXG4gICAgICAncmVzdGF1cmFudC1saW5lJyxcbiAgICApXG4gICk7XG4gIHJldHVybiBob21lRGl2O1xufTtcblxuY29uc3QgaW5pdGlhdGVIb21lID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgbWFpbi5hcHBlbmRDaGlsZChyZW5kZXJIb21lKCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhdGVIb21lOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGluaXRpYXRlSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgaW5pdGlhdGVDb250YWN0VXMgZnJvbSBcIi4vY29udGFjdFVzXCI7XG5cbmNvbnN0IGNyZWF0ZU5hdkJhciA9ICgpID0+IHtcbiAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIG5hdkJhci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hdi1iYXInKTtcblxuICBjb25zdCB0YWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICB0YWJDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICd0YWItY29udGFpbmVyJyk7XG4gIG5hdkJhci5hcHBlbmRDaGlsZCh0YWJDb250YWluZXIpO1xuXG4gIGNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBob21lVGFiLnRleHRDb250ZW50ID0gJ0hPTUUnO1xuICBob21lVGFiLmNsYXNzTGlzdC5hZGQoJ3RhYnMnKTtcbiAgdGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVUYWIpO1xuXG4gIGNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBtZW51VGFiLnRleHRDb250ZW50ID0gJ01FTlUnO1xuICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoJ3RhYnMnKTtcbiAgdGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVUYWIpO1xuXG4gIGNvbnN0IGNvbnRhY3RVc1RhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnRhY3RVc1RhYi50ZXh0Q29udGVudCA9ICdDT05UQUNUIFVTJztcbiAgY29udGFjdFVzVGFiLmNsYXNzTGlzdC5hZGQoJ3RhYnMnKTtcbiAgdGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RVc1RhYik7XG5cbiAgcmV0dXJuIG5hdkJhcjtcbn07XG5cbmNvbnN0IGNyZWF0ZU1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XG4gIHJldHVybiBtYWluO1xufTtcblxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgZm9vdGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vdGVyJyk7XG5cbiAgY29uc3QgZm9vdGVyTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZm9vdGVyTWVzc2FnZS50ZXh0Q29udGVudCA9ICdEZXZlbG9wZWQgYnkgJztcblxuICBjb25zdCBnaXRodWJMaW5rVXNlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGdpdGh1YkxpbmtVc2VyTmFtZS50ZXh0Q29udGVudCA9ICdDZW50aWdyYW1zJztcbiAgZ2l0aHViTGlua1VzZXJOYW1lLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL0NlbnRpZ3JhbXMnO1xuICBnaXRodWJMaW5rVXNlck5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdnaXRodWItbGluaycpO1xuICBmb290ZXJNZXNzYWdlLmFwcGVuZChnaXRodWJMaW5rVXNlck5hbWUpO1xuXG4gIGNvbnN0IGdpdGh1YkxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgZ2l0aHViTG9nby5zcmMgPSAnL3NyYy9waG90b3MvZ2l0aHViTG9nby5wbmcnO1xuICBnaXRodWJMb2dvLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ2l0aHViLWxvZ28nKTtcblxuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTWVzc2FnZSk7XG4gIGZvb3Rlck1lc3NhZ2UuYXBwZW5kQ2hpbGQoZ2l0aHViTG9nbyk7XG4gIHJldHVybiBmb290ZXI7XG59O1xuXG5jb25zdCBsb2FkUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2QmFyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuICAvLyBpbml0aWF0ZUhvbWUoKTtcbiAgLy8hIEluaXRpYXRpbmcgdGFicyBhc2lkZSBmcm9tIGhvbWUgZm9yIGRlYnVnZ2luZyBwdXJwb3NlcyBvbmx5LlxuICAvLyBpbml0aWF0ZUNvbnRhY3RVcygpO1xuICBpbml0aWF0ZU1lbnUoKTtcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4ge1xuICBjb25zdCBjbGlja2VkVGFiID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gIGlmIChjbGlja2VkVGFiID09PSAnSE9NRScpIHtcbiAgICAgIGluaXRpYXRlSG9tZSgpO1xuICB9IGVsc2UgaWYgKGNsaWNrZWRUYWIgPT09ICdNRU5VJykge1xuICAgICAgaW5pdGlhdGVNZW51KCk7XG4gIH0gZWxzZSBpZiAoY2xpY2tlZFRhYiA9PT0gJ0NPTlRBQ1QgVVMnKSB7XG4gICAgICBpbml0aWF0ZUNvbnRhY3RVcygpO1xuICB9XG59KTtcbmxvYWRQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=