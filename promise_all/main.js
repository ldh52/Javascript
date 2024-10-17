import { getEmployees, getMenus } from './asyncFunctions.js';

const employeesPromise = getEmployees();
const menusPromise = getMenus();

const [employees, menus] = await Promise.all([employeesPromise, menusPromise]);

// 테스트 코드
console.log('직원 데이터:');
console.log(employees);
console.log('메뉴 데이터:');
console.log(menus);


// 실행결과
// 직원 데이터:
// [
//   {
//     id: 1,
//     name: 'Jason',
//     email: 'jason@codeitmall.kr',
//     department: 'engineering'
//   },
//   {
//     id: 2,
//     name: 'Alice',
//     email: 'alice@codeitmall.kr',
//     department: 'engineering'
//   },
//   {
//     id: 3,
//     name: 'Brian',
//     email: 'brian@codeitmall.kr',
//     department: 'marketing'
//   },
//   {
//     id: 4,
//     name: 'Erica',
//     email: 'erica@codeitmall.kr',
//     department: 'marketing'
//   },
//   {
//     id: 5,
//     name: 'Wilson',
//     email: 'wilson@codeitmall.kr',
//     department: 'sales'
//   },
//   {
//     id: 6,
//     name: 'Olivia',
//     email: 'olivia@codeitmall.kr',
//     department: 'engineering'
//   },
//   {
//     id: 7,
//     name: 'Liam',
//     email: 'liam@codeitmall.kr',
//     department: 'marketing'
//   },
//   {
//     id: 8,
//     name: 'Ben',
//     email: 'ben@codeitmall.kr',
//     department: 'sales'
//   },
//   {
//     id: 9,
//     name: 'William',
//     email: 'william@codeitmall.kr',
//     department: 'sales'
//   },
//   {
//     id: 10,
//     name: 'Alex',
//     email: 'alex@codeitmall.kr',
//     department: 'sales'
//   }
// ]
// 메뉴 데이터:
// [
//   { type: 'ko', name: '비빔밥' },
//   { type: 'ko', name: '삼계탕' },
//   { type: 'ko', name: '김치찌개' },
//   { type: 'ko', name: '라볶이' },
//   { type: 'ch', name: '짜장면' },
//   { type: 'ch', name: '탕수육' },
//   { type: 'ch', name: '짬뽕' },
//   { type: 'jp', name: '라멘' },
//   { type: 'jp', name: '스시' },
//   { type: 'jp', name: '우동' }
// ]
