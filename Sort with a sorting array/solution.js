function sort(initialArray,  sortingArray) {
  
  let result = new Array(initialArray.length);
  
  sortingArray.forEach((el, index) =>{
    result[el] = initialArray[index]
  })
  
  return result
}