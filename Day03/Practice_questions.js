// _____________________________________________________

// /* Q1) Write a function calculateDiscount that takes two 
// parameters: price and discount (with a default value of 10). The function should 
// return the final price after applying the discount.  */

// function Discount(price,discount=10){
//     return (discount/100)*price;
// }

// let price = 1000;
// let discount = 8;

// dis1 = Discount(price,discount);
// dis2 = Discount(price);

// console.log("Price with new discount: $",dis1);
// console.log("Price with default discount: $",dis2);

// _____________________________________________________

// /* Q2) Create a function mergeArrays that takes two arrays as parameters and returns a new 
// array that combines both arrays using the spread operator.  */

// function mergeArrays(a,b){
//     let c = [...a,...b];
//     return c;
// }

// let a = ["Your","OTP","is"];
// let b = [1,2,3];

// console.log(mergeArrays(a,b));

// _____________________________________________________

// /* Q3) Write a function logArguments that takes any number of arguments and logs them to 
// the console. Use rest parameters to collect the arguments. */

// function manyArgs(...a){
//     console.log(...a);
// }

// console.log("Displaying use of rest paramter using function: ");
// manyArgs(0);
// manyArgs("One","Two","Three");
// manyArgs(1,2,3,4,5,6,7,8,9,10);

// _____________________________________________________

// /* Q4) Create a function createMessage that takes a default message and an indefinite 
// number of names. The function should return an array of personalized messages for 
// each name */

// function createMessages(a="Hello",...names){
//     for(const i of names){
//         console.log(a,i);
//     }
// }

// let a = "Hello";
// let names = ["A","B","C","D","E"];
// createMessages(a,...names);

// _____________________________________________________

// /* Q5) Define a function sum that takes three numbers as parameters and returns their sum. Use 
// the spread operator to call this function with an array of numbers. */

// function totalSum(a,b,c){
//     total = 0;
//     for(const i of a){
//         total += i;
//     }
//     for(const i of b){
//         total += i;
//     }
//     for(const i of c){
//         total += i;
//     }
//     return total;
// }

// let a = [1,2];
// let b = [3,4];
// let c = [5,6];
// sum = totalSum(a,b,c);
// console.log("Sum of all numbers in these three arrays is: ",sum);

// _____________________________________________________

// /* Q6) Write a function createUserProfile that takes three 
// parameters: username, age (defaulting to 25), and country (defaulting to "Unknown"). 
// Return an object with these properties. */

// function createUserProfile(username,age=25,country="Unknown"){
//     const aObject = {username,age,country};
//     return aObject;
// }

// let username = "Satyam";
// let age = 20;
// let country = "India";

// a = createUserProfile(username,age,country);
// console.log("Created an object of username, age and of his countery.");
// console.log(a);

// //  Trying more in deep

// function createProfiles(names, ages=25, countries="Unknown") {
//     const profiles = [];
  
//     for (let i = 0; i < names.length; i++) {
//         profiles.push({
//             name: names[i],
//             age: ages[i],
//             country: countries[i]
//         });
//     }
//     return profiles;
// }
    
// const names = ["User1", "User2", "User3"];
// const ages = [25, 30];
// const countries = ["India", "Canada"];
    
// const profiles = createProfiles(names, ages, countries);
    
// console.log(profiles);

// /* Conlusion: Default value for parameters doesn't work when used for 
//     an array's element as the array is considered as a paramter and no 
//     such need for defaul value is required.
// */

// _____________________________________________________
