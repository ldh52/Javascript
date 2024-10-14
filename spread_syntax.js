// Spread 구문 (Spread Syntax)

const numbers = [1, 2, 3];
console.log(numbers);      // [1, 2, 3]
console.log(...numbers);    // 1 2 3
console.log(1, 2, 3);      // 1 2 3




const webPublishing = ['HTML', 'CSS'];
const interactiveWeb = [...webPublishing, 'JavaScript'];
// const interactiveWeb = webPublishing.slice();
// interactiveWeb.push('JavaScript');

console.log(webPublishing);
console.log(interactiveWeb);




const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);  // [1, 2, 3, 4, 5, 6]

const arr4 = arr1.concat(arr2);
console.log(arr4);




const introduce = (name, birth, job) => {
  console.log('안녕하세요! 반갑습니다.');
  console.log('저는 ${name}입니다.');
  console.log('${birth}년 생이고,');
  console.log('직업은 ${job}입니다.');
  console.log('잘 부탁드립니다 :)');
};

const myArr = ['코드잇', 2017, '프로그래밍 강사'];
introduce(...myArr);




const members = ['태호', '종훈', '우재'];
const newObject = { ...members };
console.log(newObject);




const latte = {
  esspresso: '30ml',
  milk: '150ml'
};
const cafeMocha = {
  ...latte,
  chocolate: '20ml',
}

console.log(latte); // {esspresso: "30ml", milk: "150ml"}
console.log(cafeMocha); // {esspresso: "30ml", milk: "150ml", chocolate: "20ml"}
