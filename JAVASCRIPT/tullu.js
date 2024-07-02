// const input = require("prompt-sync")()
// let a=Number(input("Enter your value a:-"));
// let b = Number(input("Enter your value b:-"));
// a=a+b;
// b=a-b;
// a=a-b;
// console.log(a,b);

//const { question } = require("readline-sync")

//const { question } = require("readline-sync")

// const { question } = require("readline-sync");


//qustion number 9;
// const prompt = require(`prompt-sync`)()
// let a = Number(prompt("Enter the value of a :"))
// let b = Number(prompt("Enter the value of b :"))
// let c = a%b
// console.log(`${a-c} is that number that is closer to ${a} or totally divibile by ${b}.`);
//const prompt = require(`prompt-sync`)()


// qustion 10
// const prompt = require('prompt-sync')()
// let a= Number(prompt("enter value of a:-"))
// let b= Number(prompt("enter value of b:-"))
// if(a>b){
//     console.log(a);
// }
// else{
//     console.log(b);
// }


// qustion 11
// const prompt = require('prompt-sync')()
// let a = Number(prompt("enter value of a:-"))
// if(a%2==0){
//     console.log("even")
// }
// else{
//     console.log ("odd")
// }

// qustion 12
//  const prompt = require('prompt-sync')()
// let a = Number(prompt("enter value of a:-"))
// if(a>0){
//     console.log("postive")
// }
// else if (a<0){
//     console.log("negative")
// }
// else{
//     console.log("zero")
// }


//qustion 13
// const prompt = require('prompt-sync')()
// let n = Number(prompt("enter value of n:-"))
// if(n%2==0){
//     let c=((n*2)/2);
//     console.log (c)
// }
// else{
//     let d = (n*2);
//     console.log (d)
// }


//qustion 14
// const prompt = require('prompt-sync')()
// let a = Number(prompt("enter value a:-"))
// let b = Number(prompt("enter value b:-"))
// let c = Number(prompt("enter value c:-"))
// Max=0

// if(a>b){
//     Max=a;
// }
// else{
//     Max=b;
// }
// if (Max>c){
//     Max=Max;
// } else {
//     Max=c
// }
// console.log(Max)


// qustion 15
// const prompt = require('prompt-sync')()
// let a = Number(prompt("enter value a:-"))
// let b = Number(prompt("enter value b:-"))
// let c = Number(prompt("enter value c:-"))
// let d = Number(prompt("enter value d:-"))
// Max=0

// if(a>b){
//     Max=a;
// }
// else{
//     Max=b;
// }
// if (Max>c){
//     Max=Max;
// } else {
//     Max=c
// }
// if (Max>d) {
//     Max=Max;
// } else {
//    Max=d;
// }
// console.log(Max)


//qustion 16
// const prompt = require('prompt-sync')()
// let a = Number(prompt("enter value of a:- "))
// if(a%400==0){
//     console.log("leep year")
// }
// else if (a%4==0){
//     if(a%100!==0){
// console.log("leep year")
//     }
//     else{console.log("not leep year")

//     }
//     }

//qustion 17
//  const prompt = require("prompt-sync")()
// let a = Number(prompt("enter value a:-"))
// let b = Number(prompt("enter value b:-"))
// let c = Number(prompt("enter value c:-"))
// max=0;
// smax=0;
// if(a>b){
//     max=a,smax=b
// }
// else{
//     max=b,smax=a
// }
// if (max>c) {
//     max=max}
//  else {
//     max=c
//     }
//     if (max>smax) {
//         max=max,smax=smax
//     } else {
// smax=max,max=a
//     }
// console.log(smax);


//qustion 18

// const input = require("prompt-sync")()
// let a = Number(input("enter value a:-"))
// if(a <= 10000) {
//     hraPercentage = a*(0.20);
//     daPercentage =a*( 0.80);
//     total=a+hraPercentage+daPercentage
// } 
// else if (a <= 20000)
//  {
//     hraPercentage =a*(0.25);
//     daPercentage = a*(0.90);
//     total=a+(20/100)+(80/100)
//     total=a+hraPercentage+daPercentage
// } else 
// {
//     hraPercentage =a*(0.30);
//     daPercentage = a*(0.95);
//     total=a+hraPercentage+daPercentage
// }
// console.log(total)

