function validatePIN (pin) {
  
  if(/^\d+$/.test(pin) && pin.length == 4 || /^\d+$/.test(pin) && pin.length == 6){
    return true
  }
  else{
    return false
  }
  
}
