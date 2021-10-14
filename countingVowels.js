const numberOfVowels = function(data) {
const vowels = ["a", "e", "i", "o", "u"]
let vowelsSum= 0;
for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < vowels.length; j++){
  if (data.charAt(i) === vowels[j]){
    vowelsSum++
  }
}
}
return vowelsSum 
}
console.log(numberOfVowels("orange"));