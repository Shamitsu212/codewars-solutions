function past(h, m, s){
  
  let result = 0
  
  for(let i = 0; i < s; i++){
    result = result + 1000;
  }
  for(let i = 0; i < m; i++){
    result = result + 60000
  }
  for(let i = 0; i < h; i++){
    result = result + 3600000
  }
  
  return(result)
}