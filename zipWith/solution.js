function zipWith(func,arr0,arr1) {
  const minLength = Math.min(arr0.length, arr1.length)
  return arr0.slice(0, minLength).map((firstArrEl, i) => func(firstArrEl, arr1[i]))
}