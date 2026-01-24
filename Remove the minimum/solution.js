function removeSmallest(numbers) {
  
  if(numbers.length == 0){
    return [];  
  }
  
  let min = Math.min(...numbers)
  let minIndex = numbers.indexOf(min)
  
  let result = [...numbers.slice(0, minIndex), ...numbers.slice(minIndex + 1)]
  
  return result
  
}