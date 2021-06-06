// Async Programming

// - setTimeout / setInterval
// - callbacks (setTimeout, addEventListener, onClick, ...)
// - Promises, async / await

// setTimeout(function, millisecond, param1, param1, ...)
let timer = setTimeout(() => console.log('Hello'), 3000)
clearTimeout(timer) //stop setTimeout

// setInterval(function, millisecond, param1, param1, ...)
let timerInterval = setInterval(() => console.log('Hello'), 3000)
clearInterval(timerInterval) //stop setInterval

// addEventListener
//element.addEventListener(event, function, useCapture)
document.body.addEventListener('click', () => {
  times++;
  console.log(`clicked ${times} times`)
})

// Promises
// если resolved тогда вернуть result, т.е. 'success!'
//.then-->.then создает очередность действий
///.catch отлавливае ошибки 
//можно задать выдержку времени
var p = new Promise((resolved, rejected) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      rejected(new Error('error'));
    } else {
      resolved('success');
    }
  }, 3000);
});

p.then((result) => 'It is' + result)
  .catch((err) => 'Error occurred on 1-st step')
  .then((result) => { throw new Error('new error') })
  .catch((err) => 'Error occurred on 2-st step')
  .then((result) => console.log('result'))
  .catch((err) => console.log('I catch all errors'))
//если промис вернет ошибку, то сработает первый catch
// если нет то второй обработает .then((result) => {throw new Error('new error')})
//и т.д.

//async/await -- что бы избежать списка .then
//async-работай асинхронно, await-дожтиль результата промиса
var p = new Promise((resolved, rejected) => {
  setTimeout(() => {
    resolved('success');
  }, 3000);
});

const f = (a) => new Promise((resolved, rejected) => {
  setTimeout(() => {
    resolved(a + 100);
  }, 2000);
});

async function as() {
  console.log('Waiting for promise...');
  const answer = await p;
  console.log(answer);
  const answer2 = await f(answer);
  console.log(answer2);
}

as()
//Первый console.log('Waiting for promise...') выведеться не ожидая Promise
//Второй console.log(answer) через 3сек  выведет результат var p
//Третий console.log(answer2) еще через 2сек  выведет результат const f 


//Event loop
//Event loop-цыкл событий связан с 'call stack'- стеком вызовов
//Синхронный код выполняетьс по принцыпу стека-последний зашел, первый вышел

//Асинхр. код:

//setTimeout из call stack попабает в WEB API и находиься та заданную выдержку времени
//затем попадает в список MACROTASK и вновь вопадет 'call stack' после выполнения всех синхронных
// ф-ий, даже если выдержка 0

//Promise  сам по себе работает как Синхронный код
//.then отрабатует похоже на setTimeout но из WEB API попадает в MSCROTASK
// и выпонится вконце синхронногок кода но перед любым setTimeout
function first(){
  setTimeout(() => console.log('1'), 0);
}

function second(){
  console.log('2');
  return new Promise((res) => {
    console.log('3');
  }).then(() => console.log('4'));
}

first();
second();
console.log('5');

//РЕЗУЛТАТ:
//2
//3
//5
//4
//1