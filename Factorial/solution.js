function factorial(n){
  
  let count = 1
  
  if(n == 0){
    return 1  
  }
  
  else if(n < 0){
    throw new RangeError("Should throw RangeError") 
  }
    
  
  for(let i = 1; i <= n; i++){
    count = count * i
  }
  
  return count
}