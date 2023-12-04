//------------------------------------------
//                 Types
//--------------------------------------------

/*
📌Custom Type Creation
    ◾Using Type
        Type Creation
        Heritage
    ◾Using interface*/


let facultyOfStu1 = {id: 1, name: 'Rashmi', age: 24, faculty: 'CSE', uni: 'UOC'}
let facultyOfStu2 = {id: 2, name: 'Vishmi', age: 20, faculty: 'TONIC'}
let facultyOfStu3 = {id: 3, name: 'Dev', age: 19, faculty: 'TONIC'}
let Stu4 = {id: 3, name: 'Dev', age: 19, faculty: 'TONIC', address: 'panadura'}

type Graduate = { id: number; name: string, age: number, faculty: string, uni?: string }

interface Graduate2 {
    id: number;
    name: string;
    age: number;
    faculty: string;
    uni?: string;

}

let facultyOfStu: Graduate[] = [];
let facultyOfStu4: Graduate2[] = [];
let facultyOfLet: Graduate[] = [];

facultyOfStu.push(facultyOfStu1)
facultyOfStu.push(facultyOfStu2)
facultyOfStu.push(facultyOfStu3)
facultyOfStu4.push(Stu4)
