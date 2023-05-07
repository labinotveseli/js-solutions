let products = [
  {
    title: "iPhone X",
    company: "apple",
  },
  {
    title: "Galaxy S23",
    company: "samsung",
  },
  {
    title: "iPhone 14",
    company: "apple",
  },
  {
    title: "iPhone 14 PRO",
    company: "apple",
  },
  {
    title: "A53",
    company: "samsung",
  },
];
//---> METHOD 2 using array reduce(arr.reduce)
function getUnique(arr) {
  return [
    ...arr.reduce((acc, curr) => {
      acc.add(curr.company);
      return acc;
    }, new Set()),
  ];

  //---> METHOD 1 with Map
  //   let tempArr = arr.map((item) => item.company);
  //   return [...new Set(tempArr)];
}

console.log(getUnique(products));
