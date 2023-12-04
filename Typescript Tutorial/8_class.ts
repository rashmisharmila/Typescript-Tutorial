//------------------------------------------
//                Class
//--------------------------------------------

class Person {
    name: string;
    age: number;
    nic: string;


    constructor(name: string, age: number, nic: string) {
        this.name = name;
        this.age = age;
        this.nic = nic;
    }
}

let person1=new Person('Rashmi',22,'200162101775');
console.log(person1);

person1.name='Vishmi';
console.log(person1);

person1.nic='20051234561';
console.log(person1);

//-----------Read Only Keyword-----------------

class Person1 {
    name: string;
    age: number;
    readonly nic: string;


    constructor(name: string, age: number, nic: string) {
        this.name = name;
        this.age = age;
        this.nic = nic;
    }
}

let p1=new Person1('Rashmi',22,'200162101775');
console.log(p1);

p1.name='Vishmi';
console.log(p1);

/*p1.nic='20051234561'; //Cannot assign to 'nic' because it is a read-only property.
console.log(p1);*/


