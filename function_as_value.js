// 값으로서 함수
// 일급 함수 (First Class Function)


const myObject = {
  brand: 'Codeit',
  bornYear: 2017,
  isVeryNice: true,
  sayHi: function(name) {
    console.log(`Hi! ${name}`);
  }
};
myObject.sayHi('JavaScript');




const myArray = [
  'Codeit',
  2017,
  true,
  function(name) {
    console.log(`Hi! ${name}`);
  },
];
myArray[3]('Codeit');



const myBtn = document.querySelector('#myBtn');
myBtn.addEventListner('click', function () {
  console.log('button is clicked');
});





function makeQuiz(quiz, answer, success, fail) {
  if (prompt (quiz) === answer) {
    console.log(success());
  } else {
    console.log(fail());
  }
};
function getSuccess() {  // 콜백 함수 (Callback Function)
  return '정답!';
};
function getFail() {  // 콜백 함수 (Callback Function)
  return '오답!';
};
const question = '5 + 3 = ?';
makeQuiz(question, '8', getSuccess, getFail);





function getPrintHi() {  // 고차 함수 (Higher Order Function)
  return function () {
    console.log('Hi!?');
  };
};
// const sayHi = getPrintHi();
// sayHi();
getPrintHi()();
