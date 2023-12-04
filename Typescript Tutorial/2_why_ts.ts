//Why ts?

function sum(num1,num2){
    return num1+num2;
}

let value1=sum(10,20);
console.log(value1);

let value2=sum('10',20);
console.log(value2);

//------------------------------------
//          Type safetying
//-----------------------------------
function sumNums(num1:number,num2:number){
    return num1+num2;
}

let value3=sumNums(10,20);
console.log(value3);

/*let value4=sumNums('10',20); //Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(value4)*/

//how to handle this

let n1=10;
let n2=20;

let total=sum(+n1,n2);
console.log(total)
