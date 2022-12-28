console.log("Hello World!");

const a = 5;
const b = 2;
let nicoName = "nico"

console.log(a + b);
console.log(a - b);
console.log("Before : " + nicoName)


nicoName = "nicolas"

console.log("After : " + nicoName) 

// null Type
const nullType = null;
console.log("nullType : ", nullType);

// undefined Type
let undefinedType;
console.log("undefinedType : ", undefinedType)

// Array

let nonesense = [1, 2, "a", true, undefined]
console.log(nonesense)

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"]

console.log(daysOfWeek)

// Get Item from Array
console.log(daysOfWeek[4])

// Add one more day to the Array
daysOfWeek.push("sun")
console.log(daysOfWeek) 


const calculator = {
    sum: function(a,b)
    {
        return a+b;
    },
    minus: function(a,b)
    {
        return a-b;
    },
}

const sumResult = calculator.sum(5,2);
const minusResult = calculator.minus(5,2);

console.log("sumResult : ", sumResult)
console.log("minusResult : ", minusResult)


// If Else

const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));

if(isNaN(age)){
    console.log("Please write a number")
}

