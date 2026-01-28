function noSpace(x){
  
  let result = []
  
  for(let i = 0; i < x.length;  i++){
    
    if(x[i] != " "){
      result.push(x[i])
    }  
    
  }
  
  return result.join("")
}