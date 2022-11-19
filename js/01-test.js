// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line

//   for (const product of products) {
//     if (productName === product.name) {
//       totalPrice = product.price * product.quantity;
//     }
//   }
//   return totalPrice;
//   // Change code above this line
// }

// Тоха - приклад лодера
// function load(functionParam, delay) {
//   console.log('load start');

//   setTimeout(() => {
//     console.log('delay complete');

//     setTimeout(() => {
//     functionParam('100%');
//     }, 5000);
//     setTimeout(() => {
//       functionParam('80%');
//     }, 4000);
//     setTimeout(() => {
//       functionParam('60%');
//     }, 3000);
//     setTimeout(() => {
//       functionParam('40%');
//     }, 2000);
//     setTimeout(() => {
//       functionParam('20%');
//     }, 1000);
//   }, delay);

// };

// function loaderUI(value) {
//   switch (value) {
//     case '20%': {
//       loaderBlock.style.background = 'red';
//       break;
//     }
//     case '40%': {
//       loaderBlock.style.background = 'blue';
//       break;
//     }
//     case '60%': {
//       loaderBlock.style.background = 'gray';
//       break;
//     }
//     case '80%': {
//       loaderBlock.style.background = 'yellow';
//       break;
//     }
//     case '100%': {
//       loaderBlock.style.background = 'green';
//       break;
//     }
    
//   }
  
//   loaderBlock.innerText = value;
//   loaderBlock.style.width = value;
// };

// const loaderBlock = document.getElementById('loadBlock');

// load(loaderUI, 2000); 
// console.log(1, 2, 3)


// МОДУЛЬ 4

// 1. Доповни код таким чином, щоб у змінній result був результат виконання функції makePizza, 
// а у змінній pointer було посилання на функцію makePizza.

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// Change code below this line

// const result = (makePizza("Your pizza is being prepared, please wait."));


// const pointer = (makePizza);
// console.log(result);
// console.log(pointer);


// 2. Доповни функцію makeMessage таким чином, 
// щоб вона очікувала другим параметром (параметр callback) колбек-функцію і повертала її виклик. 
// Функція deliverPizza або makePizza буде передаватися як колбек 
// і очікувати аргументом ім'я готової піци, що доставляється.



// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }


// 3. Доповни другий виклик функції makePizza(pizzaName, callback), 
// передавши другим аргументом інлайн колбек-функцію eatPizza(pizzaName), 
// яка логує рядок "Eating pizza <назва піци>".

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });


// makePizza("Ultracheese", function eatPizza(pizzaName){
//   console.log(`Eating pizza ${pizzaName}`);
// });

// Необхідно написати логіку обробки замовлення піци. 
// Виконай рефакторинг методу order таким чином, 
// щоб він приймав другим і третім параметром два колбеки onSuccess і onError.

// Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName, 
// метод order повинен повертати результат виклику колбека onError, 
// передаючи йому аргументом рядок "There is no pizza with a name <имя пиццы> in the assortment."
// Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName, 
// метод order повинен повертати результат виклику колбека onSuccess, 
// передаючи йому аргументом назву замовленої піци.
// Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів. 
// Будь ласка, нічого там не міняй.

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     for (const pizza of pizzas) {

//       if (this.pizzas.includes(pizzaName)) {
// return makePizza(pizzaName);
//       }
//     }
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);



// Потрібно написати функцію, яка приймає 1 параметр key і буде перевіряти
// чи має об'єкт  такий ключ - поверне true, інакше false

// const obj = {
//   name: 'Jhon',
//   car:  'Audi',
//   carColor: 'White'
// }


// Напишіть функцію для перевірки об'єкта,
// Чи є елемент простим об'єктом,
// чи масивом, null.



// Створіть функцію multiplyNumeric(obj),
//   яка множить всі числові властивості об'єкта obj на 2.

// до  виклику функції
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
//
// multiplyNumeric(menu);

// після виклику функції
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };


//У нас є об'єкт, в якому зберігаються зарплати
//нашої команди
//Напишіть код для обчислення суми всіх зарплат і
//збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0

const salaries = {
  Mango: 570,
  Poly: 900,
  Ajax: 1470,
};

function calcAllSalaries (salaries) {
  const allNumbers = Object.values(salaries);

// спосіб 1
//   let result = 0;

//   for (const value of allNumbers){
// result += value;

//   }
// return result;
//   console.log(allNumbers);


// спосіб 2
// return allNumbers.reduce((sum, number) => sum + number);


// спосіб 3
// const salaries = {
//   Mango: 570,
//   Poly: 900,
//   Ajax: 1470,
// };

// const calcSalary = obj => {
//   let totalSalary = 0;
//   for (const key in obj) {
//     totalSalary += obj[key];
//   }
//   return totalSalary;
// };

// console.log(calcSalary(salaries));




// };
// console.log (calcAllSalaries(salaries));




//Напишіть функцію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і
//рядок з назвою каменю.
//Функція повертає загальну вартість каміння
//з таким ім'ям

// const stones = [
//   { name: "Emerald", price: 1300, quantity: 4 },
//   { name: "Diamond", price: 2700, quantity: 6 },
//   { name: "Sapphire", price: 400, quantity: 7 },
//   { name: "Rubble", price: 150, quantity: 100 },
// ];




// Напишіть код, щоб видалити всі елементи в заданому масиві
// Функція `deleteElement()` видаляє всі входження елемента із заданого масиву.
// let arr = [23,56,4,78,5,63,45,210,56];
// arr = deleteElement(arr, 56)
// console.log(arr); //[23, 4, 78, 5, 63, 45, 210]



// Напишіть метод, який розбиває масив на частини визначеного розміру
// const data = [1, 2, 3, 4, 5, 6, 7];
// console.log(chunkArray(data, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
// console.log(chunkArray(data, 3)) // [[1, 2, 3], [4, 5, 6], [7]]
