function rollDice() {
  return Math.floor(Math.random()*6)+1;  // 1부터 6까지 랜덤한 정수 변환
}

let myChoice = 0;
let comChoice = 0;
let countMyNum = 0;
let countComNum = 0;

for(let i=1; i<3; i++) {
  myChoice = rollDice();
  comChoice= rollDice();
  console.log(`플레이어: ${myChoice}, 컴퓨터: ${comChoice}`);
  if(myChoice > comChoice){
      console.log('플레이어가 승리했습니다')
      countMyNum +=
      console.log(`플레이어 승리 횟수는 ${countMyNum}회 입니다`)
    }
  else {
      console.log('컴퓨터가 승리했습니다')
      countComNum++
      console.log(`컴퓨터 승리 횟수는 ${countComNum}회 입니다`)
  }
}

if(countMyNum > countComNum) {
  console.log('플레이어가 승리했습니다!');
}
else {
  console.log('컴퓨터가 승리했습니다!');
}
