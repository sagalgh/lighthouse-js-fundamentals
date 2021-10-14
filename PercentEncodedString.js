const urlEncode = function(text) {
  let space =" "; 
  let newString= "";
  let trimmedText= text.trim();
  for(let i=0; i < trimmedText.length; i++){
    if (trimmedText[i] === space){
      newString += "%20";
    } 
    else {
        newString += trimmedText[i];
    }
  }
return newString;
}




console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));