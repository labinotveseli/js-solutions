// odd or even

//---> METHOD 1
// const sum = (number) => {
//   const items = [...number(number+'')]
//   const result = items.reduce((total, item)=>{
//     return total + Number(item)
//   },0)
//   return result % 2 === 0?'EVEN':'ODD'
// };

//---> METHOD 2
const sum = (number) =>
  [...number.toString()].reduce((total, item) => total + Number(item), 0) %
    2 ===
  0
    ? "EVEN"
    : "ODD";
console.log(sum(745));
