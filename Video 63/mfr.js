let arr = [1, 13, 5 ,7, 11];
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }

// let newArr = arr.map((e, index, array)=>{
//     return e**2
// })
// let oldarr = arr.map(e=>{return e+1})
// console.log(oldarr)
// console.log(newArr)
// const greaterThanSeven = (e)=>{
//     if(e>7){
//         return true
//     }
//     return false
// }
// console.log(arr.filter(greaterThanSeven))

// console.log(arr.filter((e)=>{if(e>1){return true} else return false}))

let arr2 = [1,2,3,4,5,6]

const red = (a, b)=>{
    return a+b
}

// console.log(arr2.reduce(red))
console.log(arr.reduce((a,b)=>{return a+b}))
console.log(Array.from("hery"))