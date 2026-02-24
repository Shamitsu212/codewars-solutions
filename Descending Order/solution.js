function descendingOrder(n){
  let s = n + ""
  let arr = s.split("")
  return Number(arr.sort((a, b) => b - a).join(""))
}