function sumUntil(maxValue) {
  let sum;
  for (let index = 0; index<=maxValue; index++){
    sum= index+index;
    sum=sum+index;
  }
  return sum;
}

console.log(sumUntil(5));