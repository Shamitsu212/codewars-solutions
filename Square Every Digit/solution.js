function squareDigits(num){
  let stringNum = "" + num;
  let result = "";
  for(let i = 0; i < stringNum.length; i++){
    let stepen = stringNum[i] ** 2 ;
    result = result + stepen
  }
  return(Number(result))
}