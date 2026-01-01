function args_count( ){
  let result = 0;
  
  for(let i = 0; i < arguments.length; i++)
    {
      result += 1;
    }
  return(result)
}