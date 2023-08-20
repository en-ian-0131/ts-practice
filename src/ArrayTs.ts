//array
console.log("----Array----");
let myArray: number[] = [1, 2, 3, 4, 5];
let myArray2: Array<number> = [1, 2, 3, 4, 5];
console.log(myArray);
myArray2.push(6);
console.log(myArray2);

//array with any
console.log("----any----");
let myArray3: any[] = ["Ian", 12, true];
console.log(myArray3);

//元組
console.log("----元組----");
let Teacher3: [string, number] = ["Leo", 23];
console.log(Teacher3[0]);
console.log(Teacher3[1]);

console.log("----元組2----");
let tom: [string, number];
tom = ["Tom", 23];
console.log(tom);

console.log("----元組3----");
let student2: [string, number];
student2[0] = "Ian";
student2[1] = 23;
