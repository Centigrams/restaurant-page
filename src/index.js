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