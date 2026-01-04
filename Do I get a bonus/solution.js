function bonusTime(salary, bonus) {
  if(bonus ==  true){
      let bonusSalary = salary * 10
      return("£" + bonusSalary)
    }else{
      return("£" + salary)
    }
}