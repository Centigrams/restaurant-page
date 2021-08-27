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
  main.innerHTML = '';
  main.appendChild(renderHome());
};

export default initiateHome;