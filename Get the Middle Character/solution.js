function getMiddle(s) {
  let length = s.length /2
  let floorLength = Math.floor(length)
  
  if(length == floorLength){
    return(s[length - 1] + s[length])
  }
  
  else{
    return(s[floorLength])
  }

}