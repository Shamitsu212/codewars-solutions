function stray(numbers) {
  return numbers.find(num => numbers.filter(x => x === num).length === 1);
}