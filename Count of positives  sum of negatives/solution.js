function countPositivesSumNegatives(input) {
  return !input || input.length === 0 ? [] : input.reduce((acc, i) => {if(i > 0){acc[0] += 1}; if(i < 0){ acc[1] += i } return acc}, [0, 0]);
}