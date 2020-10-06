
// функция для получения данных
const getResourse = async (url) => {

  // ответ от сервера
  const responce = await fetch(url);

  if (!responce.ok) {
    throw new Error(`Ошибка по адресу ${url}, статус ошибки ${responce}`);
  }

  return await responce.json();

};

// функция для отправки данных
const sendData = async (url, data) => {

  const responce = await fetch(url, {
    method: 'POST',
    body: data,
  })

  if (!responce.ok) {
    throw new Error(`Ошибка по адресу ${url}, статус ошибки ${responce}`);
  }

  return await responce.json()

}