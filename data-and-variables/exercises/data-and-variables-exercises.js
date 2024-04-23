let shuttleName = 'Determination' ;
let shuttleSpeed = 17500 ;
let distanceToMars = 225000000 ;
let distanceToMoon = 384400 ;
const milesPerKm = 0.621 ;

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below
let milesToMars =
distanceToMars * milesPerKm;
console.log(milesToMars)

let hoursToMars =
milesToMars / shuttleSpeed;
console.log(hoursToMars)

let daysToMars =
hoursToMars / 24;
console.log(shuttleName + " will take  " + daysToMars + " days to reach Mars.");

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below