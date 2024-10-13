// Arrow Function


const getTwice = number => number *2;

// const getTwice = number => {
//   return number * 2;
// }

// const getTwice = (number) => {
//   return number * 2;
// }

// const getTwice = function(number) {
//   return number * 2;
// }
console.log(getTwice(5));




const sum = (a, b) => {
  const result = a + b;
  return result;
};
const getCodeit = () => ({name: 'Codeit', });
// const getCodeit = () => {
//   return {name: 'Codeit', };
// };
console.log(sum(10, 5));
console.log(getCodeit());




const myBtn = document.querySelector('#myBtn');
myBtn.addEventListner('click', () => {
  console.log('button is clicked!');
});
// myBtn.addEventListner('click', function() {
//   console.log('button is clicked!');
// });




function normalFunc() {
  console.log(arguments);
};
const arrowFunc = () => {
  console.log(arguments);
};
normalFunc(1, 2, 3);
arrowFunc(1, 2, 3);