//qustion19
// const prompt = require("prompt-sync")()
// let a = Number(prompt("enter value of a:-"))
// if(a<=50){
//     b=a*0.5
//     c=b*(20/100)
//     d=b+c
// }
// else if (a<=150){
//     a=a-50
//     b=a*0.75+(50*0.5)
//     c=b*(20/100)
//     d=b+c;
// }
// else if (a<=250){
//     a=a-150
//     b=a*1.20+(100*0.75)+(50*0.5)
//     c=b*(20/100)
//     d=b+c;
// }
// else{
//     a=a-250
//     b=a*1.50+(100*1.20)+(100*0.75)+(50*0.5)
//     c=b*(20/100)
//     d=b+c;
//  }
// console.log(d)

// qustion 20
// const prompt = require("prompt-sync")()
// let a = Number(prompt("enter value a:-"))
// let b = Number(prompt("enter value b:-"))
// let c = Number(prompt("enter value c:-"))
// let d = Number(prompt("enter value d:-"))
// max=0;
// smax=0;
// thmax=0;
// if(a>b){
//     max=a,smax=b
// }
// else{
//     max=b,smax=a
// }
// if (max>c) {
//     max=max}
//  else {
//     max=c
//     }
//     if (max>smax) {
//         max=max,smax=smax
//     } else {
// smax=max,max=a
//     }
//     if(max>d){
//         max=max
//     }
//     else{
//         max=d
//     }
//     if(smax>d){
//         smax=smax
//         thmax=d
//     }
//     else{
//         smax=d
//         thmax=smax
//     } 
//     console.log(thmax)



    //qustion22
    
// Function to take 5 numbers from the user and print frequency
// function takeUserInputAndPrintFrequency() {
//     var numbers = [];
//     var frequency = {};

//     // Take input for 5 numbers
//     for (var i = 1; i <= 5; i++) {
//         var userInput = prompt("Enter number " + i + ":");
//         var number = parseFloat(userInput);

//         // Check if the input is a valid number
//         if (!isNaN(number)) {
//             numbers.push(number);

//             // Increment the frequency count for the current number
//             if (frequency[number]) {
//                 frequency[number]++;
//             } else {
//                 frequency[number] = 1;
//             }
//         } else {
//             alert("Invalid input. Please enter a valid number.");
//             i--; // Decrement the counter to re-enter the current number
//         }
//     }

//     // Print the frequency of each number
//     console.log("Frequency of each number:");
//     for (var num in frequency) {
//         console.log(num + ": " + frequency[num]);
//     }
// }

// // Main program
// takeUserInputAndPrintFrequency();

//qustion 23
// const prompt = require("prompt-sync")()
// let n = Number(prompt("enter value n:-"))
// let name = (prompt("enter value name:-"))
// x=1
// while (x<=n){
    
//     console.log(name)
//     x=x+1;
// }
 


//qustion 24

//const prompt = require("prompt-sync")()
// let n = Number(prompt("enter value of n:-"))
// x=1
// if(x<=n){
//     while(x<=n){
//         if(x%2==0){
// console.log("even")
// x=x+1
//         }
//         else{
// x=x+1
//         }
//     }
// }
//Get input from the user
//var N = prompt("Enter a number:");

// Convert input to a number
//N = parseInt(N);

// Check if N is a valid number
//if (isNaN(N)) {
 //   console.log("Please enter a valid number.");
// else {
    // Print even numbers up to N
  //  console.log("Even numbers up to " + N + ":");
    //for (var i = 1; i <= N; i++) {
      //  if (i % 2 === 0) {
        //    console.log(i);
     //   }
   // }
//}




//qustion 25
// var N = prompt("Enter a number:");

