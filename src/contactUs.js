const createText = (text, tag, idName, className) => {
    const textElement = document.createElement(tag);
    textElement.textContent = text;
    textElement.setAttribute('id', idName);
    textElement.classList.add(className);
    return textElement;
};

const renderContactUs = () => {
  const contactUsDiv = document.createElement('div');
  contactUsDiv.setAttribute('id', 'contact-us-div');
  return contactUsDiv;
};

const initiateContactUs = () => {
  const main = document.getElementById('main');
  main.innerHTML = '';
  main.appendChild(renderContactUs());
};

export default initiateContactUs;