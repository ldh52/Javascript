function printMessage(func) {
  console.log('Printing message...');
  func();
}
function sayHello() {
  console.log('Hello World!');
}
printMessage(sayHello);
// Printing message...
// Hello World!



function printMessage(func) {
  console.log('Printing message...');
  func();
}
printMessage(() => console.log('Hello World!'));
// Printing message...
// Hello World!



function printMessageWithParams(func, name) {
  console.log('Printing message...');
  func(name);
}
function sayHello(name) {
  console.log(`Hello ${name}!`);
}
printMessageWithParams(sayHello, 'Bob');
// Printing message...
// Hello Bob!



function printMessageWithParams(func, name) {
  console.log('Printing message...');
  func(name);
}
printMessageWithParams((name) => console.log(`Hello ${name}!`), 'Bob');
// Printing message...
// Hello Bob!



console.log('1');
setTimeout(() => console.log('2'), 3000);
console.log('3');
// 1
// 3
// 2



// 직원 데이터를 가져온 후 리스폰스를 파싱하고 데이터를 프로세싱 하는 예시
getEmployees((response) => {
  json(response, (data) => {
    groupEmployees(data, (result) => {
      console.log(result);
    });
  });
});
