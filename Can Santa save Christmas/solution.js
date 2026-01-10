
function calculateSeconds(hours, minutes, seconds){
    return(  seconds + minutes * 60 + hours * 3600)
}


function determineTime (durations) {
  
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  
  let time = 0;
  
  for(let i = 0; i < durations.length; i++){
    let arrTime = durations[i].split(':')
    hours += Number(arrTime[0])
    minutes += Number(arrTime[1])
    seconds += Number(arrTime[2])
  }
  
   time = calculateSeconds(hours, minutes, seconds)
  
  if(time <= 86400){
    return true
  }
  else{
    return(false)
  }
  
}