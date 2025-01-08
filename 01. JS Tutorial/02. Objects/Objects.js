
var car = {
    id: 0,
    brand: "Toyota",
    model: "Camry",
    year: "2025",
    engine: "v6"
};

//console.log(car);

car.carInfo = function () {
    return "Car information: " + this.brand + " " + this.model + " " + this.year                           
};

console.log(car.carInfo());

