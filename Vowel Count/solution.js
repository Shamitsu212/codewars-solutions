function getCount(string) {
  let arrString = string.split('');
  let filtered = arrString.filter((el) => {
    return el == 'a'|| el =='e'|| el == 'i' || el =='o' || el =='u';
  })
  return(filtered.length)
}