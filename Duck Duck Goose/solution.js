function duckDuckGoose(players, goose) {
  if(players.length < goose){
    let trueGoose = goose
    while(trueGoose > players.length){
      trueGoose = trueGoose - players.length
    }
    return(players[trueGoose - 1].name)
  }else{
    return(players[goose - 1].name)
  }
}