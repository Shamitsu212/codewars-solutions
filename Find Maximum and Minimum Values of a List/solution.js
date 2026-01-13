var min = function(list){
  
    let sortList = list.sort((a, b) => a - b)
    
    return sortList[0];
}

var max = function(list){
  
    let sortList = list.sort((a, b) => b - a)
   
    return sortList[0];
}