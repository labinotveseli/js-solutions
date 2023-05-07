function longestWord(str) {
    let words = str.split(" ");
    let longestWord = '';

    for(let word of words) {
        if(word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}


console.log(longestWord("I did my work of this day which is Sunday"));
console.log(longestWord("I am trying to acknowledge everything as it should be"));