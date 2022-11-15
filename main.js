document.addEventListener('DOMContentLoaded', () => {
  const URL = 'https://restcountries.com/v3.1';
  const form = document.querySelector('.country__input');
  const input = document.querySelector('.header__input');
  const container = document.querySelector('main');
  const helpContainer = document.querySelector('.help__list');
  const elementHelpList = document.getElementsByClassName('help__item');
  const fragment = document.createDocumentFragment();
  const messageErrors = new Map([
    [
      'User denied Geolocation',
      'Доступ к вашему местоположению запрещен, разрешите доступ к вашему местоположению или воспользуйтесь формой поиска для!',
    ],
    [
      'Failed to fetch',
      'Не удалось установить ваше местоположение, для отображения информации используйте форму поиска!',
    ],
    ['No neighbour', 'Эта страна не граничит с другими!'],
    [403, 'Доступ к данным ограничен! Попробуйте позже!'],
    [404, 'Страна не найдена, проверьте правильность введенных данных!'],
    [500, 'Что-то пошло не так, попробуйте еще раз!'],
  ]);
  let allCountries, countriesName;

  const showHtml = (data, neighbour = false) => {
    const population = new Intl.NumberFormat(data.altSpellings[0]).format(
      data.population
    );
    const languages = Object.values(data.languages).join(', ');
    const [currencies] = Object.values(data.currencies);

    container.insertAdjacentHTML(
      'beforeend',
      `
      <article class="country ${neighbour ? 'neighbour' : ''}">
          <img class="country__img" src="${data.flags.svg}">
          <div class="country__data">
              <h3 class="country__name">${data.name.common}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👨‍👩‍👧‍👦</span>${population}</p>
              <p class="country__row"><span>🗣️</span>${languages}</p>
              <p class="country__row"><span>💰</span>${currencies.name} ${currencies.symbol}</p>
              <a href="${data.maps.googleMaps}" style="display: block; text-decoration: none;" target="_blank">Посмотреть на карте</a>
          </div>
      </article>
`
    );

    return data;
  };

  // Получение позиции пользователя
  const getUserGeo = () =>
    new Promise((res, rej) =>
      navigator.geolocation.getCurrentPosition(res, rej)
    );

  //   Проверка ответа сервера
  const checkResponse = res => {
    if (!res.ok) throw new Error(res.status);
    return res.json();
  };

  // Обработка позиции и получение данных о стране по координатам
  const positionHandler = pos => {
    const { latitude: lat, longitude: lng } = pos.coords;
    return fetch(
      `https://geocode.xyz/${lat},${lng}?json=1`
    );
  };

  // Проверка содержится ли название страны в списке стран
  const findComparator = (el, name) =>
    el.name.official.toLowerCase() === name.toLowerCase() ||
    el.name.common.toLowerCase() === name.toLowerCase() ||
    el.translations.rus.official.toLowerCase() === name.toLowerCase() ||
    el.translations.rus.common.toLowerCase() === name.toLowerCase();

  // Получение страны по названию
  const getUserCountryRequest = countryReq =>
    new Promise(req => {
      const country = allCountries.find(el => findComparator(el, countryReq));
      country ? req(country) : rej('404');
    });
  
  // Передача названия страны
  const getCountryName = data => getUserCountryRequest(data.country);

  // Получение списка стран граничащих с основной
  const getNeighbours = data =>
    data?.borders &&
    data.borders.map(neighbour =>
      allCountries.filter(el => el.cca3 === neighbour)
    );

  // Вывод на страницу соседних стран
  const displayNeighbours = neighbours =>
    neighbours && neighbours.forEach(el => showHtml(...el, true));
  
  // Отображение ошибок на странице
  const displayErrorInContainer = txt => {
    container.textContent = '';
    container.insertAdjacentHTML(
      'afterbegin',
      `<span style="padding: 10px; font-size: 1.8rem; border: 1px solid red; border-radius: 10px; color: red;">${txt}</span>`
    )
  };
  
  // Отображение ошибки в указанном контейнере
  const displayError = (container, message) => {
    container.insertAdjacentHTML(
        'beforeend',
        `<span style="display: block; padding: 1rem; text-align: center;">${message}</span>`
      )
  }

  //   Обработка ошибок и установка сообщений к ним
  const errorHandler = err => {
    const article = document.querySelector('article');
    const errorMsg = messageErrors.get(err.message);

    if (article) displayError(article, errorMsg);
    else displayErrorInContainer(errorMsg);

    console.error(errorMsg);
  };

  // Создание элемента с подсказкой страны в форме поиска
  const createElement = el => {
    const name = el;
    const li = document.createElement('li');
    
    li.textContent = name;
    li.classList.add('help__item');
    li.style.display = 'none';
    
    fragment.appendChild(li);
    
    return el;
  };

  // Заполнение массива названиями стран, 
  // создание елементов подстказки формы поиска,
  // вставка сразу всех элементов на страницу (для снижения нагрузки,
  // чтобы не добавлять элементы при каждом вводе символа, а работать с уже готовым списком)
  const helper = res => {
    contriesName = allCountries
      .flatMap(e => [e.name.official, e.translations.rus.official])
      .map(createElement);
    helpContainer.append(fragment);
    return res
  };

  // Получение списка всех стран
  const getAllCountries = geoData =>
    fetch(`${URL}/all`)
      .then(res => res.json())
      .then(data => ((allCountries = data), geoData))
      .then(helper)
      .catch(e => console.error(e));

  // Обработчик отправки формы
  const submitHandler = e => {
    e.preventDefault();

    const value = input.value.toLowerCase();

    if (!value || /\d/g.test(value)) return;

    container.textContent = '';

    const getUserRequest = getUserCountryRequest(value);

    input.value = '';

    getUserRequest
      .then(showHtml)
      .then(getNeighbours)
      .then(displayNeighbours)
      .catch(errorHandler);
  };

  // Обработчик ввода пользователя
  const inputHandler = () => {
    const value = input.value;
    let j = 0,
        className;

    helpContainer.style.display = 'block';

    contriesName.forEach(
      (el, i) => {
        className =
          value && j < 10 && el.match(new RegExp(`${value}`, 'i'))
            ? 'list-item'
            : 'none';
        className === 'list-item' && j++;
        elementHelpList[i].style.display = className;
      }
    );
  };

  // Обработчик выбора элемента
  const selectElem = e =>
    e.target.classList.contains('help__item') &&
    ((input.value = e.target.textContent),
    (helpContainer.style.display = 'none'));

  // Добавление слушателей событий
  form.addEventListener('submit', submitHandler);
  input.addEventListener('input', inputHandler);
  helpContainer.addEventListener('click', selectElem);

  // Передача позиции для отображения на странице
  getUserGeo()
    .then(getAllCountries)
    .then(positionHandler)
    .then(checkResponse)
    .then(getCountryName)
    .then(showHtml)
    .then(getNeighbours)
    .then(displayNeighbours)
    .catch(errorHandler);
});