// N = parseInt(N);

// if (isNaN(N)) {
//     console.log("Please enter a valid number.");
// } else {

//     var sum = 0;
//     console.log("Sum of odd numbers up to " + N + ":");
//     for (var i = 1; i <= N; i += 2) {
//         sum += i;
//     }
//     console.log(sum);


//qustion25
// Write a program to print the sum of odd numbers up to N
// const prompt = require("prompt-sync")()
// var N = prompt("Enter a number:-"); 

// N = parseInt(N);

// if (isNaN(N)) {
//   console.log("Please enter a valid number.");
// } else {
//   var sum = 0;
//   console.log("Sum of odd numbers up to " + N + ":");
//   for (var i = 1; i <= N; i += 2) {
//     sum += i;
//   }
//   console.log(sum);
// }


//qustion 26
// const prompt = require("prompt-sync")()
// let n = Number(prompt("enter value of n:-"))
// let m = Number(prompt("enter value of m:-"))
//  i=m
//  sum=0
//  while(i<=n){
//   if(i<=n){
//     sum=sum+i
//     i=i+1;
//   }
//   else{

//   }
//  }
//  console.log(sum)


//qustion 27
// const prompt = require("prompt-sync")()
//  let n = Number(prompt("enter value of n:-"))

//  let sum = 0;

//  for (let i = 1; i <= n; i++)
//  {
//     sum += 1/i;
//  }
// console.log(sum)


//qustionn28
// const prompt = require("prompt-sync")()
// let n = Number(prompt("enter value n:-"))
//  let count=0
//  if(n=>0){
//     a=n%10
//     count=count+1
//     n=Math.floor(n/10)
// }if(n=>0){
//     a=n%10
//     count=count+1 
//     n=Math.floor(n/10)
//   }
//   if(n=>0){
//     a=n%10
//     count=count+1
//     n=Math.floor(n/10)
//   }else{
    
//   }
//   console.log(count)


//qustion 29
// const prompt=require("prompt-sync")()
// let n = Number(prompt("enter value of n:-"))
// let sum=0
// let a;
// while(n>0) {
//   a=n%10
//   sum=sum+a
//   n=Math.floor(n/10)
// }
// console.log (sum)

//qustion 31
// const prompt = require("prompt-sync")()
// let n = Number(prompt("enter value of n:-"))
// let a,r = 0;
// while(n>0){
//   a=n%10;
//   r=r*10+a;
//   n=Math.floor(n/10)

// }
// console.log(r)


//qustion 34
// const prompt = require("prompt-sync")()
// let n = Number(prompt("enter value of n:-"))
// let i=1
// let a;
// let b;
// while(n=>i){
//   if(n%i==0){
 
//     console.log(i)
//    }
//   i++
// }


//qustion 35
// const prompt = require("prompt-sync")()
// let n = Number(prompt("enter value of n:-"))
// let i=1
// let a;
// let b;
// count=0
// while(n>i){
//   if(n%i==0){
//  count=count+1
//    }
//   i++
// }
// if(count>2){
// console.log("prime")

// }else{
//   console.log("not prime")
// }


//QUSTION 37
// const prompt=require("prompt-sync")()
// let n = Number(prompt("enter value of n:-"))
// let sum =0
// let i=1
//  while(n>i)
//   if(n%i==0){
//  sum=sum+i
//  i++
//  if(sum==n){
//   console.log("perfect number ")
//  }else{
//   console.log("not perfect")
//  }
//     }
  

//qustion 52
// let arr =[]
// const input=require("prompt-sync")()
// let n = input("enter the lenth of arr:-")
// for(let i=0;i<n;i++){
//  let element = input("enter your element:-")
//  arr.push(element)
// }
// console.log(arr)


//qustion 53
//Write a program to create an array of natural numbers till 20 and print it.
// const input = require("prompt-sync")()

// let arr = []
// let n=input("enter value of n:-")

// for (let i = 1; i <= n; i++) {
//   arr.push(i)
// }

