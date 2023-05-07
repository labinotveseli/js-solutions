function checkPalindrome(str) {
  let tempStr = str
    .match(/[a-z0-9]+/gi)
    .join("")
    .toLowerCase();
  let second = tempStr.split("").reverse().join("");
  return tempStr === second;
  //   str = str.toLowerCase();
  //   let first = str.split(" ").join("");
  //   let second = first.split("").reverse().join("");
  //   console.log(first);
  //   console.log(second);
}

console.log(checkPalindrome("Was it a car or a cat I saw"));
// true
console.log(checkPalindrome("Red -rum-, sir, -is-murder"));
// true
console.log(checkPalindrome("I got up early this morning"));
// false
