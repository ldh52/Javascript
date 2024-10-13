// function_scope
function sayHi() {
  var userName = 'codeit';
  console.log(`Hi ${userName}!`);
}
console.log(userName); // ReferenceError


for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i); // 5



// block_scope
function sayHi() {
  const userName = 'codeit';
  console.log(`Hi ${userName}!`);
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

{
  let language = 'JavaScript';
}

console.log(userName); // ReferenceError
console.log(i); // ReferenceError
console.log(language); // ReferenceError
