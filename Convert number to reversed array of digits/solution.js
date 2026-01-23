function digitize(n) {
  return (n + "").split("").reverse().map((e) => Number(e) )
}