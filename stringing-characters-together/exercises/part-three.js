//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'

console.log(language.slice(0,1) + language.slice(4,5));

//2. Without using slice(), use method chaining to accomplish the same thing.

let abbreviation = language.replace("JavaScript", "JS");
console.log(abbreviation);

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."

let initials = 'JS';

console.log(`The abbreviation for '${language}' is '${initials}'.`)

//4. Just for fun, try chaining 3 or more methods together, and then print the result.

let startAbbreviation = (language.slice(0,1));
let endAbbreviation = (language.slice(4,5));

console.log("The abbreviation for " + language + " is " + abbreviation + "!");

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';

if (notTitleCase = 'title case'){
    console.log(notTitleCase.replace('t', 'T').replace('c', 'C'));


}



