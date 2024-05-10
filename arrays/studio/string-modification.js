const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
const finalWordEnglish = str.toLowerCase();
const startOfWord = str.slice(0,3);
const endOfWord = str.slice(4,10);
const newWord = endOfWord + startOfWord;
const finalWordPigLatin = newWord.toLowerCase();

console.log(finalWordPigLatin);
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`In English we say ${finalWordEnglish} and in Pig Latin we say ${finalWordPigLatin}`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let info = input.question("How many letters are relocated to turn the English word into Pig Latin?")
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
// if (userInput == 3 || 'three' || 'Three'){
//     console.log('Correct!');
// } else {
//     console.log('Incorrect!');
// }