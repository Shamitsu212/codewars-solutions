function abbrevName(name){
  
  
  let parts = name.split(' '); 
  
  let firstname =  parts[0];
  let surname =  parts[1];
  
  let result = firstname[0] + "." + surname[0];

  return(result.toUpperCase())
}