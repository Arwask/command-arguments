#!/usr/bin/env node

let args = process.argv;

let [,,...numbers] = args;
numbers = numbers.map( (num) => {
    return parseFloat(num);
})
if(numbers.length === 0)
    console.log('0');
else {
    let answer = 
    numbers.filter( (num) => {
        return parseFloat(num);
    })
    .reduce( (num1, num2) => {
        return num1+num2;
    })
    console.log(answer);   
}