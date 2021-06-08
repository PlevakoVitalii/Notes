//ENDPOINT
//https://domain.com/user/1/articles?page-3&published=true
//domain(+port)    ||     path      ||   query string

//HEADERS--??????

//DATa(JSON)
{
"name": "Mike",
 "age": 33,
 "active": true
}

//Create RESTful API with JSON-server
//Для имитирования работы схемы клиент-сервер (для тестирования API) используют
//програмы например Postman, Insomnia
//должна стоять Node.js на компе.
// npm i - создаст пустой файл packet.json
// В сонсоли VSCode ставим JSON-server (npm i json-server)
// В packet.json появисться установленая зависимость
//в строке "script":{"start":json-server --watch db.json} укажем код запуска 
//сервера (инфа из доки https://www.npmjs.com/)
//для json-server например (json-server --watch db.json)
//Данными на json-server можно управлять из Postman, Insomnia используя команды
//CRUD
// POST-create
// GET-read
// PUT/PATCH-update
// DELETE-delete
/по фактувносяться изменения в созданый файл db.json
//Создали папки Client и Server
//В Server создали файл db.json с любыми данными
{
  "employees": [
    {
      "name": "Mike",
      "age": 33,
      "active": true,
      "id": 1
    }
  ]
}

//В Client создаем файл index.html к нему привяжем script.js
//в npm установим live-server для просмотра результата index.html в браузере
// в script.js опишем API методы  CRUD

//Код страницы script.js


