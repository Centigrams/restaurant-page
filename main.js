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

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderMenu = () => {
  const renderMenuDiv = document.createElement('div');
  renderMenuDiv.setAttribute('id', 'render-menu-div');
  renderMenuDiv.innerHTML = `
  <div class="list">
      <h2 class="list-title">Assorted Sushi</h2>
      <ul>
          <li class="item"><span class="name">ORIBE</span>
              <span class="price">¥7,000</span>
          </li>
          <li class="item"><span class="name">KARATSU</span>
              <span class="price">¥11,000</span>
          </li>
          <li class="item"><span class="name">KYUBEY</span>
              <span class="price">¥16,000</span>
          </li>
      </ul>
  </div>

  <div class="list">
      <h2 class="list-title">Set Course</h2>
      <ul>
          <li class="item"><span class="name">IGA</span>
              <span class="price">¥21,000</span>
          </li>
          <li class="item"><span class="name">BIZEN</span>
              <span class="price">¥25,000</span>
          </li>
          <li class="item"><span class="name">ROSANJIN</span>
              <span class="price">¥30,000</span>
          </li>
      </ul>
  </div>

  <div class="list">
      <h2 class="list-title">Sho-Chu</h2>
      <ul>
          <li class="item"><span class="name">NIKAIDO (Barley)</span>
              <span class="price">¥900</span>
          </li>
          <li class="item"><span class="name">SHIRANAMI (Sweet Potato)</span>
              <span class="price">¥900</span>
          </li>
          <li class="item"><span class="name">ISAMI (Sweet Potato)</span>
              <span class="price">¥1,500</span>
          </li>
          <li class="item"><span class="name">JUUYONDAI (Rice)</span>
          <span class="price">¥1,900</span>
      </li>
      </ul>
  </div>

  <div class="list">
      <h2 class="list-title">Whisky</h2>
      <ul>
          <li class="item"><span class="name">SINGLETON 12 years</span>
              <span class="price">¥2,000</span>
          </li>
          <li class="item"><span class="name">CHITA</span>
              <span class="price">¥2,000</span>
          </li>
          <li class="item"><span class="name">YAMAZAKI 12 years</span>
              <span class="price">¥1,800</span>
          </li>
      </ul>
  </div> 
  `
  return renderMenuDiv;
};

const initiateMenu = () => {
  const main = document.getElementById('main');
  main.innerHTML = '';
  main.appendChild(renderMenu());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initiateMenu);

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
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");




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
};

