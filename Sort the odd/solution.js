function sortArray(array) {
  
  let OddArr = array.filter(function(e) {return(e % 2 != 0 )})
  let sortOddArr = OddArr.sort((a, b) => a - b)
  
  let y = 0;
  
  for(let i = 0; i < array.length; i++){
    
    if(array[i] % 2 != 0){
      array[i] = sortOddArr[y]
      y++
    }
  }
  return array;
}