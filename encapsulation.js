function Car(make, model, year){
    this.getMake = () => {
        return make;
    }
    this.setMake = (m) => {
        make = m;
    }

    this.getModel = () => {
        return model;
    }
    this.setModel = (mod) => {
        model = mod;
    }

    this.getYear = () => {
        return year;
    }
    this.setyear = (y) => {
        year = y;
    }
}

let myCar = new Car("BMW", "5 Series", "1997");

console.log(myCar.getMake());

function roleCheckerBuilder(roles){
    return ()=>{
        for(let role of roles){
            if(currentUser.role == role){
                console.log("you are allowed in");
            }
        }
        console.log("you are not allow in");
    }
}

let currentUser = {
    name: "Henry",
    role: "developer"
}

let roleChecker = roleCheckerBuilder(["CEO", "HR", "Admin"]);
roleChecker();