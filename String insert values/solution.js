var format = function (str, obj) {
  if(Array.isArray(obj)){
    let first = obj[0];
    let second = obj[1];  
    let last = obj[2];
    str = str.replace(/\{0\}/g, first);
    str = str.replace(/\{1\}/g, second);
    str = str.replace(/\{2\}/g, last);
  }
  else{
    let first = obj.foo;
    let last = obj.bar;  
    str = str.replace(/\{foo\}/g, first);
    str = str.replace(/\{bar\}/g, last);
  }
  return(str)
};