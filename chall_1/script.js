// BMI = mass / height^2 = mass / ( height * height )

var mark, john;

mark = new Object();
mark.name = "Mark";
mark.mass = 67;
mark.height = 1.78;
mark.calcBMI = function() {
    this.bmi = Math.round(this.mass / (this.height * this.height));
  return `${this.name}, Your BMI is: ${this.bmi}`;
};

john = new Object();
john.name = "John";
john.mass = 86;
john.height = 1.85;
john.calcBMI = function() {
    this.bmi = Math.round(this.mass / (this.height * this.height));
  return `${this.name}, Your BMI is: ${this.bmi}`;
};

console.log(john.calcBMI());
console.log(mark.calcBMI());

var isMarksBMIHigherThanJohns = () =>
  parseInt(john.bmi) < parseInt(mark.bmi);

console.log(isMarksBMIHigherThanJohns());
