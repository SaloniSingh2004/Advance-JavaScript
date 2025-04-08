// let spread=["so","much","fun"];
// let message=["javascript","is",...spread,"and","very"];
// console.log(message);

// function addTwoNumbers(x,y){
//     console.log(x+y);
// }
// let arr=[5,9];
// addTwoNumbers(...arr);

// function addFourNumbers(x,y,z,a){
//     console.log(x+y+z+a);
// }
// let arr=[5,9];
// let arr2=[6,7];
// addFourNumbers(...arr,...arr2);

// function someFunction(param1,param2){
//     console.log(param1,param2);
// }
// someFunction("hi","there!","How are you?");

// function someFunction(param1,...param2){
//     console.log(param1,param2);
// }
// someFunction("hi","there!","How are you?");

//Returning Function Values

// function addTwoNumbers(x,y){
//     console.log(x+y);
// }
// let result=addTwoNumbers(4,5);
// console.log(result);

// let addTwoNumbers=(x,y)=>
//     {
//         console.log(x+y);
//     }
// let result=addTwoNumbers(4,5);
// console.log(result);

function addTwoNumbers(x,y){
    return x+y;
}
let resultArr=[];
for(let i=0;i<10;i++){
    let result=addTwoNumbers(i,2*i);
    resultArr.push(result);
}
console.log(resultArr);

//Returning with arrow function

// let addTwoNumbers = (x,y) => x+y;
// let result=addTwoNumbers(4,5);
// console.log(result);