// task 1
// const userNumber = prompt("Введіть ціле додатнє число");
// let caunter = 0;

// if (userNumber && userNumber > 0) {
//   for (let i = 1; i <= userNumber; i++) {
//     caunter = caunter + i;
//   }

//   console.log(caunter);
// } else {
//   alert("Результат введення не є чілим додатнім числом");
// }


// task 2
// const userNumber = prompt("Введіть число від 1 до 9");

// for (let i = 0; i <= 9; i++) {
//   console.log(`${userNumber} * ${i} = ${userNumber * i}`);
// }


// task 3
// const rightNumber = 3;
// let userNumber = prompt("Введіть число від 0 до 10");
// let caunter = 1;

// while (true) {
//   if (userNumber == rightNumber) {
//     alert(`Вітаю, Ви відгадали! Кількість cпроб - ${caunter}`);
//     break;
//   } else {
//     userNumber = prompt(
//       "Не відгадав. Спробуйте ввести інше число від 0 до 10."
//     );
//     caunter++;
//   }
// }


//task F1
// function generateFullName(lastName, username) {
//   var fullName = username + " " + lastName;
//   console.log("Full Name: " + fullName);
// }

// var lastName = prompt("Введіть призвіще: ");
// var username = prompt("Введіть ім'я користувача: ");
// generateFullName(lastName, username);


// task F2
// function checkAccess(age) {
//   if (age > 18) {
//       console.log("Доступ дозволено");
//   } else {
//       console.log("Доступ заборонено");
//   }
// }

// var userAge = prompt("Введіть ваш вік: ");
// checkAccess(userAge);


// task F3
function countdown(number) {
  if (number < 1 || !Number.isInteger(number)) {
      console.log("Please enter a positive integer.");
  } else {
      for (var i = number; i >= 0; i--) {
          console.log(i);
      }
  }
}

// Example usage:
var userInput = prompt("Enter a positive integer: ");
var number = parseInt(userInput);
countdown(number);