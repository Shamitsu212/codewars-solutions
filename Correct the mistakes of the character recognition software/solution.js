function correct(string)
{
  let result = string
  
	result = result.replace(/5/g, "S")
  result = result.replace(/0/g, "O")
  result = result.replace(/1/g, "I")
  
  return result
}