document.addEventListener('click',(e) => {
  const clickedTab = e.target.textContent;
  if (clickedTab === 'HOME') {
      (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();
  } else if (clickedTab === 'MENU') {
      (0,_menu__WEBPACK_IMPORTED_MODULE_2__.default)();
  } else if (clickedTab === 'CONTACT US') {
      (0,_contactUs__WEBPACK_IMPORTED_MODULE_1__.default)();
  }
});
loadPage();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7O0FDM0NoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7QUNSVTs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7QUM1QjNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQVk7Ozs7OztVQzVFM0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTmtDO0FBQ1U7QUFDVjs7QUFFbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOENBQVk7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhDQUFZO0FBQ2xCLElBQUk7QUFDSixNQUFNLDhDQUFZO0FBQ2xCLElBQUk7QUFDSixNQUFNLG1EQUFpQjtBQUN2QjtBQUNBLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0VXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVUZXh0IGZyb20gXCIuL2hlbHBlcnNcIjtcblxuY29uc3QgcmVuZGVyQ29udGFjdFVzID0gKCkgPT4ge1xuICBjb25zdCBjb250YWN0VXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFjdFVzRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC11cy1kaXYnKTtcbiAgY29udGFjdFVzRGl2LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZVRleHQoXG4gICAgICAncmVzdGF1cmFudGVtYWlsQGdpbnpha3l1LmNvbScsXG4gICAgICAncCcsXG4gICAgICAncmVzdGF1cmFudC1lbWFpbCcsXG4gICAgKVxuICApO1xuICBjb250YWN0VXNEaXYuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlVGV4dChcbiAgICAgICcxMjMtNDU2LTc4OScsXG4gICAgICAncCcsXG4gICAgICAndGVsZXBob25lLW51bWJlcicsXG4gICAgKVxuICApO1xuICBjb250YWN0VXNEaXYuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlVGV4dChcbiAgICAgICdUb2t5bywgQ2h1byBDaXR5LCBHaW56YScsXG4gICAgICAncCcsXG4gICAgICAncmVzdGF1cmFudC1hZGRyZXNzJyxcbiAgICApXG4gICk7XG4gIGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYXAuc2V0QXR0cmlidXRlKCdpZCcsICdtYXAtZGl2Jyk7XG5cbiAgY29uc3QgZ2luemFNYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgZ2luemFNYXAuc2V0QXR0cmlidXRlKCdpZCcsICdnaW56YS1tYXAnKTtcbiAgZ2luemFNYXAuc3JjID0gJy9zcmMvcGhvdG9zL2dpbnphLW1hcC5qcGcnO1xuICBtYXAuYXBwZW5kQ2hpbGQoZ2luemFNYXApO1xuICBjb250YWN0VXNEaXYuYXBwZW5kQ2hpbGQobWFwKTtcbiAgcmV0dXJuIGNvbnRhY3RVc0Rpdjtcbn07XG5cbmNvbnN0IGluaXRpYXRlQ29udGFjdFVzID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgbWFpbi5hcHBlbmRDaGlsZChyZW5kZXJDb250YWN0VXMoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0aWF0ZUNvbnRhY3RVczsiLCJjb25zdCBjcmVhdGVUZXh0ID0gKHRleHQsIHRhZywgaWROYW1lLCBjbGFzc05hbWUpID0+IHtcbiAgY29uc3QgdGV4dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIHRleHRFbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgdGV4dEVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlkTmFtZSk7XG4gIHRleHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgcmV0dXJuIHRleHRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGV4dDsiLCJpbXBvcnQgY3JlYXRlVGV4dCBmcm9tIFwiLi9oZWxwZXJzXCI7XG5cbmNvbnN0IHJlbmRlckhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaG9tZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUtZGl2Jyk7XG4gIGhvbWVEaXYuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlVGV4dChcbiAgICAgICdHaW56YSBLeXUnLCBcbiAgICAgICdoMScsIFxuICAgICAgJ3Jlc3RhdXJhbnQtbmFtZScsIFxuICAgIClcbiAgKTtcbiAgaG9tZURpdi5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVUZXh0KFxuICAgICAgJ1dvcmxkLWNsYXNzLiBTaW5jZSAxOTM1LicsXG4gICAgICAncCcsXG4gICAgICAncmVzdGF1cmFudC1saW5lJyxcbiAgICApXG4gICk7XG4gIHJldHVybiBob21lRGl2O1xufTtcblxuY29uc3QgaW5pdGlhdGVIb21lID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgbWFpbi5hcHBlbmRDaGlsZChyZW5kZXJIb21lKCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhdGVIb21lOyIsImNvbnN0IHJlbmRlck1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IHJlbmRlck1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcmVuZGVyTWVudURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JlbmRlci1tZW51LWRpdicpO1xuICByZW5kZXJNZW51RGl2LmlubmVySFRNTCA9IGBcbiAgPGRpdiBjbGFzcz1cImxpc3RcIj5cbiAgICAgIDxoMiBjbGFzcz1cImxpc3QtdGl0bGVcIj5Bc3NvcnRlZCBTdXNoaTwvaDI+XG4gICAgICA8dWw+XG4gICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbVwiPjxzcGFuIGNsYXNzPVwibmFtZVwiPk9SSUJFPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+wqU3LDAwMDwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cIml0ZW1cIj48c3BhbiBjbGFzcz1cIm5hbWVcIj5LQVJBVFNVPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+wqUxMSwwMDA8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJpdGVtXCI+PHNwYW4gY2xhc3M9XCJuYW1lXCI+S1lVQkVZPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+wqUxNiwwMDA8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJsaXN0XCI+XG4gICAgICA8aDIgY2xhc3M9XCJsaXN0LXRpdGxlXCI+U2V0IENvdXJzZTwvaDI+XG4gICAgICA8dWw+XG4gICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbVwiPjxzcGFuIGNsYXNzPVwibmFtZVwiPklHQTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZVwiPsKlMjEsMDAwPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbVwiPjxzcGFuIGNsYXNzPVwibmFtZVwiPkJJWkVOPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+wqUyNSwwMDA8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJpdGVtXCI+PHNwYW4gY2xhc3M9XCJuYW1lXCI+Uk9TQU5KSU48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj7CpTMwLDAwMDwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImxpc3RcIj5cbiAgICAgIDxoMiBjbGFzcz1cImxpc3QtdGl0bGVcIj5TaG8tQ2h1PC9oMj5cbiAgICAgIDx1bD5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJpdGVtXCI+PHNwYW4gY2xhc3M9XCJuYW1lXCI+TklLQUlETyAoQmFybGV5KTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZVwiPsKlOTAwPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbVwiPjxzcGFuIGNsYXNzPVwibmFtZVwiPlNISVJBTkFNSSAoU3dlZXQgUG90YXRvKTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZVwiPsKlOTAwPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbVwiPjxzcGFuIGNsYXNzPVwibmFtZVwiPklTQU1JIChTd2VldCBQb3RhdG8pPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+wqUxLDUwMDwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cIml0ZW1cIj48c3BhbiBjbGFzcz1cIm5hbWVcIj5KVVVZT05EQUkgKFJpY2UpPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj7CpTEsOTAwPC9zcGFuPlxuICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJsaXN0XCI+XG4gICAgICA8aDIgY2xhc3M9XCJsaXN0LXRpdGxlXCI+V2hpc2t5PC9oMj5cbiAgICAgIDx1bD5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJpdGVtXCI+PHNwYW4gY2xhc3M9XCJuYW1lXCI+U0lOR0xFVE9OIDEyIHllYXJzPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+wqUyLDAwMDwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cIml0ZW1cIj48c3BhbiBjbGFzcz1cIm5hbWVcIj5DSElUQTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZVwiPsKlMiwwMDA8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJpdGVtXCI+PHNwYW4gY2xhc3M9XCJuYW1lXCI+WUFNQVpBS0kgMTIgeWVhcnM8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj7CpTEsODAwPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICA8L2Rpdj4gXG4gIGBcbiAgcmV0dXJuIHJlbmRlck1lbnVEaXY7XG59O1xuXG5jb25zdCBpbml0aWF0ZU1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICBtYWluLmlubmVySFRNTCA9ICcnO1xuICBtYWluLmFwcGVuZENoaWxkKHJlbmRlck1lbnUoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0aWF0ZU1lbnU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdGlhdGVIb21lIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBpbml0aWF0ZUNvbnRhY3RVcyBmcm9tIFwiLi9jb250YWN0VXNcIjtcbmltcG9ydCBpbml0aWF0ZU1lbnUgZnJvbSBcIi4vbWVudVwiO1xuXG5jb25zdCBjcmVhdGVOYXZCYXIgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBuYXZCYXIuc2V0QXR0cmlidXRlKCdpZCcsICduYXYtYmFyJyk7XG5cbiAgY29uc3QgdGFiQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgdGFiQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFiLWNvbnRhaW5lcicpO1xuICBuYXZCYXIuYXBwZW5kQ2hpbGQodGFiQ29udGFpbmVyKTtcblxuICBjb25zdCBob21lVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgaG9tZVRhYi50ZXh0Q29udGVudCA9ICdIT01FJztcbiAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKCd0YWJzJyk7XG4gIHRhYkNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lVGFiKTtcblxuICBjb25zdCBtZW51VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbWVudVRhYi50ZXh0Q29udGVudCA9ICdNRU5VJztcbiAgbWVudVRhYi5jbGFzc0xpc3QuYWRkKCd0YWJzJyk7XG4gIHRhYkNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51VGFiKTtcblxuICBjb25zdCBjb250YWN0VXNUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb250YWN0VXNUYWIudGV4dENvbnRlbnQgPSAnQ09OVEFDVCBVUyc7XG4gIGNvbnRhY3RVc1RhYi5jbGFzc0xpc3QuYWRkKCd0YWJzJyk7XG4gIHRhYkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0VXNUYWIpO1xuXG4gIHJldHVybiBuYXZCYXI7XG59O1xuXG5jb25zdCBjcmVhdGVNYWluID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbicpO1xuICByZXR1cm4gbWFpbjtcbn07XG5cbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGZvb3Rlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvb3RlcicpO1xuXG4gIGNvbnN0IGZvb3Rlck1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGZvb3Rlck1lc3NhZ2UudGV4dENvbnRlbnQgPSAnRGV2ZWxvcGVkIGJ5ICc7XG5cbiAgY29uc3QgZ2l0aHViTGlua1VzZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBnaXRodWJMaW5rVXNlck5hbWUudGV4dENvbnRlbnQgPSAnQ2VudGlncmFtcyc7XG4gIGdpdGh1YkxpbmtVc2VyTmFtZS5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9DZW50aWdyYW1zJztcbiAgZ2l0aHViTGlua1VzZXJOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ2l0aHViLWxpbmsnKTtcbiAgZm9vdGVyTWVzc2FnZS5hcHBlbmQoZ2l0aHViTGlua1VzZXJOYW1lKTtcblxuICBjb25zdCBnaXRodWJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGdpdGh1YkxvZ28uc3JjID0gJy9zcmMvcGhvdG9zL2dpdGh1YkxvZ28ucG5nJztcbiAgZ2l0aHViTG9nby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dpdGh1Yi1sb2dvJyk7XG5cbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3Rlck1lc3NhZ2UpO1xuICBmb290ZXJNZXNzYWdlLmFwcGVuZENoaWxkKGdpdGh1YkxvZ28pO1xuICByZXR1cm4gZm9vdGVyO1xufTtcblxuY29uc3QgbG9hZFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hdkJhcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbiAgaW5pdGlhdGVIb21lKCk7XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpID0+IHtcbiAgY29uc3QgY2xpY2tlZFRhYiA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICBpZiAoY2xpY2tlZFRhYiA9PT0gJ0hPTUUnKSB7XG4gICAgICBpbml0aWF0ZUhvbWUoKTtcbiAgfSBlbHNlIGlmIChjbGlja2VkVGFiID09PSAnTUVOVScpIHtcbiAgICAgIGluaXRpYXRlTWVudSgpO1xuICB9IGVsc2UgaWYgKGNsaWNrZWRUYWIgPT09ICdDT05UQUNUIFVTJykge1xuICAgICAgaW5pdGlhdGVDb250YWN0VXMoKTtcbiAgfVxufSk7XG5sb2FkUGFnZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9