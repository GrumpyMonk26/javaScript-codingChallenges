'use strict';

// ............SCOPING IN PRACTICE...............
function calcAge(birthYear){
    const age = 2022 - birthYear

    function printAge(){
        const output = `${firstName} You are ${age}, born in ${birthYear}`
        console.log(output);

        if(birthYear >= 1970 && birthYear <= 1980){
            const str = `Oh, you are really old, ${firstName}`
            console.log(str);
        }
    }
    printAge()
    return age;
}

const firstName = 'Jason';
calcAge(1973);
// age cant be accessed outside the calcAge function
// console.log(age);

// HOISTING AND TZD IN PRACTICE

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jason'
// let job = 'Web Developer'
// const year = 1973

//functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
    return a + b
}

const addExpr = function(a, b) {
    return a + b
}

const addArrow = (a, b) => a + b;

if(!numberProducts){
    deleteShoppingCart()
}

var numberProducts = 10;
function deleteShoppingCart(){
    console.log('All products deleted!')
}

// PRIMITIVES VS OBJECTS
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name: 'Jason',
    age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica );
console.log('After marriage:', marriedJessica);