function moveZeros(arr) {
  const other = arr.filter(el => !Object.is(el, 0))
  const zero = arr.filter(el => Object.is(el, 0))
  
  return[ ...other, ...zero]
}