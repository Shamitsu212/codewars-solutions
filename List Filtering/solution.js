function filter_list(l) {
  const arr = [];
  for(let i = 0; i < l.length; i++ ){
    if(Number.isInteger(l[i])){
      arr.push(l[i]);
    }
  }
  return(arr)
  }
    