function countSheeps(sheep) {
  return sheep.reduce((a, e) => {if(e == true){return a + 1} else{return a} }, 0)
}