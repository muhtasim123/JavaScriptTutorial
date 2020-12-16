let child = {
    name: "child",
    type: "radical"
}

let parent = {
    name: "parent",
    job: "taking care of child"
}

console.log(child.job);

Object.setPrototypeOf(child, parent);

console.log(child.job);

//getting the Object.prototype
let superObject = Object.getPrototypeOf(parent);
superObject.pet = "a cute doggie";

console.log(child.pet);
console.log(parent.pet);
console.log({}.pet);

class Parent{
    name
    job
    constructor(name, job){
        this.name = name;
        this.job = job;
    }
}

class Child extends Parent{

}