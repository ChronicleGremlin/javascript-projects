let shuttleName = 'Determination' ;
let shuttleSpeed = 17500 ;
let distanceToMars = 225000000 ;
let distanceToMoon = 384400 ;
const milesPerKm = 0.621 ;

// Calculate a space mission below
let milesToMars =
distanceToMars * milesPerKm;
//console.log(milesToMars)

let hoursToMars =
milesToMars / shuttleSpeed;
//console.log(hoursToMars)

let daysToMars =
hoursToMars / 24;

// Print the results of the space mission calculations below
console.log(shuttleName + " will take  " + daysToMars + " days to reach Mars.");

// Calculate a trip to the moon below

let milesToMoon =
distanceToMoon * milesPerKm;
//console.log(milesToMoon);

let hoursToMoon =
milesToMoon / shuttleSpeed;
//console.log(hoursToMoon);

let daysToMoon =
hoursToMoon / 24;

// Print the results of the trip to the moon below
console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.");