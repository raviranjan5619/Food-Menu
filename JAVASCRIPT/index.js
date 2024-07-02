//  const input = require("prompt-sync")
//  let userInput = prompt("Enter your message here:");
//  const prompt = require('prompt');
// const readline = require('readline');

// // let a=Number(input("enter t a:-"))
// // let b=Number(input("enter the v of a:-"))
// //flow chart qustion 1.
// const input=require("prompt-sync")()
// let a=Number(input("enter input a:-"))
// let b=(input("enter input b:-"))
// let c=Number(input("enter input c:-"))
// // let sum=(a+b+c);
// // console.log(sum);
// // //qustion 2.
// let x=(input("le lorde x;-"));
// console.log(x);
//Qustion 3.
// let a=input(input("bhaitole a:"));
// let b=input(input("bhaitole b:"));


 
// const readlineSync = require('readline-sync');

// let a = readlineSync.question('Enter value for a: ');
// let b = readlineSync.question('Enter value for b: ');
// let temp = 0;
// temp = a;
// a = b;
// b = temp;


// console.log('a:', a);
// console.log('b:', b);


const prompt = require("prompt-sync")();
let a = Number(prompt("Enter the value of a: "));
let b = Number(prompt("Enter the value of b: "));
console.log(a + b);
console.log(a-b);
console.log(a*b);
console.log(a%b);
console.log(a/b);
let c = Math.floor(a/b);
console.log(c);


