function findMagic(arr){
  let result = arr.findIndex((element, index) => element == index)
  return(result)
}