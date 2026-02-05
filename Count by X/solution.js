function countBy(x, n) {
  let r = []
  
  for(let i = 1; i <= n; i++){
    r.push(x * i)
  }
  
  return r
}