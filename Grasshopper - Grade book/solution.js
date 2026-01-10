function getGrade (s1, s2, s3) {
  
  let avg = (s1 + s2 + s3) / 3
  
  if(avg >= 90){ return "A"}
  if(avg >= 80){ return 'B'}
  if(avg >= 70){ return 'C'}
  if(avg >= 60){ return 'D'}
  if(avg >= 0){ return 'F'}
  
}