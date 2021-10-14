function howManyHundreds(num){
  let numOfContainers = num / 100
  if (num % 100 === 0){
    numOfContainers = num / 100
  }
  else {
    numOfContainers = num / 100
  }
  return Math.floor(numOfContainers)
}

console.log (howManyHundreds(1234))

/*this answer is probably too long and there is def. a shorter way to do it 
apparently using parse.int or math.trunc/*˜