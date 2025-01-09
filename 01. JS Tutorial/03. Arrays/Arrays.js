var myCars = ["Toyota", "Honda", "Audi", "BMW", "Subaru"];
var myNumbers = [1, 2, 3, 4, 5, 6, 7];

var car = "BMW";
var foundCar = myCars.find((value, index, arr) =>{ return value === car});

var number = 8;
var foundNum = myNumbers.find((value, index, arr) =>{ return value === number});

console.log(foundCar);
console.log(foundNum);