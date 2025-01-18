// // Difference in simple function and Arrow function.
// function add1(a,b){
//     return a+b;
// }
// const add2 = (a,b) => a+b;

// let a = 10;
// let b = 20;

// sum1 = add1(a,b);
// console.log(sum1);
// sum2 = add2(a,b);
// console.log(sum2)

// // Arrow operator with no parameter.
// const msg = () => {
//     console.log("Greetings!");
// }
// msg();

// // Arrow operator with one parameter.
// const s_para = x => x*x;
// let x = 10;
// console.log(s_para(x));

// // Returning onject literal using arrow function
// const Person = (a,b) => {
//     // c = {first:a,last:b};
//     // return c;
//     return {first:a,last:b};
// }
// console.log(Person("satyam","raj"));

// // Computed Properties.
// let propName = 'c';
// const rank = {
//     a:1,
//     b:2,
//     [propName]:3,
// };
// console.log(rank.c);

let last_name = "lastname";
let full_name = {
    first_name : "Somya",
    [last_name] : "Jain"
};

console.log("My full name is", full_name.first_name , full_name.lastname, ".");
