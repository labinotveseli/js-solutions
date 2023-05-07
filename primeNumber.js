// prime number = can only divide evenly by itself or one
// 11 / 2 = 5.5

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  let root = Math.ceil(Math.sqrt(num));

  for (let i = 2; i <= root; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(8));
//false
console.log(isPrime(11));
//true
console.log(isPrime(121));
//false
console.log(isPrime(127));
//true
