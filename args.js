#!/usr/bin/env node

let args = process.argv;

let [,,...numbers] = args;
if(numbers.length === 0)
    console.log('0');
else {
    let answer = numbers.reduce( (num1, num2) => {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        return num1+num2;
    })
    console.log(answer);
    
}