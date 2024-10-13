// Parameter

function greeting(name) {
  console.log(`Hi! My name is ${name}!`);
}
greeting();  // Hi! My name is undefined!
greeting('JavaScript');
greeting('Codeit');
greeting('World');



function greeting(name = 'Codeit', interest) {
  console.log(`Hi! My name is ${name}!`);
  console.log(`I like ${interest}!`);
}
greeting('JavaScript');
// Hi! My name is JavaScript
// I like undefined!



function greeting(name = 'Codeit', interest = 'JavaScript') {
  console.log(`Hi! My name is ${name}!`);
  console.log(`I like ${interest}!`);
}
greeting(undefined, 'python');
// Hi! My name is Codeit
// I like python!



function defaultTest(x, y = x + 3) {
  console.log(`x: ${x}`); 
  console.log(`y: ${y}`); 
}
defaultTest(2);  // 2, 5
defaultTest(2, 3);  // 2, 3




function introduce(name = '홍길동', birth = 1443) {
  console.log(`안녕하세요 저는 ${name}입니다.`);
  console.log(`${birth}년에 태어났습니다.`);
}
introduce('장동건');
// 안녕하세요 저는 장동건입니다.
// 1443년에 태어났습니다.

introduce('Joy', null);
// 안녕하세요 저는 Joy입니다.
// null년에 태어났습니다.

introduce(undefined, 2090);
// 안녕하세요 저는 홍길동입니다.
// 2090년에 태어났습니다.
