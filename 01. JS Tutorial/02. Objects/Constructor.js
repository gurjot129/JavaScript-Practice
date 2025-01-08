function Car(id, brand, model, year) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.year = year;
}

var myCar = new Car(1, "Toyota", "Camry", 2025);

console.log(myCar);