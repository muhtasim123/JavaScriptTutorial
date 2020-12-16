let data = [
    {
        name: "Henry",
        age: 55,
        colour: "black",
        country: "Canada"
    },
    {
        name: "Matt",
        age: 14,
        colour: "blue",
        country: "Canada"
    },
    {
        name: "Peter",
        age: 29,
        colour: "red",
        country: "Florida"
    },
    {
        name: "Alec",
        age: 187,
        colour: "maroon",
        country: "USA"
    },
    {
        name: "Colin",
        age: 23,
        colour: "grey",
        country: "Canada"
    }
]

let filterData = data.filter((ele)=>{
    if(ele.country == "Canada"){
        return true;
    } else{
        return false;
    }
});

let mapData = filterData.map((ele)=>{
    return ele.age;
});

let reducedValue = mapData.reduce((prev, ele)=>{
    return prev + ele;
}, 0)/mapData.length;

console.log(filterData);
console.log(data);
console.log(mapData);
console.log(reducedValue);

data.filter((ele)=>{
    if(ele.country == "Canada"){
        return true;
    } else {
        return false;
    }
}).map((ele)=>{
    return ele.age;
}).reduce((prev, ele)=>{
    return prev + ele;
}, 0)/mapData.length;