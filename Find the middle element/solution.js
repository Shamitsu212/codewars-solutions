function gimme (triplet) {
  
  let n1 = Math.min(...triplet)
  let n2 = Math.max(...triplet)
  
  let middle = triplet.find(a => a > n1 && a < n2)
  
  return triplet.indexOf(middle)
  
}