function luckCheck(ticket){
  
  if (ticket.length === 0) throw new Error("Invalid ticket");

  for (let i = 0; i < ticket.length; i++) {
    if (ticket[i] < '0' || ticket[i] > '9') {
      throw new Error("Invalid ticket");
    }
  }

  
  let right = 0;
  let left = 0;
  
  if(ticket.length % 2 == 0){
    
    for(let i = 0; i < ticket.length / 2 ; i++){
      right += Number(ticket[i])
    }
    
    for(let i = ticket.length / 2; i < ticket.length; i++){
      left += Number(ticket[i])
    }
    
    if(right == left){return true}
    else{return false}
    
  }
  else{
    
    let center = ticket.length / 2 
    let centerFloor = Math.floor(center)
    
    for(let i = 0; i < centerFloor; i++){
      right += Number(ticket[i])
    }
    
    for(let i = centerFloor + 1; i < ticket.length; i++){
      left += Number(ticket[i])
    }
    
    if(right == left){return true}
    else{return false}
    
  }
}