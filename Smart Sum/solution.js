function smartSum(...args){
  let sum = 0;
  
  function sumArray(item)
  {
    if(Array.isArray(item))
    {
      item.forEach(sumArray)
    }
    else{
      sum += item
    }
  }
  
  args.forEach(sumArray)
  return sum;
}