function box(n) {
  const result = [];
  let head = '-'.repeat(n);
  let body = '-' + ' '.repeat(n - 2) + '-';;
  
  for(let i = 0; i < n; i++){
    if(i == 0 || i == n  - 1){
        result.push(head)
      }
    else{
     result.push(body) 
    }
  }
  return result;
}