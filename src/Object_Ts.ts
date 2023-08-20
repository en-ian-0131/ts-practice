//interface
console.log("----interface----");
interface Person {
  name: string;
  age: number;
}

let teacher: Person = {
  name: "Tom",
  age: 28, //屬性多一個少一個都不行
};
console.log(teacher);

//可選屬性
console.log("----interface 2----");
interface Person2 {
  name: string;
  age?: number;
}

let student: Person2 = {
  name: "jerry",
};
console.log(student);

//任選屬性
console.log("----interface 3----");

interface Person3 {
  name: string;
  //age?: number;
  [propName: string]: string;
}

let teacher2: Person3 = {
  name: "Ian",
  //age: 23,    //有任選屬性，可選要跟著也是string，23會出錯
  gender: "male",
};
console.log(teacher2);
