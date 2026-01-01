function scrollingText(text){
  let string = text.toUpperCase(); 
  let result = [] 
  
  for(let i = 0; i < string.length; i++)
    {
      let rotated = string.slice(i) + string.slice(0, i)
      result.push(rotated)
    }
  return result
}