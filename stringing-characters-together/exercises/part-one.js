let num = String("1001");
console.log(num.length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).

let num1 = String("123.45");

if (String(num1).includes('.')){
    console.log(String(num1).length-1);
} else {
    console.log(String(num1).length);
}



//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
