function arrayPlusArray(arr1, arr2) {
  let firstArrSum = arr1.reduce((start, currentvalue, index) => {
    start = start + currentvalue
    return start;
  }, 0);
  let secondArrSum = arr2.reduce((start, currentvalue, index) => {
    start = start + currentvalue
    return start;
  }, 0);
  return(firstArrSum + secondArrSum)
}