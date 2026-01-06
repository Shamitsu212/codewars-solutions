function towerBuilder(nFloors) {
  
  
  // Подсчет звезд на 1 этаже
  let starsInFirstFloor = 1;
  
  for(let i = 1; i < nFloors; i++ ){
    starsInFirstFloor += 2
  }
  
  let result = []
  
  let firstFloor = ""
  
  // первый этажэ
  for(let i = 0; i <  starsInFirstFloor; i++ ){
    firstFloor += '*'
  }
  result.push(firstFloor)
  
  // Остальные этажи
  if(nFloors > 1){
    
    for(let i = 1; i < nFloors; i++ ){
      let nextFloor = ''
      starsInFirstFloor = starsInFirstFloor - 2
      nextFloor = " ".repeat(i) + "*".repeat(starsInFirstFloor) + " ".repeat(i)
      result.push(nextFloor)
    }
    
  }
  result.reverse()
  return(result)
}
