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

const baseUrl = 'http://localhost:3000';

const path = {
  employee: '/employees',
  comments: '/comments',
}

// [{key: 'role', value: 'manager'}];
const generateQueryString = (queryParams = []) => queryParams.length
  ? `?${queryParams.map(x => `${x.key}=${x.value}`).join(`&`)}`
  : '';

const getEmployees = async (queryParams) => {
  const response = await fetch(`${baseUrl}${path.employee}${generateQueryString(queryParams)}`);
  const items = await response.json();

  const count = Number(response.headers.get('X-Total-Count'));

  return { items, count };
}

const getEmployee = async (id) => {
  const response = await fetch(`${baseUrl}${path.employee}/{id}`);

  return employee;
}

const createEmployee = async (body) => {
  const response = await fetch (`${baseUrl}${path.employee}`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const employee = await response.json();

  return employee;
};

const updateEmployee = async (id, body) => {
  const response = await fetch (`${baseUrl}${path.employee}/${id}`,{
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const employee = await response.json();

  return employee;
};

const updateEmployeeParam = async (id, body) => {
  const response = await fetch (`${baseUrl}${path.employee}/${id}`,{
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const employee = await response.json();

  return employee;
};

//--------
const main = async () => {
  const employee = await deleteEmployee(4);

  console.log(employee);
}

main();
 


