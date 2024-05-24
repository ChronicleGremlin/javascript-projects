function reverse(thisIsAString) {
   let lettersArray = thisIsAString.split('');
   let reversedLettersArray = lettersArray.reverse();
   let reversedLetterArrayJoined = reversedLettersArray.join('');

   return reversedLetterArrayJoined;
}

let endInfo = reverse("Hiii! This is a test!");
console.log(endInfo);

console.log(reverse("Hiii! This is a test!"));