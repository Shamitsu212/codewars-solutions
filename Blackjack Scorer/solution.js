function scoreHand(cards) {
  
  let result = 0;
  let aces = 0;
  
  for(const card of cards){
    
    if (card === 'A') {
      aces++;
      result += 11;
    } 
    
    else if (card === 'J' || card === 'Q' || card === 'K') {
      result += 10;
    } 
    
    else {
      result += Number(card);
    }
    
    while(result > 21 && aces > 0){
      aces -= 1
      result -= 10
    }
    
  }
  return(result)
}
