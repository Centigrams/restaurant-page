/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
//TODO:
const createNavBar = () => {
  const navBar = document.createElement('nav');
  return navBar;
};

//? What's this for?
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
  initiateHome();
}

document.addEventListener('click',(e) => {
  const clickedTab = e.target.textContent;
  const activeTab = e.target.classlist.contains('active');

  // Avoids repetitve page loading
  if (activeTab) return;
  if (clickedTab === 'HOME') {
    //   initiateHome();
  } else if (clickedTab === 'MENU') {
    //   initiateMenu();
  } else if (clickedTab === 'CONTACT US') {
    //   initiateContactUs();
  }
});
loadPage();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7QUFDRCxXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vVE9ETzpcbmNvbnN0IGNyZWF0ZU5hdkJhciA9ICgpID0+IHtcbiAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIHJldHVybiBuYXZCYXI7XG59O1xuXG4vLz8gV2hhdCdzIHRoaXMgZm9yP1xuY29uc3QgY3JlYXRlTWFpbiA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4nKTtcbiAgcmV0dXJuIG1haW47XG59O1xuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICBmb290ZXIuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXInKTtcblxuICBjb25zdCBmb290ZXJNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBmb290ZXJNZXNzYWdlLnRleHRDb250ZW50ID0gJ0RldmVsb3BlZCBieSAnO1xuXG4gIGNvbnN0IGdpdGh1YkxpbmtVc2VyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgZ2l0aHViTGlua1VzZXJOYW1lLnRleHRDb250ZW50ID0gJ0NlbnRpZ3JhbXMnO1xuICBnaXRodWJMaW5rVXNlck5hbWUuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vQ2VudGlncmFtcyc7XG4gIGdpdGh1YkxpbmtVc2VyTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dpdGh1Yi1saW5rJyk7XG5cbiAgZm9vdGVyTWVzc2FnZS5hcHBlbmQoZ2l0aHViTGlua1VzZXJOYW1lKTtcblxuICBjb25zdCBnaXRodWJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGdpdGh1YkxvZ28uc3JjID0gJy9zcmMvcGhvdG9zL2dpdGh1YkxvZ28ucG5nJztcbiAgZ2l0aHViTG9nby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dpdGh1Yi1sb2dvJyk7XG5cbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3Rlck1lc3NhZ2UpO1xuICBmb290ZXJNZXNzYWdlLmFwcGVuZENoaWxkKGdpdGh1YkxvZ28pO1xuICByZXR1cm4gZm9vdGVyO1xufTtcblxuY29uc3QgbG9hZFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hdkJhcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbiAgaW5pdGlhdGVIb21lKCk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4ge1xuICBjb25zdCBjbGlja2VkVGFiID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gIGNvbnN0IGFjdGl2ZVRhYiA9IGUudGFyZ2V0LmNsYXNzbGlzdC5jb250YWlucygnYWN0aXZlJyk7XG5cbiAgLy8gQXZvaWRzIHJlcGV0aXR2ZSBwYWdlIGxvYWRpbmdcbiAgaWYgKGFjdGl2ZVRhYikgcmV0dXJuO1xuICBpZiAoY2xpY2tlZFRhYiA9PT0gJ0hPTUUnKSB7XG4gICAgLy8gICBpbml0aWF0ZUhvbWUoKTtcbiAgfSBlbHNlIGlmIChjbGlja2VkVGFiID09PSAnTUVOVScpIHtcbiAgICAvLyAgIGluaXRpYXRlTWVudSgpO1xuICB9IGVsc2UgaWYgKGNsaWNrZWRUYWIgPT09ICdDT05UQUNUIFVTJykge1xuICAgIC8vICAgaW5pdGlhdGVDb250YWN0VXMoKTtcbiAgfVxufSk7XG5sb2FkUGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==