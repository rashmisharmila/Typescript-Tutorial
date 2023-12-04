//------------------------------------------
//        functions
//--------------------------------------------

function findSum(num1:number,num2:number){
    return num1+num2;
}

let result1=findSum(10,20);
console.log("find Sum :- "+result1);


// ----------Type safetying for return type----------------


/*Return krn type eka safe krnna(return venna oni number ekak nm ekata string add venna ba)*/

/*function findTotal(num1:number,num2:number):{
    return num1+num2+" ";
}*/


function findTotal(num1:number,num2:number):number{
    return num1+num2;
}

let result2=findTotal(10,40);
console.log("find Total :- "+result2);



//--------------------------Arrow function-------------------------

const findTotalNums=(num1:number,num2:number):number => {
    return num1+num2;
}

let result3=findTotalNums(100,400);
console.log("find Total :- "+result3);

//--------------------------Multi Type safetying -------------------------


//-----------Type Guard---------------------

/*Type eka check krnn oni nisa guard */
function findTheSum(num1:number | string,num2:number | string):number{
    if (typeof num1 === 'string' || typeof num2 === 'string'){
        return +num1+ +num2;
    }else {
        return num1+ num2;
    }
}

let result4=findTheSum(200,400);
console.log("find The" +
    " Sum :- "+result4);
