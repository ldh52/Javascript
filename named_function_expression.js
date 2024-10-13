const sayHi = function () {
  console.log('Hi');
};
console.log(sayHi.name); // sayHi



const sayHi = function printHiInConsole() {
  console.log('Hi');
};
console.log(sayHi.name); // printHiInConsole



const sayHi = function printHiInConsole() {
  console.log('Hi');
};
printHiInConsole(); // ReferenceError



// 재귀 함수 (Recursive function)
let countdown = function(n) {
  console.log(n);
  if (n === 0) {
    console.log('End!');
  } else {
    countdown(n - 1);
  }
};
countdown(5);




let countdown = function(n) {
  console.log(n);
  if (n === 0) {
    console.log('End!');
  } else {
    countdown(n - 1);
  }
};
let myFunction = countdown;
countdown = null;
myFunction(5); // TypeError





let countdown = function printCountdown(n) {
  console.log(n);
  if (n === 0) {
    console.log('End!');
  } else {
    printCountdown(n - 1);
  }
};

let myFunction = countdown;
countdown = null;
myFunction(5); // 정상적으로 동작
