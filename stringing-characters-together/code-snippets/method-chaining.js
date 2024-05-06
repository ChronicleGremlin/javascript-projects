//String methods can be combined in a process called method chaining.

let word = 'JavaScript';

console.log(word.toUpperCase());
//Returns ``JAVASCRIPT``

//What does ``word.slice(4).toUpperCase()`` return? "SCRIPT"
console.log(word.slice(4).toUpperCase());

//Experiment with other combinations (chains) of string methods.
let name = 'Alec Jost';

console.log(name);

console.log(name.slice(5));