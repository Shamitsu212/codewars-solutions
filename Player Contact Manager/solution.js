function playerManager(players) {
  
  let resultArr = []
  
  if(players === null){
    return(resultArr)
  }
  
  if(players.length == 0){
    return(resultArr)
  }
  
  let playerArr = players.split(", ")
  
  if(playerArr.length != 0){
    for(let i = 0; i < playerArr.length; i += 2){
    let obj = {}
    
    obj.player = playerArr[i];
    
    let phone = Number(playerArr[i+1])
    obj.contact = phone
    
    resultArr.push(obj)
  }  
 }
  
  return(resultArr)
}