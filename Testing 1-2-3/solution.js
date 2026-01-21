var number=function(array){
  
  const result = []
  
  for(let i = 0; i < array.length; i++ ){
  
    let count = `${i+1}: ${array[i]}`
  
    result.push(count)
  }
  
  return(result)
}