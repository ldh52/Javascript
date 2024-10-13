// 함수를 만드는 방법
// 1. 함수 선언 (Function Declaration)
function 함수이름(파라미터) {
  동작
  return 리턴값
}


// 2. 함수 표현식 (Function Expression)
const printCodeit = function () {
  console.log('Codeit');
};
printCodeit();


const myBtn = document.querySelector('#myBtn');

myBtn.addEventListner('click', function () {
  console.log('button is clicked!');
});


// '함수 선언'과 '함수 표현식'의 차이점 (1)

printCodeit();  // Codeit

function printCodeit () {
  console.log('Codeit');
}


printCodeit();  // ReferenceError

const printCodeit = function () {
  console.log('Codeit');
};


// '함수 선언'과 '함수 표현식'의 차이점 (2)... 스코프의 차이
function printCodeit() {
  function printJS() {
    console.log('JavaScript');
  }
  console.log('Codeit');
}
printCodeit();
printJS();  // ReferenceError




const x = 4;
if (x < 5) {
  function printJS() {
    console.log('JavaScript');
  }
}
{
  function printCodeit() {
    console.log('Codeit');
  }
}
printCodeit();
printJS();




var printJS = function () {
  console.log('JavaScript');
};

let printHi = function () {
  console.log('Hi');
}

const printCodeit = function () {
  console.log('Codeit');
}
