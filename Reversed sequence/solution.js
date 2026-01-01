const reverseSeq = n => {
  const arr = [];
  for(let i = 1; i < n + 1; i++){
      arr.push(i);
    }
  return(arr.reverse());
};