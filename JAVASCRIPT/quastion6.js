const readlineSync= require('readline-sync');
let a = readlineSync.question('enter value a: ');
let b= a%10
console.log('b',b);