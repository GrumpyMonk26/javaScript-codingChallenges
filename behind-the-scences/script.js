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

