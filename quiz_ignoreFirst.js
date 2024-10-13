function ignoreFirst(...rest) {
  rest.shift();

  for (const el of rest) {
    console.log(el);
  }
}
ignoreFirst('1세대', '2세대', '3세대');
ignoreFirst('곰팡이', '강아지', '고양이');
ignoreFirst(20, 9, 18, 19, 30, 34, 40);




function ignoreFirst(first, ...rest) {
  for (const el of rest) {
    console.log(el);
  }
}
ignoreFirst('1세대', '2세대', '3세대');
ignoreFirst('곰팡이', '강아지', '고양이');
ignoreFirst(20, 9, 18, 19, 30, 34, 40);




function ignoreFirst(...args) {
    // 첫 번째 아규먼트를 무시하고 나머지 아규먼트를 출력
    for (let i = 1; i < args.length; i++) {
        console.log(args[i]);
    }
}
ignoreFirst('1세대', '2세대', '3세대');
ignoreFirst('곰팡이', '강아지', '고양이');
ignoreFirst(20, 9, 18, 19, 30, 34, 40);
