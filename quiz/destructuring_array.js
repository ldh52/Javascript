// 1. Destructuring 문법을 활용해서 numbers 배열의 각 요소를 one, two, three라는 변수에 할당해보세요
const numbers = [1, 2, 3];
const [one, two, three] = numbers;



// 2. Destructuring 문법을 활용해서 TV는 livingRoom, 나머지 요소들(배열)은 kitchen 변수에 할당해 주세요
const products = ['TV', '식탁', '냉장고', '전기밥솥', '전자레인지', '오븐', '식기세척기'];
const [livingRoom, ...kitchen] = products;



// 3. Destructuring 문법을 활용해서 두 변수의 값을 서로 바꿔주세요
let firstName = 'Kang';
let lastName = 'Young';
[firstName, lastName] = [lastName, firstName];



// 테스트 코드
console.log(one);  //  1
console.log(two);  // 2
console.log(three);  // 3
console.log(livingRoom);  // TV
console.log(kitchen[1]);  // 냉장고
console.log(firstName);  // Young
console.log(lastName);  // Kang
