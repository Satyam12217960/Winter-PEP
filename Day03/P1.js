// ______________________________________

// // Use of function with parameter.

// let a = 5;
// let b = 4;

// function multiply(a,b){
//     return a * b;
// }

// ______________________________________

// // Use of rest parameter -> ...xyz(triple dot followed by paramter name).

// ans = multiply(a,b);
// console.log(ans);

// function xyz(x,y,...z){
//     console.log({x,y,z});
// }

// xyz(10,20,30,"abc",40);

// ______________________________________

// // Use of rest paramter in a for loop to add numbers.

// function sum(...Args){
//     let total=0;
//     for(const i of Args){
//         total += i;
//     }
//     return total;
// }

// console.log(sum(1,2,3));

// ______________________________________

// // More of `rest parameter` examples.

// function myFun(a,b,...manyMore){
//     console.log("a:",a);
//     console.log("b:",b);
//     console.log("manyMore:",manyMore);
// }

// myFun("One","Two","Three","Four","Five");

// ______________________________________

// // Spread operator

// const a = [1,2,3];
// const b = [4,5,6];
// const c = [...a,...b];
// console.log(c);

// const x = ["a","b","c"];
// const y = [1,2,3];
// const z = [...x,...y]
// console.log(z);

// ______________________________________

// // Use of forEach Helper

// const fruits = ["Apple","Orange"];

// fruits.forEach(function(fruits){    // Using forEach helper by normal method.
//     console.log(fruits);
// });

// fruits.forEach(fruits=>console.log(fruits));    // Using forEach helper by arrow function.

// ______________________________________
