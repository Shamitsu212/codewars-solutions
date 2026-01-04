function getTask(arr){
  
  for(let i = 0; i < arr.length; i++){
    
    let arrSpan = arr[i];
    
    let subStart = arrSpan.indexOf("(");
    let subEnd =  arrSpan.indexOf(")");
    
    if(subStart === -1 || subEnd === -1) continue
    
    let subBody = arrSpan.slice(subStart + 1, subEnd)
    let subSize = subEnd -  subStart  + 1;
    
    if (subBody.includes('ˑ') || subBody.includes('~') || !subBody.includes('O')) {
      return "Emergency assistance to victims";
    }
    
    
    if (i === 0) {
      return "Look for a submarine on the surface";
    } else if (i <= subSize) {
      return `Start searching for a submarine at ${i} depth`;
    } else {
      return `Emergency search for a possibly damaged submarine at ${i} depth`;
    }
  }
}