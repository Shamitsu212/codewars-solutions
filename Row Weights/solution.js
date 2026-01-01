function rowWeights(array){
  const [FirstTeam, SecondTeam] = array.reduce((accumulator, element, index) => {
    if(index % 2 == 0){
        accumulator[0].push(element)
      }else{
        accumulator[1].push(element)
      }
  return accumulator;
  }, [[], []]);
  return [
    FirstTeam.reduce((weight1, weight2) => weight1 + weight2, 0),
    SecondTeam.reduce((weight1, weight2) => weight1 + weight2, 0)
  ];
}