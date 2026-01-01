function multiplyAll(arr) {
  
  return function multiply(num){
    let result = arr.map((n) => n * num)
    return result
  }
}