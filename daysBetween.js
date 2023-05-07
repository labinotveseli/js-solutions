// how many days between two dates

const date1 = new Date("May 27, 2021");
const date2 = new Date("June 5, 2023");

//---> METHOD 1
// const getDays = (date1, date2) => {
//   const oneDay = 1000 * 60 * 60 * 24;
//   const time2 = date2.getTime();
//   console.log(time2);
//   const time1 = date1.getTime();
//   console.log(time1);
//   let time = time2 - time1;
//   time = time / oneDay;
//   time = Math.round(Math.abs(time));
//   return time;
// };

//---> METHOD 2
const getDays = (date1, date2) =>
  Math.round(Math.abs((date2 - date1) / (1000 * 3600 * 24)));

console.log(getDays(date1, date2));
