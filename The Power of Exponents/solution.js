function power(base, exponent){
  
  let result = 1
  let trueExponent = Math.abs(exponent)

  for(let i = 0; i < trueExponent; i++){
    result *= base
  }

  if(exponent < 0){
    result = 1 / result
  }

  return result
}
