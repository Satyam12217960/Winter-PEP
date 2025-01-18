// ______________________________________________________________________________________________________

/*    Q1. Replace Function Expressions with arrow functions in the code below: 
    function ask(question, yes, no) { 
    if (confirm(question)) yes(); 
    else no(); 
    } 
    ask( 
    "Do you agree?", 
    function() { alert("You agreed."); }, 
    function() { alert("You canceled the execution."); } 
    ); 
*/

// ______________________________________________________________________________________________________

/*    Q2. Identify the output of the following code 
    const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium']; 
    console.log(materials.map((material) => material.length)); 
*/  

// const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium']; 
// console.log(materials.map((material) => material.length));

// ______________________________________________________________________________________________________

/*    Q3. Write an arrow function called square that takes a number as an argument and returns its 
    square. 
*/

// const square = x => x*x;
// console.log(square(4));

// ______________________________________________________________________________________________________

/*    Q4. Given an array of numbers, use an arrow function to create a new array that contains the 
    squares of those numbers. For example, if the input is [1, 2, 3], the output should be [1, 4, 9].    
*/

// const arr_sqr = (a) => {
//     let b = [];
//     for(let i of a){
//         b[i-1] = i*i;
//     }
//     return b;
// }

// let a = [1,2,3];
// let x = arr_sqr(a);
// console.log(x);

// ______________________________________________________________________________________________________

/*    Q5. Use an arrow function to reverse a given string. For example, if the input is "hello", the output 
    should be "olleh".    
*/

// const rev_str = (str) => {
//     let rev = [];
//     let len = str.length;
//     for (let i = 0; i < str.length; i++) {
//       rev[len - 1 - i] = str[i]; 
//     }
//     return rev.join(''); 
//   };
  
//   let a = "hello";
//   console.log(rev_str(a));

// ______________________________________________________________________________________________________

/*    Q6. Create a chainable object using arrow functions that allows you to set a value and then add 
    or multiply it by a number. For example: 
    const result = chainable(5).add(3).multiply(2); // result should be 16 
*/



// ______________________________________________________________________________________________________
