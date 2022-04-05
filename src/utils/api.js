class Api {  // создаем и экспортируем класс работы с API
  constructor(data) {
    this._url = data.url;
  }

  _checkResponse(res) { // создаем приватный метод для обработки ошибок
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`ОШИБКА: ${res.status}`);
    }
  }

  getItems() {  // метод получения товаров с сервера
    return fetch(`${this._url}/products`)
             .then(this._checkResponse);
  }
}

const api = new Api ({  // записываем в переменную экземпляр класса Api;
  url: "https://artisant.io/api",
});

export default api;
