function findInArray(array, iterator) {
  
  for(let i = 0; i < array.length; i++){
    let functionResult = iterator(array[i], i)
    
    if(functionResult == true){
      return i
    }
    
  }
  
  return(-1)
};