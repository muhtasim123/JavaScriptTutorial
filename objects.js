//object literal
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