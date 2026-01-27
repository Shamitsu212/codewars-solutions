var number = function(busStops){
  
  let peopleInBus = 0;
  let leavingPeople = 0
  
  for(let i = 0; i < busStops.length; i++){
    peopleInBus = peopleInBus + busStops[i][0]
    leavingPeople = leavingPeople + busStops[i][1]
  }
  
  return peopleInBus - leavingPeople
}