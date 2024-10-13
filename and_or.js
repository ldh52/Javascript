// AND와 OR의 연산 방식
console.log(null && undefined);  // null
console.log(0 || true);  // true
console.log('0' && NaN);  // NaN
console.log({} || 123);  // {}


// 파라미터에 따라 반환되는 값이 달라지는 
function print(value) {
  const message = value || 'Codeit';

  console.log(message);
}

print();
print('JavaScript');



// 3이 아닐 때 정
function checkAnswer(value) {
  if (value < 10 && value > 0 && value !== 3) {
    return '정답입니다!';
  } 

  return '틀렸습니다!';
}

console.log(checkAnswer(4)); // 정답입니다!


// AND 연산자의 우선순위가 더 높다
console.log(true || false && false); // true
console.log((true || false) && false); // false

console.log('Codeit' || NaN && false); // Codeit
console.log(('Codeit' || NaN) && false); // false


// 소괄호 사용해서 연산 우선순위 명확하게 표기
console.log(true || (false && false)); // true
console.log((true || false) && false); // false

console.log('Codeit' || (NaN && false)); // Codeit
console.log(('Codeit' || NaN) && false); // false
