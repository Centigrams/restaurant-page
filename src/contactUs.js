import createText from "./helpers";

const renderContactUs = () => {
  const contactUsDiv = document.createElement('div');
  contactUsDiv.setAttribute('id', 'contact-us-div');
  contactUsDiv.appendChild(
    createText(
      'restaurantemail@ginzakyu.com',
      'p',
      'restaurant-email',
    )
  );
  contactUsDiv.appendChild(
    createText(
      '123-456-789',
      'p',
      'telephone-number',
    )
  );
  contactUsDiv.appendChild(
    createText(
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

export default initiateContactUs;