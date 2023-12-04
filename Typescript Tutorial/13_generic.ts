//generic

let array1:number[]=[1,2,3,4,5,6,7];
let array2:string[]=["hello","IJSE","GDSE"];

class Student {
    name:string;
    age:number;

    constructor(name:string,age:number) {
        this.name=name;
        this.age=age;
    }
}

let array3:Student[]=
    [new Student("Rashmi",22),
        new Student("Vishmi",25),
        new Student("Dev",212)];

/*function removeLastItem(array:number[]):(number|string)[]{
    return array.slice(0,array.length-1);
}*/

function removeLastItem<T>(array:T[]):T[]{
    return array.slice(0,array.length-1);
}

let result1=removeLastItem<number>(array1);
console.log(result1);

let result2=removeLastItem<string>(array2);
console.log(result2);

let result3=removeLastItem<Student>(array3);
console.log(result3);
