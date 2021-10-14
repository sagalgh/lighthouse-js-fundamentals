function lastIndexOf(array, searchElement) {
  let index = -1;
  for (let i= 0; i < array.length; i++ ){

    if (searchElement === array[i]){
        index = i;
    }
  }
  return index;
}

console.log(lastIndexOf([1,2,1,4,1,5], 4));


