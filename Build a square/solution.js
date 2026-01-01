function generateShape(integer){
  const rows = [];
  for(let i = 0; i < integer; i++)
    {
      rows.push('+'.repeat(integer))
    }
  return(rows.join('\n'))
}