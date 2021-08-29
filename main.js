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
  ginzaMap.src = '/dist/photos/ginza-map.jpg';
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
  githubLogo.src = '/dist/photos/githubLogo.png';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7O0FDM0NoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7QUNSVTs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7QUM1QjNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQVk7Ozs7OztVQzVFM0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTmtDO0FBQ1U7QUFDVjs7QUFFbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOENBQVk7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhDQUFZO0FBQ2xCLElBQUk7QUFDSixNQUFNLDhDQUFZO0FBQ2xCLElBQUk7QUFDSixNQUFNLG1EQUFpQjtBQUN2QjtBQUNBLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0VXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVUZXh0IGZyb20gXCIuL2hlbHBlcnNcIjtcblxuY29uc3QgcmVuZGVyQ29udGFjdFVzID0gKCkgPT4ge1xuICBjb25zdCBjb250YWN0VXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFjdFVzRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC11cy1kaXYnKTtcbiAgY29udGFjdFVzRGl2LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZVRleHQoXG4gICAgICAncmVzdGF1cmFudGVtYWlsQGdpbnpha3l1LmNvbScsXG4gICAgICAncCcsXG4gICAgICAncmVzdGF1cmFudC1lbWFpbCcsXG4gICAgKVxuICApO1xuICBjb250YWN0VXNEaXYuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlVGV4dChcbiAgICAgICcxMjMtNDU2LTc4OScsXG4gICAgICAncCcsXG4gICAgICAndGVsZXBob25lLW51bWJlcicsXG4gICAgKVxuICApO1xuICBjb250YWN0VXNEaXYuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlVGV4dChcbiAgICAgICdUb2t5bywgQ2h1byBDaXR5LCBHaW56YScsXG4gICAgICAncCcsXG4gICAgICAncmVzdGF1cmFudC1hZGRyZXNzJyxcbiAgICApXG4gICk7XG4gIGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYXAuc2V0QXR0cmlidXRlKCdpZCcsICdtYXAtZGl2Jyk7XG5cbiAgY29uc3QgZ2luemFNYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgZ2luemFNYXAuc2V0QXR0cmlidXRlKCdpZCcsICdnaW56YS1tYXAnKTtcbiAgZ2luemFNYXAuc3JjID0gJy9kaXN0L3Bob3Rvcy9naW56YS1tYXAuanBnJztcbiAgbWFwLmFwcGVuZENoaWxkKGdpbnphTWFwKTtcbiAgY29udGFjdFVzRGl2LmFwcGVuZENoaWxkKG1hcCk7XG4gIHJldHVybiBjb250YWN0VXNEaXY7XG59O1xuXG5jb25zdCBpbml0aWF0ZUNvbnRhY3RVcyA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gIG1haW4uYXBwZW5kQ2hpbGQocmVuZGVyQ29udGFjdFVzKCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhdGVDb250YWN0VXM7IiwiY29uc3QgY3JlYXRlVGV4dCA9ICh0ZXh0LCB0YWcsIGlkTmFtZSwgY2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IHRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICB0ZXh0RWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHRleHRFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZE5hbWUpO1xuICB0ZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIHJldHVybiB0ZXh0RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRleHQ7IiwiaW1wb3J0IGNyZWF0ZVRleHQgZnJvbSBcIi4vaGVscGVyc1wiO1xuXG5jb25zdCByZW5kZXJIb21lID0gKCkgPT4ge1xuICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvbWVEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdob21lLWRpdicpO1xuICBob21lRGl2LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZVRleHQoXG4gICAgICAnR2luemEgS3l1JywgXG4gICAgICAnaDEnLCBcbiAgICAgICdyZXN0YXVyYW50LW5hbWUnLCBcbiAgICApXG4gICk7XG4gIGhvbWVEaXYuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlVGV4dChcbiAgICAgICdXb3JsZC1jbGFzcy4gU2luY2UgMTkzNS4nLFxuICAgICAgJ3AnLFxuICAgICAgJ3Jlc3RhdXJhbnQtbGluZScsXG4gICAgKVxuICApO1xuICByZXR1cm4gaG9tZURpdjtcbn07XG5cbmNvbnN0IGluaXRpYXRlSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gIG1haW4uYXBwZW5kQ2hpbGQocmVuZGVySG9tZSgpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYXRlSG9tZTsiLCJjb25zdCByZW5kZXJNZW51ID0gKCkgPT4ge1xuICBjb25zdCByZW5kZXJNZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJlbmRlck1lbnVEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdyZW5kZXItbWVudS1kaXYnKTtcbiAgcmVuZGVyTWVudURpdi5pbm5lckhUTUwgPSBgXG4gIDxkaXYgY2xhc3M9XCJsaXN0XCI+XG4gICAgICA8aDIgY2xhc3M9XCJsaXN0LXRpdGxlXCI+QXNzb3J0ZWQgU3VzaGk8L2gyPlxuICAgICAgPHVsPlxuICAgICAgICAgIDxsaSBjbGFzcz1cIml0ZW1cIj48c3BhbiBjbGFzcz1cIm5hbWVcIj5PUklCRTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZVwiPsKlNywwMDA8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJpdGVtXCI+PHNwYW4gY2xhc3M9XCJuYW1lXCI+S0FSQVRTVTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZVwiPsKlMTEsMDAwPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbVwiPjxzcGFuIGNsYXNzPVwibmFtZVwiPktZVUJFWTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZVwiPsKlMTYsMDAwPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwibGlzdFwiPlxuICAgICAgPGgyIGNsYXNzPVwibGlzdC10aXRsZVwiPlNldCBDb3Vyc2U8L2gyPlxuICAgICAgPHVsPlxuICAgICAgICAgIDxsaSBjbGFzcz1cIml0ZW1cIj48c3BhbiBjbGFzcz1cIm5hbWVcIj5JR0E8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj7CpTIxLDAwMDwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cIml0ZW1cIj48c3BhbiBjbGFzcz1cIm5hbWVcIj5CSVpFTjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZVwiPsKlMjUsMDAwPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbVwiPjxzcGFuIGNsYXNzPVwibmFtZVwiPlJPU0FOSklOPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+wqUzMCwwMDA8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJsaXN0XCI+XG4gICAgICA8aDIgY2xhc3M9XCJsaXN0LXRpdGxlXCI+U2hvLUNodTwvaDI+XG4gICAgICA8dWw+XG4gICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbVwiPjxzcGFuIGNsYXNzPVwibmFtZVwiPk5JS0FJRE8gKEJhcmxleSk8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj7CpTkwMDwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cIml0ZW1cIj48c3BhbiBjbGFzcz1cIm5hbWVcIj5TSElSQU5BTUkgKFN3ZWV0IFBvdGF0byk8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj7CpTkwMDwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cIml0ZW1cIj48c3BhbiBjbGFzcz1cIm5hbWVcIj5JU0FNSSAoU3dlZXQgUG90YXRvKTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZVwiPsKlMSw1MDA8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJpdGVtXCI+PHNwYW4gY2xhc3M9XCJuYW1lXCI+SlVVWU9OREFJIChSaWNlKTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+wqUxLDkwMDwvc3Bhbj5cbiAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwibGlzdFwiPlxuICAgICAgPGgyIGNsYXNzPVwibGlzdC10aXRsZVwiPldoaXNreTwvaDI+XG4gICAgICA8dWw+XG4gICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbVwiPjxzcGFuIGNsYXNzPVwibmFtZVwiPlNJTkdMRVRPTiAxMiB5ZWFyczwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZVwiPsKlMiwwMDA8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJpdGVtXCI+PHNwYW4gY2xhc3M9XCJuYW1lXCI+Q0hJVEE8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj7CpTIsMDAwPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbVwiPjxzcGFuIGNsYXNzPVwibmFtZVwiPllBTUFaQUtJIDEyIHllYXJzPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+wqUxLDgwMDwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgPC9kaXY+IFxuICBgXG4gIHJldHVybiByZW5kZXJNZW51RGl2O1xufTtcblxuY29uc3QgaW5pdGlhdGVNZW51ID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgbWFpbi5hcHBlbmRDaGlsZChyZW5kZXJNZW51KCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhdGVNZW51OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGluaXRpYXRlSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgaW5pdGlhdGVDb250YWN0VXMgZnJvbSBcIi4vY29udGFjdFVzXCI7XG5pbXBvcnQgaW5pdGlhdGVNZW51IGZyb20gXCIuL21lbnVcIjtcblxuY29uc3QgY3JlYXRlTmF2QmFyID0gKCkgPT4ge1xuICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgbmF2QmFyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2LWJhcicpO1xuXG4gIGNvbnN0IHRhYkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHRhYkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RhYi1jb250YWluZXInKTtcbiAgbmF2QmFyLmFwcGVuZENoaWxkKHRhYkNvbnRhaW5lcik7XG5cbiAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGhvbWVUYWIudGV4dENvbnRlbnQgPSAnSE9NRSc7XG4gIGhvbWVUYWIuY2xhc3NMaXN0LmFkZCgndGFicycpO1xuICB0YWJDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZVRhYik7XG5cbiAgY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIG1lbnVUYWIudGV4dENvbnRlbnQgPSAnTUVOVSc7XG4gIG1lbnVUYWIuY2xhc3NMaXN0LmFkZCgndGFicycpO1xuICB0YWJDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudVRhYik7XG5cbiAgY29uc3QgY29udGFjdFVzVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29udGFjdFVzVGFiLnRleHRDb250ZW50ID0gJ0NPTlRBQ1QgVVMnO1xuICBjb250YWN0VXNUYWIuY2xhc3NMaXN0LmFkZCgndGFicycpO1xuICB0YWJDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdFVzVGFiKTtcblxuICByZXR1cm4gbmF2QmFyO1xufTtcblxuY29uc3QgY3JlYXRlTWFpbiA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4nKTtcbiAgcmV0dXJuIG1haW47XG59O1xuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICBmb290ZXIuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXInKTtcblxuICBjb25zdCBmb290ZXJNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBmb290ZXJNZXNzYWdlLnRleHRDb250ZW50ID0gJ0RldmVsb3BlZCBieSAnO1xuXG4gIGNvbnN0IGdpdGh1YkxpbmtVc2VyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgZ2l0aHViTGlua1VzZXJOYW1lLnRleHRDb250ZW50ID0gJ0NlbnRpZ3JhbXMnO1xuICBnaXRodWJMaW5rVXNlck5hbWUuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vQ2VudGlncmFtcyc7XG4gIGdpdGh1YkxpbmtVc2VyTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dpdGh1Yi1saW5rJyk7XG4gIGZvb3Rlck1lc3NhZ2UuYXBwZW5kKGdpdGh1YkxpbmtVc2VyTmFtZSk7XG5cbiAgY29uc3QgZ2l0aHViTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBnaXRodWJMb2dvLnNyYyA9ICcvZGlzdC9waG90b3MvZ2l0aHViTG9nby5wbmcnO1xuICBnaXRodWJMb2dvLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ2l0aHViLWxvZ28nKTtcblxuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTWVzc2FnZSk7XG4gIGZvb3Rlck1lc3NhZ2UuYXBwZW5kQ2hpbGQoZ2l0aHViTG9nbyk7XG4gIHJldHVybiBmb290ZXI7XG59O1xuXG5jb25zdCBsb2FkUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2QmFyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuICBpbml0aWF0ZUhvbWUoKTtcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4ge1xuICBjb25zdCBjbGlja2VkVGFiID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gIGlmIChjbGlja2VkVGFiID09PSAnSE9NRScpIHtcbiAgICAgIGluaXRpYXRlSG9tZSgpO1xuICB9IGVsc2UgaWYgKGNsaWNrZWRUYWIgPT09ICdNRU5VJykge1xuICAgICAgaW5pdGlhdGVNZW51KCk7XG4gIH0gZWxzZSBpZiAoY2xpY2tlZFRhYiA9PT0gJ0NPTlRBQ1QgVVMnKSB7XG4gICAgICBpbml0aWF0ZUNvbnRhY3RVcygpO1xuICB9XG59KTtcbmxvYWRQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=