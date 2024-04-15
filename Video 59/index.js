/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

// to generate random numbers between a range max to min (both inclusive)
// Math.floor(Math.random() * (max - min + 1)) + min

// take the two numbers as argument
// generate the random number r between 1 to 100
// if r <=10 perform wrong operation
// else perform the right operation

function calculator(a,b) {
    let x = Math.floor(Math.random()*(100-0+1))+ 0;  
    if (x<=10) {
        console.log(`the value of ${a} + ${b} is: ${a-b}`);
        console.log(`the value of ${a} * ${b} is: ${a+b}`);
        console.log(`the value of ${a} - ${b} is: ${a/b}`);
        console.log(`the value of ${a} / ${b} is: ${a**b}`);
        return "Faulty Calculation";
    }
    else{
        console.log(`the value of ${a} + ${b} is: ${a+b}`);
        console.log(`the value of ${a} * ${b} is: ${a*b}`);
        console.log(`the value of ${a} - ${b} is: ${a-b}`);
        console.log(`the value of ${a} / ${b} is: ${a/b}`);
        return "True Calculation";
    }
}


console.log(calculator(2,3))