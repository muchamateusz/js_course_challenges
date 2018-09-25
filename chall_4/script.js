{

  var mark = new Object();
  mark.name = "Mark";
  mark.mass = 67;
  mark.height = 1.78;
  mark.calcBMI = function() {
    this.bmi = Math.round(this.mass / (this.height * this.height));
    return `${this.name}, Your BMI is: ${this.bmi}`;
  };
  var john = new Object();
  john.name = "John";
  john.mass = 86;
  john.height = 1.85;
  john.calcBMI = function() {
    this.bmi = Math.round(this.mass / (this.height * this.height));
    return `${this.name}, Your BMI is: ${this.bmi}`;
  };

  function whoseBMIisHigher(a, b) {
    if (john.bmi > mark.bmi) {
      console.log(`${a.name}s BMI is higher :`, a.bmi);
    } else if (john.bmi < mark.bmi) {
      console.log(`${b.name}s BMI is higher :`, b.bmi);
    } else {
      console.log("Guys have the same bmi! ", a.bmi);
    }
  }
  console.log(john.calcBMI());
  console.log(mark.calcBMI());
  console.log(whoseBMIisHigher(john, mark));
}
