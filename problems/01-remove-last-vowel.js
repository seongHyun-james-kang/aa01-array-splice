/*
Write a function removeLastVowel(word) that takes in a string and returns the
string with its last vowel removed.
Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
let removeLastVowel = function (word) {


    let arrayOfCharacters = word.split('');
    let vowels = 'aeiouAEIOU'
    let indexOfLastVowel = 0;

    for (let i = arrayOfCharacters.length -1; i >= 0; i--) {
        let currentCharacter = arrayOfCharacters[i];
        console.log(i, currentCharacter);
        if (vowels.includes(currentCharacter)) {
            console.log(currentCharacter);
            indexofLastVowel = i;
            break;
        }

        console.log('before splice', arrayOfCharacters);
        arrayOfCharacters.splice(indexOfLastVowel, 1);
        console.log('after splice', arrayOfCharacters);
        console.log(indexOfLastVowel);
    }
    return arrayOfCharacters.join('');
    // console.log(arrayOfCharacters.slice(3, 3) "SPliced array"); // example
    // console.log(arrayOfCharacters); // example

};
console.log(removeLastVowel('bootcamp')); // 'bootcmp'
// console.log(removeLastVowel('better')); // 'bettr'
// console.log(removeLastVowel('graph')); // 'grph'
// console.log(removeLastVowel('thy')); // 'thy'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = removeLastVowel;
