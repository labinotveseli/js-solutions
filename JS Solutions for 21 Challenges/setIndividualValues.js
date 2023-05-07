// individual or unique values using Set()

function individual(str) {
  //---> METHOD 1
  return new Set(str).size === str.length;

  //---> METHOD 2
  //   let tempStr = newSet();

  //   for (let letter of str) {
  //     if (tempStr.has(letter)) {
  //       return false;
  //     }
  //     tempStr.add(letter);
  //   }
  //   return true;
}

console.log(individual("abcd"));
// will return true
console.log(individual("abcdade"));
// will return false ad = duplicate
