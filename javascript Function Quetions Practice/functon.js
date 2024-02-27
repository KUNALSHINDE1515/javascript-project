// // // // Write a JavaScript function to find the maximum of two numbers.
// // // function maximum(a , b) {
// // //     if (a < b) {
// // //         console.log("MAximum number is B");
// // //     }else{
// // //         console.log("MAximum number is A");
// // //     }

// // // }

// // // // maximum( 9 , 8)

// // // // Write a JavaScript function to find the factorial of a number.


// // // let number = 5
// // // function factorial(number) {

// // //     let fact = 1;

// // //     if (number === 0) 
// // //         return 1;
// // //     for (let i = 2; i <= number; i++) 
// // //         fact = fact  * i;
// // //         return fact;
    
// // // }

// // // // console.log(factorial(number));

// // // // Write a JavaScript function to reverse a string.

// // function abc(reves) {
// //     let emptyString = '';

// //     for (let i = reves.length - 1; i>= 0; i--) {
// //                 emptyString += reves[i]
// //     }

// //     return emptyString ;
// // }
// // // const prompt = require("prompt-sync")();
// // const prompt = require("prompt-sync")({sigint:true});

// // const string = prompt("Enter the value: "); // if we get input from usr that will nat run program show prompt error
// // // const string = "123456789"

// // const result = abc(string);
// // console.log(result);

// // // npm install prompt-sync
// // // Write a JavaScript function to check if a number is prime.

// let isPrime = true;

// function chechPrime(number) {
    
//     if (number === 1) {
//         console.log("1 is not a prime number");
//     } else if (number > 1) {
//         for (let i = 2; i <= number; i++) {
//             if (number % i == 0) {
//                 isPrime = false
//                 break;
//             }
            
//         }

//         if (isPrime) {
//             console.log(`${number} is prime number`);
//         } else {
//             console.log(`${number} is not prime`);
//         }
//     }
    

// }

// chechPrime(1)
// Write a JavaScript function to generate a random integer within a specified range.
// function getrandom(min , max) {
//     min = Math.ceil(min)
//     max = Math.floor(max)

//     return  Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const result = getrandom(1 , 100)
// console.log(result);


// Write a JavaScript function to calculate the area of a circle given its radius.

// function calculateArea(radius) {
//     return Math.PI * radius * radius; 
// }

// const result = calculateArea(5) 
// console.log(`Area of cicle is ${result}`);


// Write a JavaScript function to concatenate two arrays.7,

// let arr1 = [1,2,3,4,5]
// let arr2 = [6,7,8,9,10]

// // const result = arr1.concat(arr2);
// // console.log(result);

// function concateARR() {
    
//     const result = arr1.concat(arr2);
//     // console.log(result);


//     return result;
// }

// const p = concateARR()
// console.log(p);

// Write a JavaScript function to remove duplicate elements from an array.

// var  arr = ["kunal" , "rohit", "shubham" , "rohit", "apple", "bannan", "apple"]

// function removeDuplicates(data) {
//     return data.filter(( value , index) => data.indexOf(value) === index);
// }

// //  console.log(removeDuplicates(arr));
// const result = removeDuplicates(arr)
// console.log(result);

// Write a JavaScript function to convert Celsius to Fahrenheit.

// Write a JavaScript function to find the longest word in a string.
// Write a JavaScript function to count the number of vowels in a string.
// Write a JavaScript function to sort an array of numbers in ascending order.
// Write a JavaScript function to find the sum of digits of a positive integer.
// Write a JavaScript function to capitalize the first letter of each word in a string.
// Write a JavaScript function to check if an array contains a specific element.
// Write a JavaScript function to generate a Fibonacci sequence of a specified length.
// Write a JavaScript function to find the median of an array of numbers.
// Write a JavaScript function to calculate the factorial of each element in an array.
// Write a JavaScript function to find the intersection of two arrays.