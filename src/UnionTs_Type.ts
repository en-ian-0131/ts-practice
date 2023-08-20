//unoin
console.log("----union----");
let canChange: string | number;
canChange = "Hello Ian";
console.log(canChange.length);
canChange = 123;
//console.log(canChange.length); //會報錯number沒有.length屬性

//type
console.log("----type----");
type A = string | number;
type B = boolean;

let a1: A = 123;
a1 = "Hello";
console.log(a1);
let b1: B;
b1 = true;
console.log(b1);
