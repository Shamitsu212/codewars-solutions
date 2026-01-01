function century(year) {
  let lastnumbers = year / 100;
  let result = Math.ceil(lastnumbers)
  return(result);
}