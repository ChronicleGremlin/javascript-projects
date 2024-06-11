let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () { return Math.floor(Math.random() * 11) }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function () { return Math.floor(Math.random() * 11) }
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function () { return Math.floor(Math.random() * 11) }
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function () { return Math.floor(Math.random() * 11) }
};

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: "0.0000000001",
   age: 1,
   astronautID: 5,
   move: function () { return Math.floor(Math.random() * 11) }
};

let crew = [superChimpOne, superChimpTwo, salamander, dog, waterBear];

console.log(`${superChimpOne.name} is a ${superChimpOne.species}. They are ${superChimpOne.age} years old and ${superChimpOne.mass} kilograms.`);
console.log(`${superChimpTwo.name} is a ${superChimpTwo.species}. They are ${superChimpTwo.age} years old and ${superChimpTwo.mass} kilograms.`);
console.log(`${salamander.name} is a ${salamander.species}. They are ${salamander.age} years old and ${salamander.mass} kilograms.`);
console.log(`${dog.name} is a ${dog.species}. They are ${dog.age} years old and ${dog.mass} kilograms.`);
console.log(`${waterBear.name} is a ${waterBear.species}. They are ${waterBear.age} years old and ${waterBear.mass} kilograms.`);
console.log("\n");
// Start an animal race!


function fitnessTest(testingAstronauts) {
   let results = [], numSteps, turns;
   for (let i = 0; i < testingAstronauts.length; i++) {
      numSteps = 0;
      turns = 0;
      while (numSteps < 20) {
         numSteps += testingAstronauts[i].move();
         turns++;
      }
      results.push(`${testingAstronauts[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
}

console.log(fitnessTest(crew));