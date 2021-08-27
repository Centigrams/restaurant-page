/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
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

const renderHome = () => {
  const homeDiv = document.createElement('div');
  homeDiv.setAttribute('id', 'home-div');

  homeDiv.appendChild(
    createText(
      'Ginza Kyu', 
      'h1', 
      'restaurant-name', 
      null
    )
  );

  homeDiv.appendChild(
    createText(
      'World-class. Since 1935.',
      'p',
      'restaurant-line',
      null
    )
  );

  return homeDiv;
};

const initiateHome = () => {
  const main = document.getElementById('main');
  //? Is this enough to clear page?
  main.textContent = "";
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createText": () => (/* binding */ createText)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");


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
  (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();
}

document.addEventListener('click',(e) => {
  const clickedTab = e.target.textContent;
  if (clickedTab === 'HOME') {
      (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();
  } else if (clickedTab === 'MENU') {
    //   initiateMenu();
  } else if (clickedTab === 'CONTACT US') {
    //   initiateContactUs();
  }
});
loadPage();

function createText (text, tag, idName, className) {
  const textElement = document.createElement(tag);
  textElement.textContent = text;
  textElement.setAttribute('id', idName);
  textElement.classList.add(className);
  return textElement;
};


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWTs7Ozs7O1VDeEMzQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTmtDOztBQUVsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw4Q0FBWTtBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sOENBQVk7QUFDbEIsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlVGV4dCA9ICh0ZXh0LCB0YWcsIGlkTmFtZSwgY2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IHRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICB0ZXh0RWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHRleHRFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZE5hbWUpO1xuICB0ZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIHJldHVybiB0ZXh0RWxlbWVudDtcbn07XG5cbmNvbnN0IHJlbmRlckhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaG9tZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUtZGl2Jyk7XG5cbiAgaG9tZURpdi5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVUZXh0KFxuICAgICAgJ0dpbnphIEt5dScsIFxuICAgICAgJ2gxJywgXG4gICAgICAncmVzdGF1cmFudC1uYW1lJywgXG4gICAgICBudWxsXG4gICAgKVxuICApO1xuXG4gIGhvbWVEaXYuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlVGV4dChcbiAgICAgICdXb3JsZC1jbGFzcy4gU2luY2UgMTkzNS4nLFxuICAgICAgJ3AnLFxuICAgICAgJ3Jlc3RhdXJhbnQtbGluZScsXG4gICAgICBudWxsXG4gICAgKVxuICApO1xuXG4gIHJldHVybiBob21lRGl2O1xufTtcblxuY29uc3QgaW5pdGlhdGVIb21lID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgLy8/IElzIHRoaXMgZW5vdWdoIHRvIGNsZWFyIHBhZ2U/XG4gIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICBtYWluLmFwcGVuZENoaWxkKHJlbmRlckhvbWUoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0aWF0ZUhvbWU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdGlhdGVIb21lIGZyb20gXCIuL2hvbWVcIjtcblxuY29uc3QgY3JlYXRlTmF2QmFyID0gKCkgPT4ge1xuICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgbmF2QmFyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2LWJhcicpO1xuXG4gIGNvbnN0IHRhYkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHRhYkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RhYi1jb250YWluZXInKTtcbiAgbmF2QmFyLmFwcGVuZENoaWxkKHRhYkNvbnRhaW5lcik7XG5cbiAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGhvbWVUYWIudGV4dENvbnRlbnQgPSAnSE9NRSc7XG4gIGhvbWVUYWIuY2xhc3NMaXN0LmFkZCgndGFicycpO1xuICB0YWJDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZVRhYik7XG5cbiAgY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIG1lbnVUYWIudGV4dENvbnRlbnQgPSAnTUVOVSc7XG4gIG1lbnVUYWIuY2xhc3NMaXN0LmFkZCgndGFicycpO1xuICB0YWJDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudVRhYik7XG5cbiAgY29uc3QgY29udGFjdFVzVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29udGFjdFVzVGFiLnRleHRDb250ZW50ID0gJ0NPTlRBQ1QgVVMnO1xuICBjb250YWN0VXNUYWIuY2xhc3NMaXN0LmFkZCgndGFicycpO1xuICB0YWJDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdFVzVGFiKTtcblxuICByZXR1cm4gbmF2QmFyO1xufTtcblxuY29uc3QgY3JlYXRlTWFpbiA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4nKTtcbiAgcmV0dXJuIG1haW47XG59O1xuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICBmb290ZXIuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXInKTtcblxuICBjb25zdCBmb290ZXJNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBmb290ZXJNZXNzYWdlLnRleHRDb250ZW50ID0gJ0RldmVsb3BlZCBieSAnO1xuXG4gIGNvbnN0IGdpdGh1YkxpbmtVc2VyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgZ2l0aHViTGlua1VzZXJOYW1lLnRleHRDb250ZW50ID0gJ0NlbnRpZ3JhbXMnO1xuICBnaXRodWJMaW5rVXNlck5hbWUuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vQ2VudGlncmFtcyc7XG4gIGdpdGh1YkxpbmtVc2VyTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dpdGh1Yi1saW5rJyk7XG4gIGZvb3Rlck1lc3NhZ2UuYXBwZW5kKGdpdGh1YkxpbmtVc2VyTmFtZSk7XG5cbiAgY29uc3QgZ2l0aHViTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBnaXRodWJMb2dvLnNyYyA9ICcvc3JjL3Bob3Rvcy9naXRodWJMb2dvLnBuZyc7XG4gIGdpdGh1YkxvZ28uc2V0QXR0cmlidXRlKCdpZCcsICdnaXRodWItbG9nbycpO1xuXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJNZXNzYWdlKTtcbiAgZm9vdGVyTWVzc2FnZS5hcHBlbmRDaGlsZChnaXRodWJMb2dvKTtcbiAgcmV0dXJuIGZvb3Rlcjtcbn07XG5cbmNvbnN0IGxvYWRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVOYXZCYXIoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG4gIGluaXRpYXRlSG9tZSgpO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpID0+IHtcbiAgY29uc3QgY2xpY2tlZFRhYiA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICBpZiAoY2xpY2tlZFRhYiA9PT0gJ0hPTUUnKSB7XG4gICAgICBpbml0aWF0ZUhvbWUoKTtcbiAgfSBlbHNlIGlmIChjbGlja2VkVGFiID09PSAnTUVOVScpIHtcbiAgICAvLyAgIGluaXRpYXRlTWVudSgpO1xuICB9IGVsc2UgaWYgKGNsaWNrZWRUYWIgPT09ICdDT05UQUNUIFVTJykge1xuICAgIC8vICAgaW5pdGlhdGVDb250YWN0VXMoKTtcbiAgfVxufSk7XG5sb2FkUGFnZSgpO1xuXG5mdW5jdGlvbiBjcmVhdGVUZXh0ICh0ZXh0LCB0YWcsIGlkTmFtZSwgY2xhc3NOYW1lKSB7XG4gIGNvbnN0IHRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICB0ZXh0RWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHRleHRFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZE5hbWUpO1xuICB0ZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIHJldHVybiB0ZXh0RWxlbWVudDtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVRleHQgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=