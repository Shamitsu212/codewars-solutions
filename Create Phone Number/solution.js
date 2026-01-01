function createPhoneNumber(numbers){
  let string = numbers.join(',')
  let a = "" + numbers[0] + numbers[1] + numbers[2];
  let b = "" + numbers[3] + numbers[4] + numbers[5];
  let c = "" + numbers[6] + numbers[7] + numbers[8] + numbers[9];
  let result = `(${a}) ${b}-${c}`
  return(result)
}