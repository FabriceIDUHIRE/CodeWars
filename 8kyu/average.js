function findAverage(array) {
  
  if(array.length === 0){
    return 0;
  }
  
  let sum = 0;
  for (let a = 0; a < array.length; a++){
    sum = sum + array[a];
  }
  return sum / array.length;
 }

console.log(findAverage([12,7,33,66]));