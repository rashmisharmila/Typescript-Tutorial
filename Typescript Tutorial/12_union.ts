//union

let array:(number|string|boolean)[]=[1,2,"Hello",true];
class Student{
    id:number;
    name:string;
    subject:string;
    faculty:string;
}
class Teacher{
    id:number;
    name:string;
    subject:string;
    collage:string;

}
class Soldier{
    id:number;
    name:string;
    post:string;

}

let people:(Student|Teacher|Soldier);
