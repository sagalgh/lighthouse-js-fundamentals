const conditionalSum = function(values,condition){
let sumEven = 0;
let sumOdd = 0;
  for (let i = 0; i < values.length; i++){
  if (values[i] % 2 === 0){
    sumEven += values[i]
  }
  else {
    sumOdd += values[i]; 
  }
}
return condition === "even" ? sumEven : sumOdd
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"))