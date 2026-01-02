function sumMul(n,m){
  
  let result = 0
  
  if(m <= 0 || n <= 0 || n > m){
    return("INVALID")
  }
  
  for(let i = n; i < m; i += n){
    result += i
  }
  
  return result;
}