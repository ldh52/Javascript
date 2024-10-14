function isPalindrome(word) {
  // 문자열을 배열로 변환하고 뒤집은 후 다시 문자열로 변환
  const reversedWord = word.split('').reverse().join('');
  
  // 원래 단어와 뒤집은 단어가 같은지 비교
  if (word === reversedWord) {
    return 'true';
  } else {
    return 'false';
  }
}

// 테스트 코드
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("stars"));   // false
console.log(isPalindrome("기러기"));   // true
console.log(isPalindrome("123321"));  // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("kayak"));   // true


/*
function isPalindrome(word) {
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    let left = word[i];
    let right = word[word.length - 1 - i];
    if (left !== right) {
      return false;
    }
  }
  return true;
}

// 테스트 코드
console.log(isPalindrome("racecar"));
console.log(isPalindrome("stars"));
console.log(isPalindrome("기러기"));
console.log(isPalindrome("123321"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("kayak"));
*/
