//--------------------------------------------
//   (public,private,static)
//--------------------------------------------

class Person {
    public name: string;
    public age: number;
    private nic: string;


    constructor(name: string, age: number, nic: string) {
        this.name = name;
        this.age = age;
        this.nic = nic;
    }
    getNic(){
        return this.nic
    }
}

let person1=new Person('Rashmi',22,'200162101775');
console.log(person1);

person1.name='Vishmi';
console.log(person1);

/*person1.nic='20012345678';*/ //Property 'nic' is private and only accessible within class 'Person'.

console.log(person1.getNic()); // if we want to access private properties


//-------------------DBConnection-----------------------

class DBConnection{
    private static connection:string;

    private constructor(value:string) {
        DBConnection.connection=value;
    }
    static getConnection(){
        if (!DBConnection.connection){
            new DBConnection('test-connection');
        }
        return DBConnection.connection;
    }
}

let connection:string=DBConnection.getConnection();
console.log(connection);
