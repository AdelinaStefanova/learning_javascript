let x = 5;

let firstName = "Adi"

console.log(x);
console.log(firstName);
console.log(typeof x);
console.log(typeof firstName);

console.log("for example");
let i = 10;

for (let i = 0; i < 5; i++) {
    console.log(i);
}


console.log(i);
//let i = "test";

let br = 1;

while (br <= 5) {
    console.log("*");
    br++;
}

let pcName = "Pisi";

if (pcName == "Pisi") {
    console.log("You guessed pc name");
}
else {
    console.log("Nooo, not guessed");
}

let num1 = 1;
let num2 = "1";

console.log(num1==num2);
console.log(num1===num2);
console.log(typeof num1);
console.log(typeof num2);

let arrayNames = ['A','Nadya', "Stoyan", "Tsvety", "Stoyan", "Ani", "Milena", "Velko", 65];

// just print the first element which is in position 0
// console.log(arrayNames[0]);

for(let i=0; i<arrayNames.length; i++){

    if(i==2){
        continue;
    }

    console.log(arrayNames[i]);
    //if(i==3){
    //    break;
    //}
}

console.log("index Of example");
console.log(arrayNames.indexOf("Stoyan"));
console.log(arrayNames.indexOf("Milena"));
console.log(arrayNames.indexOf('A'));
console.log(arrayNames.indexOf(65));
console.log(typeof arrayNames[8]);
console.log(typeof arrayNames[7]);
console.log("ABC".charCodeAt(0)); //ASCII -A -(65)
console.log(String.fromCharCode(65,66,67)); //ASCII ABC

let car1 = {
    type: "Nissan",
    model: "panda",
    color: "red",
    year: 2008,
    engine: "diesel",
    isNew: false
};

let car2 = {
    type: "Toyota",
    model: "avensis",
    color: "pink",
    year: 2020,
    engine: "diesel",
    isNew: true
};

console.log(car1.type);
console.log(car1.model);

console.log(car2.type);
console.log(car2.model);

car1.model = "pixo";
console.log(car1.model);

function combine(value1, value2){
    if(typeof value1 == "number" && typeof value2 == "number"){
        return value1 + value2;
    }
    else if(typeof value1 == "string" && typeof value2 == "string"){
        return value1 + " " + value2;
    }
    else{
        return -1;
    }    
}

console.log(combine(3, 4));
console.log(combine("Adelina", "Stefanova"));
console.log(combine("Adelina", 5));

///var is the old way to declare variables. Use let
var z = 6; //var (old) = let 
console.log(z);

/// document will work in browser
document.getElementById("example").innerHTML = "I am text from test.js";
