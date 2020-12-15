//object literal
//1st out of the 3 ways to make an object
let x = {
    name: "Muhtasim",
    job: "Junior Full Stack Developer",
    favouriteNBATeam: "Toronto Raptors",
    walk:()=>{console.log("I'm walking")}
}

console.log(x);
x.walk();

//can add and remove fields to for an object whenever we want
x.random = "a random value";
console.log(x.random);
delete x.random;
console.log(x.random);

//making a constructor for an object
//2nd out of the 3 ways to make an object
//could have params instead of having predefined values for the variables
function Car(make){
    this.make = make;
    this.model = "5 Series";
    this.year = "1997";
    this.owner = "Muhtasim"
}

let myCar = new Car("BMW");
console.log(myCar.make);

class Student {
    name;
    classes;
    gpa;

    constructor(name, classes, gpa =4){
        this.name = name,
        this.classes = classes,
        this.gpa = gpa
    }

    talk(){
        console.log(`Hello, my name is ${this.name}`);
    }


}

let Andy = new Student("Muhtasim", ["Software", "Engineer"]);
console.log(Andy);
Andy.talk();