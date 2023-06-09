// Quokka.js extension
// "CMD +K + Q" - existing file; CMD + K + J - New file

//return 3 times
//--->METHOD 1
// function example(a, b) {
//   return function (c, d) {
//     return function (e, f) {
//       console.log(a, b, c, d, e, f);
//       return a * c * e + b * d * f;
//     };
//   };
// }

//---> METHOD 2
const example = (a, b) => (c, d) => (e, f) => a * c * e + b * d * f;

console.log(example(1, 2)(3, 4)(5, 6));
console.log(example(1, 2)(1, 2)(3, 4));
console.log(example(1, 2)(0, 1)(0, 5));

// example(1, 2)(1,2)(3,4)
// 1*1*3+2*2*4=3+16=19

//example(1,2)(0,1)(0,5)
// 1*0*0+2*1*5=0+10=10
