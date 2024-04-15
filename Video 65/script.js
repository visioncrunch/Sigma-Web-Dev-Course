// let arr = 5;
// console.log(arr.reduce((a,b)=>{return a*b}));
function factorial(n) {
    if(n==1){
        return 1;
    }
    return n*factorial(n-1);
}
function factorial1(n) {
            // array from 0 to n+1 as index and slice the first 0 element
    return Array.from(Array(n+1).keys()).slice(1).reduce((a,b)=>{return a*b})
    // the undefined will come if a function is not returning anything
}

console.log(factorial1(5));