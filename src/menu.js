import './style.css';

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

export default initiateMenu;