// console.log(arr)

//qustion 54
//Write a program to reverse the array and print the reversed array.
// let arr =[]

// const input=require("prompt-sync")()

// let n = input("enter the lenth of arr:-")
// let k=n-1
// for(let i=0;i<k;i++){
// llet n = input("enter value of n:-")
// arr.push(element)
// }

// console.log(arr)


//qustion 55
//Write a program to take size of array, array and target as input from the user and check whether the target exists in this arrayor not.
// let arr = [];

// const input = require("prompt-sync")();

// let n = input("enter the lenth of arr:-");

// for (let i = 0; i < n; i++) {
//   let element = input("enter your element:-");
//   arr.push(element);
// }

// console.log(arr);

// let target = input("enter the target:-");

// if (arr.includes(target)) {
//   console.log("yes");
// } else {
//   console.log("no");
// }



//qustion 56
//Write a program to print the sum of all the odd numbers and even numbers in the given array.
// let arr=[]

// const input=require("prompt-sync")()

// let n = input("enter the lenth of arr:-")
// let evensum=0
// let oddsum=0

// for (let i = 0; i < n; i++) {
//   let element = input("enter your element:-");
//   arr.push(element);
// }

// console.log(arr);

// for(let i=0;i<arr.length;i++){
//   if(arr[i]%2==0){
//     evensum=parseInt(evensum+arr[i])
//   }else{
//     oddsum=parseInt(oddsum+arr[i])
//   }
// }

// console.log(evensum)

// console.log(oddsum)



//qustion 59
//Write a program to take N numbers from a user as input and then print the duplicates in those N numbers. Also, take N as aninput from the user.
// let arr =[]
// const input=require("prompt-sync")()
// let n=Number(input("enter value fo lenth n:-"))
// for (let i=0;i<n;i++){
//   let element = input("enter your element:-")
//   arr.push(element)
// }

// console.log(arr)

// for(let i=0;i<arr.length;i++){
//   for(let j=i+1;j<arr.length;j++){
//     if(arr[i]==arr[j]){
//       console.log(arr[i])
//     }
//   }
// }


//qustion 61 
// Write a program to take N numbers from the user and print the frequency of every number.
// let arr=[]

// const input=require("prompt-sync")()  

// let n=Number(input("enter value fo lenth n:-"))

// for (let i=0;i<n;i++){
//   let element = input("enter your element:-")
//   arr.push(element)
// }

// console.log(arr)

// for(let i=0;i<arr.length;i++){
//   for(let j=i+1;j<arr.length;j++){
//     if(arr[i]==arr[j]){
//       console.log(arr[i])
//     }
//   }
// }

// qustion 64
//Write a program to take two sorted arrays of size M, N from the user as input and merge them into a single sorted array of sizeM+N (Do not use sorting)
// let arr=[]

// const input=require("prompt-sync")()

// let m=Number(input("enter value fo lenth m:-"))

// let n=Number(input("enter value fo lenth n:-"))

// for (let i=0;i<m;i++){
//   let element = input("enter your element:-")
//   arr.push(element)
// }

// console.log(arr)

// for(let i=0;i<n;i++){
//   let element = input("enter your element:-")
//   arr.push(element)
// }

// console.log(arr)

// for(let i=0;i<arr.length;i++){
//   for(let j=i+1;j<arr.length;j++){
//     if(arr[i]==arr[j]){
//       console.log(arr[i])
//     }
//   }
// }


//qustion 71
//Write a program to take value N from the user and print the following pattern based on the user input.>>
// >>>
// >>>>>
// >>
// >
let arr=[]

const input=require("prompt-sync")()

let n=Number(input("enter value fo lenth n:-"))

for (let i=0;i<n;i++){
  let element = input("enter your element:-")
  arr.push(element)
}

console.log(arr)

for(let i=0;i<arr.length;i++){
  for(let j=i+1;j<arr.length;j++){
    if(arr[i]==arr[j]){
      console.log(arr[i])
    }
  }
}


