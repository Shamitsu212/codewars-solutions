function squareSum(numbers){
  
  let result = 0
  
  for(let i = 0; i < numbers.length ; i++){
    let square =  numbers[i] * numbers[i]
    result += square
  }
  
  return result
}