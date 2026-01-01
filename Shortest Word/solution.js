function findShort(s){
  let stringArr = s.split(' ');
  let result = 9999;
  for(let i = 0; i < stringArr.length; i++){
      if(result > stringArr[i].length){
          result = stringArr[i].length;
        }
    }
  return(result)
}