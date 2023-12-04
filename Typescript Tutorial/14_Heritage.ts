//Heritage

enum Classification {
    MAMMAL = "MAMMAL",
    BIRD = "BIRD"

}

interface Animal {
    classification: Classification;
}


class Person implements Animal {
    name: string;
    protected nic: string;
    age: number;
    classification: Classification;

    constructor(name: string, nic: string, age: number) {
        this.name = name;
        this.nic = nic;
        this.age = age;
    }

}

class Teacher extends Person {
    collage: string;
    subject: string;

    constructor(name: string, nic: string, age: number, collage: string, subject: string) {
        super(name, nic, age);
        this.collage = collage;
        this.subject = subject;
    }

    getNic(): string {
        return this.nic;
    }
}

let teacher = new Teacher("Rashmi", "200154122554", 22, "IJSE", "JAVA");
console.log(teacher.name);
console.log(teacher.getNic());
console.log(teacher.age);
console.log(teacher.collage);
console.log(teacher.subject);
