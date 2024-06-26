//We want to COMPLETELY reverse an array by flipping the order of the entries AND flipping the order of characters in each element.

// Part One: Reverse Characters


function reverseCharacters(stringToReverse) {
    if (typeof stringToReverse === 'string') { }
    if (typeof stringToReverse === 'number') {
        stringToReverse = String(stringToReverse);
        return Number(stringToReverse.split('').reverse().join(''));
    }
    return stringToReverse.split('').reverse().join('');

}
let testString = "apple";
console.log(reverseCharacters(testString));

let testStringTwo = 12345;
console.log(reverseCharacters(testStringTwo));

let arrayTest1 = ['apple', 'potato', 'Capitalized Words'];
let arrayTest2 = [123, 8897, 42, 1168, 8675309];
let arrayTest3 = ['hello', 'world', 123, 'orange'];

function reverseEverything(reversingArr) {
    let startingArr = [];
    for (let index = 0; index < reversingArr.length; index++) {
        startingArr.push(reverseCharacters(reversingArr[index]))
    }
    return startingArr.reverse();
}

console.log(reverseEverything(arrayTest1));

// Bonus Missions

// 1. Have a clear, descriptive name like funPhrase.
// 2. Retrieve only the last character from strings with lengths of 3 or less.
// 3. Retrieve only the first 3 characters from strings with lengths larger than 3.
// 4. Use a template literal to return the phrase We put the '___' in '___'. Fill the first blank with the modified string, and fill the second blank with the original string.

// Test Function

// 1. Outside of the function, define the variable str and initialize it with a string (e.g. 'Functions rock!').
// 2. Call your function and print the returned phrase.

// Area of rectangle equal to length x width

// 1. Define a function with the required parameters to calculate the area of a rectangle.
// 2. The function should return the area, NOT print it.
// 3. Call your area function by passing in two arguments - the length and width.
// 4. If only one argument is passed to the function, then the shape is a square. Modify your code to deal with this case.
// 5. Use a template literal to print, “The area is ____ cm^2.”
