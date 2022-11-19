const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Change code below this line

  for (const product of products) {
    if (productName === product.name) {
      totalPrice = product.price * product.quantity;
    }
  }
  return totalPrice;
  // Change code above this line
}

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

const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    for (const pizza of pizzas) {

      if (this.pizzas.includes(pizzaName)) {
return makePizza(pizzaName);
      }
    }
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
pizzaPalace.order("Smoked", makePizza, onOrderError);
pizzaPalace.order("Four meats", makePizza, onOrderError);
pizzaPalace.order("Big Mike", makePizza, onOrderError);
pizzaPalace.order("Vienna", makePizza, onOrderError);

