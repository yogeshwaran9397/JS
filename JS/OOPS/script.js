// prototype 
Person = function (name, birthYear) {
    this.Name = name;
    this.birthYear = birthYear;
}

const Yogesh = new Person("Yogesh", 1997);
const Bala = new Person("Bala", 1993);
console.log(Yogesh);

//prototype inheritance 
Person.prototype.calAge = function () {
    console.log(2024 - this.birthYear);
}

Yogesh.calAge();
Bala.calAge();


// inheritance using the object.create 