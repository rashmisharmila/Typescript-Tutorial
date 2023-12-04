//------------------------------------------
//                  Arrays
//--------------------------------------------

let num_array:number[] =[1,2,3,4]
let str_array:string[] =['rashmi','vishmi','dev']
let str_num_array:(number|string)[] =[1,'rashmi',3,'vishmi',4,'dev']

let student1={id:1,name:'Rashmi',age:24,faculty:'CSE'}
let student2={id:2,name:'Vishmi',age:20,faculty:'TONIC'}

let students=[];
students.push(student1)
students.push(student2)


//---------Array type safetying----------

let facultyOfStudent1={id:1,name:'Rashmi',age:24,faculty:'CSE'}
let facultyOfStudent2={id:2,name:'Vishmi',age:20,faculty:'TONIC'}

let facultyOfStudent:{id:number;name:string,age:number,faculty:string}[]=[];
facultyOfStudent.push(facultyOfStudent1)
facultyOfStudent.push(facultyOfStudent2)

//-------------add the option data(?)---------------------------

let facultyOfStu1={id:1,name:'Rashmi',age:24,faculty:'CSE',uni:'UOC'}
let facultyOfStu2={id:2,name:'Vishmi',age:20,faculty:'TONIC'}

let facultyOfStu:{id:number;name:string,age:number,faculty:string,uni?:string}[]=[];
facultyOfStu.push(facultyOfStu1)
facultyOfStu.push(facultyOfStu2)
