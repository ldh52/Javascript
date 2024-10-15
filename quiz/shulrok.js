const quiz = ['YUMMY', 'COUNT', 'ABUSE', 'SOUND', 'SWING'];

const answer = quiz.map((word, i) => word[i]);

// const answer = quiz.map((word, i) => {
//   return word[i];
// });

// 테스트 코드
console.log(answer);  // [ 'Y', 'O', 'U', 'N', 'G']
