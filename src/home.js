import createText from "./helpers";

const renderHome = () => {
  const homeDiv = document.createElement('div');
  homeDiv.setAttribute('id', 'home-div');
  homeDiv.appendChild(
    createText(
      'Ginza Kyu', 
      'h1', 
      'restaurant-name', 
    )
  );
  homeDiv.appendChild(
    createText(
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

export default initiateHome;