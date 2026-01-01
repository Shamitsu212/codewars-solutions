function maskify(cc) {

let string = cc.toString();
  if(cc.length > 4){
   let lastnumbers = string[string.length - 4] + string[string.length - 3] + string[string.length - 2] + string[string.length - 1];
   return(lastnumbers.padStart(string.length, '#'))
}else{
  return(cc);
  }
}