// this
console.log(this);  // window 객체


const user = {
  firstName: 'Tess',
  lastName: 'Jang',
  getFullName: function() {
    return `${user.firstName} ${user.lastName}`;
  },
};
console.log(user.getFullName);





const user = {
  firstName: 'Tess',
  lastName: 'Jang',
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(user.getFullName);





function getFullName() {
    return `${this.firstName} ${this.lastName}`;
};

// function getFullName() {
//   return `${user.firstName} ${user.lastName}`;
// 이 경우에는 모두 Tess Jang이 출력됨
  
const user = {
  firstName: 'Tess',
  lastName: 'Jang',
  getFullName: getFullName,
};
const admin = {
  firstName: 'Alex',
  lastName: 'Kim',
  getFullName: getFullName,
};
console.log(user.getFullName);  // Tess Jang
console.log(admin.getFullName);  // Alex Kim



  

console.log(this);
function printThis() {
  console.log(this);
}
// printThis();  // window 객체

// const printThis = ()  => {
//   console.log(this);
// }  
// Arrow Function을 사용할 경우, 모두 윈도우 객체가 출력됨
  
const myObj = {
  content: 'myObj',
  printThis: printThis,
}
const otherObj = {
  content: 'otherObj',
  printThis: printThis,
}
myObj.printThis();
otherObj.printThis();




  
function printThisTitle() {
  console.log(this.title);
}
const courseA = {
  title: '프로그래밍 기초 in JavaScript',
  printTitle: printThisTitle,
};
const courseB = {
  title: '컴퓨터 개론',
  printTitle: courseA.printTitle,
};
const courseC = {
  title: '웹 퍼블리싱',
  printTitle: courseB.printTitle,
};

courseA.printTitle();  // 프로그래밍 기초 in JavaScript
courseB.printTitle();  // 컴퓨터 개론
courseC.printTitle();  // 웹 퍼블리싱





const getFullName = () => `${this.firstName} ${this.lastName}`;
const user = {
  firstName: 'Ted',
  lastName: 'Chang',
  getFullName: getFullName,
};
console.log(user.getFullName());  // undefined undefined
