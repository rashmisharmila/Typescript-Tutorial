//------------------------------------------
//        Primitives -number, String, boolean
//--------------------------------------------

function sendSum(num1:number,num2:number,name:string,isWithName:boolean){
    let result=isWithName ? `hi ${name},sum is ${num1+num2}` : `sum is ${num1+num2}`;
    return result;
}
let num1:number=40;
let num2:number=20;
let myName:string='Vishmi';
let withName:boolean=true;


let result1=sendSum(10,20,'Rashmi',true);
console.log(result1);


let result2=sendSum(10,20,'Rashmi',false);
console.log(result2);

let result3=sendSum(num1,num2,myName,withName);
console.log(result3);
