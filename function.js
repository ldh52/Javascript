/* 선언적 함수
console.log(greet("지영"));
function greet(name) {
  console.log("안녕, " + name + "!")
}
*/

/* 익명함수
const greet = function(name) {console.log("안녕, " + name + "!")};
console.log(greet("지영"));
*/

// 화살표 함수
const greet = (name) => {console.log("안녕, " + name + "!")};
console.log(greet("지영"));
