function highAndLow(numbers){
  
  let numbersArr = numbers.split(" ").map(Number)
  return(Math.max(...numbersArr) + " " + Math.min(...numbersArr))
  
  
}