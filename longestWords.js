function longestWords(str) {
  let words = str.split(" ");
  let size = 0;
  let max = [""];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= size) {
      size = words[i].length;
      if (max[max.length - 1].length < words[i].length) {
        max = [];
        max.push(words[i]);
      } else {
        max = [...max, words[i]];
      }
    }
  }

  return [...max];
}

console.log(
  longestWords(
    "Writing some words is not that piece of cake for dealing with it"
  )
);
console.log(
  longestWords(
    "Choosing what to write with eloquence and style is something difficult to understand"
  )
);
