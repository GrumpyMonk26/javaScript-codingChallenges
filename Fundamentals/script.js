// Coding Challenge #1
const calcAverage = (num1, num2, num3) => {
    return (num1 + num2 + num3) / 3;
  };
  
  const scoreDolphins = calcAverage(44, 23, 71);
  const scoreKoalas = calcAverage(65, 54, 49);
  
  console.log(scoreDolphins, scoreKoalas);
  
  const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
      console.log(`Dolphins Win 🏆🏆 (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
      console.log(`Koalas Win 🏆🏆 (${avgKoalas} vs ${avgDolphins})`);
    } else {
      console.log('There is no clear winner 🎉🎉');
    }
  };
  
  console.log(checkWinner(scoreDolphins, scoreKoalas));
  
  // Coding Challenge #2
  function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
      return bill * 0.15;
    } else {
      return bill * 0.2;
    }
  }
  
  const bills = [125, 555, 44];
  // calculates tips based on bill
  const tips = [
              calcTip(bills[0]), 
              calcTip(bills[1]), 
              calcTip(bills[2])
          ];
  // calculates total bill + tips
  const total = [
              calcTip(bills[0]) + bills[0], 
              calcTip(bills[1]) + bills[1], 
              calcTip(bills[2]) + bills[2]
          ];
  
  console.log(calcTip(100));
  console.log(tips)
  console.log(total)
  
  // coding challenge 3  
  const mark = {
      fullName: 'Mark Miller',
      mass: 78,
      height: 1.69,
      calcBMI: function (){
          this.bmi = this.mass / this.height ** 2;
          return this.bmi
      }
  }
  
  const john = {
      fullName: 'John Smith',
      mass: 92,
      height: 1.95,
      calcBMI: function (){
          this.bmi = this.mass / this.height ** 2;
          return this.bmi
      }
  }
  
  mark.calcBMI();
  john.calcBMI();
  
  console.log(mark.bmi, john.bmi);
  if(mark.bmi > john.bmi){
      console.log(`Mark has an higher BMI ${mark.bmi} than John ${john.bmi}`)
  } else if(john.bmi > mark.bmi){
      console.log(`John has an higher BMI ${john.bmi} than Mark ${mark.bmi}`)
  } 
  
  // coding challenge 4 loops
  
  console.log('..........challenge 4 loops............')
  
  const newBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
  const newTips = []
  const newTotals = []
  
  function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
      return bill * 0.15;
    } else {
      return bill * 0.2;
    }
  }
  
  for(let i = 0; i < newBills.length; i++){
      const tip = calcTip(newBills[i])
      newTips.push(tip)
      newTotals.push(tip + newBills[i])
  }
  
  console.log(newTips)
  console.log(newTotals)
  
  