const sumLargestNumbers= function(data){
  let largestNumber = 0;
  let secondLargestNumber = 0;
  for (let i = 0; i < data.length; i++){
  if (data[i] > largestNumber){
    secondLargestNumber = largestNumber;
    largestNumber = data[i]
  }
}
return largestNumber + secondLargestNumber
}
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));