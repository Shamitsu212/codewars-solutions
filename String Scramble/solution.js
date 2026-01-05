function scramble(str, arr) {
  
  let result = new Array(str.length)
  
  for(let i = 0; i < str.length; i++){
    let index = arr[i]
    
    result[index] = str[i]
  }
  
  return(result.join(''))
  
};